from __future__ import annotations

import asyncio
import json
import logging
from pathlib import Path
from typing import (
    Any,
    Dict,
    List,
    MutableMapping,
    Optional,
    Union,
    cast,
    Tuple,
    Callable,
    Coroutine,
)

import yaml

# Public types
MappingAlias = List[Optional[str]]
Namespace = Dict[str, Union["Namespace", MappingAlias, str]]

_logger = logging.getLogger(__name__)


def _is_leaf_array(value: Any) -> bool:
    return isinstance(value, list)


def _deep_merge(dst: Namespace, src: Namespace, ctx_path: Tuple[str, ...] = ()) -> None:

    for key, src_val in src.items():
        if key not in dst:
            dst[key] = src_val
            continue

        dst_val = dst[key]
        # If both are dicts, merge recursively
        if isinstance(dst_val, dict) and isinstance(src_val, dict):
            _deep_merge(dst_val, src_val, ctx_path + (key,))
            continue

        # If both are lists (leaf arrays), log conflict if different, then replace
        if _is_leaf_array(dst_val) and _is_leaf_array(src_val):
            if dst_val != src_val:
                _logger.warning(
                    "Leaf conflict at %s for key %r: keeping later value",
                    "/".join(ctx_path) or "/",
                    key,
                )
            dst[key] = src_val
            continue

        # Otherwise, replace with src (later wins)
        dst[key] = src_val


async def load_namespace_async(root_terms_dir: Union[str, Path]) -> Namespace:
    """
    Asynchronously load and resolve the Unicode dictionary starting from
    <root_terms_dir>/___.nice.yaml, returning a fully merged Namespace.
    Caches files by absolute path to avoid duplicate work.
    """
    root_dir = Path(root_terms_dir).resolve()
    start_file = root_dir / "___.nice.yaml"
    if not start_file.exists():
        raise FileNotFoundError(f"Start file not found: {start_file}")

    cache: Dict[str, asyncio.Future[Namespace]] = {}

    async def parse_file(file_path: Path, *, stack: Tuple[str, ...] = ()) -> Namespace:
        abs_key = str(file_path.resolve())
        # If already parsing or parsed, await the same future
        if abs_key in cache:
            return await cache[abs_key]

        async def _parse() -> Namespace:
            # Read YAML content in a thread to avoid blocking
            try:
                text = await asyncio.to_thread(file_path.read_text, encoding="utf-8")
            except FileNotFoundError:
                raise FileNotFoundError(f"Referenced file not found: {file_path}")

            try:
                loaded = yaml.safe_load(text)
            except Exception as e:
                raise ValueError(f"Failed to parse YAML in {file_path}") from e

            if loaded is None:
                data: Dict[str, Any] = {}
            elif isinstance(loaded, dict):
                data = cast(Dict[str, Any], loaded)
            else:
                _logger.warning(
                    "Top-level document in %s is not a mapping; treating as empty object",
                    file_path,
                )
                data = {}

            current_dir = file_path.parent

            # Schema-based validation (best-effort) using dict.schema.json if present
            try:
                schema_path = (root_dir.parent / "dict.schema.json").resolve()
                if schema_path.exists():
                    try:
                        schema = json.loads(schema_path.read_text(encoding="utf-8"))
                        try:
                            import jsonschema  # type: ignore

                            jsonschema.validate(instance=data, schema=cast(Dict[str, Any], schema))  # type: ignore[arg-type]
                        except ImportError:
                            # Validator not installed; skip silently
                            pass
                        except Exception as e:
                            _logger.warning(
                                "Schema validation failed for %s: %s", file_path, e
                            )
                    except Exception as e:
                        _logger.warning(
                            "Failed to read JSON schema at %s: %s", schema_path, e
                        )
            except Exception:
                # Never block loading on schema issues
                pass

            # 1) Resolve imports first
            imports_val = cast(Optional[Union[str, List[str]]], data.get("<-"))
            imported_ns: Namespace = {}
            if imports_val is not None:
                # Normalize to list
                if isinstance(imports_val, str):
                    import_list = [imports_val]
                elif isinstance(imports_val, list) and all(
                    isinstance(x, str) for x in imports_val
                ):
                    import_list = imports_val
                else:
                    _logger.warning("Ignoring non-string '<-' value in %s", file_path)
                    import_list = []

                # Resolve all refs to absolute paths
                to_load: List[Path] = []
                for ref in import_list:
                    ref_path = _resolve_ref(ref, current_dir, root_dir)
                    if ref_path is None:
                        _logger.warning(
                            "Skipping invalid import ref %r in %s", ref, file_path
                        )
                        continue
                    # Only YAML per requirements
                    if not ref_path.exists():
                        _logger.warning(
                            "Referenced file not found: %s (skipping)", ref_path
                        )
                        continue
                    # Cycle detection
                    ref_abs = str(ref_path.resolve())
                    if ref_abs in stack:
                        _logger.warning(
                            "Cyclic import detected: %s -> %s (skipping)",
                            stack[-1] if stack else abs_key,
                            ref_abs,
                        )
                        continue
                    to_load.append(ref_path)

                # Load all imported namespaces concurrently (with caching)
                imported_list = await asyncio.gather(
                    *(parse_file(p, stack=stack + (abs_key,)) for p in to_load)
                )
                # Merge in order; later ones can override earlier
                for part in imported_list:
                    _deep_merge(imported_ns, part)

            # 2) Build local namespace (excluding <-) and resolve any nested <- recursively
            local_ns: Namespace = {}
            for key, val in data.items():
                if key == "<-":
                    continue
                if isinstance(val, dict):
                    # Resolve nested namespace object (could have its own <-)
                    nested_resolved = await _resolve_inline_namespace(
                        cast(MutableMapping[str, Any], val),
                        current_dir,
                        parse_file,
                        current_stack=stack + (abs_key,),
                    )
                    local_ns[key] = nested_resolved
                else:
                    # Leaf array or scalar (strings allowed per type)
                    local_ns[key] = cast(Union[Namespace, MappingAlias, str], val)

            # 3) Compose: imported first, then local overrides
            result: Namespace = {}
            _deep_merge(result, imported_ns)
            _deep_merge(result, local_ns)
            return result

        fut: asyncio.Future[Namespace] = asyncio.ensure_future(_parse())
        cache[abs_key] = fut
        try:
            return await fut
        except Exception:
            # On failure, remove from cache to allow retry
            cache.pop(abs_key, None)
            raise

    return await parse_file(start_file)


async def _resolve_inline_namespace(
    obj: MutableMapping[str, Any],
    current_dir: Path,
    parse_file_cb: Callable[..., Coroutine[Any, Any, Namespace]],
    *,
    root_dir: Optional[Path] = None,
    current_stack: Tuple[str, ...] = (),
) -> Namespace:
    """Resolve an inline namespace mapping which may contain a '<-' key and nested objects."""
    # root_dir is not directly needed because absolute refs are resolved at the file level
    imports_val = cast(Optional[Union[str, List[str]]], obj.get("<-"))
    imported_ns: Namespace = {}
    if imports_val is not None:
        if isinstance(imports_val, str):
            import_list = [imports_val]
        elif isinstance(imports_val, list) and all(
            isinstance(x, str) for x in imports_val
        ):
            import_list = imports_val
        else:
            # Ignore invalid import specs per "remove all validation"
            import_list = []

        to_load: List[Path] = []
        # To resolve absolute "/" paths inside inline objects, we need root; walk up until we find 'terms'
        # This is defensive; normally parse_file will be called for referenced files which know their root.
        for ref in import_list:
            ref_path = _resolve_ref(
                ref, current_dir, root_dir or _find_terms_root(current_dir)
            )
            if ref_path is None:
                _logger.warning(
                    "Skipping invalid import ref %r in inline namespace at %s",
                    ref,
                    current_dir,
                )
                continue
            if not any(str(ref_path).endswith(ext) for ext in SUPPORTED_EXTS):
                _logger.warning(
                    "Unsupported file extension for %s; only YAML is supported",
                    ref_path,
                )
                continue
            ref_abs = str(ref_path.resolve())
            if ref_abs in current_stack:
                _logger.warning(
                    "Cyclic import detected in inline namespace: %s -> %s (skipping)",
                    current_stack[-1] if current_stack else "<root>",
                    ref_abs,
                )
                continue
            if not ref_path.exists():
                _logger.warning("Referenced file not found: %s (skipping)", ref_path)
                continue
            to_load.append(ref_path)
        imported_list: List[Namespace] = await asyncio.gather(
            *(parse_file_cb(p, stack=current_stack) for p in to_load)
        )
        for part in imported_list:
            _deep_merge(imported_ns, part)

    local_ns: Namespace = {}
    for key, val in obj.items():
        if key == "<-":
            continue
        if isinstance(val, dict):
            nested = await _resolve_inline_namespace(
                cast(MutableMapping[str, Any], val), current_dir, parse_file_cb
            )
            local_ns[key] = nested
        else:
            local_ns[key] = cast(Union[Namespace, MappingAlias, str], val)

    result: Namespace = {}
    _deep_merge(result, imported_ns)
    _deep_merge(result, local_ns)
    return result


def _resolve_ref(ref: str, current_dir: Path, root_dir: Path) -> Optional[Path]:
    ref = ref.strip()
    if not ref:
        return None
    if ref.startswith("./") or ref.startswith("../") or ref == "." or ref == "..":
        return (current_dir / ref).resolve()
    if ref.startswith("/"):
        return (root_dir / ref[1:]).resolve()
    # Invalid per spec; only . or / are allowed
    _logger.warning("Invalid ref %r; expected path starting with '.' or '/'", ref)
    return None


def _find_terms_root(start_dir: Path) -> Path:
    # Walk up until we find a directory named 'terms' under 'unicode-dict'
    cur = start_dir
    for _ in range(10):  # practical bound
        if cur.name == "terms":
            return cur
        cur = cur.parent
    # Fallback to start_dir
    return start_dir


def load_namespace(root_terms_dir: Union[str, Path]) -> Namespace:
    """Synchronous wrapper for load_namespace_async."""
    return asyncio.run(load_namespace_async(root_terms_dir))

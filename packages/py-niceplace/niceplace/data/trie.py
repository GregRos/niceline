from __future__ import annotations

from typing import Any, Iterable, Sequence
import pytest


# Monomorphic word-level trie where every dict's values are other dicts.
# Leaf nodes are represented by an empty dict. Actual string values are stored
# in a separate map keyed by id(node) -> value to preserve monomorphism.

# TrieNode type
type TrieNode = dict[str, "TrieNode"]

# Public value and key shapes
Value = str
Key = tuple[str, ...]
PartialKey = tuple[str, ...]
Pair = tuple[Key, Value]


NOT_FOUND: Value = ""
_MISSING_NODE: TrieNode = dict[Any, Any]()


class Trie:
    """Monomorphic trie backed by nested dicts with values stored off-node.

    - Nodes are dict[str, TrieNode]
    - Values live in a separate dict[int, str], keyed by id(node)
    - Missing lookups return NOT_FOUND (empty string)
    - Subtries share the same value map for coherent views
    """

    def __init__(self, root: TrieNode, map_map: dict[int, Value]) -> None:
        # Private by convention
        self._root: TrieNode = root
        self._map_map: dict[int, Value] = map_map

    # region: construction -------------------------------------------------
    @staticmethod
    def make(entries: Iterable[Pair] | None = None) -> "Trie":
        root: TrieNode = {}
        map_map: dict[int, Value] = {}
        trie = Trie(root, map_map)
        if entries:
            trie.add_all(entries)
        return trie

    def clone(self) -> "Trie":
        return Trie.make(self.entries())

    # endregion ------------------------------------------------------------

    # region: properties ---------------------------------------------------
    @property
    def length(self) -> int:
        return len(self.entries())

    @property
    def is_empty(self) -> bool:
        return self.length == 0

    @property
    def node_count(self) -> int:
        def rec(node: TrieNode) -> int:
            count = 1
            for child in node.values():
                count += rec(child)
            return count

        self._root
        return 0 if not isinstance(self._root, dict) else rec(self._root)

    # endregion ------------------------------------------------------------

    # region: core ops -----------------------------------------------------
    def add_all(self, entries: Iterable[Pair]) -> None:
        for key, value in entries:
            self.add(key, value)

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Trie):
            return False
        if self.length != other.length:
            return False
        return set(self.entries()) == set(other.entries())

    def add(self, key: Key, value: Value) -> None:
        if self.get(key) != NOT_FOUND:
            joined = ":".join(tuple(key))
            existing = self.get(key)
            raise ValueError(
                f"Key {joined} already exists with value {existing}, cannot add value {value}."
            )
        self.set(key, value)

    def set(self, key: Key, value: Value) -> None:
        node = self._get_or_create_node(key)
        self._map_map[id(node)] = value

    def has(self, key: Key) -> bool:
        return self._has_value(self._get_map_node(key))

    def get(self, key: Key) -> Value:
        node = self._get_map_node(key)
        if node is _MISSING_NODE:
            return NOT_FOUND
        return self._resolve_map_value(node)

    def get_subtrie(self, key: PartialKey) -> "Trie":
        node = self._get_map_node(key)
        if node is _MISSING_NODE:
            raise KeyError("Key not found")
        return Trie(node, self._map_map)

    # endregion ------------------------------------------------------------

    # region: collection ops -----------------------------------------------
    def keys(self) -> list[Key]:
        return [k for k, _ in self.entries()]

    def values(self) -> list[Value]:
        return [v for _, v in self.entries()]

    def entries(self) -> list[Pair]:
        out: list[Pair] = []

        if not isinstance(self._root, dict):
            return out

        def walk(node: TrieNode, path: list[str]) -> None:
            if self._has_value(node):
                out.append((tuple(path), self._resolve_map_value(node)))
            for k, child in node.items():
                path.append(k)
                walk(child, path)
                path.pop()

        walk(self._root, [])
        return out

    # endregion ------------------------------------------------------------

    # region: internals ----------------------------------------------------
    def _get_map_node(self, key: PartialKey) -> TrieNode:

        if len(key) == 0:
            return self._root

        node: TrieNode = self._root
        for part in key:
            nxt = node.get(part)
            if nxt is None:
                return _MISSING_NODE
            node = nxt
        return node

    def _get_or_create_node(self, key: Key) -> TrieNode:
        if not isinstance(self._root, dict):
            # Should not happen in normal flow; guard for type safety
            raise RuntimeError("Invalid trie root")
        node: TrieNode = self._root
        for part in key:
            child = node.get(part)
            if child is None:
                child = {}
                node[part] = child
            node = child
        return node

    def _resolve_map_value(self, map_node: TrieNode) -> Value:
        return self._map_map.get(id(map_node), NOT_FOUND)

    def _has_value(self, node: TrieNode) -> bool:
        return id(node) in self._map_map

    # endregion ------------------------------------------------------------


__all__ = ["Trie", "TrieNode", "Value", "Key", "PartialKey", "Pair"]

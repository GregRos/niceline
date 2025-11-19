from __future__ import annotations

from pathlib import Path

import pytest

from niceplace.data.loader import load_namespace


def terms_root_dir() -> Path:
    here = Path(__file__).resolve()
    # .../packages/py-niceplace/test/loader -> go up to .../packages
    packages_dir = here.parents[3]
    return packages_dir / "unicode-dict" / "terms"


def test_load_root_namespace():
    root = terms_root_dir()
    ns = load_namespace(root)

    assert isinstance(ns, dict)
    assert "<-" not in ns

    # Electric namespace should be present and resolved
    assert "electric" in ns
    electric = ns["electric"]
    assert isinstance(electric, dict)
    assert "<-" not in electric

    # Check a known leaf mapping from electric.nice.yaml
    assert "Ω" in electric
    assert electric["Ω"] == [None, "ohm"]

    # Currency namespace under the single-character key '$'
    assert "$" in ns
    currency = ns["$"]
    assert isinstance(currency, dict)
    assert "€" in currency
    assert currency["€"] == [None, "euro"]


def test_typical_leaf_shapes():
    root = terms_root_dir()
    ns = load_namespace(root)

    # Ensure some other leaves look sane (ground/earth symbol)
    electric = ns.get("electric")
    assert isinstance(electric, dict)
    assert "⏚" in electric
    # first element can be None, followed by one or more alias strings
    aliases = electric["⏚"]
    assert isinstance(aliases, list) and len(aliases) >= 2
    assert aliases[0] is None
    assert all(isinstance(a, str) or a is None for a in aliases)

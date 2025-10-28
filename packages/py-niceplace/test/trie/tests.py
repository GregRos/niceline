# -------------------------
# PyTest test suite (mirrors TS tests)
# -------------------------


import pytest
from niceplace.data.trie import NOT_FOUND, Trie


def _get_ro_trie() -> Trie:
    return Trie.make(
        [
            (("a",), "a_val"),
            (("a", "a1"), "a1_val"),
            (("a", "a2"), "a2_val"),
            (("a", "a3", "a31"), "a31_val"),
            (("b", "b1"), "b1_val"),
            (("b", "b2"), "b2_val"),
        ]
    )


def test_empty_trie_basics() -> None:
    empty = Trie.make()
    assert empty.is_empty is True
    assert empty == Trie.make()
    assert empty.length == 0
    assert empty.get(("x",)) == NOT_FOUND
    assert empty.has(("x",)) is False


def test_empty_trie_clone_and_getsubtrie() -> None:
    empty = Trie.make()
    c = empty.clone()
    assert c.is_empty is True
    assert c is not empty

    with pytest.raises(KeyError) as e:
        empty.get_subtrie(("x",))  # not found
    assert "not found" in str(e.value).lower()


def test_empty_clone_set_does_not_mutate_original() -> None:
    empty = Trie.make()
    c = empty.clone()
    c.set(("x",), "y")
    assert c.get(("x",)) == "y"
    # original remains unchanged
    assert empty.get(("x",)) == NOT_FOUND

{fb: a}
{fbi: c}
{fbi c}
{fbi d}
{fsi d}
{fsi {hello world}}
def test_not_empty_length_and_emptiness() -> None:
    ro_trie = _get_ro_trie()
    assert ro_trie.length == 6
    assert ro_trie.is_empty is False


def test_not_empty_equality_and_clone() -> None:
    ro_trie = _get_ro_trie()
    assert ro_trie == ro_trie
    assert ro_trie != Trie.make()

    cloned = ro_trie.clone()
    assert ro_trie == cloned
    assert cloned is not ro_trie


def test_not_empty_node_count() -> None:
    ro_trie = _get_ro_trie()
    # nodes: root, a, a1, a2, a3, a31, b, b1, b2 => 9
    assert ro_trie.node_count == 9


def test_not_empty_has_get() -> None:
    ro_trie = _get_ro_trie()
    assert ro_trie.has(("a",)) is True
    assert ro_trie.get(("a",)) == "a_val"

    assert ro_trie.has(("b",)) is False
    assert ro_trie.get(("b",)) == NOT_FOUND

    assert ro_trie.has(("a", "a2")) is True
    assert ro_trie.get(("a", "a2")) == "a2_val"

    assert ro_trie.has(("a", "a3")) is False
    assert ro_trie.get(("a", "a3")) == NOT_FOUND

    assert ro_trie.has(("a", "a3", "a31")) is True
    assert ro_trie.get(("a", "a3", "a31")) == "a31_val"


def test_set_updates_and_inserts() -> None:
    ro_trie = _get_ro_trie()

    s = ro_trie.clone()
    s.set(("a",), "x")
    assert s.get(("a",)) == "x"
    # original remains
    assert ro_trie.get(("a",)) == "a_val"

    s2 = ro_trie.clone()
    s2.set(("a", "a1"), "x")
    assert s2.get(("a", "a1")) == "x"
    assert ro_trie.get(("a", "a1")) == "a1_val"

    s3 = ro_trie.clone()
    before = s3.node_count
    s3.set(("z",), "x")
    assert s3.get(("z",)) == "x"
    assert s3.node_count == before + 1

    s4 = ro_trie.clone()
    before4 = s4.node_count
    s4.set(("z", "z1", "z11"), "x")
    assert s4.get(("z", "z1", "z11")) == "x"
    assert s4.node_count == before4 + 3


def test_subtrie_for_a() -> None:
    ro_trie = _get_ro_trie()
    ro_subtrie = ro_trie.get_subtrie(("a",))

    # length and emptiness
    assert ro_subtrie.length == 4  # a-val, a1, a2, a31
    assert ro_subtrie.is_empty is False

    # equals and clone
    assert ro_subtrie == ro_subtrie
    assert ro_subtrie != Trie.make()
    c = ro_subtrie.clone()
    assert ro_subtrie == c
    assert c is not ro_subtrie

    # nodeCount is 5
    assert ro_subtrie.node_count == 5

    # has/get
    assert ro_subtrie.get(()) == "a_val"  # root value of subtrie

    assert ro_subtrie.has(("a1",)) is True
    assert ro_subtrie.get(("a1",)) == "a1_val"

    assert ro_subtrie.has(("a2",)) is True
    assert ro_subtrie.get(("a2",)) == "a2_val"

    assert ro_subtrie.has(("a3",)) is False
    assert ro_subtrie.get(("a3",)) == NOT_FOUND

    assert ro_subtrie.has(("a3", "a31")) is True
    assert ro_subtrie.get(("a3", "a31")) == "a31_val"

    # set within subtrie shouldn't mutate original ro_subtrie
    copy_parent = ro_trie.clone()
    sub = copy_parent.get_subtrie(("a",))
    sub.set((), "x")  # update root of subtrie
    assert copy_parent.get(("a",)) == "x"
    assert ro_subtrie.get(()) == "a_val"

    s = ro_subtrie.clone()
    s.set(("a1",), "x")
    assert s.get(("a1",)) == "x"
    assert ro_subtrie.get(("a1",)) == "a1_val"

    s2 = ro_subtrie.clone()
    before = s2.node_count
    s2.set(("z",), "x")
    assert s2.get(("z",)) == "x"
    assert s2.node_count == before + 1

    # deep insert via subtrie updates both subtrie and parent
    parent = ro_trie.clone()
    sub2 = parent.get_subtrie(("a",))
    sub_before = sub2.node_count
    parent_before = parent.node_count
    sub2.set(("z", "z1", "z12"), "x")
    assert sub2.get(("z", "z1", "z12")) == "x"
    assert sub2.node_count == sub_before + 3
    assert parent.get(("a", "z", "z1", "z12")) == "x"
    assert parent.node_count == parent_before + 3

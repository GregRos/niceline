import { createTrieFromNamespaceShape } from "@lib/namespace/build-trie"
import Trie from "@niceline/trie"
const roTrie = createTrieFromNamespaceShape({
    a: {
        a1_val: ["{a.a1}", "a1"],
        a2_val: [null, "a2"],
        a3: {
            a31_val: [null, "a31"]
        },
        a4_val: ["{a.a4}", "a4"]
    },
    b: {
        b1_val: [null, "b1"],
        b2_val: [null, "b2"]
    }
})

const equivTrie = Trie.make([
    [["a", "a1"], "a1_val"],
    [["a", "a2"], "a2_val"],
    [["a", "a3", "a31"], "a31_val"],
    [["a", "a4"], "a4_val"],
    [["b", "b1"], "b1_val"],
    [["b", "b2"], "b2_val"],
    [["{a.a1}"], "a1_val"],
    [["{a.a4}"], "a4_val"]
])

it("length == leaves, isEmpty == false", () => {
    expect(roTrie.length).toBe(8)
    expect(roTrie.isEmpty).toBe(false)
})

it("equals expected trie", () => {
    expect(roTrie.equals(equivTrie)).toBe(true)
})

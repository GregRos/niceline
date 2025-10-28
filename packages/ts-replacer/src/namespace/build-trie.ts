import type { Pair } from "@niceline/trie"
import Trie from "@niceline/trie"
import type { NamespaceShape } from "../shape/shape"
import { shapeToEntries } from "../shape/to-entries"

function createTrieFromEntries(entries: Pair[]): Trie {
    const t = Trie.make()
    for (const [key, value] of entries) {
        t.set(key, value)
    }
    return t
}

export function createTrieFromNamespaceShape(shape: NamespaceShape): Trie {
    const leaves = shapeToEntries(shape)
    return createTrieFromEntries(leaves)
}

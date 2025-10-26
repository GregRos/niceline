import type { Pair } from "@niceline/trie"
import Trie from "@niceline/trie"
import logger from "../logging"
import type { NamespaceShape } from "../shape/shape"
import { collectLeaves } from "../shape/to-entries"

function createTrieFromEntries(entries: Pair[]): Trie {
    const t = Trie.make()
    for (const [key, value] of entries) {
        const existing = t.get(key)
        if (existing !== Trie.NOT_FOUND) {
            logger.warn(
                `@@!@@ At ${key.join(":")}, overwriting existing value ${existing} with new value ${value}`
            )
            t.set(key, value)
        }
    }
    return t
}

export function createTrieFromNamespaceShape(shape: NamespaceShape): Trie {
    const leaves = collectLeaves(shape)
    return createTrieFromEntries(leaves)
}

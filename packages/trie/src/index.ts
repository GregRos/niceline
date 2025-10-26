/* eslint-disable @typescript-eslint/prefer-for-of */
// Monomorphic word-level trie where every Map's values are other Maps.
// Leaf nodes are represented by an empty Map object. Actual string values

import { seq } from "doddle"
// are stored in a separate Map that maps leaf-Map objects to strings.
export type TrieNode = Map<string, TrieNode>
export type MapMap = Map<TrieNode, string>
export type Key = readonly string[]
export type PartialKey = readonly string[]
export type Value = string
export type Pair = readonly [Key, Value]

const NOT_FOUND = ""
const MISSING_NODE = new Map() as TrieNode
export class Trie {
    static NOT_FOUND = NOT_FOUND
    get length() {
        return this.entries().length
    }
    // Private constructor. Use Trie.make to create instances.
    private constructor(
        private readonly _root: TrieNode,
        private readonly _mapMap: MapMap
    ) {}

    get isEmpty() {
        return this.length === 0
    }
    get isInvalid() {
        return this._root === MISSING_NODE
    }

    addAll(entries: Pair[]): void {
        for (let i = 0; i < entries.length; i++) {
            const [key, value] = entries[i]
            this.add(key, value)
        }
    }
    // Create an empty Trie or initialize from entries ([string[], string]).
    static make(entries?: Pair[]): Trie {
        const root: TrieNode = new Map()
        const mapMap: MapMap = new Map()
        // we know this is top, so the following is okay:

        const trie = new Trie(root, mapMap)

        if (!entries) {
            return trie
        }
        trie.addAll(entries)
        return trie
    }

    clone() {
        return Trie.make(this.entries())
    }

    equals(other: Trie): boolean {
        if (this.length !== other.length) {
            return false
        }
        return seq(this.entries())
            .setEquals(other.entries(), pair => pair.join("אבג"))
            .pull()
    }

    onOverwrite?: (key: Key, oldValue: Value, newValue: Value) => void

    add(key: Key, value: Value): void {
        const existing = this.get(key)
        if (existing !== NOT_FOUND) {
            this.onOverwrite?.(key, existing, value)
        }
        this.set(key, value)
    }

    // Insert or replace a key -> value mapping. Uses only Maps (monomorphic).
    set(key: Key, value: Value) {
        const map = this._getOrCreateNode(key)
        this._mapMap.set(map, value)
    }

    private _getMapNode(key: PartialKey): TrieNode {
        if (key.length === 0) return this._root

        let node = this._root
        for (let i = 0; i < key.length; i++) {
            const part = key[i]

            if (!node.has(part)) {
                return MISSING_NODE
            }

            const next = node.get(part) as TrieNode
            node = next
        }

        return node
    }

    private _getOrCreateNode(key: Key): TrieNode {
        let node = this._root
        for (let i = 0; i < key.length; i++) {
            const part = key[i]
            if (!node.has(part)) {
                const next = new Map() as TrieNode
                node.set(part, next)
                node = next
            } else {
                node = node.get(part) as TrieNode
            }
        }
        return node
    }

    // Resolve a leaf MapNode to its string value using the mapMap. Use has before get to remain monomorphic-safe.
    _resolveMapValue(mapNode: TrieNode): Value {
        if (this._mapMap.has(mapNode)) {
            return this._mapMap.get(mapNode) as Value
        }
        return NOT_FOUND
    }

    // Return true iff the exact multi-word key exists in the trie.
    has(key: Key): boolean {
        return this._hasValue(this._getMapNode(key))
    }

    get nodeCount() {
        const rec = (node: TrieNode): number => {
            let count = 1 // count this node
            for (const child of node.values()) {
                count += rec(child)
            }
            return count
        }
        return rec(this._root)
    }

    // Always returns a string. If not found, returns the empty string (missing is mapped to "").
    get(key: Key): string {
        const m = this._getMapNode(key)
        return this._resolveMapValue(m)
    }

    // Get the immediate child MapNode under the root for a single-word key.
    // If not found, returns the missing MapNode.
    getSubtrie(key: PartialKey): Trie {
        const node = this._getMapNode(key)
        if (node === MISSING_NODE) {
            throw new Error("Key not found")
        }
        return new Trie(node, this._mapMap)
    }

    // Collect all keys (each key is string[] of words).
    keys(): Key[] {
        return this.entries().map(([k]) => k)
    }

    private _hasValue(node: TrieNode): boolean {
        return this._mapMap.has(node)
    }

    // Collect values in key order (order is the traversal order of Maps).
    values(): Value[] {
        return this.entries().map(([, v]) => v)
    }

    // Collect entries [keyArray, value]
    entries(): Pair[] {
        const out: Pair[] = []

        const walk = (node: TrieNode, path: Value[]) => {
            if (this._hasValue(node)) {
                out.push([path.slice() as any, this._resolveMapValue(node)])
            }
            for (const [k, curMap] of node.entries()) {
                path.push(k)
                walk(curMap, path)
                path.pop()
            }
        }

        walk(this._root, [])
        return out
    }
}

export default Trie

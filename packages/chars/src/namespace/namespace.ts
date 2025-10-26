import Trie from "@niceline/trie"
import type { NamespaceShape } from "../shape/shape"
import type { UnpackNamespaceShape } from "../shape/unpack"
import { unsplat } from "../util"
import { createTrieFromNamespaceShape } from "./build-trie"

export class Namespace<X> {
    private constructor(private readonly _trie: Trie) {}

    static make<X extends NamespaceShape>(
        shape: X
    ): Namespace<UnpackNamespaceShape<X>> {
        const trie = createTrieFromNamespaceShape(shape as any)
        return new Namespace<UnpackNamespaceShape<X>>(trie)
    }

    has(key: string): key is keyof X & string {
        return this._trie.has(unsplat(key))
    }

    get<K extends keyof X & string>(key: K): X[K] {
        const value = this._trie.get(unsplat(key))
        return value as X[K]
    }
}

export function namespace<X extends NamespaceShape>(
    shape: X
): Namespace<UnpackNamespaceShape<X>> {
    return Namespace.make(shape)
}

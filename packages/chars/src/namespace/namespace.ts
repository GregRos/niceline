import Trie from "@niceline/trie"
import { buildTrieFromNamespaceShape } from "./build-trie"
import type { NamespaceShape, UnpackNamespaceShape } from "./shape"

export class Namespace<X> {
    private constructor(private readonly _trie: Trie) {}

    static make<X extends NamespaceShape>(
        shape: X
    ): Namespace<UnpackNamespaceShape<X>> {
        const trie = buildTrieFromNamespaceShape(shape as any)
        return new Namespace<UnpackNamespaceShape<X>>(trie)
    }

    has(key: string): key is keyof X & string {
        return this._trie.has(key.split(":"))
    }

    get<K extends keyof X & string>(key: K): X[K] {
        const value = this._trie.get(key.split(":"))
        return value as X[K]
    }
}

export function namespace<X extends NamespaceShape>(
    shape: X
): Namespace<UnpackNamespaceShape<X>> {
    return Namespace.make(shape)
}

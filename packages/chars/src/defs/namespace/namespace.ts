import type { NamespaceShape, UnpackNamespaceShape } from "./shape"
import Trie from "./trie"

export class Namespace<X> {
    private constructor(private readonly _trie: Trie) {}

    static make<X extends NamespaceShape>(
        shape: X
    ): Namespace<UnpackNamespaceShape<X>> {
        const trie = Trie.fromObject(shape as any)
        return new Namespace<UnpackNamespaceShape<X>>(trie)
    }

    has(key: string): key is keyof X & string {
        return this._trie.has(key.split(":"))
    }

    get(key: keyof X & string): string | null {
        const value = this._trie.get(key.split(":"))
        return value === Trie.NOT_FOUND ? null : value
    }
}

export function namespace<X extends NamespaceShape>(
    shape: X
): Namespace<UnpackNamespaceShape<X>> {
    return Namespace.make(shape)
}

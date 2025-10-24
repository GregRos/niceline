import Trie from "@lib/replacer/defs/trie"

describe("Trie empty", () => {
    const empty = Trie.make()

    it("isEmpty == true", () => {
        expect(empty.isEmpty).toBe(true)
    })

    it("equals(Trie.make()) == true", () => {
        expect(empty.equals(Trie.make())).toBe(true)
    })

    it("length == 0", () => {
        expect(empty.length).toBe(0)
    })

    it("get(['x']) == ''", () => {
        expect(empty.get(["x"] as const)).toBe("")
    })

    it("has(['x']) == false", () => {
        expect(empty.has(["x"] as const)).toBe(false)
    })

    it("clone -> also empty but !== original", () => {
        const c = empty.clone()
        expect(c.isEmpty).toBe(true)
        expect(c).not.toBe(empty)
    })

    it("clone -> clone.set(['x'], 'y') -> check the operation", () => {
        const c = empty.clone()
        c.set(["x"] as const, "y")
        expect(c.get(["x"] as const)).toBe("y")
        // original remains unchanged
        expect(empty.get(["x"] as const)).toBe("")
    })
})

describe("Trie (monomorphic) nested and basic ops", () => {
    it("set/get/has and keys/values/entries", () => {
        const t = Trie.make()
        const k1 = ["a", "b"] as const
        t.set(k1, "v1")

        expect(t.has(k1)).toBe(true)
        expect(t.get(k1)).toBe("v1")

        expect(t.keys()).toEqual([["a", "b"]])
        expect(t.values()).toEqual(["v1"])
        expect(t.entries()).toEqual([[["a", "b"], "v1"]])
    })

    it("getNode returns a sub-trie rooted at the inner node", () => {
        const t = Trie.make()
        const k1 = ["a", "b"] as const
        t.set(k1, "v1")

        const sub = t.getNode(["a"] as const)
        expect(sub.get(["b"] as const)).toBe("v1")
    })

    it("can be created from entries", () => {
        const t = Trie.make([[["x", "y"] as const, "xy"]])
        expect(t.get(["x", "y"] as const)).toBe("xy")
        expect(t.keys()).toEqual([["x", "y"]])
    })

    it("fromObject builds nested tries", () => {
        const oneKey = Trie.fromObject({ one: "v1" })
        const twoKey = Trie.fromObject({ two: { key: "v2" } })
        const two_1 = Trie.fromObject({ n2: { one: "v21" } })
        const two_2 = Trie.fromObject({ n2: { one: "v21", two: "v22" } })
        const two_2_2 = Trie.fromObject({ n2: { sub: { subsub: "v222" } } })

        expect(oneKey.get(["one"] as const)).toBe("v1")
        expect(twoKey.get(["two", "key"] as const)).toBe("v2")
        expect(two_1.get(["n2", "one"] as const)).toBe("v21")
        expect(two_2.get(["n2", "two"] as const)).toBe("v22")
        expect(two_2_2.get(["n2", "sub", "subsub"] as const)).toBe("v222")
    })
})

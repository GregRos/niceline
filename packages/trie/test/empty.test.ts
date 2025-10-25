import Trie from "@lib/index"

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
        expect(empty.get(["x"])).toBe(Trie.NOT_FOUND)
    })

    it("has(['x']) == false", () => {
        expect(empty.has(["x"])).toBe(false)
    })

    it("clone -> also empty but !== original", () => {
        const c = empty.clone()
        expect(c.isEmpty).toBe(true)
        expect(c).not.toBe(empty)
    })

    it("getNode -> errors", () => {
        expect(() => empty.getSubtrie(["x"])).toThrow("not found")
    })

    it("clone -> clone.set(['x'], 'y') -> check the operation", () => {
        const c = empty.clone()
        c.set(["x"], "y")
        expect(c.get(["x"])).toBe("y")
        // original remains unchanged
        expect(empty.get(["x"])).toBe("")
    })
})

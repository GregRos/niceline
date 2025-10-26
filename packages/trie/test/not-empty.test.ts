import Trie from "@lib"

const roTrie = Trie.fromObject({
    a: {
        "": "a-val",
        a1: "a1-val",
        a2: "a2-val",
        a3: {
            a31: "a31-val"
        }
    },
    b: {
        b1: "b1-val",
        b2: "b2-val"
    }
})

it("length == values, isEmpty == false", () => {
    expect(roTrie.length).toBe(6)
    expect(roTrie.isEmpty).toBe(false)
})

it("equals self and not empty", () => {
    expect(roTrie.equals(roTrie)).toBe(true)
    expect(roTrie.equals(Trie.make())).toBe(false)
})

it("clone() equals but other reference", () => {
    const cloned = roTrie.clone()
    expect(roTrie.equals(cloned)).toBe(true)
    expect(cloned).not.toBe(roTrie)
})

it("nodeCount equals the number of nodes in the structure", () => {
    // nodes: root, a, a1, a2, a3, a31, b, b1, b2 => 9
    expect(roTrie.nodeCount).toBe(9)
})

describe("has/get", () => {
    it("['a'] -> a-val", () => {
        expect(roTrie.has(["a"])).toBe(true)
        expect(roTrie.get(["a"])).toBe("a-val")
    })

    it("['b'] -> false", () => {
        expect(roTrie.has(["b"])).toBe(false)
        expect(roTrie.get(["b"])).toBe("")
    })

    it("['a','a2'] -> a2-val", () => {
        expect(roTrie.has(["a", "a2"])).toBe(true)
        expect(roTrie.get(["a", "a2"])).toBe("a2-val")
    })

    it("['a','a3'] -> ''", () => {
        expect(roTrie.has(["a", "a3"])).toBe(false)
        expect(roTrie.get(["a", "a3"])).toBe("")
    })

    it("['a','a3','a31'] -> a31-val", () => {
        expect(roTrie.has(["a", "a3", "a31"])).toBe(true)
        expect(roTrie.get(["a", "a3", "a31"])).toBe("a31-val")
    })
})

describe("set", () => {
    it("update at parent a", () => {
        const s = roTrie.clone()
        s.set(["a"], "x")
        expect(s.get(["a"])).toBe("x")
        // original remains
        expect(roTrie.get(["a"])).toBe("a-val")
    })

    it("update at a->a1->'x'", () => {
        const s = roTrie.clone()
        s.set(["a", "a1"], "x")
        expect(s.get(["a", "a1"])).toBe("x")
        expect(roTrie.get(["a", "a1"])).toBe("a1-val")
    })

    it("insert at root: z->'x'", () => {
        const s = roTrie.clone()
        const before = s.nodeCount
        s.set(["z"], "x")
        expect(s.get(["z"])).toBe("x")
        expect(s.nodeCount).toBe(before + 1)
    })

    it("insert z->z1->z11->'x'; creates 3 extra nodes", () => {
        const s = roTrie.clone()
        const before = s.nodeCount
        s.set(["z", "z1", "z11"], "x")
        expect(s.get(["z", "z1", "z11"])).toBe("x")
        expect(s.nodeCount).toBe(before + 3)
    })
})

describe("subtrie for ['a']", () => {
    const getFreshSub = () => {
        const copy = roTrie.clone()
        return {
            parent: copy,
            subtrie: copy.getSubtrie(["a"])
        }
    }
    const roSubtrie = roTrie.getSubtrie(["a"])

    it("length and emptiness", () => {
        expect(roSubtrie.length).toBe(4) // a-val, a1, a2, a31
        expect(roSubtrie.isEmpty).toBe(false)
    })

    it("equals", () => {
        expect(roSubtrie.equals(roSubtrie)).toBe(true)
        expect(roSubtrie.equals(Trie.make())).toBe(false)
    })

    it("clone", () => {
        const c = roSubtrie.clone()
        expect(roSubtrie.equals(c)).toBe(true)
        expect(c).not.toBe(roSubtrie)
    })

    it("nodeCount is 5", () => {
        expect(roSubtrie.nodeCount).toBe(5)
    })

    describe("has/get", () => {
        it("root -> a-val", () => {
            // root node's own value is at empty path; call via any to bypass Key typing
            expect(roSubtrie.get([])).toBe("a-val")
        })

        it("a1 -> a1-val", () => {
            expect(roSubtrie.has(["a1"])).toBe(true)
            expect(roSubtrie.get(["a1"])).toBe("a1-val")
        })

        it("a2 -> a2-val", () => {
            expect(roSubtrie.has(["a2"])).toBe(true)
            expect(roSubtrie.get(["a2"])).toBe("a2-val")
        })

        it("has/get a3 (no value)", () => {
            expect(roSubtrie.has(["a3"])).toBe(false)
            expect(roSubtrie.get(["a3"])).toBe("")
        })

        it("has/get a3.a31", () => {
            expect(roSubtrie.has(["a3", "a31"])).toBe(true)
            expect(roSubtrie.get(["a3", "a31"])).toBe("a31-val")
        })
    })

    describe("set", () => {
        it("update root", () => {
            const { parent, subtrie } = getFreshSub()
            subtrie.set([] as any, "x")
            expect((parent as any).get(["a"])).toBe("x")
            // original remains
            expect((roSubtrie as any).get([])).toBe("a-val")
        })

        it("update a1", () => {
            const s = roSubtrie.clone()
            s.set(["a1"], "x")
            expect(s.get(["a1"])).toBe("x")
            expect(roSubtrie.get(["a1"])).toBe("a1-val")
        })

        it("insert z->'x'", () => {
            const s = roSubtrie.clone()
            const before = s.nodeCount
            s.set(["z"], "x")
            expect(s.get(["z"])).toBe("x")
            expect(s.nodeCount).toBe(before + 1)
        })

        it("insert z->z1->z12->'x'; creates 3 extra nodes", () => {
            const { parent, subtrie } = getFreshSub()
            const subtrieBefore = subtrie.nodeCount
            const parentBefore = parent.nodeCount
            subtrie.set(["z", "z1", "z12"], "x")
            expect(subtrie.get(["z", "z1", "z12"])).toBe("x")
            expect(subtrie.nodeCount).toBe(subtrieBefore + 3)
            expect(parent.get(["a", "z", "z1", "z12"])).toBe("x")
            expect(parent.nodeCount).toBe(parentBefore + 3)
        })
    })
})

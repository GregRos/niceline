in this file, define separate cases for:

1. length == number of string values
2. isEmpty == false
3. equals(self) == true
4. equals(Trie.make()) == false
5. equals(self.slice()) but self.slice() !== self
6. nodeCount == count of nodes

for each, generate a another `has` test with same key: 4. get(["a"]) == value 5. get(["b"]) == "" 6. get(["a", "a2"]) -> value 7. get(["a", "a3"]) == "" 8. get(["a", "a3", "a31"]) == value

set tests. before each test, create local variable and use .clone().

1. update at parent: set(["a"], "x"); check value
2. update at child set(["a", "a1"], "x"); check value
3. insert at root: set(["z"], "x")
4. insert create hierarchy: set(["z", "z1", "z12"], "x"); check value; check nodeCount, should be 3 extra nodes.

---

repeat above tests for the subtrie getSubtrie("a")

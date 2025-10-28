consider the trie defined in ts-trie/index.ts. 

Write an equivalent in Python in the `trie.py` file. Make sure to capture all trie behaviors, and add type hints 

- Operations like set, add, and get
- getSubtrie
- Keep the monorphic aspect

# TrieNode type
Use a type alias for the node type:

```python
type TrieNode = dict[str, TrieNode]
```

# MapMap
In python, use `id(map)` instead of the map itself as a key. JUST DO IT
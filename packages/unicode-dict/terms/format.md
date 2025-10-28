# Recursive unicode dictionary format

This document defines the on-disk format for the Unicode dictionary. It is language agnostic and is intended to be read/written by both TypeScript and Python implementations.

### At a glance
- Files: .nice.yaml (preferred), .nice.json, or .nice.jsonc
- Structure: a recursive object of namespaces and leaf entries
- Linking/imports: special key "<-" to include and merge other files
- Leaves: arrays describing a character’s aliases, with an optional ASCII alias first

### See also
- Schema: packages/unicode-dict/dict.schema.json
- Examples: packages/unicode-dict/terms/** (e.g. ___.nice.yaml, fields/___.nice.yaml, font/**)

### Paths
- Paths starting with `.` are resolved relative to the current file.
- Paths starting with `/` are resolved relative to the root at packages/unicode-dict/terms


## Namespaces and files

The dictionary is a tree of namespaces. Each namespace is a mapping (object) whose keys are:
- Multi-character names (word characters only, e.g. font, bold, weather) representing child namespaces.
- Single Unicode characters representing leaf entries (the characters you want to map to aliases).
- The reserved import key: <-.

You can organize namespaces into directories; typical layout under terms/:
- A file named ___.nice.yaml acts as a small index for a folder, importing other files with <- and optionally nesting them under keys.
- Other .nice.yaml files hold either more namespaces or leaf entries for a topic.

### Example: folder index that pulls in subtopics
```yaml
# terms/___.nice.yaml
<-:
	- ./fields/___.nice.yaml
	- ./font/___.nice.yaml
	- ./math/___.nice.yaml
```

### Example: grouping subfiles under namespace keys
```yaml
# terms/font/___.nice.yaml
bold:
	<-: [./bold.nice.yaml]
	italic:
		<-: [./bold-italic.nice.yaml]
sans:
	<-: [./sans/___.nice.yaml]
```

### Leaf entries (AliasMapping)

A leaf entry maps a single Unicode character to one or more aliases using a flat array:
- Index 0: optional ASCII alias (string in braces, e.g. {a.a1}) or null if none.
- Index 1+: one or more named aliases (plain strings).

#### Examples
```yaml
Ω: [null, ohm]
⏚: [null, ground, earth]
𝔸: ["{~D: A}", A]
ℕ: ["{~D: N}", "N"]
```

#### Notes
- The first element, when present, must be a string wrapped in {} to denote an ASCII alias. Use null if there is no ASCII alias.
- Keep leaf arrays on a single line (JSON-style) to ensure stable cross-language parsing.

### Linking with "<-"

To import and merge other dictionary files into the current namespace, use the reserved key <-.

#### Allowed value types
- Array of strings: paths to multiple files, merged in order

#### Path rules
- Must start with . (relative to the current file) or / (absolute) and end with .nice.yaml, .nice.json, or .nice.jsonc.
- Examples: ./font/___.nice.yaml, ./fields/weather.nice.yaml

#### Semantics (merge/compose)
- Each referenced file is parsed as a namespace and deep-merged into the current object.
- Merge order is left-to-right: later entries override earlier ones when keys collide.
- Local keys in the current file override imported keys.
- Leaf arrays are atomic; a conflicting character key replaces the previous one rather than concatenating arrays.

#### Examples
```yaml
# Import a single file
<-: ./fields/___.nice.yaml

# Import several files; later ones win on conflict
<-:
	- ./math/___.nice.yaml
	- ./tech/___.nice.yaml
```

#### Relationship to directories
- You can import at the root (to gather top-level sections) or under a specific namespace key:
```yaml
fields:
	<-: [./fields/___.nice.yaml]
```

#### Key constraints and validity

Implementations should follow these constraints (also enforced by the JSON Schema):
- Reserved key: <- only. 
- Namespace keys: ^.{2,}$.
- Single-character keys: any single Unicode character; value must be either a leaf array (AliasMapping) or a nested namespace object.
- No additional properties beyond the above are permitted.

# Algorithms
## Parsing algorithm
1. Load the current file as a mapping/object.
2. If <- is present:
	 - Normalize to an array of file references.
	 - For each reference, resolve the path, parse it recursively as a namespace, and deep-merge into the current object.
	 - Remove the <- key from the final in-memory structure.
3. For each remaining key:
	 - If the key length is 1 (a single character):
		 - If the value is an array, treat as AliasMapping [AsciiAlias|null, Alias1, Alias2, ...].
		 - If the value is an object, treat as a nested namespace and continue recursively.
	 - Otherwise, treat as a nested namespace and continue recursively.
4. Produce a resolved namespace tree ready for use.
### Examples

#### Root index
```yaml
# terms/___.nice.yaml
<-:
	- ./fields/___.nice.yaml
	- ./font/___.nice.yaml
```

#### Folder index with named namespaces
```yaml
# terms/fields/___.nice.yaml
electric:
	<-: [./electric.nice.yaml]
weather:
	<-: [./weather.nice.yaml]
```

#### Leaf file
```yaml
# terms/fields/electric.nice.yaml
Ω: [null, ohm]
⏚: [null, ground, earth]
```
After resolving <-, the in-memory tree under fields contains both electric and weather namespaces, each holding their leaf character mappings.
### Conflicts
Two aliases of any kind should not point to different characters. When this is detected, a log should be emitted.

NEVER DO: throw an error here. it's better to keep running and collect as many cases as possible.

### Merging
- Objects (namespaces): deep-merge by key with later sources overriding earlier ones.
- Arrays (leaf AliasMapping): if there is a conflict, emit a log.

### Cross-language notes
- YAML and JSON/JSONC are supported; prefer .nice.yaml for readability, but keep leaf arrays in JSON-inline form.
- Avoid YAML anchors/aliases and custom tags; stick to plain scalars, arrays, and objects.
- Treat all strings as UTF-8.






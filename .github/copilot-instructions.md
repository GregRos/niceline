# niceline – working notes for AI coding agents

This repo is a Yarn v4 TypeScript monorepo with four packages:
- packages/trie – a monomorphic Map-of-Maps trie with string[] keys and string values
- packages/chars – a namespaced catalog of Unicode characters backed by the trie
- packages/niceline – user-facing formatting utilities (durations, bytes, paths, typography); depends on chars
- packages/ts-plugin – experimental TS language service plugin for niceline tagged templates

## Build, test, watch
- Package manager: Yarn 4 (nodeLinker=node-modules). Root scripts drive the TypeScript project references build.
  - Build all: yarn build (tsc -b .)
  - Watch all: yarn watch (tsc -b . -w) – there’s also a VS Code Task named “npm: watch” that runs the same
  - Test all: yarn test (runs each workspace’s jest)
- Each package also exposes build/watch/test scripts locally; tests use ts-jest and inherit config from jest.root.mjs.
- In tests, import the package’s src via the @lib alias (configured in test/tsconfig.json), e.g. import Trie from "@lib".

## Key conventions and patterns
- TypeScript project refs: root tsconfig.json references each package’s tsconfig.json; packages emit to dist/.
- Path aliases (tests only): @lib and @lib/* map to ../src and ../src/* per package.
- Lint/format: root scripts eslint:check|fix and prettier:check|fix; use yarn tidy to run fixers + build + tests.

## Trie (packages/trie)
- API: Trie.make(entries?), add/set/get/has, keys/values/entries, clone, equals, getSubtrie, nodeCount.
- Design: values aren’t stored on nodes; they’re kept in a separate Map<TrieNode,string>. Missing lookups return empty string (Trie.NOT_FOUND).
- Equality uses doddle’s sequence setEquals; order is based on Map traversal.

## Chars (packages/chars)
- Goal: map structured names to Unicode glyphs via a Namespace backed by the trie.
- Shape authoring: files under src/terms/** export shape({...}) objects. Leaves are entries of form:
  - "value": ["{ascii.id}" | null, ...aliases]
  - Example: in src/terms/things/ideograms.ts → "♂": [null, "male", "masc"].
- Keying rules (src/shape/to-entries.ts):
  - If an alias contains braces (e.g. "{a.b}"), the trie key becomes ["ascii", "{a.b}"] and points to the value.
  - Otherwise, the key is ["name", ...path, alias]. Braces in path components are disallowed.
- Namespace API (src/namespace/namespace.ts):
  - namespace(shape).get("name:…")/has("name:…") split on ":" (unsplat) and look up in the trie.
- Utilities: splat/unsplat join/split colon-delimited keys; hasBraces guards illegal path parts.
- Duplicates check: yarn workspace @niceline/chars run check:duplicates (tools/check-for-duplicates.ts) scans for colliding keys.

## niceline (packages/niceline)
- Exposes higher-level formatters; pattern is factory functions configured by a format, e.g. _Duration("short"|"long"), _Bytes("binary"|"decimal").
- Typography and values live under src/typography/** and src/values/**. Small, focused modules preferred.

## TS plugin (packages/ts-plugin)
- Experimental language service plugin that augments completions inside niceline tagged templates when typing '['.
- Current implementation provides stub completions; diagnostics scaffolding is present but unfinished.

## Practical examples
- Using the trie: see packages/trie/test/not-empty.test.ts.
- Building a Namespace from shapes: packages/chars/src/namespace/build-trie.ts and test/build-trie.test.ts.
- Authoring shape data: packages/chars/src/terms/things/ideograms.ts aggregated via src/terms/all.ts.

## Tips for contributions
- When adding new shape files, export via shape({...}), wire them through the nearest index.ts and src/terms/all.ts, then run the duplicates check and tests.
- In tests, prefer @lib imports; in source, import cross-packages via workspace ranges (e.g. import Trie from "@niceline/trie").
- Missing = empty string is intentional in Trie; code against Trie.NOT_FOUND.
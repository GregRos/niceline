# Create plugin
in the ts-plugin folder/package, create a TypeScript compiler plugin that provides autocomplete for the symbol refernce syntax used by niceline.

## Where
The plugin should only apply in `niceline` tagged templates:

```ts
niceline`[arrow:left] [arrow:right] {==>}`
```

## Reference types
Symbols can be referenced by name or using an ASCII art representation.

### Name
The name of a symbol is a sequence of strings separated by `:`, such as `arrow:left`.

The reference token for a name is `[...]`, for example:

```ts
niceline`[math:forall][greek:alpha][math:in][math:R] [arrow:right] [greek:alpha] [math:neq] [greek:alpha]`
```

### ASCII
The ASCII representation can be any sequence of symbols.

The token for this repr is `{...}` for example:

```ts
niceline`{A:}{alpha}{e:}{#R} {==>} {alpha} {!=} {alpha}`
```

## Autocomplete behavior

Autocomplete is based on lookups in a [trie structure](../../trie/src/index.ts).

When the user types `{` in the tagged template, we look up the `"{"` key and autocomplete from there.

For `[`, we instead look up `"["` and then split the string based on `:` and use `getSubtrie` to get each next part. 

For each option, the autocomplete should display the value of that option, if any. If no value, '~' should display instead.


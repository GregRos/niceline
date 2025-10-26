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

When the user types `{` in the tagged template, we look up the `"ascii"` key and display its contents. 

For `[`, we instead look up `"name"` and then split the string based on `:` and use `getSubtrie` to get each next part. 

So for names, auto complete should be hierarchical.

The user types (in the tagged template)

`[`

should show all namespaces directly under the `name` section of the trie.

`{`

should show instead all the ASCII art references we know about (they don't get split for now).

For each option, the autocomplete should display the value of that option which is the unicode char it leads to. 

If the option leads to a NS with no value, then a placeholder should be displayed.



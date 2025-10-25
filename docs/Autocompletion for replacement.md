# Autocompletion for replacement

Let's take a closer look at the language. It should just work for TypeScript. Consider a TypeScript plugin.

The language is used in the tagged template `niceline` and looks like this:

```
niceline`this is an arrow {arrow:right} and also this {-->}`
```

where the text between `{...}` is a replacemnet token from a predefined list. We have the list of valid tokens as a big TypeScript object type with `key -> replacement` or during runtime as a map or trie.

It would be nice if the auto complete could show the character that each sequence is replaced to. For example, `{-->}` results in →. This is all in the trie.

how best to implement this?

Some preferences. For each, determine if they are possible.

## Autocompletion parts

The completion box shouldn't just display all possible codes. It should instead use stages, e.g. with names. `arrow:right` would first allow completion of top level names and then e.g. `right` `left` `big:right` and so forth.

This is the same as completing an object's structure, like `a.b.c`.

## Determine the imports enabled by the user

I want a feature where the user

1. Names like `arrow:right` should be auto completed in stages
2.

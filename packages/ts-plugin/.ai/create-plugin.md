# Create plugin

in the ts-plugin folder/package, create a TypeScript compiler plugin that provides autocomplete for the token replacemnet syntax used by niceline.

# Purpose

-   Character-based, string-level formatting
-   Access to an assortment of Unicode characters.

Right now, only the Unicode characters part is implemented.

# Syntax

Replacements will always appear in the `niceline` tagged template. Right now, replacement codes exist only for single characters. The contents of a replacement token can be anything besides one of the `{}characters.

```ts
import { niceline } from "niceline"
const asciiCodes = niceline`{b~ G} {==>} {2~ *6*} {:(1):}`
const names = niceline`
{font:bold:G} {arrow:bb:right} {shape:asterisk:6:2s}{typo:space:em}{}
`
```

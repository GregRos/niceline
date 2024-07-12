When you’re phrasing an error message or similar, you often want to separate the context of one bit of text from another.

Which basically means that you sometimes want to quote a thing. This library lets you do that, but extra pretty. You have a bunch of different quote styles to pick from. They’re all distinctive and distinct from the text you’re likely to be quoting.

They work only on interpolated tokens in the [[Tagged template]]. To activate one, you need to either wrap the template in the correct quote symbols, or just have one immediately before or after the token.

```ts
import {nice} from "niceline"
const query = "SELECT * FFFFROOOM Table"

// Query not supported: ‘SELECT * FFFFROOOM Table’*
nice`Query not supported: '${query}'`
```

There are lots of quote styles to choose from!

| Symbol          | Quoted Token                                           |
| --------------- | ------------------------------------------------------ |
| `'`             | `Executing local command ‘rm -rf /’`                   |
| `"`             | `Query not supported: “-- DROP TABLE STUDENTS”`        |
| `>`             | `Command « Click » failed.`                            |
| `)`             | `Selector 【 .a as { a a 】 was invalid.`                |
| `]`             | `Object ⟦ Type ⟧ has no attribute ‘None’.`             |
| <code>\|</code> | `Inequality ┃ x < x ┃ has no solution.`                |
| `<`             | `Function ❯ x → x + 1 ❮ cannot be called with 2 args.` |
| `!`             | `Server responded ❗Error: No audio device❗`            |

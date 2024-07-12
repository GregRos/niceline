A spinner is kind of like a progress bar, except that instead of denoting how far away something is from being done, it just shows that something is happening. Instead of having a minimum value and a maximum value, a spinner just has a constant number of states that it cycles between.

`niceline` has a set of text spinners. To render a number as a spinner, you give its name, and the number is taken modulo the number of states. Some spinners also have a `width`.

# Ascii
These spinners are all rendered using ASCII characters. To render them, you the `ascii` namespace:
`
```ts
import {nice} from "niceline"

nice(3).ascii.bar(1)
```

| Code                             | Example                                                                  | Description          |
| -------------------------------- | ------------------------------------------------------------------------ | -------------------- |
| `line`                           | <code>\| / - \ </code>                                                   | Spinning dash        |
| `bar(2)`<br>`bar(4)`<br>`bar(5)` | `[ ]` `[=]` `[ ]`<br>`[  ]` `[= ]` `[ =]`<br>`[  ]` `[= ]` `[==]` `[ =]` | Moving bar           |
| `binary(2)`<br>`binary(3)`<br>   | `00` `10` `11` `01`<br>`000` `100` `110` `011` `001`                     | Moving binary digits |
| `hash(b, n)`                     | `#` `@` `&`                                                              | Characters           |
| `suits`                          |                                                                          |                      |

# Unicode
More spinner concepts!

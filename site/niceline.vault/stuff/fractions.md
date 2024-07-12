`niceline` includes lots of ways of representing fractions, such as grades, progressbars, percentages, and so forth.

The `over` function lets you specify a divisor:

```ts
nice(54).over(32).fraction // 54/23
```

By default the divisor is just `1`:

```ts
nice(0.5).over().fraction // 1/2
```

| Format                                | Description       | Example                      |
| ------------------------------------- | ----------------- | ---------------------------- |
| `nice(54).over(23).fraction`          | Fraction          | `54/23`                      |
| `nice(0.335).precision(1)`            | Algebraic         | `0.3`                        |
| `nice(53).over(100).percent(-1)`      | Percent           | `50%`                        |
| `nice(9).over(10).stars(5)`           | stars             | `★★★★⯪`                      |
| `nice(2).over(10).lozenges(5)`        | lozenges          | `▰▱▱▱▱`                      |
| `nice(5).over(10).progress(10)`       | progressbar       | `▓▓▓▓░░░░`                   |
| `nice(7).over(10).ascii.progress(10)` | ASCII progressbar | <code>\|\%%%%%-----\|</code> |


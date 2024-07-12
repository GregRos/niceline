Baked Ligatures is a cool feature that renders common ASCII sequences as individual Unicode characters. This feature works in the **template text**, never in a **token**.

Baked Ligatures are divided into **Tables** and you can toggle each table separately, as well as modify it if you want. Symbols are selected according to several criteria:

1. Must be legible when monospaced.
2. Must have a similar-looking ASCII sequence representation.
3. Said sequence must not be in common use for something else.
4. It must be terminated by spaces, which will be rendered, or else surrounded by `&` characters, which will be consumed.

| ARROWS             |                 | EQUAL            |                | TGRAPHY          |                | Fractions          |                |
| ------------------ | --------------- | ---------------- | -------------- | ---------------- | -------------- | ------------------ | -------------- |
| <code>--></code>   | <code>→</code>  | <code>>=</code>  | <code>≥</code> | <code>--</code>  | <code>–</code> | <code>[1/2]</code> | <code>½</code> |
| <code><--</code>   | <code>←</code>  | <code>>></code>  | <code>≫</code> | <code>---</code> | <code>—</code> | <code>[1/3]</code> | <code>⅓</code> |
| <code><--></code>  | <code>↔</code>  | <code>>>></code> | <code>⋙</code> | `...`            | …              | <code>[2/3]</code> | <code>⅔</code> |
| <code>==></code>   | <code>⇒</code>  | <code><<</code>  | <code>≪</code> | <code>..-</code> | <code>⋯</code> | <code>[1/4]</code> | <code>¼</code> |
| <code><==></code>  | <code>⇔</code>  | <code><<<</code> | <code>⋘</code> | `;`              | \| \|          | <code>[2/4]</code> | <code>½</code> |
| <code><==</code>   | <code>⇐</code>  | <code>/=</code>  | <code>≠</code> | `;;`             | \| \|          | <code>[3/4]</code> | <code>¾</code> |
| <code><--\|</code> | <code>↤</code>  | <code>~=</code>  | <code>≅</code> | `,`              | ZWJ            | <code>[1/5]</code> | <code>⅕</code> |
| <code>\|--></code> | <code>↦</code>  | <code>~~</code>  | <code>≈</code> | `,,`             | NBSP           | <code>[2/5]</code> | <code>⅖</code> |
| <code>-->></code>  | <code>🡺</code> | <code>/~=</code> | <code>≇</code> | `o=o`            | ∞              | <code>[3/5]</code> | <code>⅗</code> |
| <code><<--</code>  | <code>🡸</code> | <code><=</code>  | <code>≤</code> | `(c)`            | ©              | <code>[4/5]</code> | <code>⅘</code> |
| <code><-\*</code>  | <code>↩</code>  |                  |                | `(tm)`           | ™              | <code>[1/6]</code> | <code>⅙</code> |
| <code>\*-></code>  | <code>↪</code>  |                  |                | `(r)`            | ®              | <code>[2/6]</code> | <code>⅓</code> |
|                    |                 |                  |                |                  |                | <code>[3/6]</code> | <code>½</code> |
|                    |                 |                  |                |                  |                | <code>[4/6]</code> | <code>⅔</code> |
|                    |                 |                  |                |                  |                | <code>[5/6]</code> | <code>⅚</code> |
|                    |                 |                  |                |                  |                | <code>[1/8]</code> | <code>⅛</code> |



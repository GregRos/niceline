import { ascii, namespace, not } from "../../registered"

export const arrows2 = namespace("arrow", [
    ascii("<--", "←", ["left"]),
    ascii("-->", "→", ["right"]),
    ascii("--^", "↑", ["up"]),
    ascii("--v", "↓", ["down"]),
    ascii("<-->", "↔", ["left:right"]),
    ascii("v--^", "↕", ["down:up"]),
    ascii("!<-", "↚", not("left")),
    ascii("!->", "↛", not("right")),
    ascii("!<-->", "↮", not("left:right")),

    ascii("<~~", "↜", ["wavey:left"]),
    ascii("~~>", "↝", ["wavey:right"]),
    ascii("<~-", "⇜", ["zigzag:left"]),
    ascii("-~>", "⇝", ["zigzag:right"]),

    ascii("<==", "⇐", ["bb:left", "double:left"]),
    ascii("==>", "⇒", ["bb:right", "double:right"]),
    ascii("==^", "⇑", ["bb:up", "double:up", "^=="]),
    ascii("==v", "⇓", ["bb:down", "double:down", "v=="]),
    ascii("<==>", "⇔", ["bb:left:right", "double:left:right"]),

    ascii("!<==", "⇍", not("bb:left", "double:left")),
    ascii("!==>", "⇏", not("bb:right", "double:right")),
    ascii("!<==>", "⇎", not("bb:left:right", "double:left:right")),

    ascii("<-|", "↤", ["tailed:left"]),
    ascii("|->", "↦", ["tailed:right"]),

    ascii("<<=", "🢀", ["big:left"]),
    ascii("=>>", "🡺", ["big:right"]),
    ascii("=^^", "🢁", ["big:up"]),
    ascii("=vv", "🢃", ["big:down"]),
    ascii("<|-", "🠈", ["triangle:left"]),
    ascii("-|>", "🠊", ["triangle:right"]),
    ascii("-|^", "🠉", ["triangular:up"]),
    ascii("-|v", "🠋", ["triangular:down"]),
    ascii("<||=", "🡄", ["big:triangle:left"]),
    ascii("-||>", "🡆", ["big:triangle:right"]),
    ascii("-||^", "🡅", ["big:triangular:up"]),
    ascii("-||v", "🡇", ["big:triangular:down"]),

    ascii("<-2", "⇇", ["2:left"]),
    ascii("2->", "⇉", ["2:right"]),
    ascii("2-^", "⇈", ["2:up"]),
    ascii("2-v", "⇊", ["2:down"]),

    ascii("<<:", "⮜", ["head:left"]),
    ascii(":>>", "⮞", ["head:right"]),
    ascii(":^^", "⮝", ["head:up"]),
    ascii(":vv", "⮟", ["head:down"]),

    ascii("<::", "🠴", ["caret:left"]),
    ascii("::>", "🠶", ["caret:right"]),
    ascii("::^", "🠵", ["caret:up"]),
    ascii("::v", "🠷", ["caret:down"]),

    ascii("<-'", "↲", ["turn:down:left"]),
    ascii("<-.", "↰", ["turn:up:left"]),
    ascii("-><-", "⇄", ["left:right"]),

    ascii("^@", "⭮", ["clockwise", "cw"]),
    ascii("@^", "⭯", ["counter:clockwise", "ccw"])
])

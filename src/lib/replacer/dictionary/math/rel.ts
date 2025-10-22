import { ascii, namespace } from "../../registered"

export const rel = namespace("rel", [
    ascii(">=", "≥", ["greater:equal", "geq"]),
    ascii("<=", "≤", ["lesser:equal", "leq"]),
    ascii("!=", "≠", ["equal:not", "eq:not"]),
    ascii("==", "≡", ["3:equal", "3eq"]),
    ascii("!==", "≢", ["3:equal:not", "3eq:not"]),

    ascii("!~", "≁", ["tilde:not"]),
    ascii("~~", "≈", ["2:tilde"]),
    ascii("!~~", "≉", ["2:tilde:not"]),
    ascii("=~", "≃", ["tilde:line"]),
    ascii("==~", "≅", ["tilde:equal"]),

    ascii(">>", "≫", ["greater:2", "ggtr"]),
    ascii(">>>", "⋙", ["greater:3", "gggtr"]),
    ascii("<<", "≪", ["lesser:2", "llsr"]),
    ascii("<<<", "⋘", ["lesser:3", "lllsr"])
])

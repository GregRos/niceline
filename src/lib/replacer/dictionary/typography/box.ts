import { ascii, namespace } from "../../registered"

export const box = namespace("box", [
    ascii("[...]", "⬚", ["dashed"]),
    ascii("[x]", "⮽", ["crossed"]),
    ascii("[v]", "🗹", ["checked"]),
    ascii("~x~", "✘", ["cross"]),
    ascii("~v~", "✔", ["check"])
])

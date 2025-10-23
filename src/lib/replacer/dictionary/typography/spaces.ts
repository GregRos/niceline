import { ascii, namespace } from "../../registered"

export const spaces = namespace("space", [
    ascii("\u200b", "{,}", ["zwsp", "0em", "0"]),
    ascii("\u200a", "{:}", ["1/em"]),
    ascii("\u2005", "{;}", ["1/em", "0.em"]),
    ascii("\u2000", "{::}", ["en", "1/2em", "0.5em"]),
    ascii("\u2001", "{;;}", ["em", "1em"]),
    ascii("\u2060", "{-,-}", ["zwj", "joiner:0"]),
    ascii("\u202f", "{-:-}", ["nnbsp", "nb:narrow"]),
    ascii("\u2060", "{-;-}", ["wj", "joiner:1"]),
    ascii("\u00a0", "{-::-}", ["nbsp", "nb"])
])

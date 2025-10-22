import { ascii, namespace } from "../replacer/registered"

export const marks = namespace("mark", [
    ascii("(c)", "©", ["copyright", "copy", "c"]),
    ascii("(r)", "®", ["r", "registered"]),
    ascii("(tm)", "™", ["t", "trade"]),
    ascii("(sm)", "℠", ["s", "service"]),
    ascii("(p)", "℗", ["p", "record"])
])

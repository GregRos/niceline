import { ascii, namespace } from "../../registered"

export const dots = namespace("dots", [
    ascii("...", "…", ["horizontal", "hdots", "dots"]),
    ascii("...^", "⋮", ["vertical", "vdots"]),
    ascii("...-", "⋯", ["center", "cdots"]),
    ascii(".../", "⋰", ["diagonal:leftright", "lrdots"]),
    ascii("...\\", "⋱", ["diagonal:rightleft", "rldots"])
])

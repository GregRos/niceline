import { ascii, namespace } from "../../registered"

export const dashes = namespace("dash", [
    ascii("en", "–", ["en", "dash:en"]),
    ascii("em", "—", ["em", "dash:em"]),
    ascii("nb", "‑", ["nb", "dash:nb"])
])

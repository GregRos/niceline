import { named, namespace } from "../../registered"

export const dashes = namespace("dash", [
    named("–", ["en", "dash:en"]),
    named("—", ["em", "dash:em"]),
    named("‑", ["nb", "dash:nb"])
])

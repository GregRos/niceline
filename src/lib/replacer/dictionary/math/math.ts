import { ascii, named, namespace } from "../../registered"

export const ops = namespace("math", [
    ascii("∞", "{oo}", ["infinity", "infty"]),

    named("∎", ["proof:end", "qed", "tombstone", "tstone"])
])

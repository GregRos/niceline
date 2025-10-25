import { shape } from "../../defs/namespace/shape"

export default shape({
    dash: {
        "–": [null, "en", "dash:en"],
        "—": [null, "em", "dash:em"],
        "‑": [null, "nb", "dash:nb"]
    }
})

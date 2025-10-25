import { shape } from "../../defs/namespace/shape"

export default shape({
    dots: {
        "…": ["{...}", "horizontal", "hdots", "dots"],
        "⋮": ["{...^}", "vertical", "vdots"],
        "⋯": ["{...-}", "center", "cdots"],
        "⋰": ["{.../}", "diagonal:leftright", "lrdots"],
        "⋱": ["{...\\}", "diagonal:rightleft", "rldots"]
    }
})

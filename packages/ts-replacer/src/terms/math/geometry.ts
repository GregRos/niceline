import { shape } from "../../shape/shape"

export default shape({
    "∥": [null, "parallel", "par"],
    "∦": [null, "parallel:not", "par:not"],
    "⊥": [null, "perpendicular", "perp"],

    arc: {
        "⌒": [null, ""],
        "⌓": [null, "segment"],
        "⌔": [null, "sector"],
        "⏜": [null, "frown"],
        "⏝": [null, "smile"]
    },

    angle: {
        "∠": [null, ""],
        "⦜": [null, "right"],
        "∡": [null, "measured"],
        "∢": [null, "spherical"],
        "⦟": [null, "acute"],
        obtuse: {
            "⦦": [null, "", "up"],
            "⦧": [null, "down"]
        },

        "⟀": [null, "3d"]
    }
})

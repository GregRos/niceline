// ◖
//◗

import { shape } from "../../defs/namespace/shape"

export default shape({
    paren: {
        ceil: {
            "⌈": ["{[^}", "left", "l"],
            "⌉": ["{^]}", "right", "r"]
        },
        floor: {
            "⌊": ["{[_}", "left", "l"],
            "⌋": ["{_]}", "right", "r"]
        },
        round: {
            white: {
                "⦅": ["{(_(}", "left", "l"],
                "⦆": ["{)_)}", "right", "r"]
            },
            halfmoon: {
                white: {
                    "⦇": ["{|_)}", "left", "l"],
                    "⦈": ["{(_|}", "right", "r"]
                },
                black: {
                    "◖": ["{(%|}", "left", "l"],
                    "◗": ["{|%)}", "right", "r"]
                }
            },
            angle: {
                "1": {
                    "⦓": ["{<(<)}", "left", "l"],
                    "⦔": ["{>)>}", "left", "l"]
                },
                "2:angle": {
                    "⦕": ["{(>(<}", "left", "l"],
                    "⦖": ["{)>)>}", "left", "l"]
                }
            },
            "2": {
                "⸨": ["{((}", "left", "l"],
                "⸩": ["{))}", "right", "r"]
            },
            flat: {
                "⟮": ["{|()}", "left", "l"],
                "⟯": ["{)|}", "right", "r"]
            }
        },
        square: {
            E: {
                "⁅": ["{[-}", "left", "l"],
                "⁆": ["{-]}", "right", "r"]
            },
            "⟦": ["{[[}", "left", "l"],
            "⟧": ["{]]}", "right", "r"],
            "⟬": ["{<_[}", "left", "l"],
            "⟭": ["{]_>}", "right", "r"],
            "⦗": ["{[%<}", "left", "l"],
            "⦘": ["{>%]}", "right", "r"]
        },

        angle: {
            single: {
                "〈": ["{<(}", "left", "l"],
                "〉": ["{)>}", "right", "r"],
                s2: {
                    "❬": [null, "left", "l"],
                    "❭": [null, "right", "r"]
                },
                s3: {
                    "❮": ["{<((}", "left", "l"],
                    "❯": ["{))>}", "right", "r"]
                },
                s4: {
                    "❰": ["{<(((}", "left", "l"],
                    "❱": ["{)))>}", "right", "r"]
                },
                dot: {
                    "⦑": ["{<(.}", "left", "l"],
                    "⦒": ["{.)>)}", "right", "r"]
                },
                curved: {
                    "⧼": ["{<|(}", "left", "l"],
                    "⧽": ["{)|>}", "right", "r"]
                }
            },
            double: {
                "⟪": ["{<<(}", "left", "l"],
                "⟫": ["{>>}", "right", "r"]
            }
        },

        brace: {
            white: {
                "⦃": [null, "left", "l"],
                "⦄": [null, "right", "r"]
            }
        }
    }
})

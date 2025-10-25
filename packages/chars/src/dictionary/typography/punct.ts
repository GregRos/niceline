import { shape } from "../../defs/namespace/shape"

export default shape({
    punct: {
        space: {
            "\u200b": ["{,}", "zwsp", "0em", "0"],
            "\u200a": ["{:}", "1/em"],
            "\u2005": ["{;}", "1/em", "0.em"],
            "\u2000": ["{::}", "en", "1/2em", "0.5em"],
            "\u2001": ["{;;}", "em", "1em"],
            "\u2060": ["{-,-}", "zwj", "joiner:0", "wj", "joiner:1"],
            "\u202f": ["{-:-}", "nnbsp", "nb:narrow"],
            "\u00a0": ["{-::-}", "nbsp", "nb"]
        },
        dots: {
            "…": ["{...}", "horizontal", "hdots", "dots"],
            "⋮": ["{...^}", "vertical", "vdots"],
            "⋯": ["{...-}", "center", "cdots"],
            "⋰": ["{.../}", "diagonal:leftright", "lrdots"],
            "⋱": ["{...\\}", "diagonal:rightleft", "rldots"]
        },
        dash: {
            "–": [null, "en", "dash:en"],
            "—": [null, "em", "dash:em"],
            "‑": [null, "nb", "dash:nb"]
        },
        "¡": [null, "exclamation:inverted"],
        "‼": [null, "exclamation:2"],
        "⁉": [null, "question-exclamation", "eq"],
        "⁈": [null, "exclamation-question", "qe"],
        "❢": [null, "exclamation:heart"],

        "¿": [null, "question:inverted"],
        "‽": [null, "interrobang"],
        "⁇": [null, "question:2"],

        ampersand: {
            "🙴": [null, "big"],
            "🙵": [null, "swash"]
        },

        quote: {
            double: {
                left: {
                    "“": ['{"|}', ""],
                    "«": ['{"<}', "french", "guillemets"],
                    "„": ["{,,|}", "low", "german", "czech"],
                    "🙸": ["{,,||}", "low", "german", "czech", "heavy", "bold"],
                    "🙶": ['{"||}', "heavy", "bold"]
                },
                right: {
                    "”": ['{|"}', ""],
                    "»": ['{>"}', "french", "guillemets"],
                    "🙷": ['{|""}', "french", "guillemets", "heavy", "bold"]
                    // aliasAscii("..:left", '{|,,}', ["low","german","czech"]) - removed per refactor
                    // aliasAscii("..left:heavy", '{|,,}', ["low","german","czech","heavy","bold"]) - removed per refactor
                }
            },
            single: {
                left: {
                    "‘": ["{'|}", ""],
                    "‹": ["{'<}", "french", "guillemets"],
                    "‚": ["{,}", "low", "german", "czech"]
                },
                right: {
                    "’": ["{|'}", ""],
                    "›": ["{>'}", "french", "guillemets"]
                    // aliasAscii("left", '{<,}', ["low","german","czech"]) - removed per refactor
                }
            }
        }
    }
})

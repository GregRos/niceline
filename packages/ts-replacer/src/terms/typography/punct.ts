import { shape } from "../../shape/shape"

export default shape({
    space: {
        "\u200b": ["{,}", "zwsp", "0em", "0"],
        "\u200a": ["{:}", "1/8em"],
        "\u2005": ["{;}", "1/4em", "0.25em"],
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
    punct: {
        "¡": [null, "exclamation:inverted"],
        "‼": [null, "exclamation:2"],
        "⁉": [null, "question-exclamation", "eq"],
        "⁈": [null, "exclamation-question", "qe"],
        "❢": [null, "exclamation:heart"],

        "¿": [null, "question:inverted"],
        "‽": [null, "interrobang"],
        "⁇": [null, "question:2"],
        ampersand: {
            "🙴": [null, ""],
            "🙵": [null, "swash"]
        }
    },

    quote: {
        double: {
            big: {
                left: {
                    "🙸": ["{,,||}", "german"],
                    "🙶": ['{"||}', ""]
                },
                right: {
                    "🙷": ['{|""}', ""]
                }
            },
            left: {
                "“": ['{"|}', ""],
                "«": ['{"<}', "french", "guillemets"],
                "„": ["{,,|}", "low", "german"]
            },
            right: {
                "”": ['{|"}', ""],
                "»": ['{>"}', "french", "guillemets"]
                // aliasAscii("..:left", '{|,,}', ["low","german","czech"]) - removed per refactor
                // aliasAscii("..left:heavy", '{|,,}', ["low","german","czech","heavy","bold"]) - removed per refactor
            }
        },
        single: {
            left: {
                "‘": ["{'|}", ""],
                "‹": ["{'<}", "french", "guillemets"],
                "‚": ["{,|}", "low", "german", "czech"]
            },
            right: {
                "’": ["{|'}", ""],
                "›": ["{>'}", "french", "guillemets"]
                // aliasAscii("left", '{<,}', ["low","german","czech"]) - removed per refactor
            }
        }
    }
})

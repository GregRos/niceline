import { shape } from "../../defs/namespace/shape"

export default shape({
    punct: {
        "¡": [null, "exclamation:inverted"],
        "‼": [null, "exclamation:2"],
        "⁉": [null, "question-exclamation", "eq"],
        "⁈": [null, "exclamation-question", "qe"],
        "❢": [null, "exclamation:heart"],

        "¿": [null, "question:inverted"],
        "‽": [null, "interrobang"],
        "⁇": [null, "question:2"],

        "ampersand|and": {
            "🙴": [null, "big"],
            "🙵": [null, "swash"]
        },

        quote: {
            "double|d": {
                "left|l": {
                    "“": ['{"|}', ""],
                    "«": ['{"<}', "french", "guillemets"],
                    "„": ["{,,|}", "low", "german", "czech"],
                    "🙸": ["{,,||}", "low", "german", "czech", "heavy", "bold"],
                    "🙶": ['{"||}', "heavy", "bold"]
                },
                "right|r": {
                    "”": ['{|"}', ""],
                    "»": ['{>"}', "french", "guillemets"],
                    "🙷": ['{|""}', "french", "guillemets", "heavy", "bold"]
                    // aliasAscii("..:left", '{|,,}', ["low","german","czech"]) - removed per refactor
                    // aliasAscii("..left:heavy", '{|,,}', ["low","german","czech","heavy","bold"]) - removed per refactor
                }
            },
            "single|s": {
                "left|l": {
                    "‘": ["{'|}", ""],
                    "‹": ["{'<}", "french", "guillemets"],
                    "‚": ["{,}", "low", "german", "czech"]
                },
                "right|r": {
                    "’": ["{|'}", ""],
                    "›": ["{>'}", "french", "guillemets"]
                    // aliasAscii("left", '{<,}', ["low","german","czech"]) - removed per refactor
                }
            }
        }
    }
})

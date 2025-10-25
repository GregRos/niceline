import { shape } from "../../defs/namespace/shape"

export default shape({
    space: {
        "\u200b": ["{,}", "zwsp", "0em", "0"],
        "\u200a": ["{:}", "1/em"],
        "\u2005": ["{;}", "1/em", "0.em"],
        "\u2000": ["{::}", "en", "1/2em", "0.5em"],
        "\u2001": ["{;;}", "em", "1em"],
        "\u2060": ["{-,-}", "zwj", "joiner:0", "wj", "joiner:1"],
        "\u202f": ["{-:-}", "nnbsp", "nb:narrow"],
        "\u00a0": ["{-::-}", "nbsp", "nb"]
    }
})

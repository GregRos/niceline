import { shape } from "../../shape/shape"

export default shape({
    music: {
        bar: {
            "𝄀": [null, "single", "1"],
            "𝄁": [null, "double", "2"],
            "𝄂": [null, "final", "end"],
            "𝄃": [null, "final:reverse"],
            "𝄄": [null, "dashed"],
            "𝄅": [null, "short"],
            repeat: {
                "𝄆": [null, "begin", "S", "B"],
                "𝄇": [null, "end", "E"]
            }
        },
        clef: {
            "𝄞": [null, "g", "", "treble"],
            "𝄢": [null, "f", "bass", "cello", "trombone"],
            "𝄡": [null, "c", "alto", "tenor"],
            "𝄥": [null, "drum", "drum:a"],
            "𝄦": [null, "drum:b"]
        },
        note: {
            "𝅝": [null, "1", "whole"],
            "𝅗𝅥": [null, "1/2", "half"],
            "𝅘𝅥": [null, "1/4", "4th"],
            "𝅘𝅥𝅮": [null, "1/8", "8th"],
            "𝅘𝅥𝅯": [null, "1/16", "16th"],
            "𝅘𝅥𝅰": [null, "1/32", "32th"],
            "𝅘𝅥𝅱": [null, "1/64", "64th"],
            "𝅘𝅥𝅲": [null, "1/128", "128th"]
        },
        beam: {
            "\u{1D173}": [null, "begin"],
            "\u{1D174}": [null, "end"]
        },
        tie: {
            "\u{1D175}": [null, "begin"],
            "\u{1D176}": [null, "end"]
        },
        slur: {
            "\u{1D177}": [null, "begin"],
            "\u{1D178}": [null, "end"]
        },
        phrase: {
            "\u{1D179}": [null, "begin"],
            "\u{1D17A}": [null, "end"]
        }
    }
})

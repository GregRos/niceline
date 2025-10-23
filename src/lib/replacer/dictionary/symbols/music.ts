import { named, namespace } from "../../registered"

export const music = namespace("music", [
    namespace("barline|bar", [
        named("𝄀", ["single", "1"]),
        named("𝄁", ["double", "2"]),
        named("𝄂", ["final", "end"]),
        named("𝄃", ["final:reverse"]),
        named("𝄄", ["dashed"]),
        named("𝄅", ["short"]),
        namespace("repeat", [
            named("𝄆", ["begin", "S", "B"]),
            named("𝄇", ["end", "E"])
        ])
    ]),

    namespace("clef", [
        named("𝄞", ["g", "", "treble"]),
        named("𝄢", ["f", "bass", "cello", "trombone"]),
        named("𝄡", ["c", "alto", "tenor"]),
        named("𝄥", ["drum", "drum:a"]),
        named("𝄦", ["drum:b"])
    ]),

    namespace("note", [
        named("𝅝", ["1", "whole"]),
        named("𝅗𝅥", ["1/2", "half"]),
        named("𝅘𝅥", ["1/4", "4th"]),
        named("𝅘𝅥𝅮", ["1/8", "8th"]),
        named("𝅘𝅥𝅯", ["1/16", "16th"]),
        named("𝅘𝅥𝅰", ["1/32", "32th"]),
        named("𝅘𝅥𝅱", ["1/64", "64th"]),
        named("𝅘𝅥𝅲", ["1/128", "128th"])
    ]),
    namespace("beam|b", [
        named("\u{1D173}", ["begin"]),
        named("\u{1D174}", ["end"])
    ]),
    namespace("tie|t", [
        named("\u{1D175}", ["begin"]),
        named("\u{1D176}", ["end"])
    ]),
    namespace("slur|s", [
        named("\u{1D177}", ["begin"]),
        named("\u{1D178}", ["end"])
    ]),
    namespace("phrase|p", [
        named("\u{1D179}", ["begin"]),
        named("\u{1D17A}", ["end"])
    ])
])

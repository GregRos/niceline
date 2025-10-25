import { ascii, namespace } from "../registered"

export const bullets = namespace("list", [
    namespace("box", [
        ascii("■", "{[#]}", ["filled"]),
        ascii("□", "{[ ]}", ["empty"])
    ]),
    namespace("diamond", [
        ascii("◆", "{<#>-}", ["filled"]),
        ascii("◇", "{<>-}", ["empty"]),
        ascii("◈", "{<<#>>-}", ["nested"]),
        ascii("❖", "{<^>-}", ["floral"])
    ]),
    namespace("round", [
        ascii("•", "{.-}", [""]),
        ascii("○", "{o-}", ["empty"]),
        ascii("●", "{(#)-}", ["big"]),
        namespace("nested", [
            ascii("◉", "{((#))-}", [""]),
            ascii("⊙", "{(.)-}", ["dot"]),
            ascii("◎", "{(o)-}", ["circle"])
        ])
    ]),
    namespace("asterisk", [ascii("✤", "{o*o}", ["round"])]),

    ascii("‣", "{o}", ["tri:bullet", "triangle:bullet"]),
    ascii("⁃", "{-}", ["hyphen:bullet", "dash:bullet"]),
    ascii("◦", "{°}", ["ring:bullet", "circle:bullet"])
])

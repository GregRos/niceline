import { ascii, namespace } from "../../registered"

export const bullets = namespace("list", [
    namespace("number", [
        ascii("⒈", "{1.}", ["1"]),
        ascii("⒉", "{2.}", ["2"]),
        ascii("⒊", "{3.}", ["3"]),
        ascii("⒋", "{4.}", ["4"]),
        ascii("⒌", "{5.}", ["5"]),
        ascii("⒍", "{6.}", ["6"]),
        ascii("⒎", "{7.}", ["7"]),
        ascii("⒏", "{8.}", ["8"]),
        ascii("⒐", "{9.}", ["9"]),
        ascii("⒑", "{10.}", ["10"]),
        ascii("⒒", "{11.}", ["11"]),
        ascii("⒓", "{12.}", ["12"]),
        ascii("⒔", "{13.}", ["13"]),
        ascii("⒕", "{14.}", ["14"]),
        ascii("⒖", "{15.}", ["15"]),
        ascii("⒗", "{16.}", ["16"]),
        ascii("⒘", "{17.}", ["17"]),
        ascii("⒙", "{18.}", ["18"]),
        ascii("⒚", "{19.}", ["19"]),
        ascii("⒛", "{20.}", ["20"])
    ]),
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

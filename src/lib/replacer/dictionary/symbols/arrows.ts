import { ascii, namespace, not } from "../../registered"

export const arrows2 = namespace("arrow", [
    ascii("←", "{<--}", ["left"]),
    ascii("→", "{-->}", ["right"]),
    ascii("↑", "{--^}", ["up"]),
    ascii("↓", "{--v}", ["down"]),
    ascii("↔", "{<-->}", ["left:right"]),
    ascii("↕", "{v--^}", ["down:up"]),
    ascii("↚", "{!<--}", not("left")),
    ascii("↛", "{!-->}", not("right")),
    ascii("↮", "{!<-->}", not("left:right")),

    ascii("↜", "{<~~}", ["wavey:left"]),
    ascii("↝", "{~~>}", ["wavey:right"]),
    ascii("⇜", "{<~-}", ["zigzag:left"]),
    ascii("⇝", "{-~>}", ["zigzag:right"]),

    ascii("⇐", "{<==}", ["bb:left", "double:left"]),
    ascii("⇒", "{==>}", ["bb:right", "double:right"]),
    ascii("⇑", "{==^}", ["bb:up", "double:up", "^=="]),
    ascii("⇓", "{==v}", ["bb:down", "double:down", "v=="]),
    ascii("⇔", "{<==>}", ["bb:left:right", "double:left:right"]),

    ascii("⇍", "{!<==}", not("bb:left", "double:left")),
    ascii("⇏", "{!==>}", not("bb:right", "double:right")),
    ascii("⇎", "{!<==>}", not("bb:left:right", "double:left:right")),

    ascii("↤", "{<--|}", ["tailed:left"]),
    ascii("↦", "{|-->}", ["tailed:right"]),

    namespace("barbed", [
        ascii("🢀", "{<<==}", ["left"]),
        ascii("🡺", "{==>>}", ["right"]),
        ascii("🢁", "{==^^}", ["up"]),
        ascii("🢃", "{==vv}", ["down"])
    ]),
    namespace("triangle", [
        ascii("🠈", "{<|--}", ["left"]),
        ascii("🠊", "{--|>}", ["right"]),
        ascii("🠉", "{--|^}", ["up"]),
        ascii("🠋", "{--|v}", ["down"]),
        namespace("big", [
            ascii("🡄", "{<||=}", ["left"]),
            ascii("🡆", "{--||>}", ["right"]),
            ascii("🡅", "{--||^}", ["up"]),
            ascii("🡇", "{--||v}", ["down"])
        ])
    ]),
    namespace("2", [
        ascii("⇇", "{<--2}", ["left"]),
        ascii("⇉", "{2-->}", ["right"]),
        ascii("⇈", "{2--^}", ["up"]),
        ascii("⇊", "{2--v}", ["down"]),
        ascii("⇄", "{-><-}", ["left:right"])
    ]),
    namespace("head", [
        ascii("⮜", "{<<:}", ["left"]),
        ascii("⮞", "{:>>}", ["right"]),
        ascii("⮝", "{:^^}", ["up"]),
        ascii("⮟", "{:vv}", ["down"])
    ]),
    namespace("caret", [
        ascii("🠴", "{<::}", ["left"]),
        ascii("🠶", "{::>}", ["right"]),
        ascii("🠵", "{::^}", ["up"]),
        ascii("🠷", "{::v}", ["down"])
    ]),

    ascii("⭮", "{^@}", ["clockwise", "cw"]),
    ascii("⭯", "{@^}", ["counter:clockwise", "ccw"])
])

import { ascii, named, namespace, not } from "../../registered"

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
    namespace("long", [
        ascii("\u27f5", "{<---}", ["left"]),
        ascii("\u27f6", "{--->}", ["right"]),
        ascii("\u27f7", "{<--->}", ["left:right"]),
        namespace("zigzag", [
            ascii("\u2b33", "{<~~-}", ["left"]),
            ascii("\u27ff", "{-~~>}", ["right"])
        ]),
        namespace("double|bb", [
            ascii("\u27f8", "{<===}", ["left"]),
            ascii("\u27f9", "{===>}", ["right"]),
            ascii("\u27fa", "{<===>}", ["left:right"])
        ]),
        namespace("from", [
            ascii("\u27fb", "{<---|}", ["left"]),
            ascii("\u27fc", "{|--->}", ["right"]),
            namespace("double|bb", [
                ascii("\u27fd", "{<===|}", ["left"]),
                ascii("\u27fe", "{|===>}", ["right"])
            ])
        ])
    ]),
    namespace("wavey", [
        ascii("↜", "{<~~}", ["left"]),
        ascii("↝", "{~~>}", ["right"])
    ]),
    namespace("zigzag", [
        ascii("⇜", "{<~-}", ["left"]),
        ascii("⇝", "{-~>}", ["right"])
    ]),

    namespace("double|bb", [
        ascii("⇐", "{<==}", ["left"]),
        ascii("⇒", "{==>}", ["right", "right"]),
        ascii("⇑", "{==^}", ["up", "double:up"]),
        ascii("⇓", "{==v}", ["down", "double:down"]),
        ascii("⇔", "{<==>}", ["left:right", "double:left:right"]),

        ascii("⇍", "{!<==}", not("left", "double:left")),
        ascii("⇏", "{!==>}", not("right", "double:right")),
        ascii("⇎", "{!<==>}", not("left:right", "double:left:right"))
    ]),
    namespace("from", [
        ascii("↤", "{<--|}", ["left"]),
        ascii("↦", "{|-->}", ["right"]),
        namespace("bb|double", [
            ascii("⤆", "{<==|}", ["left"]),
            ascii("⤇", "{|==>}", ["right"])
        ])
    ]),

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
        ]),
        namespace("to", [
            ascii("⭰", "{|<|--}", ["down"]),
            ascii("⭱", "{|--|^|}", ["up"]),
            ascii("⭲", "{|--|>|}", ["down"]),
            ascii("⭳", "{|--|v|}", ["down"])
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
    namespace("loop", [
        ascii("↫", "{<--&}", ["left"]),
        ascii("↬", "{&-->}", ["right"])
    ]),
    namespace("hook", [
        ascii("⮌", "{<--@}", ["left"]),
        ascii("⮎", "{@-->}", ["right"]),
        ascii("⮏", "{v--@}", ["down"]),
        ascii("⮍", "{@--^}", ["up"])
    ]),
    namespace("circle", [
        named("⮔", ["fourcorner"]),
        namespace("cw", [
            ascii("⥁", "{@>@}", ["", "closed"]),
            namespace("open", [
                ascii("⟳", "{@v}", ["top"]),
                ascii("⭮", "{^@}", ["bottom"])
            ])
        ]),
        namespace("ccw", [
            ascii("⥀", "{@<@}", [""]),
            namespace("open", [
                ascii("⮏", "{v--@}", ["down"]),
                ascii("⮎", "{@-->}", ["right"]),
                ascii("⮍", "{@--^}", ["up"]),
                ascii("⮌", "{<--@}", ["left"])
            ])
        ])
    ]),
    namespace("to", [
        ascii("⇤", "{|<--}", ["left"]),
        ascii("⇥", "{|-->}", ["right"]),
        ascii("⤒", "{--^|}", ["up"]),
        ascii("⤓", "{--v|}", ["down"])
    ]),
    namespace("bbb|triple", [
        ascii("⇚", "{<(===)}", ["left"]),
        ascii("⇛", "{(===)>}", ["right"]),
        ascii("⤊", "{(===)^}", ["left"]),
        ascii("⤋", "{(===)^}", ["right"])
    ]),
    namespace("quad", [
        ascii("⭅", "{<(====)}", ["left:quad"]),
        ascii("⭆", "{(====)>}", ["right:quad"]),
        ascii("⟰", "{(====)^}", ["up:quad"]),
        ascii("⟱", "{(====)v}", ["down:quad"])
    ])
])

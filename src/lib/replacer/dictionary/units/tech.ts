import { ascii, named, namespace } from "../../registered"

export const units = namespace("tech", [
    named("⌨", ["keyboard"]),
    named("Ω", ["ohm"]),
    named("°", ["deg", "degree"]),
    named("⌱", ["origin"]),
    named("⍾", ["bell"]),
    named("⎁", ["completion"]),
    named("⏚", ["earth"]),
    named("⎈", ["helm"]),
    named("⎌", ["undo"]),
    named("⎔", ["function"]),
    named("⎙", ["print"]),
    named("⎚", ["clear"]),
    named("⏍", ["sqft"]),
    named("⎗", ["page:previous"]),
    named("⎘", ["page:next"]),
    named("⎆", ["enter"]),
    named("⎃", ["emphasis"]),
    named("⏿", ["observer"]),
    named("⮓", ["newline:right"]),
    named("⯐", ["position"]),
    named("⮒", ["newline:left"]),
    named("⌀", ["diameter", "diam"]),
    named("⏲", ["timer"]),
    named("℃", ["celsius"]),
    named("℉", ["fahrenheit"]),
    named("✇", ["tape"]),
    ascii("‰", "{o/oo}", ["percent:2", "per:thousand", "permille"]),
    ascii("‱", "{o/ooo}", ["percent:4", "per:myriad", "permyriad"]),

    namespace("control", [
        namespace("power", [
            ascii("⏼", "{(|)}", [""]),
            ascii("⏻", "{|)}", ["on:off"]),
            ascii("⏽", "{(|}", ["on"]),
            named("⏾", ["sleep"])
        ]),
        namespace("media", [
            named("⏯", ["play:pause"]),
            named("⏮", ["previous", "prev"]),
            named("⏭", ["next"]),
            named("⏺", ["record"]),
            named("⏹", ["stop"]),
            named("⏏", ["eject"])
        ])
    ]),
    namespace("actions", []),
    namespace("actions", [
        named("⏎", ["return"]),
        named("⇧", ["shift"]),
        named("🄰", ["capslock"]),
        named("⇪", ["capslock:bb"]),
        named("⌫", ["backspace", "delete:left"]),
        named("⌦", ["delete:right"]),
        named("⭾", ["tab"]),
        namespace("mac", [named("⌘", ["mac:cmd"]), named("⌥", ["mac:option"])])
    ]),
    named("⏱", ["stopwatch"]),

    namespace("recycle", [
        named("♺", [""]),
        named("♼", ["paper"]),
        named("♽", ["paper:partial"]),

        namespace("plastic|p", [
            named("♳", ["", "1"]),
            named("♴", ["2"]),
            named("♵", ["3"]),
            named("♶", ["4"]),
            named("♷", ["5"]),
            named("♸", ["6"]),
            named("♹", ["7"])
        ])
    ])
])

export const electric = namespace("electric", [
    named("⏧", ["intersection"]),
    named("⌁", ["arrow"]),
    named("⌂", ["house"]),
    named("⏛", ["fuse"]),
    named("⏚", ["ground"]),
    named("⏦", ["ac"]),
    named("⎓", ["dc"])
])

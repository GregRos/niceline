import {
    aliasName,
    aliasNamespace,
    ascii,
    named,
    namespace
} from "../registered"

export const shapes = namespace("shape", [
    named("⛤", ["pentacle", "pentagram"]),
    named("⛧", ["pentagram:inverted", "pentacle:inverted"]),

    namespace("diamond|rhombus", [
        ascii("⯁", "{<%%>}", [""]),
        ascii("◈", "{<<%%>>}", ["nested"]),
        ascii("⛋", "{[<__>]}", ["filled"]),
        namespace("bw", [
            ascii("⬖", "{<%_>}", ["left"]),
            ascii("⬗", "{<_%>}", ["right"]),
            named("⬘", ["top"]),
            named("⬙", ["bottom"])
        ])
    ]),
    namespace("square", [
        ascii("■", "{[%%]}", ["", "black"]),
        ascii("□", "{[__]}", ["white"]),
        ascii("▣", "{[[%%]]}", ["nested"]),
        namespace("grid", [
            ascii("▦", "{[##]}", ["full", ""]),
            ascii("▤", "{[==]}", ["horizontal"]),
            ascii("▥", "{[||]}", ["vertcal"]),
            ascii("▧", "{[\\]}", ["right:diag"]),
            ascii("▨", "{[//]}", ["left:diag"])
        ]),
        named("▢", ["rounded"]),
        named("⬚", ["dotted"]),
        ascii("⮽", "{[xx]}", ["crossed"]),
        ascii("🗹", "{[vv]}", ["checked"]),
        namespace("bw", [
            named("⬒", ["top"]),
            named("⬓", ["bottom"]),
            ascii("◧", "{[%_]}", ["left"]),
            ascii("◨", "{[_%]}", ["right"]),
            namespace("lr", [
                ascii("⬔", "{[_\\%]}", ["right"]),
                ascii("⬕", "{[%\\_]}", ["left"])
            ]),
            namespace("rl", [
                ascii("◪", "{[_/%]}", ["right"]),
                ascii("◩", "{[%/_]}", ["left"])
            ])
        ])
    ]),
    namespace("parallelogram", [
        ascii("▰", "{/%%/}", ["", "black"]),
        ascii("▱", "{/__/}", ["white"])
    ]),
    namespace("gon", [
        aliasNamespace("triangle", ["3"]),
        aliasNamespace("square", ["4"]),
        named("⬟", ["5"]),
        named("⬢", ["6"]),
        named("⯃", ["8"])
    ]),
    ascii("•", "{(..)}", ["bullet"]),
    namespace("circle|circ", [
        ascii("●", "{(%%)}", ["", "black"]),
        ascii("○", "{(__)}", ["white"]),
        ascii("◯", "{(___)}", ["big"]),
        named("◙", ["squared:inverted"]),
        namespace("nested", [
            ascii("◉", "{((%%))}", ["", "black"]),
            ascii("◎", "{((__))}", ["ring"]),
            ascii("⦾", "{((___))}", ["ring:thick"]),
            ascii("⦿", "{((%%%))}", ["big", "big:black"])
        ]),
        namespace("bw", [
            ascii("◑", "{(_%)}", ["right"]),
            ascii("◐", "{(%_)}", ["left"]),
            named("◒", ["bottom"]),
            named("◓", ["top"])
        ]),
        namespace("grid", [ascii("◍", "{(||)}", ["vertical"])])
    ]),

    aliasName("pentagon", ["gon:5"]),
    aliasName("hexagon", ["gon:6"]),
    aliasName("octagon", ["gon:8"]),

    namespace("triangle", [
        namespace("black", [
            named("⯅", ["up", ""]),
            named("⯆", ["down"]),
            named("⯇", ["left"]),
            named("⯈", ["right"]),
            namespace("orth", [
                named("◢", ["bottom:left"]),
                named("◣", ["bottom:right"]),
                named("◤", ["top:left"]),
                named("◥", ["top:right"])
            ])
        ]),
        namespace("white", [
            named("△", ["up", ""]),
            named("▽", ["down"]),
            named("◁", ["left"]),
            named("▷", ["right"]),
            namespace("orth", [
                named("◿", ["bottom:left"]),
                named("◺", ["bottom:right"]),
                named("◹", ["top:left"]),
                named("◸", ["top:right"])
            ])
        ])
    ]),

    namespace("star", [
        ascii("🟂", "{*3*}", ["3"]),
        named("🟃", ["3:pinwheel", "3:pw"]),
        ascii("✦", "{*4*}", ["4"]),
        named("⯌", ["cusp"]),
        named("🟈", ["4:pinwheel", "4:pw"]),
        namespace("5|", [ascii("🟊", "{*5*}", ["b"])]),
        ascii("🟋", "{*6*}", ["6"]),
        ascii("✸", "{*8*}", ["8"]),
        ascii("✹", "{*12*}", ["12"]),
        ascii("★", "{~*~}", [""]),
        ascii("❂", "{(*8*)}", ["sun", "8:circled"]),
        namespace("half", [
            ascii("⯨", "{|*}", ["left"]),
            ascii("⯩", "{*|}", ["right"])
        ]),
        namespace("bw", [
            ascii("⯪", "{*|_}", ["left"]),
            ascii("⯫", "{~/*~}", ["right"])
        ])
    ]),
    namespace("asterisk|ast", [
        namespace("5", [
            ascii("🞯", "{*5*}", ["", "s1"]),
            named("🞰", ["s2"]),
            ascii("🞱", "{*5**}", ["s3"]),
            named("🞲", ["s4"]),
            ascii("🞴", "{*5***}", ["s5"])
        ]),
        namespace("6|", [
            namespace("s1|", [
                ascii("🞵", "{*6}", [""]),
                ascii("✻", "{*6o}", ["round"])
            ]),
            namespace("s2", [named("🞶", [""])]),
            namespace("s3", [
                ascii("🞷", "{**6}", [""]),
                ascii("✽", "{**6o}", ["round"])
            ]),
            namespace("s4", [named("🞸", [""])]),
            namespace("s5", [ascii("🞺", "{***6}", [""])])
        ]),
        namespace("8", [
            namespace("s1|", [
                ascii("🞻", "{*8}", [""]),
                ascii("❉", "{*8o}", ["round"])
            ]),
            named("🞼", ["s2"]),
            namespace("s3", [
                ascii("🞽", "{**8}", [""]),
                namespace("round", [
                    ascii("❋", "{**8o}", [""]),
                    named("❃", ["pinwheel", "pw"])
                ])
            ]),
            named("🞾", ["s4"]),
            ascii("🞿", "{***8}", ["s5"])
        ]),
        ascii("✺", "{*16*}", ["16"])
    ]),
    namespace("bullet", [
        named("•", [""]),
        named("❥", ["heart"]),
        named("‣", ["tri", "triangle"])
    ])
])

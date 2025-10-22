import { ascii, named, namespace } from "../replacer/registered"



export const marks = namespace("mark", [
    ascii("(c)", "©", ["copyright", "copy", "c"]),
    ascii("(r)", "®", ["r", "registered"]),
    ascii("(tm)", "™", ["t", "trade"]),
    ascii("(sm)", "℠", ["s", "service"]),
    ascii("(p)", "℗", ["p", "record"]),
])



export const chess = namespace("chess", [
    namespace(["white", "w"], [
        named( "♔", ["king", "k"]),
        named( "♕", ["queen", "q"]),
        named( "♖", ["rook", "r"]),
        named( "♗", ["bishop", "b"]),
        named( "♘", ["knight", "n"]),
        named( "♙", ["pawn", "p"]),
    ]),
    namespace(["black", "b"], [
        named( "♚", ["king", "k"]),
        named( "♛", ["queen", "q"]),
        named( "♜", ["rook", "r"]),
        named( "♝", ["bishop", "b"]),
        named( "♞", ["knight", "n"]),
        named( "♟", ["pawn", "p"]),
    ])
])

export const ideograms = namespace("idea", [
    named( "♂", ["male", "masc"]),
    named( "♀", ["female", "femme"]),
    named( "⚲", ["nonbinary", "nb", "enby", "neuter", "neutral"]),
    named( "⚥", ["intersex", "intersex"]),
    named( "⚤", ["mf", "fm", "het", "heterosexual"]),
    named( "⚣", ["mm", "m", "homosexual", "hom"]),
    named( "⚢", ["ff", "f", "lesbian", "les"]),

    named( "⚭", ["marriage"]),
    named( "⚮", ["divorce"]),
    named( "⚯", ["partnership"]),

    named( "☮", ["peace"]),
    named( "☢", ["radioactive"]),
    named( "☣", ["biohazard"]),
    named( "⚕", ["caduceus", "medical"]),
    named( "☠", ["skull", "death", "poison"]),

    // ideological
    named( "☯", ["yin-yang", "taijitu"]),
    named( "✞", ["cross"]),
    named("☦", ["cross:orthodox"]),
    named("☨", ["cross:lorraine"]),

    named( "✡", ["star-of-david", "magen-david"]),
    named( "☪", ["islam", "star-and-crescent"]),
    named( "☸", ["buddhism", "dharmachakra"]),
    named( "🕉", ["hinduism", "aum", "om"]),
    named( "☯", ["taoism", "yin-yang"]),
    named( "⛩", ["shinto", "torii"]),
    named( "☸", ["jainism", "dharmachakra"]),
    named( "☬", ["sikhism", "khanda"]),
    named("☫", ["farsi"]),

    named( "ﷲ", ["allah"]),
    named( "Ⓐ", ["anarchy", "anarchism"]),
    named( "☲", ["confucianism", "trigram-li"]),
    named( "☭", ["communism", "hammer-and-sickle"]),
    
    named( "☥", ["ankh"]),
    named( "⚜", ["fleur-de-lis", "fleur"]),
    named( "☘", ["shamrock", "clover"]),
])



export const progress = namespace("progress", [
    namespace("vblock", [
        named("▁", ["1/8"]),
        named("▂", ["2/8"]),
        named("▃", ["3/8"]),
        named("▄", ["4/8"]),
        named("▅", ["5/8"]),
        named("▆", ["6/8"]),
        named("▇", ["7/8"]),
        named("█", ["8/8"]),
    ]),
    namespace("hblock", [
        named("▏", ["1/8"]),
        named("▎", ["2/8"]),
        named("▍", ["3/8"]),
        named("▌", ["4/8"]),
        named("▋", ["5/8"]),
        named("▊", ["6/8"]),
        named("▉", ["7/8"]),
        named("█", ["8/8"]),
    ]),
    namespace("shade", [
        named("░", ["1/4"]),
        named("▒", ["2/4"]),
        named("▓", ["3/4"]),
        named("█", ["4/4"]),
    ]),
    namespace("quadrant", [
        named("▖", ["bl", "1/4"]),
        named("▗", ["br", "2/4"]),
        named("▘", ["ul", "3/4"]),
        named("▝", ["ur", "4/4"]),
    ])
])


export const shapes = namespace("shape", [
    named("circle", ["●", "circle"]),
    named("square", ["■", "square"]),
    named("diamond", ["◆", "diamond"]),
    named("triangle:up", ["▲", "triangle:up"]),
    named("triangle:down", ["▼", "triangle:down"]),
    named("triangle:left", ["◀", "triangle:left"]),
    named("triangle:right", ["▶", "triangle:right"]),
    named("star:five", ["★", "star:five"]),
    named("star:six", ["✶", "star:six"]),
    named("star:eight", ["✸", "star:eight"]),
    named("star:twelve", ["✹", "star:twelve"]),
    named("rhombus", ["⯁", "rhombus"]),
    named("pentagon", ["⬟", "pentagon"]),
    named("hexagon", ["⬢", "hexagon"]),
    named("octagon", ["⯃", "octagon"]),

    named("ast", ["∗", "asterisk", "ast"]),
    named("bullet", ["•", "bullet", "bullet"]),
    named("star", ["⋆", "star", "star"]),


    

])

export const keys = namespace("key", [
    named("⏎", ["return"]),
    named("⇧", ["shift"]),
    named("🄰", ["capslock"]),
    named("⇪", ["capslock:bb"]),
    named("⌫", ["backspace", "delete:left"]),
    named("⌦", ["delete:right"]),
    named("⭾", ["tab"]),
    named("⏏", ["eject"]),
    named("⌘", ["mac:cmd"]),
    named("⌥", ["mac:option"]),
])


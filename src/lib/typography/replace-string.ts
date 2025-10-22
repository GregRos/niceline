/* eslint-disable no-multi-spaces */
import { ascii, namespace } from "../replacer/registered"
import type { Arrows } from "./baked-ligatures"



export const marks = namespace("mark", [
    ascii("(c)", "©", ["copyright", "copy", "c"]),
    ascii("(r)", "®", ["r", "registered"]),
    ascii("(tm)", "™", ["t", "trade"]),
    ascii("(sm)", "℠", ["s", "service"]),
    ascii("(p)", "℗", ["p", "record"]),
])

export const people = namespace("people", [
    ascii("", "♂", ["male", "masc"]),
    ascii("", "♀", ["female", "femme"]),
    ascii("", "⚲", ["nonbinary", "nb", "enby", "neuter", "neutral"]),
    ascii("", "⚥", ["intersex", "intersex"]),
    namespace("rel", [
    ascii("", "⚤", ["mf", "fm", "het", "heterosexual"]),
    ascii("", "⚣", ["mm", "m", "homosexual", "hom"]),
    ascii("", "⚢", ["ff", "f", "lesbian", "les"]),

    ascii("", "⚭", ["marriage"]),
    ascii("", "⚮", ["divorce"]),
    ascii("", "⚯", ["partnership"]),
    ])

])

export const signs = namespace("sign", [
    ascii("", "☮", ["peace"]),
    ascii("", "☢", ["radioactive"]),
    ascii("", "☣", ["biohazard"]),
    ascii("", "⚕", ["caduceus", "medical"]),
    ascii("", "☠", ["skull", "death", "poison"]),
    ascii("", "☮", ["peace"]),

])

export const chess = namespace("chess", [
    namespace(["white", "w"], [
        ascii("", "♔", ["king", "k"]),
        ascii("", "♕", ["queen", "q"]),
        ascii("", "♖", ["rook", "r"]),
        ascii("", "♗", ["bishop", "b"]),
        ascii("", "♘", ["knight", "n"]),
        ascii("", "♙", ["pawn", "p"]),
    ]),
    namespace(["black", "b"], [
        ascii("", "♚", ["king", "k"]),
        ascii("", "♛", ["queen", "q"]),
        ascii("", "♜", ["rook", "r"]),
        ascii("", "♝", ["bishop", "b"]),
        ascii("", "♞", ["knight", "n"]),
        ascii("", "♟", ["pawn", "p"]),
    ])
])


export const symbols = namespace("concept", [
    ascii("male", "♂", ["male", "masc"]),
    ascii("female", "♀", ["female", "femme"]),
    ascii("nonbinary", "⚲", ["nonbinary", "nb", "enby"]),
    ascii("intersex", "⚥", ["intersex", "intersex"]),
    ascii("mf", "⚤", ["mf", "fm", "het", "heterosexual"]),
    ascii("mm", "⚣", ["mm", "m", "homosexual", "hom"]),
    ascii("ff", "⚢", ["ff", "f", "lesbian", "les"]),

    ascii("marriage", "⚭", ["marriage"]),
    ascii("divorce", "⚮", ["divorce"]),
    ascii("partnership", "⚯", ["partnership"]),

    ascii("radioactive", "☢", ["radioactive"]),
    ascii("biohazard", "☣", ["biohazard"]),
    ascii("caduceus", "⚕", ["caduceus", "medical"]),
    ascii("ankh", "☥", ["ankh"]),
    ascii("skull", "☠", ["skull", "death"]),
    // ethnic / religious symbols
    ascii("yin-yang", "☯", ["yin-yang", "taijitu"]),
    ascii("fleur-de-lis", "⚜", ["fleur-de-lis", "fleur"]),
    ascii("shamrock", "☘", ["shamrock", "clover"]),
    ascii("christ", "✞", ["christ", "cross"]),
    ascii("judaism", "✡", ["star-of-david", "magen-david"]),
    ascii("islam", "☪", ["islam", "star-and-crescent"]),
    ascii("buddhism", "☸", ["buddhism", "dharmachakra"]),
    ascii("hinduism", "🕉", ["hinduism", "aum", "om"]),
    ascii("taoism", "☯", ["taoism", "yin-yang"]),
    ascii("shinto", "⛩", ["shinto", "torii"]),
    ascii("jainism", "☸", ["jainism", "dharmachakra"]),
    ascii("sikhism", "☬", ["sikhism", "khanda"]),
    ascii("allah", "ﷲ", ["allah"]),
    ascii("communism", "☭", ["communism", "hammer-and-sickle"]),
    ascii("anarchy", "Ⓐ", ["anarchy", "anarchism"]),
    ascii("peace-sign", "☮", ["peace-sign", "peace"]),  
    ascii("", "☲", ["confucianism", "trigram-li"]),
    ascii("", "☥", ["ankh"]),

])


export const progress = replacers({
    //▁ ▂ ▃ ▄ ▅ ▆ ▇ █
    "{vblock:1/8}": ["▁",  "[shape:]vblock:1/8"],
    "{vblock:2/8}": ["▂",  "[shape:]vblock:2/8"],
    "{vblock:3/8}": ["▃",  "[shape:]vblock:3/8"],
    "{vblock:4/8}": ["▄",  "[shape:]vblock:4/8"],
    "{vblock:5/8}": ["▅",  "[shape:]vblock:5/8"],
    "{vblock:6/8}": ["▆",  "[shape:]vblock:6/8"],
    "{vblock:7/8}": ["▇",  "[shape:]vblock:7/8"],
    "{vblock:8/8}": ["█",  "[shape:]vblock:8/8"],
    "{hblock:1/8}": ["▏", "[shape:]hblock:1/8"],
    "{hblock:2/8}": ["▎", "[shape:]hblock:2/8"],
    "{hblock:3/8}": ["▍", "[shape:]hblock:3/8"],
    "{hblock:4/8}": ["▌", "[shape:]hblock:4/8"],
    "{hblock:5/8}": ["▋", "[shape:]hblock:5/8"],
    "{hblock:6/8}": ["▊", "[shape:]hblock:6/8"],
    "{hblock:7/8}": ["▉", "[shape:]hblock:7/8"],
    "{hblock:8/8}": ["█", "[shape:]hblock:8/8"],
    "{shade:1/4}": ["░", "[shape:]shade:1/4"],
    "{shade:2/4}": ["▒", "[shape:]shade:2/4"],
    "{shade:3/4}": ["▓", "[shape:]shade:3/4"],
    "{shade:4/4}":  ["█",  "[shape:]shade:4/4"],
    "quadrant:bl": ["▖", "[shape:]quadrant:bl"],
    "quadrant:br": ["▗", "[shape:]quadrant:br"],
    "quadrant:ul": ["▘", "[shape:]quadrant:ul"],
    "quadrant:ur": ["▝", "[shape:]quadrant:ur"],
})

export const shapes = replacers({
    "circle": ["●", "[shape:]circle"],
    "square": ["■", "[shape:]square"],
    "diamond": ["◆", "[shape:]diamond"],
    "triangle:up": ["▲", "[shape:]triangle:up"],
    "triangle:down": ["▼", "[shape:]triangle:down"],
    "triangle:left": ["◀", "[shape:]triangle:left"],
    "triangle:right": ["▶", "[shape:]triangle:right"],
    "star:five": ["★", "[shape:]star:five"],
    "star:six": ["✶", "[shape:]star:six"],
    "star:eight": ["✸", "[shape:]star:eight"],
    "star:twelve": ["✹", "[shape:]star:twelve"],
    "rhombus": ["⯁", "[shape:]rhombus"],

    "pentagon": ["⬟", "[shape:]pentagon"],
    "hexagon": ["⬢", "[shape:]hexagon"],
    "octagon": ["⯃", "[shape:]octagon"],

     "ast":   ["∗",       "[op:]asterisk", "[op:]ast"],
    "bullet":     ["•",       "[op:]bullet", "[op:]bullet"],
    "star":       ["⋆",       "[op:]star", "[op:]star"],
    "suit:clubs": ["♧", "[shape:]suit:clubs"],
    "suit:diamonds": ["♢", "[shape:]suit:diamonds"],
    "suit:hearts": ["♡", "[shape:]suit:hearts"],
    "suit:spades": ["♤", "[shape:]suit:spades"],

    "{suit:clubs!}": ["♣", "[shape:]suit:clubs:black"],
    "{suit:diamonds!}": ["♦", "[shape:]suit:diamonds:black"],
    "{suit:hearts!}": ["♥", "[shape:]suit:hearts:black"],
    "{suit:spades!}": ["♠", "[shape:]suit:spades:black"],

    "key:return": ["⏎", "key:return"],
    "key:shift": ["⇧", "key:shift"],
    "key:capslock": ["🄰", "key:capslock"],
    "key:capslock:2": ["⇪", "key:capslock:bb"],
    "key:backspace": ["⌫", "key:backspace", "key:delete:left"],
    "key:delete:right": ["⌦", "key:delete:right"],
    "key:tab": ["⭾", "key:tab"],
    "key:eject": ["⏏", "key:eject"],
    "key:mac:cmd": ["⌘", "key:mac:cmd"],
    "key:mac:option": ["⌥", "key:mac:option"],
   

    

})

type Blah = typeof arrows
type OneThingy<T extends string> = T extends `${string}${infer U extends keyof Blah}${string}` ? Blah[U] : never

function doit<const T extends string>(x: T): OneThingy<T> {
    return x as any
}

const a = doit("A\b{<==}")

type ARB = OneThingy<"A<=|B">

import { ascii, named, namespace } from "../registered"

export const shapes = namespace("shape", [
    namespace("square:bw", [
        named("⬒", ["top"]),
        named("⬓", ["bottom"]),
        named("⬔", ["right"]),
        named("⬕", ["left"])
    ]),
    namespace("diamond:bw", [
        named("⬖", ["left"]),
        named("⬗", ["right"]),
        named("⬘", ["top"]),
        named("⬙", ["bottom"])
    ]),
    named("⯁", ["diamond"]),
    named("■", ["square"]),
    named("⬟", ["pentagon"]),
    named("⬢", ["hexagon"]),
    named("⯃", ["octagon"]),
    namespace("triangle", [
        named("⯅", ["up"]),
        named("⯆", ["down"]),
        named("⯇", ["left"]),
        named("⯈", ["right"])
    ]),
    named("●", ["circle"]),
    named("⯌", ["cusp"]),

    namespace("star", [
        named("🟂", ["3"]),
        named("🟃", ["3:pinwheel", "3:pw"]),
        named("✦", ["4"]),
        named("🟈", ["4:pinwheel", "4:pw"]),
        named("🟊", ["b"]),
        named("🟋", ["6"]),
        named("✸", ["8"]),
        named("✹", ["12"]),
        ascii("★", "{~*~}", [""]),
        ascii("⯪", "{~*|~}", ["half:left"]),
        ascii("⯫", "{~|*~}", ["half:right"]),
        ascii("⯨", "{~*|}", ["half:left:b"]),
        ascii("⯩", "{|*~}", ["half:right:b"])
    ]),

    named("ast", ["∗", "asterisk", "ast"]),
    named("bullet", ["•", "bullet", "bullet"]),
    named("star", ["⋆", "star", "star"]),

    named("☆", ["star:white", "star:w"])
])

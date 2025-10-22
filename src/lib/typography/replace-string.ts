import { named, namespace } from "../replacer/registered"

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
    namespace("triangle", [
        named("⯅", ["up"]),
        named("⯆", ["down"]),
        named("⯇", ["left"]),
        named("⯈", ["right"])
    ]),
    named("●", ["circle"]),
    named("⯌", ["cusp"]),

    named("star:five", ["★", "star:five"]),
    named("star:six", ["✶", "star:six"]),
    named("star:eight", ["✸", "star:eight"]),
    named("star:twelve", ["✹", "star:twelve"]),
    named("rhombus", ["⯁", "rhombus"]),
    named("pentagon", ["⬟", "pentagon"]),
    named("hexagon", ["⬢", "hexagon"]),
    named("octagon", ["⯃", "octagon"]),
    ascii("~*~", "★", [""]),
    ascii("~*|~", "⯪", ["half:left"]),
    ascii("~|*~", "⯫", ["half:right"]),
    ascii("~*|", "⯨", ["half:left:b"]),
    ascii("|*~", "⯩", ["half:right:b"])
    named("ast", ["∗", "asterisk", "ast"]),
    named("bullet", ["•", "bullet", "bullet"]),
    named("star", ["⋆", "star", "star"]),
    namespace("star", [
        named("🟂", ["3"]),
        named("🟃", ["3:pinwheel", "3:pw"]),
        named("✦", ["4"]),
        named("🟈", ["4:pinwheel", "4:pw"]),
        named("🟊", ["b"]),
        named("🟌", ["6"]),
        named("🟐", ["8"]),
        named("🟓", ["12"])
    ]),
    named("☆", ["star:white", "star:w"])
])

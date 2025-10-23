import { named, namespace } from "../../registered"

export const game = namespace("game", [
    namespace("chess", [
        namespace("white|w", [
            named("♔", ["king", "k"]),
            named("♕", ["queen", "q"]),
            named("♖", ["rook", "r"]),
            named("♗", ["bishop", "b"]),
            named("♘", ["knight", "n"]),
            named("♙", ["pawn", "p"])
        ]),
        namespace("black|b", [
            named("♚", ["king", "k"]),
            named("♛", ["queen", "q"]),
            named("♜", ["rook", "r"]),
            named("♝", ["bishop", "b"]),
            named("♞", ["knight", "n"]),
            named("♟", ["pawn", "p"])
        ])
    ]),
    namespace("cards", [
        namespace("black|b", [
            named("♠", ["spade", "spades", "s"]),
            named("♣", ["club", "clubs", "c"]),
            named("♥", ["heart", "hearts", "h"]),
            named("♦", ["diamond", "diamonds", "d"])
        ]),
        namespace("white|w", [
            named("♤", ["spade", "spades", "s"]),
            named("♧", ["club", "clubs", "c"]),
            named("♡", ["heart", "hearts", "h"]),
            named("♢", ["diamond", "diamonds", "d"])
        ])
    ]),
    namespace("dice", [
        named("⚀", ["1", "one"]),
        named("⚁", ["2", "two"]),
        named("⚂", ["3", "three"]),
        named("⚃", ["4", "four"]),
        named("⚄", ["5", "five"]),
        named("⚅", ["6", "six"])
    ])
])

import { shape } from "../../namespace/shape"

export default shape({
    game: {
        chess: {
            white: {
                "♔": [null, "king", "k"],
                "♕": [null, "queen", "q"],
                "♖": [null, "rook", "r"],
                "♗": [null, "bishop", "b"],
                "♘": [null, "knight", "n"],
                "♙": [null, "pawn", "p"]
            },
            black: {
                "♚": [null, "king", "k"],
                "♛": [null, "queen", "q"],
                "♜": [null, "rook", "r"],
                "♝": [null, "bishop", "b"],
                "♞": [null, "knight", "n"],
                "♟": [null, "pawn", "p"]
            }
        },
        cards: {
            black: {
                "♠": [null, "spade", "spades", "s"],
                "♣": [null, "club", "clubs", "c"],
                "♥": [null, "heart", "hearts", "h"],
                "♦": [null, "diamond", "diamonds", "d"]
            },
            white: {
                "♤": [null, "spade", "spades", "s"],
                "♧": [null, "club", "clubs", "c"],
                "♡": [null, "heart", "hearts", "h"],
                "♢": [null, "diamond", "diamonds", "d"]
            }
        },
        dice: {
            "⚀": [null, "1", "one"],
            "⚁": [null, "2", "two"],
            "⚂": [null, "3", "three"],
            "⚃": [null, "4", "four"],
            "⚄": [null, "5", "five"],
            "⚅": [null, "6", "six"]
        },
        draughts: {
            white: {
                "⛀": [null, "man"],
                "⛁": [null, "king"]
            },
            black: {
                "⛂": [null, "man"],
                "⛃": [null, "king"]
            }
        },
        shogi: {
            // TODO: add more pieces
            white: {
                "⛉": [null, "turned"]
            },
            black: {
                "⛊": [null, "turned"]
            }
        }
        // TODO: add pieces for majhong, go, backgammon, etc.
        // TODO: add card characters if they exist
    }
})

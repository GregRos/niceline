import { shape } from "../defs/namespace/shape"

export default shape({
    shape: {
        "⛤": [null, "pentacle", "pentagram"],
        "⛧": [null, "pentagram:inverted", "pentacle:inverted"],
        "diamond|rhombus": {
            "⯁": ["{<%%>}", ""],
            "◈": ["{<<%%>>}", "nested"],
            "⛋": ["{[<__>]}", "filled"],
            bw: {
                "⬖": ["{<%_>}", "left"],
                "⬗": ["{<_%>}", "right"],
                "⬘": [null, "top"],
                "⬙": [null, "bottom"]
            }
        },
        square: {
            "■": ["{[%%]}", "", "black"],
            "□": ["{[__]}", "white"],
            "▣": ["{[[%%]]}", "nested"],
            grid: {
                "▦": ["{[##]}", "full", ""],
                "▤": ["{[==]}", "horizontal"],
                "▥": ["{[||]}", "vertcal"],
                "▧": ["{[\\]}", "right:diag"],
                "▨": ["{[//]}", "left:diag"]
            },
            "▢": [null, "rounded"],
            "⬚": [null, "dotted"],
            "⮽": ["{[xx]}", "crossed"],
            "🗹": ["{[vv]}", "checked"],
            bw: {
                "⬒": [null, "top"],
                "⬓": [null, "bottom"],
                "◧": ["{[%_]}", "left"],
                "◨": ["{[_%]}", "right"],
                lr: {
                    "⬔": ["{[_\\%]}", "right"],
                    "⬕": ["{[%\\_]}", "left"]
                },
                rl: {
                    "◪": ["{[_/%]}", "right"],
                    "◩": ["{[%/_]}", "left"]
                }
            }
        },
        parallelogram: {
            "▰": ["{/%%/}", "", "black"],
            "▱": ["{/__/}", "white"]
        },
        gon: {
            // aliasNamespace("triangle", ["3"]) - removed per refactor instructions
            // aliasNamespace("square", ["4"]) - removed per refactor instructions
            "⬟": [null, "5"],
            "⬢": [null, "6"],
            "⯃": [null, "8"]
        },
        "•": ["{(..)}", "bullet"],
        "circle|circ": {
            "●": ["{(%%)}", "", "black"],
            "○": ["{(__)}", "white"],
            "◯": ["{(___)}", "big"],
            "◙": [null, "squared:inverted"],
            nested: {
                "◉": ["{((%%))}", "", "black"],
                "◎": ["{((__))}", "ring"],
                "⦾": ["{((___))}", "ring:thick"],
                "⦿": ["{((%%%))}", "big", "big:black"]
            },
            bw: {
                "◑": ["{(_%)}", "right"],
                "◐": ["{(%_)}", "left"],
                "◒": [null, "bottom"],
                "◓": [null, "top"]
            },
            grid: {
                "◍": ["{(||)}", "vertical"]
            }
        },
        // aliasName("pentagon", ["gon:5"]) - removed per refactor instructions
        // aliasName("hexagon", ["gon:6"]) - removed per refactor instructions
        // aliasName("octagon", ["gon:8"]) - removed per refactor instructions
        triangle: {
            black: {
                "⯅": [null, "up", ""],
                "⯆": [null, "down"],
                "⯇": [null, "left"],
                "⯈": [null, "right"],
                orth: {
                    "◢": [null, "bottom:left"],
                    "◣": [null, "bottom:right"],
                    "◤": [null, "top:left"],
                    "◥": [null, "top:right"]
                }
            },
            white: {
                "△": [null, "up", ""],
                "▽": [null, "down"],
                "◁": [null, "left"],
                "▷": [null, "right"],
                orth: {
                    "◿": [null, "bottom:left"],
                    "◺": [null, "bottom:right"],
                    "◹": [null, "top:left"],
                    "◸": [null, "top:right"]
                }
            }
        },
        star: {
            "🟂": ["{*3*}", "3"],
            "🟃": [null, "3:pinwheel", "3:pw"],
            "✦": ["{*4*}", "4"],
            "⯌": [null, "cusp"],
            "🟈": [null, "4:pinwheel", "4:pw"],
            "5|": {
                "🟊": ["{*5*}", "b"]
            },
            "🟋": ["{*6*}", "6"],
            "✸": ["{*8*}", "8"],
            "✹": ["{*12*}", "12"],
            "★": ["{~*~}", ""],
            "❂": ["{(*8*)}", "sun", "8:circled"],
            half: {
                "⯨": ["{|*}", "left"],
                "⯩": ["{*|}", "right"]
            },
            bw: {
                "⯪": ["{*|_}", "left"],
                "⯫": ["{~/*~}", "right"]
            }
        },
        "asterisk|ast": {
            "5": {
                "🞯": ["{*5*}", "", "s1"],
                "🞰": [null, "s2"],
                "🞱": ["{*5**}", "s3"],
                "🞲": [null, "s4"],
                "🞴": ["{*5***}", "s5"]
            },
            "6|": {
                "s1|": {
                    "🞵": ["{*6}", ""],
                    "✻": ["{*6o}", "round"]
                },
                s2: {
                    "🞶": [null, ""]
                },
                s3: {
                    "🞷": ["{**6}", ""],
                    round: {
                        "❋": ["{**6o}", ""],
                        "❃": [null, "pinwheel", "pw"]
                    }
                },
                s4: {
                    "🞸": [null, ""]
                },
                s5: {
                    "🞺": ["{***6}", ""]
                }
            },
            "8": {
                "s1|": {
                    "🞻": ["{*8}", ""],
                    "❉": ["{*8o}", "round"]
                },
                "🞼": [null, "s2"],
                s3: {
                    "🞽": ["{**8}", ""],
                    round: {
                        "❋": ["{**8o}", ""],
                        "❃": [null, "pinwheel", "pw"]
                    }
                },
                "🞾": [null, "s4"],
                "🞿": ["{***8}", "s5"]
            },
            "✺": ["{*16*}", "16"]
        },
        bullet: {
            "•": [null, ""],
            "❥": [null, "heart"],
            "‣": [null, "tri", "triangle"]
        }
    }
})

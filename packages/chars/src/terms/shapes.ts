import { shape } from "../shape/shape"

export default shape({
    shape: {
        "⛤": [null, "pentacle", "pentagram"],
        "⛧": [null, "pentagram:inverted", "pentacle:inverted"],
        "❂": ["{(=*=)}", "sun"],

        diamond: {
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
        circ: {
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
            3: {
                "🟂": ["{<*3*>}", "3"],
                "🟃": [null, "3:pinwheel", "3:pw"]
            },
            4: {
                "⯌": ["{<*4*>}", ""],
                "🟈": [null, "pinwheel"]
            },
            5: {
                "★": ["{<*5*>}", ""],
                "☆": ["{<o*5*o>}", "white"],
                half: {
                    "⯨": ["{|*}", "left"],
                    "⯩": ["{*|}", "right"]
                },
                bw: {
                    "⯪": ["{*|_}", "left"],
                    "⯫": ["{~/*~}", "right"]
                }
            },

            "🟋": ["{<*6*>}", "6"],
            "✸": ["{<*8*>}", "8"],
            "✹": ["{<*12*>}", "12"]
        },
        asterisk: {
            "🞵": ["{1~ *6*}", ""],
            "✻": ["{1~ *6o}", "round"],
            s2: {
                "🞶": ["{2~ *6*}", ""]
            },
            s3: {
                "🞷": ["{3~ *6*}", ""],
                round: {
                    "❋": ["{3~ *6o}", ""],
                    "❃": [null, "pinwheel", "pw"]
                }
            },
            s4: {
                "🞸": ["{4~ *6*}", ""]
            },
            s5: {
                "🞺": ["{5~ *6*}", ""]
            },
            "5": {
                "🞯": ["{1~ *5*}", "", "s1", "{*5*}"],
                "🞰": ["{2~ *5*}", "s2"],
                "🞱": ["{3~ *5*}", "s3"],
                "🞲": ["{4~ *5*}", "s4"],
                "🞴": ["{5~ *5*}", "s5"]
            },
            "8": {
                "🞻": ["{1~ *8*}", ""],
                "❉": ["{1~ *8o}", "round"],
                "🞼": ["{2~ *8*}", "s2"],
                s3: {
                    "🞽": ["{3~ *8*}", ""],
                    round: {
                        "❋": ["{3~ *8o}", ""],
                        "❃": [null, "pinwheel", "pw"]
                    }
                },
                "🞾": ["{4~ *8*}", "s4"],
                "🞿": ["{5~ *8*}", "s5"]
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

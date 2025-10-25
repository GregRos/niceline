import { shape } from "../../defs/namespace/shape"

export default shape({
    computer: {
        "🖧": [null, "network"],
        "🖨": [null, "printer"],
        "🖩": [null, "calculator"],
        "🖳": [null, "pc", "PC"],
        "🖵": [null, "screen"],
        "🖶": [null, "printer"],
        "🖷": [null, "fax"],
        input: {
            "🖰": [null, "mouse"],
            "🖦": [null, "kbm", "KBM"]
        },
        media: {
            document: {
                "🖹": [null, "text"],
                "🖺": [null, "rich"],
                "🖻": [null, "picture"]
            },
            cd: {
                "🖸": [null, "cd"]
            },
            floppy: {
                "🖫": [null, "white"],
                "🖪": [null, "black"],
                "🖭": [null, "tape"]
            }
        },
        // TODO: https://www.compart.com/en/unicode/block/U+1F300
        mouse: {
            "🖱": [null, "black"]
        }
    },
    tech: {
        "⌨": [null, "keyboard"],
        Ω: [null, "ohm"],
        "°": [null, "deg", "degree"],
        "⌱": [null, "origin"],
        "⍾": [null, "bell"],
        "⎁": [null, "completion"],
        "⏚": [null, "earth"],
        "⎈": [null, "helm"],
        "⎌": [null, "undo"],
        "⎔": [null, "function"],
        "⎙": [null, "print"],
        "⎚": [null, "clear"],
        "⏍": [null, "sqft"],
        "⎗": [null, "page:previous"],
        "⎘": [null, "page:next"],
        "⎆": [null, "enter"],
        "⎃": [null, "emphasis"],
        "⏿": [null, "observer"],
        "⮓": [null, "newline:right"],
        "⯐": [null, "position"],
        "⮒": [null, "newline:left"],
        "⌀": [null, "diameter", "diam"],
        "⏲": [null, "timer"],
        "℃": [null, "celsius"],
        "℉": [null, "fahrenheit"],
        K: [null, "kelvin"],
        Å: [null, "angstrom"],
        "✇": [null, "tape"],
        "‰": ["{o/oo}", "percent:2", "per:thousand", "permille"],
        "‱": ["{o/ooo}", "percent:4", "per:myriad", "permyriad"],
        media: {
            "🆜": [null, "2nd-screen", "2ndscr"],
            "🆛": [null, "3d", "3D"],
            "🆝": [null, "2k", "2K"],
            "🆞": [null, "4k", "4K"],
            "🆟": [null, "8k", "8K"],
            "🆠": [null, "5.1"],
            "🆡": [null, "7.1"],
            "🆢": [null, "22.2"],
            "🆣": [null, "60p", "60P"],
            "🆤": [null, "120p", "120P"],
            "🆦": [null, "hc", "HC"],
            "🅌": [null, "sd", "SD"],
            "🆧": [null, "hdr", "HDR"],
            "🆨": [null, "hi-res", "Hi-res"],
            "🆩": [null, "lossless", "Lossless"],
            "🆪": [null, "SHV"],
            "🆫": [null, "uhd", "UHD"],
            "🆬": [null, "vod", "VOD"],
            "🅎": [null, "ppv", "PPV"],
            "🄭": [null, "cd", "CD"],
            "🅍": [null, "ss", "SS", "supersurround"],
            "🅭": ["{(cc)}", "closed:caption", "cc"],
            "🆐": [null, "dj", "DJ"]
        },
        control: {
            power: {
                "⏼": ["{(|)}", ""],
                "⏻": ["{|)}", "on:off"],
                "⏽": ["{(|}", "on"],
                "⏾": [null, "sleep"]
            },
            media: {
                "⏯": [null, "play:pause"],
                "⏮": [null, "previous", "prev"],
                "⏭": [null, "next"],
                "⏺": [null, "record"],
                "⏹": [null, "stop"],
                "⏏": [null, "eject"]
            },
            volume: {
                "🕨": [null, "mute"],
                "🕩": [null, "low"],
                "🕪": [null, "high"]
            },
            horn: {
                "🕫": [null, "off"],
                "🕬": [null, "low"]
            }
        },
        electric: {
            "⏧": [null, "intersection"],
            "⌁": [null, "arrow"],
            "⌂": [null, "house"],
            "⏛": [null, "fuse"],
            "⏚": [null, "ground"],
            "⏦": [null, "ac"],
            "⎓": [null, "dc"]
        },
        // namespace("actions", []) removed (empty)
        actions: {
            "⏎": [null, "return"],
            "⇧": [null, "shift"],
            "🄰": [null, "capslock"],
            "⇪": [null, "capslock:bb"],
            "⌫": [null, "backspace", "delete:left"],
            "⌦": [null, "delete:right"],
            "⭾": [null, "tab"],
            mac: {
                "⌘": [null, "mac:cmd"],
                "⌥": [null, "mac:option"]
            }
        },
        "⏱": [null, "stopwatch"],
        recycle: {
            "♺": [null, ""],
            "♼": [null, "paper"],
            "♽": [null, "paper:partial"],
            plastic: {
                "♳": [null, "", "1"],
                "♴": [null, "2"],
                "♵": [null, "3"],
                "♶": [null, "4"],
                "♷": [null, "5"],
                "♸": [null, "6"],
                "♹": [null, "7"]
            }
        }
    }
})

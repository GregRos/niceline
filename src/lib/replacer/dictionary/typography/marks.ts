import { shape } from "../../defs/namespace/shape"

export default shape({
    mark: {
        "©": ["{(c)}", "copyright", "copy", "c"],
        "®": ["{(r)}", "r", "R", "registered"],
        "™": ["{(tm)}", "tm", "TM", "trade"],
        "℠": ["{(sm)}", "sm", "SM", "service"],
        "℗": ["{(p)}", "p", "P", "record", "phonogram"],
        "℡": [null, "tel", "Tel"],
        "℮": [null, "estimated", "est"],
        "№": ["{No}", "number", "no"],
        "℀": ["{a/c}", "account"],
        "🄯": ["{(CL)}", "copyleft", "cl"],
        "🅮": ["{!(C)}", "nc", "NC", "pd", "PD"],
        "🄏": ["{!($)}", "dollar:not", "free"],
        "🅏": ["{[WC]}", "wc", "WC"]
    }
})

import { ascii, named, namespace } from "../../registered"

export const marks = namespace("mark", [
    ascii("©", "{(c)}", ["copyright", "copy", "c"]),
    ascii("®", "{(r)}", ["r", "R", "registered"]),
    ascii("™", "{(tm)}", ["tm", "TM", "trade"]),
    ascii("℠", "{(sm)}", ["sm", "SM", "service"]),
    ascii("℗", "{(p)}", ["p", "P", "record", "phonogram"]),
    named("℡", ["tel", "Tel"]),
    named("℮", ["estimated", "est"]),
    ascii("№", "{No}", ["number", "no"]),
    ascii("℀", "{a/c}", ["account"]),
    ascii("🄯", "{(CL)}", ["copyleft", "cl"]),
    ascii("🅮", "{!(C)}", ["nc", "NC", "pd", "PD"]),
    ascii("🄏", "{!($)}", ["dollar:not", "free"]),
    ascii("🅏", "{[WC]}", ["wc", "WC"])
])

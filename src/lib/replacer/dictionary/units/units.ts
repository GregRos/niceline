import { ascii, named, namespace } from "../../registered"

export const units = namespace("tech", [
    named("Ω", ["ohm"]),
    named("°", ["deg", "degree"]),
    named("℃", ["celsius"]),
    named("℉", ["fahrenheit"]),
    ascii("o/oo", "‰", ["percent:2", "per:thousand", "permille"]),
    ascii("o/ooo", "‱", ["percent:4", "per:myriad", "permyriad"])
])

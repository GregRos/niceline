import { ascii, namespace } from "../../registered"

export const units = namespace("unit", [
    ascii("ohm", "Ω", ["ohm"]),
    ascii("deg", "°", ["deg", "degree"]),
    ascii("celsius", "℃", ["celsius"]),
    ascii("fahrenheit", "℉", ["fahrenheit"]),
    ascii("percent", "%", ["percent", "percentage"]),
    ascii("percent3", "‰", ["percent3", "permille"]),
    ascii("percent4", "‱", ["percent4", "permyriad"]),
    ascii("angle", "∠", ["angle"])
])

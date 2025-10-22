import { named, namespace } from "../../registered"

export const currency2 = namespace("cur", [
    named("¤", [""]),
    named("€", ["euro"]),
    named("¢", ["cent"]),
    named("£", ["pound"]),
    named("¥", ["yen"]),
    named("$", ["dollar"]),
    named("₽", ["ruble"]),
    named("₩", ["won"]),
    named("₺", ["lira"]),
    named("₹", ["rupee"]),
    named("₪", ["shekel"]),
    named("₱", ["peso"]),
    named("₣", ["franc"]),
    named("ƒ", ["florin"]),
    named("ℳ", ["mark"]),
    named("฿", ["baht"]),
    named("₦", ["naira"]),
    named("₿", ["bitcoin"])
])

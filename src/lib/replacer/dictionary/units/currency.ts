import { ascii, namespace } from "../../registered"

export const currency2 = namespace("cur", [
    ascii("cur", "¤", [""]),
    ascii("euro", "€", ["euro"]),
    ascii("cent", "¢", ["cent"]),
    ascii("pound", "£", ["pound"]),
    ascii("yen", "¥", ["yen"]),
    ascii("dollar", "$", ["dollar"]),
    ascii("ruble", "₽", ["ruble"]),
    ascii("won", "₩", ["won"]),
    ascii("lira", "₺", ["lira"]),
    ascii("rupee", "₹", ["rupee"]),
    ascii("shekel", "₪", ["shekel"]),
    ascii("peso", "₱", ["peso"]),
    ascii("franc", "₣", ["franc"]),
    ascii("florin", "ƒ", ["florin"]),
    ascii("mark", "ℳ", ["mark"]),
    ascii("baht", "฿", ["baht"]),
    ascii("naira", "₦", ["naira"]),
    ascii("bitcoin", "₿", ["bitcoin"])
])

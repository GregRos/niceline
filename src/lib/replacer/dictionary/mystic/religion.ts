import { named, namespace } from "../../registered"

export const religion = namespace("religion", [
    named("✡", ["star-of-david", "magen-david"]),
    named("☪", ["islam", "star-and-crescent"]),
    named("☸", ["buddhism", "dharmachakra"]),
    named("🕉", ["hinduism", "aum", "om"]),
    named("☯", ["taoism", "yin-yang"]),
    named("⛩", ["shinto", "torii"]),
    named("☸", ["jainism", "dharmachakra"]),
    named("☬", ["sikhism", "khanda"]),
    named("☫", ["farsi"]),
    named("☯", ["yin-yang", "taijitu"]),
    namespace("cross", [
        named("✞", [""]),
        named("☦", ["orthodox"]),
        named("☨", ["lorraine"]),
        named("☩", ["jerusalem"])
    ]),
    named("☥", ["ankh"]),

    named("ﷲ", ["allah"])
])

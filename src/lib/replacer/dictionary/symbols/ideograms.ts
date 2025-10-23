import { named, namespace } from "../../registered"

export const ideograms = namespace("idea", [
    named("♂", ["male", "masc"]),
    named("♀", ["female", "femme"]),
    named("⚲", ["nonbinary", "nb", "enby", "neuter", "neutral"]),
    named("⚥", ["intersex", "intersex"]),
    named("⚤", ["mf", "fm", "het", "heterosexual"]),
    named("⚣", ["mm", "m", "homosexual", "hom"]),
    named("⚢", ["ff", "f", "lesbian", "les"]),

    named("⚭", ["marriage"]),
    named("⚮", ["divorce"]),
    named("⚯", ["partnership"]),

    named("☮", ["peace"]),
    named("☢", ["radioactive"]),
    named("☣", ["biohazard"]),
    named("⚕", ["caduceus", "medical"]),
    named("☠", ["skull", "death", "poison"]),

    // ideological
    named("Ⓐ", ["anarchy", "anarchism"]),
    named("☲", ["confucianism", "trigram-li"]),
    named("☭", ["communism", "hammer-and-sickle"]),

    named("⚜", ["fleur-de-lis", "fleur"]),
    named("☘", ["shamrock", "clover"]),
    named("☄", ["comet"]),
    named("☇", ["lightning"]),
    named("☈", ["thunder"]),
    named("♺", ["recycle"]),
    named("⚑", ["flag", "flag:black"]),
    named("⚐", ["flag", "flag:white"]),
    named("⚔", ["swords", "battle", "fencing"]),
    named("⛰", ["mountain"]),
    named("⚖", ["scales", "justice", "law"]),
    named("⚗", ["alchemy", "alembic"]),
    named("⚙", ["gear", "cog"]),
    named("⚛", ["atom", "science"]),
    named("⚒", ["hammer-and-pick"]),
    named("⧗", ["hourglass:black"]),
    named("⧖", ["hourglass:white"]),
    named("☎", ["phone", "telephone"]),
    named("☀", ["sun"]),
    named("⚚", ["hermes", "trade", "negotiation"]),

    named("☁", ["cloud"]),
    named("☂", ["umbrella", "rain"]),
    named("☃", ["snowman", "snow"]),
    named("⛓", ["chains"]),
    named("⯑", ["uncertainty"]),
    named("♨", ["hot:spring", "hotspring"]),
    named("⛆", ["rain"]),
    named("⛏", ["pick"]),
    named("⛱", ["umbrella"]),
    named("⛴", ["ferry"]),
    named("⛫", ["castle"]),
    named("⛼", ["headstone"]),
    named("🛏", ["bed"]),
    named("🛨", ["plane"]),
    named("🛰", ["satellite"]),
    named("🛱", ["firetruck"]),
    named("🛠", ["hammer:wrench", "tools"]),
    named("🛣", ["motorway", "road"]),
    named("🛎", ["bellhop"]),
    named("✉", ["envelope", "mail"]),
    namespace("scissors", [
        named("✂", ["black", ""]),
        named("✀", ["safety"]),
        named("✄", ["white"])
    ]),
    namespace("writing", [
        named("✒", ["fountain", "pen"]),
        namespace("pencil", [
            named("✏", [""]),
            named("🖉", ["tilted"]),
            named("z", "")
        ])
    ]),
    namespace("florette", [
        named("✿", ["black", "b"]),
        named("❀", ["white", "w"]),
        named("❁", ["8"])
    ]),
    namespace("snowflake", [named("❄", ["6", ""]), named("❅", ["3"])]),
    namespace("sparkle", [named("❇", [""]), named("❈", ["big"])]),
    named("⚘", ["flower:b"]),
    namespace("key", [named("⚿", ["squared"])])
])

export const musicSimple = namespace("notes", [
    named("♭", ["flat"]),
    named("♯", ["sharp"]),
    named("♮", ["natural"]),
    named("♩", ["quarter"]),
    named("♪", ["eighth"]),
    named("♫", ["eighth:2"]),
    named("♬", ["sixteenth:2"])
])

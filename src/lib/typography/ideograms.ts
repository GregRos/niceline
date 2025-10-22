import { named, namespace } from "../replacer/registered"

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
    named("⚑", ["flag"]),
    named("⚐", ["flag:wave"]),
    named("⚔", ["swords", "battle", "fencing"]),
    named("⛰", ["mountain"]),
    named("⚖", ["scales", "justice"]),
    named("⚗", ["alchemy", "alembic"]),
    named("⚙", ["gear", "cog"]),
    named("⚛", ["atom", "science"]),
    named("⚒", ["hammer-and-pick"]),
    named("⌛", ["hourglass", "time"]),
    named("☎", ["phone", "telephone"]),
    named("☀", ["sun"]),

    named("☁", ["cloud"]),
    named("☂", ["umbrella", "rain"]),
    named("☃", ["snowman", "snow"]),
    named("⛓", ["chains"]),
    named("⯑", ["uncertainty"])
])

export class LigatureTable<const T extends Record<keyof T, string>> {
    constructor(
        readonly name: string,
        readonly map: T
    ) {}

    union<U extends Record<keyof U, string>>(
        other: LigatureTable<U>
    ): LigatureTable<T & U> {
        return new LigatureTable(`${this.name} & ${other.name}`, {
            ...this.map,
            ...other.map
        })
    }

    get(key: keyof T): string {
        return this.map[key]
    }
}

export interface Category<Replacers extends Replacer[]> {
    caption: string
    replacers: Replacers
}

export type ReplaceStr<S extends string> =
    S extends `${infer Replace} | ${infer Caption} ([ ${infer With} ])`
        ? [Replace, Caption, With]
        : never

export type TA = ReplaceStr<"<-- | Left Arrow ([ ← ])">

export function replacer<
    Caption extends string,
    Input extends string,
    Output extends string
>(
    caption: Caption,
    input: Input,
    output: Output
): {
    [inp in Input]: `${Caption} ([ ${Output} ])`
} {
    return {
        [input as Input]: null!
    } as any
}

export function category<
    Replacers extends {
        [x: string]: readonly [string, string]
    }[]
>(caption: string, ...replacers: Replacers) {
    return {
        ...replacers
    }
}

export const replacers = [
    category(
        "Arrows",
        replacer("Left Arrow", "<--", "←"),
        replacer("Left Wavey Arrow", "<~~", "↜"),
        replacer("Left Double Arrow", "<==", "⇐"),
        replacer("Left Long Arrow", "<---", "⟵"),
        replacer("Left Long Double Arrow", "<===", "⟸"),
        replacer("Left Tailed Arrow", "<--|", "↤"),
        replacer("Left Long Tailed Arrow", "<---|", "⟻"),
        replacer("Left Barb Arrow", "<<--", "🡰"),
        replacer("Left Heavy Barb Arrow", "<<--", "🡸"),
        replacer("Left Heavy-2 Barb Arrow", "<<<--", "🢀"),
        replacer("Left Triangle Arrow", "<|--", "🠈"),
        replacer("Left Thick Triangle Arrow", "<<|--", "🡄"),
        replacer("Left Two-Stacked Arrows", "<--<--", "⇇"),
        replacer("Left Three-Stacked Arrows", "<--<--<--", "⬱"),
        replacer("Left Arrowhead", "<|", "⮜"),
        replacer("Left Hooked Arrow", "<-*", "↩"),
        replacer("Counter-Clockwise Circle Arrow", "@^", "↺"),
        replacer("Left Tailed Double Arrow", "<=|", "⤆"),
        replacer("Left Zigzag Arrow", "<~-", "⇜"),
        replacer("Left Long Zigzag Arrow", "<~~-", "⬳")
    )
]
export const Arrows = new LigatureTable("Arrows", {
    "<--": "←",
    "<~~": "↜",
    "<~~>": "↭",
    "~~>": "↝",
    "<---": "⟵", // Long left arrow
    "<--<--": "⇇",
    "--->": "⟶", // Long right arrow
    "-->": "→",
    "-->-->": "⇉",
    "<-->": "↔",
    "<--->": "⟷", // Long left-right arrow
    "--><--": "⇄",
    "<==": "⇐",
    "<===": "⟸", // Long left double arrow
    "==>": "⇒",
    "===>": "⟹", // Long right double arrow
    "<==>": "⇔",
    "<===>": "⟺", // Long left-right double arrow
    "<--|": "↤",
    "<---|": "⟻", // Long left arrow with tail
    "|-->": "↦",
    "|--->": "⟼", // Long right arrow with tail

    "-->>": "🡺",
    "<<--": "🡸",
    "|^|": "↑",
    "|v|": "↓",
    "|^v|": "↕",
    "|v^|": "↕",
    "*->": "↪",
    "<-*": "↩"
})

export const NumericRelations = new LigatureTable("NumericRelations", {
    ">=": "≥",
    "=>": "≥",
    "<=": "≤",
    "=<": "≤",
    "=/=": "≠",
    ">>": "≫",
    "<<": "≪",
    ">>>": "⋙",
    "<<<": "⋘",
    "~=": "≅",
    "=~": "≅",
    "~~": "≈"
})

export const Operators = new LigatureTable("Operators", {
    "+-": "±",
    "-+": "∓",
    "-:": "÷",
    ":-": "÷",
    "(+)": "⊕",
    "(-)": "⊖"
})

export const Typography = new LigatureTable("Typography", {
    "--": "–",
    "---": "—",
    "...": "…",
    ".-.": "⋯",
    ";": "\u2006", // 6-per-em space
    ";;": "\u2000", // en space
    ";;;": "\u2003", // em space
    ",": "\u200D", // zero-width joiner
    ",,": "\u00A0", // non-breaking space
    "o=o": "∞",
    "(/)": "∅",
    "(c)": "©",
    "(r)": "®",
    "(tm)": "™",
    "(S)": "§",
    "(P)": "¶",
    "*+": "†",
    "*++": "‡"
})

export const Fractions = new LigatureTable("Fractions", {
    "{1/2}": "½",
    "{1/3}": "⅓",
    "{2/3}": "⅔",
    "{1/4}": "¼",
    "{2/4}": "½",
    "{3/4}": "¾",
    "{1/5}": "⅕",
    "{2/5}": "⅖",
    "{3/5}": "⅗",
    "{4/5}": "⅘",
    "{1/6}": "⅙",
    "{2/6}": "⅓",
    "{3/6}": "½",
    "{4/6}": "⅔",
    "{5/6}": "⅚"
})

export const Marks = new LigatureTable("Marks", {
    "[ ]": "⬚",
    "[x]": "⮽",
    "[v]": "🗹",
    "~x~": "✘",
    "~v~": "✔"
})

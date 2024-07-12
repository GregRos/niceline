// prettier-ignore
export interface Replacer<
    Input extends string = string,
    Output extends string = string,
    Caption extends string = string
> {
    readonly caption: Caption
    readonly input: Input
    readonly output: Output
}

export type stringifyReplacer<R extends Replacer> =
    `${R["input"]} | [ ${R["output"]} | ${R["caption"]} `

export type parseReplacer<R extends string> =
    R extends `${infer Input} | ([ ${infer Output} ]) | ${infer Caption}`
        ? {
              readonly input: Input
              readonly caption: Caption
              readonly output: Output
          }
        : never

export function replacers<
    const Args extends {
        [x in keyof Args]: [output: string, caption: string]
    }
>(xs: Args): Args {
    return Object.entries(xs).map(([input, args]: any) => ({
        input,
        output: args[0],
        caption: args[1]
    })) as any
}
/*
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
*/


export const arrows = replacers({
    // CHAPTER: LEFT ARROWS
    "<--":        ["←",     "Left Arrow"],
    "<---":       ["⟵",     "Left Long Arrow"],
    "!<--":       ["↚",     "Left Slashed Arrow"],
    "<-|-":       ["⇷",     "Left Barred Arrow"],
    "<~~":        ["↜",     "Left Wavey Arrow"],
    "<~-":        ["⇜",     "Left Zigzag Arrow"],
    "<==":        ["⇐",     "Left Double Arrow"],
    "<=/=":       ["⇍",     "Left Slashed Double Arrow"],
    "<===":       ["⟸",      "Left Long Double Arrow"],
    "<--|":       ["↤",     "Left Tailed Arrow"],
    "<---|":      ["⟻",     "Left Long Tailed Arrow"],
    "<=|":        ["⤆",     "Left Tailed Double Arrow"],
    "<<--":       ["🢀",     "Left Heavy Barb Arrow"],
    "<|--":       ["🠈",     "Left Triangle Arrow"],
    "<<|--":      ["🡄",     "Left Thick Triangle Arrow"],
    "<--<--":     ["⇇",     "Left Two-Stacked Arrows"],
    "<--<--<--":  ["⬱",     "Left Three-Stacked Arrows"],
    "<:<":         ["⮜",     "Left Arrowhead"],
    "<--*":        ["↩",     "Left Hooked Arrow"],
    "<-'":        ["↲",     "Down-Left Turn Arrow"],
    "<-.":        ["↰",     "Up-Left Turn Arrow"],
    "<-&":        ["↫",     "Left Loop Arrow"],
    "<::" :      ["🠴",    "Left Caret Arrow"],
    "<|=<":      ["🢘", "Left Triangle Base Arrow"],
    "<--<":      ["↢", "Left Fishbone Arrow"],
    
    // CHAPTER: RIGHT ARROWS
    "-->":        ["→",     "Right Arrow"],
    "!-->":       ["↛",     "Right Slashed Arrow"],
    "-|->":       ["⇸",     "Right Barred Arrow"],
    "--->":       ["⟶",     "Right Long Arrow"],
    "~~>":        ["↝",     "Right Wavey Arrow"],
    "-~>":        ["⇝",     "Right Zigzag Arrow"],
    "==>":        ["⇒",     "Right Double Arrow"],
    "=/=>":       ["⇏",     "Right Slashed Double Arrow"],
    "===>":       ["⟹",     "Right Long Double Arrow"],
    "|-->":       ["↦",     "Right Tailed Arrow"],
    "|--->":      ["⟼",     "Right Long Tailed Arrow"],
    "|==>":       ["⤇",     "Right Tailed Double Arrow"],
    "|===>":      ["⟾",     "Right Long Tailed Double Arrow"],
    "-->>":       ["🡺",     "Right Heavy Arrow"],
    "--|>":       ["🠊",     "Right Triangle Arrow"],
    "--|>>":      ["🡆",     "Right Heavy Triangle Arrow"],
    "-->-->":     ["⇉",     "Right Two-Stacked Arrow"],
    "-->-->-->":  ["⇶",     "Right Three-Stacked Arrow"],
    ">:>":         ["⮞",     "Right Arrowhead"],
    "*->":        ["↪",      "Right Hooked Arrow"],
    "::>":        ["🠶",     "Right Caret Arrow"],
    ">=|>":       ["🢚",     "Right Triangle Base Arrow"],
    ">-->":       ["↣",     "Right Fishbone Arrow"],
    // UP ARROWS
    "^-->^":             ["↑",       "Up Arrow"],
    "^==>^":             ["⇑",       "Up Double Arrow"],
    "^-->>^":            ["🢁",      "Up Heavy Arrow"],
    "^--|>^":            ["🠉",      "Up Triangular Arrow"],
    "^--|>>^":           ["🡅",      "Up Heavy Trianglular Arrow"],
    "^-->-->^":          ["⇈",      "Up 2-Stacked Arrow"],
    "^>=|>^":            ["🢙",      "Up Triangle Base Arrow"],
    "^::>^":             ["🠵",      "Up Caret Arrow"],
    "^>:>^":             ["⮝",      "Up Arrowhead"],
    // DOWN ARROWS
    ".-->.":             ["↓",       "Down Arrow"],
    ".==>.":             ["⇓",       "Down Double Arrow"],
    ".-->>.":            ["🢃",      "Down Heavy Arrow"],
    ".--|>.":            ["🠋",      "Down Triangular Arrow"],
    ".--|>>.":           ["🡇",      "Down Heavy Trianglular Arrow"],
    ".-->-->.":          ["⇊",      "Down 2-Stacked Arrow"],
    ".>=|>.":            ["🢛",      "Down Triangle Base Arrow"],
    ".::>.":             ["🠷",      "Down Caret Arrow"],
    ".>:>.":             ["⮟",      "Down Arrowhead"],
    // LEFT RIGHT ARROWS    
    "<-->":        ["↔",     "Left-Right Arrow"],
    "<-/->":       ["↮",     "Left-Right Slashed Arrow"],
    "<-|->":       ["⇹",     "Left-Right Barred Arrow"],
    "<--->":       ["⟷",     "Left-Right Long Arrow"],
    "--><--":      ["⇄",     "Right-Left Arrow"],
    "<==>":        ["⇔",     "Left-Right Double Arrow"],
    "<===>":       ["⟺",     "Left-Right Long Double Arrow"],
    "<=/=>":       ["⇎",     "Left-Right Slashed Double Arrow"],
    "<=|=>":       ["⤄",     "Left-Right Barred Double Arrow"],

    // SPECIAL ARROWS
    "^@":         ["⭮",   "Clockwise Circle Arrow"],
    "@^":         ["⭯",   "Counter-Clockwise Circle Arrow"],
    
    // RELATIONS
    ">=":         ["≥",   "Greater Or Equal"],
    "<=":         ["≤",   "Less Or Equal"],
    "!=":         ["≠",   "Not Equal"],
    "===":         ["≡",   "3-Equal"],
    "!==":        ["≢",   "Not 3-Equal"],
    
    // APPROX
    "!~":         ["≁",   "Not Tilde"],
    "~~":         ["≈",   "2-Tilde"],
    "~~~":         ["≋",   "Almost Equal"],
    "!~~":        ["≉",   "Not 2-Tilde"],
    "=~":         ["≃",   "Asymptotically Equal"],
    "==~":         ["≅",   "Almost Equal To"],
    "!~~~":        ["≇",   "Not Almost Equal To"],

    // MUCH
    ">>":         ["≫",   "Much Greater"],
    ">>>":         ["⋙",   "Much Much Greater"],
    "<<":         ["≪",   "Much Less"],
    "<<<":         ["⋘",   "Much Much Less"],

    // Operators
    "+-": ["±", "Plus-Minus Operator"],
    "-+": ["∓", "Minus-Plus Operator"],
    "><": ["⨯", "Cross Operator"],
    ">.<": ["∙", "Dot Operator"],
    "|/": ["√", "Square Root"],
    "(+)": ["⊕", "Circle Plus"],
    "(-)": ["⊖", "Circle Minus"],
    ":-:": ["÷", "Division Operator"],
    // MATHEMATICAL IDENTITIES
    "1//0":         ["∞", "Infinity"],
    "!()":         ["∅", "Empty Set"],
    // TYPOGRAPHY DASHES
    "--":         ["–",   "En Dash"],
    "---":        ["—",   "Em Dash"],
    "&-&":        ["‑", "No-Break Hyphen"],
    // TYPOGRAPHY OTHER
    "..." :       ["…",   "Ellipsis"],
    "^...^":      ["⋮",   "Vertical Ellipsis"],
    "-...-":      ["⋯",   "Midline Horizontal Ellipsis"], 
    // SPACING
    [`|,|`]:       ["​", "Zero-Width Space"],
    [`|'|`]:         [" ", "⅛-Em Space"],
    [`|"|`]:         [" ", "⅙-Em Space"],
    [`|''|`]:       [" ", "¼-Em Space"],
    [`|""|`]:        [" ", "⅓-Em Space"],
    [`|'''|`]:       [" ", "½-Em Space"],
    [`|"""|`]:       [" ", "Em Space"],
    [`>,<`]:         ["⁠", "Word Joiner"],
    [`>'<`] :         [" ", "Narrow No-Break Space"],
    [`>"<`]:        [" ", "No-Break Space"],
 
    // TYPOGRAPHICAL SYMBOLS
    "(c)": ["©", "Copyright Symbol"],
    "(r)": ["®", "Registered Trademark Symbol"],
    "(tm)": ["™", "Trademark Symbol"],
    "(sm)": ["℠", "Service Mark Symbol"],
    "(S)": ["§", "Section Symbol"],
    "(P)": ["¶", "Pilcrow Symbol"],
    "*+": ["†", "Dagger"],
    "*++": ["‡", "Double Dagger"],
    "^o": ["°", "Degree Symbol"],
    "$c$": ["¢", "Cent Symbol"],
    "$e$": ["€", "Euro Symbol"],
    "$p$": ["£", "Pound Symbol"],
    "$Y$": ["¥", "Yen Symbol"],

    // Fractions
    "1//2": ["½", "Fraction 1/2"],
    "1//3": ["⅓", "Fraction 1/3"],
    "2//3": ["⅔", "Fraction 2/3"],
    "1//4": ["¼", "Fraction 1/4"],
    "3//4": ["¾", "Fraction 3/4"],
    "1//5": ["⅕", "Fraction 1/5"],
    "2//5": ["⅖", "Fraction 2/5"],
    "3//5": ["⅗", "Fraction 3/5"],
    "4//5": ["⅘", "Fraction 4/5"],
    "1//6": ["⅙", "Fraction 1/6"],
    "5//6": ["⅚", "Fraction 5/6"],
    // SUPERSCRIPTS

    

    
    

    


})

export const specialArrows = replacers({
    

})

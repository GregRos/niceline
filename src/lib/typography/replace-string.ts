import type { Arrows } from "./baked-ligatures"

// prettier-ignore
export interface Replacer<
    Input extends string = string,
    Output extends string = string,
    Caption extends string = string,
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
        [x in keyof Args]: [output: string, caption?: string, name?: string]
    }
>(xs: Args): Args {
    return Object.entries(xs).map(([input, args, name]: any) => ({
        input,
        output: args[0],
        caption: args[1],
        name: name
    })) as any
}



export const arrows = replacers({
    // CHAPTER: LEFT ARROWS
    "<--":         ["←",     "Arrow Left",                            "arrow:left"],
    "<-/-":        ["↚",     "Arrow Slashed Left",                    "arrow:slashed:left"],
    "<~~":         ["↜",     "Arrow Wavey Left",                      "arrow:wavey:left"],
    "<~-":         ["⇜",    "Arrow Zigzag Left",                      "arrow:zigzag:left"],
    "<-=":         ["⇐",    "Arrow BB Left",                      "arrow:bb:left"],
    "<-/=":        ["⇍",    "Arrow BB Slashed Left",              "arrow:bb:slashed:left"],
    "<-|":        ["↤",    "Arrow Tailed Left",                      "arrow:tailed:left"],
    "<(-":        ["🢀",    "Arrow Big Left",                         "arrow:big:left"],
    "<|-":        ["🠈",    "Arrow Triangle Left",                    "arrow:triangle:left"],
    "<||-":       ["🡄",    "Arrow Big Triangle Left",                "arrow:big:triangle:left"],
    "<-<-":       ["⇇",    "Arrow 2-Stacked Left",                   "arrow:2-stacked:left"],
    "<-<-<-":     ["⬱",    "Arrow Three-Stacked Left",               "arrow:3-stacked:left"],
    "<:<":         ["⮜",    "Arrowhead Left",                         "arrowhead:left"],
    "<-*":        ["↩",    "Arrow Hooked Left",                      "arrow:hooked:left"],
    "<-'":         ["↲",    "Arrow Turn Down-Left",                   "arrow:turn:90:down-left"],
    "<-.":         ["↰",    "Arrow Turn Up-Left",                     "arrow:turn:90:up-left"],
    "<-&":         ["↫",    "Arrow Loop Left",                        "arrow:loop:left"],
    "<::":         ["🠴",    "Arrow Caret Left",                       "arrow:caret:left"],
    "<-<":        ["↢",    "Arrow Fishbone Left",                    "arrow:fishbone:left"],
    
    "-->":            ["→",    "Arrow Right",                         "arrow:right"],
    "-/->":           ["↛",    "Arrow Slashed Right",                 "arrow:slashed:right"],
    "~~>":            ["↝",    "Arrow Wavey Right",                   "arrow:wavey:right"],
    "-~>":            ["⇝",    "Arrow Zigzag Right",                  "arrow:zigzag:right"],
    "=->":            ["⇒",    "Arrow Bb Right",                  "arrow:bb:right"],
    "=/->":           ["⇏",    "Arrow Bb Slashed Right",          "arrow:bb:slashed:right"],
    "|->":           ["↦",    "Arrow Tailed Right",                  "arrow:tailed:right"],
    "-)>":           ["🡺",    "Arrow Big Right",                   "arrow:big:right"],
    "-|>":           ["🠊",    "Arrow Triangle Right",                "arrow:triangle:right"],
    "-||>":          ["🡆",    "Arrow Big Triangle Right",          "arrow:big:triangle:right"],
    "->->":         ["⇉",    "Arrow 2-Stacked Right",             "arrow:2-stacked:right"],
    ">:>":            ["⮞",    "Arrowhead Right",                     "arrowhead:right"],
    "*->":            ["↪",    "Arrow Hooked Right",                  "arrow:hooked:right"],
    "::>":            ["🠶",    "Arrow Caret Right",                   "arrow:caret:right"],
    ">->":           ["↣",    "Arrow Fishbone Right",                "arrow:fishbone:right"],
    // UP ARROWS
    "^-->^":          ["↑",    "Arrow Up",                            "arrow:up"],
    "^=->^":          ["⇑",    "Arrow Bb Up",                     "arrow:bb:up"],
    "^->>^":         ["🢁",   "Arrow Big Up",                      "arrow:big:up"],
    "^-|>^":         ["🠉",   "Arrow Triangular Up",                 "arrow:triangular:up"],
    "^-||>^":        ["🡅",   "Arrow Big Triangular Up",           "arrow:big:triangular:up"],
    "^->->^":       ["⇈",   "Arrow 2-Stacked Up",                "arrow:2-stacked:up"],
    "^::>^":          ["🠵",   "Arrow Caret Up",                      "arrow:caret:up"],
    "^>:>^":          ["⮝",   "Arrowhead Up",                        "arrowhead:up"],
    // DOWN ARROWS
    ".-->.":          ["↓",    "Arrow Down",                          "arrow:down"],
    ".=->.":          ["⇓",    "Arrow Bb Down",                   "arrow:bb:down"],
    ".->>.":         ["🢃",   "Arrow Big Down",                    "arrow:big:down"],
    ".-|>.":         ["🠋",   "Arrow Triangular Down",               "arrow:triangular:down"],
    ".-||>.":        ["🡇",   "Arrow Big Triangular Down",         "arrow:big:triangular:down"],
    ".->->.":       ["⇊",   "Arrow 2-Stacked Down",                "arrow:2stacked:down"],
    ".::>.":          ["🠷",   "Arrow Caret Down",                    "arrow:caret:down"],
    ".>:>.":          ["⮟",   "Arrowhead Down",                      "arrowhead:down"],
    // LEFT RIGHT ARROWS    
    "<->":           ["↔",    "Arrow Left-Right",                     "arrow:left-right"],
    "<-/->":          ["↮",    "Arrow Slashed Left-Right",            "arrow:slashed:left-right"],
    "-><-":         ["⇄",    "Arrow Right+Left",                    "arrow:left+right"],
    "<-=->":           ["⇔",    "Arrow Bb Left-Right",             "arrow:bb:left-right"],
    "<-":          ["⇎",    "Arrow Bb Slashed Left-Right",     "arrow:bb:slashed:left-right"],

    // SPECIAL ARROWS
    "^@":         ["⭮",   "Arrow Circular CW",                  "arrow:circular:cw"],
    "@^":         ["⭯",   "Arrow Circular CCW",          "arrow:circular:ccw"],
    
    // RELS
    ">=":         ["≥",   "Rel Equal/Greater", "rel:geq"],
    "<=":         ["≤",   "Rel Equal/Less", "rel:leq"],
    "=/=":         ["≠",   "Rel Not Equal", "rel:eq:not"],
    "===":        ["≡",   "Rel 3-Equal", "rel:3-equal"],
    "==/==":        ["≢",   "Rel Not 3-Equal", "rel:not:3-equal"],
    
    // APPROX
    "~/~":         ["≁",   "Rel Tilde Not",             "rel:tilde:not"],
    "~~":         ["≈",   "Rel 2-Tilde",               "rel:2-tilde"],
    "~~/~~":        ["≉",   "Rel 2-Tilde Not",           "rel:2-tilde:not"],
    "=~":         ["≃",   "Rel Tilde-Line",            "rel:tilde-line"],
    "==~":        ["≅",   "Rel Tilde-Equal",           "rel:tilde-equal"],
    // MUCH
    ">>":         ["≫",   "Rel Greater 2",          "rel:gtr:2"],
    ">>>":        ["⋙",   "Rel Greater 3",    "rel:gtr:3"],
    "<<":         ["≪",   "Rel Less 2",             "rel:ls:2"],
    "<<<":        ["⋘",   "Rel Greater 3",       "rel:ls:3"],
    // Ops
    "+-":          ["±",   "Op Plus-Minus",          "op:plus-minus"],
    "-+":          ["∓",   "Op Minus-Plus",          "op:minus-plus"],
    "{x}":         ["⨉",   "Op Times",               "op:times"],
    "{.}":         ["∙",   "Op Dot",                 "op:dot"],
    "|/":          ["√",   "Op Square Root",         "op:root"],
    "|3/":         ["∛",   "Op Cube Root",           "op:root:3"],
    "|4/":         ["∜",   "Op Fourth Root",         "op:root:4"],
    "(+)":         ["⊕",   "Op Circle Plus",         "op:circle:plus"],
    "(-)":         ["⊖",   "Op Circle Minus",        "op:circle:minus"],
    ":-:":         ["÷",   "Op Division",            "op:division"],
    "{sum}":       ["∑"  ,   "Op Sum",                 "op:sum"],
    "{prod}":      ["∏",   "Op Product",             "op:product"],
    "{int}":       ["∫",   "Op Int",                 "op:int"],
    "{del}":       ["∂",   "Op Partial",             "op:partial"],
    "{nabla}":      ["∇",   "Op Gradient",            "op:nabla"],
    "{lap}":       ["∆",   "Op Laplacian",           "op:laplacian"],
    "{ring}" :      ["∘",   "Op Ring",                "op:ring"],
    "{asterisk}":   ["∗",   "Op Asterisk",            "op:asterisk"],
    "{bullet}":     ["•",   "Op Bullet",              "op:bullet"],
    "{diamond}":    ["⋄",   "Op Diamond",             "op:diamond"],
    "{star}":       ["⋆",   "Op Star",                "op:star"],
    "{set:minus}":   ["∖",   "Op Set Minus",           "op:set:minus"],
    "{set:and}":     ["∩",   "Op Set And",             "op:set:and"],
    "{set:or}":      ["∪",   "Op Set Or",              "op:set:or"],
    "{set:and:big}":     ["⋂",   "Op Set And",             "op:set:and:big"],
    "{set:or:big}":      ["⋃",   "Op Set Or",              "op:set:or:big"],
    "{and}":           ["∧",   "Op Logic And",                 "op:logic:and"],
    "{or}":            ["∨",   "Op Logic Or",                  "op:logic:or"],
    "{not}":           ["¬",   "Op Logic Not",                 "op:logic:not"],
    "{forall}":        ["∀",   "Predicate All",                 "op:predicate:all"],
    "{exists}":        ["∃",   "Predicate Exists",                 "op:predicate:exists"],
    "{infty}":        ["∞",   "Entity Infinity",                 "entity:infinity"],
    "{0}":            ["∅",   "Entity Empty Set",                 "entity:set:empty"],
    // TYPOGRAPHY DASHES
    "--":         ["–",   "Dash En", "dash:en"],
    "---":        ["—",   "Dash Em", "dash:em"],
    "&-&":        ["‑", "Dash Hyphen NB", "dash:nb:hyphen"],
    // TYPOGRAPHY OTHER
    "..." :       ["…",   "Ellipsis", "ellipsis" ],
    "^...^":      ["⋮",   "Vertical Ellipsis", "ellipsis:vertical"],
    "-...-":      ["⋯",   "Midline Ellipsis", "ellipsis:midline"], 
    // SPACING
    [`|,|`]:       ["​", "Space 0", "space:0"],
    [`|'|`]:         [" ", "Space ⅛-Em", "space:1/8"],
    [`|"|`]:         [" ", "Space ⅙-Em", "space:1/6"],
    [`|''|`]:       [" ", " Space ¼-Em", "space:1/4"],
    [`|""|`]:        [" ", "Space ⅓-Em", "space:1/3"],
    [`|'''|`]:       [" ", "Space ½-Em", "space:1/2"],
    [`|"""|`]:       [" ", "Space Em", "space:1"],
    [`>,<`]:         ["⁠", "Joiner 0", "joiner:0"],
    [`>'<`] :         [" ", "Joiner Narrow", "joiner:narrow"],
    [`>"<`]:        [" ", "Joiner Space", "joiner:space"],
 
    // TYPOGRAPHICAL SYMBOLS
    "(c)": ["©", "Symbol C", "symbol:c"],
    "(r)": ["®", "Symbol R", "symbol:r"],
    "(tm)": ["™", "Symbol TM", "symbol:tm"],
    "(sm)": ["℠", "Symbol SM", "symbol:sm"],
    "(S)": ["§", "Symbol S", "symbol:s"],
    "(P)": ["¶", "Symbol P", "symbol:p"],
    "*+": ["†", "Symbol Dagger", "symbol:dagger"],
    "*++": ["‡", "Symbol 2-Dagger", "symbol:2-dagger"],

    "{cur}": ["¤", "Currency", "currency"],
    "{euro}": ["€", "Currency Euro", "currency:euro"],
    "{cent}": ["¢", "Currency Cent", "currency:cent"],
    "{pound}": ["£", "Currency Pound", "currency:pound"],
    "{yen}": ["¥", "Currency Yen", "currency:yen"],
    "{dollar}": ["$", "Currency Dollar", "currency:dollar"],
    "{ruble}": ["₽", "Currency Ruble", "currency:ruble"],
    "{won}": ["₩", "Currency Won", "currency:won"],
    "{lira}": ["₺", "Currency Lira", "currency:lira"],
    "{rupee}": ["₹", "Currency Rupee", "currency:rupee"],
    "{shekel}": ["₪", "Currency Shekel", "currency:shekel"],
    "{peso}": ["₱", "Currency Peso", "currency:peso"],
    "{franc}": ["₣", "Currency Franc", "currency:franc"],
    "{florin}": ["ƒ", "Currency Florin", "currency:florin"],
    "{mark}": ["ℳ", "Currency Mark", "currency:mark"],
    "{baht}": ["฿", "Currency Baht", "currency:baht"],
    "{naira}": ["₦", "Currency Naira", "currency:naira"],
    "{bitcoin}": ["₿", "Currency Bitcoin", "currency:bitcoin"],
    
    "{ohm}a{'''}b 11": ["Ω", "Unit Ohm", "unit:ohm"],
    "{^D}": ["°", "Unit Degree", "unit:degree"],
    "{^C}": ["℃", "Unit Celsius", "unit:celsius"],
    "{^F}": ["℉", "Unit Fahrenheit", "unit:fahrenheit"],
    "{alpha}":    ["α",  "Greek Alpha",       "greek:alpha"],
    "{beta}":     ["β",  "Greek Beta",        "greek:beta"],
    "{gamma}":    ["γ",  "Greek Gamma",       "greek:gamma"],
    "{delta}":    ["δ",  "Greek Delta",       "greek:delta"],
    "{epsilon}":  ["ε",  "Greek Epsilon",     "greek:epsilon"],
    "{zeta}":     ["ζ",  "Greek Zeta",        "greek:zeta"],
    "{eta}":      ["η",  "Greek Eta",         "greek:eta"],
    "{theta}":    ["θ",  "Greek Theta",       "greek:theta"],
    "{iota}":     ["ι",  "Greek Iota",        "greek:iota"],
    "{kappa}":    ["κ",  "Greek Kappa",       "greek:kappa"],
    "{lambda}":   ["λ",  "Greek Lambda",      "greek:lambda"],
    "{mu}":       ["μ",  "Greek Mu",          "greek:mu"],
    "{nu}":       ["ν",  "Greek Nu",          "greek:nu"],
    "{xi}":       ["ξ",  "Greek Xi",          "greek:xi"],
    "{omicron}":  ["ο",  "Greek Omicron",     "greek:omicron"],
    "{pi}":       ["π",  "Greek Pi",          "greek:pi"],
    "{rho}":      ["ρ",  "Greek Rho",         "greek:rho"],
    "{sigma}":    ["σ",  "Greek Sigma",       "greek:sigma"],
    "{tau}":      ["τ",  "Greek Tau",         "greek:tau"],
    "{upsilon}":  ["υ",  "Greek Upsilon",     "greek:upsilon"],
    "{phi}":      ["φ",  "Greek Phi",         "greek:phi"],
    "{chi}":      ["χ",  "Greek Chi",         "greek:chi"],
    "{psi}":      ["ψ",  "Greek Psi",         "greek:psi"],
    "{omega}":    ["ω",  "Greek Omega",       "greek:omega"],

    "{ALPHA}":    ["Α",  "Greek Alpha Upper",       "greek:alpha:upper"],
    "{BETA}":     ["Β",  "Greek Beta Upper",        "greek:beta:upper"],
    "{GAMMA}":    ["Γ",  "Greek Gamma Upper",       "greek:gamma:upper"],
    "{DELTA}":    ["Δ",  "Greek Delta Upper",       "greek:delta:upper"],
    "{EPSILON}":  ["Ε",  "Greek Epsilon Upper",     "greek:epsilon:upper"],
    "{ZETA}":     ["Ζ",  "Greek Zeta Upper",        "greek:zeta:upper"],
    "{ETA}":      ["Η",  "Greek Eta Upper",         "greek:eta:upper"],
    "{THETA}":    ["Θ",  "Greek Theta Upper",       "greek:theta:upper"],
    "{IOTA}":     ["Ι",  "Greek Iota Upper",        "greek:iota:upper"],
    "{KAPPA}":    ["Κ",  "Greek Kappa Upper",       "greek:kappa:upper"],
    "{LAMBDA}":   ["Λ",  "Greek Lambda Upper",      "greek:lambda:upper"],
    "{MU}":       ["Μ",  "Greek Mu Upper",          "greek:mu:upper"],
    "{NU}":       ["Ν",  "Greek Nu Upper",          "greek:nu:upper"],
    "{XI}":       ["Ξ",  "Greek Xi Upper",          "greek:xi:upper"],
    "{OMICRON}":  ["Ο",  "Greek Omicron Upper",     "greek:omicron:upper"],
    "{PI}":       ["Π",  "Greek Pi Upper",          "greek:pi:upper"],
    "{RHO}":      ["Ρ",  "Greek Rho Upper",         "greek:rho:upper"],
    "{SIGMA}":    ["Σ",  "Greek Sigma Upper",       "greek:sigma:upper"],
    "{TAU}":      ["Τ",  "Greek Tau Upper",         "greek:tau:upper"],
    "{UPSILON}":  ["Υ",  "Greek Upsilon Upper",     "greek:upsilon:upper"],
    "{PHI}":      ["Φ",  "Greek Phi Upper",         "greek:phi:upper"],
    "{CHI}":      ["Χ",  "Greek Chi Upper",         "greek:chi:upper"],
    "{PSI}":      ["Ψ",  "Greek Psi Upper",         "greek:psi:upper"],
    "{OMEGA}":    ["Ω",  "Greek Omega Upper",       "greek:omega:upper"],
    // Fractions
    "1//2": ["½", "Fraction 1/2", "fraction:1/2"],
    "1//3": ["⅓", "Fraction 1/3", "fraction:1/3"],
    "2//3": ["⅔", "Fraction 2/3", "fraction:2/3"],
    "1//4": ["¼", "Fraction 1/4", "fraction:1/4"],
    "3//4": ["¾", "Fraction 3/4", "fraction:3/4"],
    "1//5": ["⅕", "Fraction 1/5", "fraction:1/5"],
    "2//5": ["⅖", "Fraction 2/5", "fraction:2/5"],
    "3//5": ["⅗", "Fraction 3/5", "fraction:3/5"],
    "4//5": ["⅘", "Fraction 4/5", "fraction:4/5"],
    "1//6": ["⅙", "Fraction 1/6", "fraction:1/6"],
    "5//6": ["⅚", "Fraction 5/6", "fraction:5/6"],
    // SUPS
    "{^0}": ["⁰", "Sup 0", "sup:0"],
    "{^1}": ["¹", "Sup 1", "sup:1"],
    "{^2}": ["²", "Sup 2", "sup:2"],
    "{^3}": ["³", "Sup 3", "sup:3"],
    "{^4}": ["⁴", "Sup 4", "sup:4"],
    "{^5}": ["⁵", "Sup 5", "sup:5"],
    "{^6}": ["⁶", "Sup 6", "sup:6"],
    "{^7}": ["⁷", "Sup 7", "sup:7"],
    "{^8}": ["⁸", "Sup 8", "sup:8"],
    "{^9}": ["⁹", "Sup 9", "sup:9"],
    "{^+}": ["⁺", "Sup Op Plus", "sup:op:plus"],
    "{^-}": ["⁻", "Sup Op Minus", "sup:op:minus"],
    "{^=}": ["⁼", "Sup Op Equal", "sup:op:equal"],
    "{^(}": ["⁽", "Sup Op Paren Left", "sup:paren:left"],
    "{^)}": ["⁾", "Sup Right Parenthesis", "sup:paren:right"],

    // SUBS
    "{_0}": ["₀", "Sub 0", "sub:0"],
    "{_1}": ["₁", "Sub 1", "sub:1"],
    "{_2}": ["₂", "Sub 2", "sub:2"],
    "{_3}": ["₃", "Sub 3", "sub:3"],
    "{_4}": ["₄", "Sub 4", "sub:4"],
    "{_5}": ["₅", "Sub 5", "sub:5"],
    "{_6}": ["₆", "Sub 6", "sub:6"],
    "{_7}": ["₇", "Sub 7", "sub:7"],
    "{_8}": ["₈", "Sub 8", "sub:8"],
    "{_9}": ["₉", "Sub 9", "sub:9"],
    "{_+}": ["₊", "Sub Plus", "sub:op:plus"],
    "{_-}": ["₋", "Sub Minus", "sub:op:minus"],
    "{_=}": ["₌", "Sub Equal", "sub:op:equal"],
    "{_(}": ["₍", "Sub Left Parenthesis", "sub:paren:left"],
    "{_)}": ["₎", "Sub Right Parenthesis", "sub:paren:right"],
    
})

type Blah = typeof arrows
type OneThingy<T extends string> = T extends `${string}${infer U extends keyof Blah}${string}` ? Blah[U] : never

function doit<const T extends string>(x: T): OneThingy<T> {
    return x as any
}

const a = doit("A\b{<==}")

type ARB = OneThingy<"A<=|B">

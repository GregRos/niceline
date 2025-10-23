// ◖
//◗

import { aliasAscii, ascii, named, namespace } from "../registered"

const leftOne = ["left", "l"] as const
const rightOne = ["right", "r"] as const
const french = ["french", "guillemets"] as const
const german = ["low", "german", "czech"] as const
const single = ["single", "s"] as const
const double = ["double", "d"] as const

export const paired = namespace("paired", [
    namespace("bracket|parentheses|paren|brace|braces", [
        namespace("halfmoon", []),
        namespace("paren", [
            // called "white"
            ascii("⦅", "{(_(}", leftOne),
            ascii("⦆", "{)_)}", rightOne),
            // halfmoon namespace
            //    white
            ascii("⦇", "{|_)}", leftOne),
            ascii("⦈", "{(_|}", rightOne),
            //    black
            ascii("◖", "{(%|}", leftOne),
            ascii("◗", "{|%)}", rightOne),
            // 1:angle|angle
            ascii("⦓", "{<(<)}", leftOne),
            ascii("⦔", "{>)>}", leftOne),
            // 2:angle
            ascii("⦕", "{(>(<}", leftOne),
            ascii("⦖", "{)>)>}", leftOne),
            // 2
            ascii("⸨", "{((}", leftOne),
            ascii("⸩", "{))}", rightOne),
            // flattened
            ascii("⟮", "{([}", leftOne),
            ascii("⟯", "{])}", rightOne)
        ]),
        namespace("E", [
            ascii("⁅", "{[-}", leftOne),
            ascii("⁆", "{-]}", rightOne)
        ]),
        namespace("angle", [
            namespace("single", [
                namespace("s1|", [
                    ascii("〈", "{<(}", leftOne),
                    ascii("〉", "{)>}", rightOne)
                ]),
                namespace("s2", [named("❬", leftOne), named("❭", rightOne)]),
                namespace("s3", [
                    ascii("❮", "{<((}", leftOne),
                    ascii("❯", "{))>}", rightOne)
                ]),
                namespace("s4", [
                    ascii("❰", "{<(((}", leftOne),
                    ascii("❱", "{)))>}", rightOne)
                ]),
                namespace("dot", [
                    ascii("⦑", "{<.}", leftOne),
                    ascii("⦒", "{.>}", rightOne)
                ]),
                namespace("curved", [
                    ascii("⧼", "{<|(}", leftOne),
                    ascii("⧽", "{)|>}", rightOne)
                ])
            ]),
            namespace("double", [
                ascii("⟪", "{<<(}", leftOne),
                ascii("⟫", "{>>}", rightOne)
            ])
        ])
    ]),
    namespace("square", [
        ascii("⟦", "{[[}", leftOne),
        ascii("⟧", "{]]}", rightOne),
        ascii("⟬", "{<_[}", leftOne),
        ascii("⟭", "{]_>}", rightOne),
        ascii("⦗", "{[%<}", leftOne),
        ascii("⦘", "{>%]}", rightOne),
        namespace("ceil", [
            ascii("⌈", "{[^}", leftOne),
            ascii("⌉", "{^]}", rightOne)
        ]),
        namespace("floor", [
            ascii("⌊", "{[_}", leftOne),
            ascii("⌋", "{_]}", rightOne)
        ])
    ]),

    namespace("brace", [
        namespace("white", [named("⦃", leftOne), named("⦄", rightOne)])
    ]),
    namespace("angle", []),

    namespace("quote", [
        namespace(double, [
            namespace(leftOne, [
                ascii("“", '{"|}', [""]),
                ascii("«", `{"<}`, french),
                ascii("„", `{,,}`, german)
            ]),
            namespace(rightOne, [
                ascii("”", `{|"}`, [""]),
                ascii("»", `{>"}`, french)
            ])
        ]),
        namespace("single", [
            namespace(leftOne, [
                ascii("‘", "{'|}", [""]),
                ascii("‹", `{'<}`, french),
                ascii("‚", `{,}`, german)
            ]),
            namespace(rightOne, [
                ascii("’", "{|'}", [""]),
                ascii("›", `{>'}`, french),
                aliasAscii("left", "{<,}", german)
            ])
        ])
    ])
])

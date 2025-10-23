// ◖
//◗

import { ascii, named, namespace } from "../registered"

const leftOne = ["left", "l"] as const
const rightOne = ["right", "r"] as const

export const paired = namespace("paired", [
    namespace("bracket|parentheses|paren|brace|braces", [
        namespace("paren", [
            namespace("white", [
                ascii("⦅", "{(_(}", leftOne),
                ascii("⦆", "{)_)}", rightOne)
            ]),
            namespace("halfmoon", [
                namespace("white", [
                    ascii("⦇", "{|_)}", leftOne),
                    ascii("⦈", "{(_|}", rightOne)
                ]),
                namespace("black", [
                    ascii("◖", "{(%|}", leftOne),
                    ascii("◗", "{|%)}", rightOne)
                ])
            ]),
            namespace("angle", [
                namespace("1", [
                    ascii("⦓", "{<(<)}", leftOne),
                    ascii("⦔", "{>)>}", leftOne)
                ]),
                namespace("2:angle", [
                    ascii("⦕", "{(>(<}", leftOne),
                    ascii("⦖", "{)>)>}", leftOne)
                ])
            ]),

            namespace("2", [
                ascii("⸨", "{((}", leftOne),
                ascii("⸩", "{))}", rightOne)
            ]),
            namespace("flat", [
                ascii("⟮", "{|()}", leftOne),
                ascii("⟯", "{)|}", rightOne)
            ])
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
                    ascii("⦑", "{<(.}", leftOne),
                    ascii("⦒", "{.)>)}", rightOne)
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
    namespace("angle", [])
])

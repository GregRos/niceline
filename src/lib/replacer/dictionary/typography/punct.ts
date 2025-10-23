import { aliasAscii, ascii, named, namespace } from "../../registered"
const french = ["french", "guillemets"] as const
const german = ["low", "german", "czech"] as const
const single = ["single", "s"] as const
const double = ["double", "d"] as const
const heavy = ["heavy", "bold"] as const
const leftOne = ["left", "l"] as const
const rightOne = ["right", "r"] as const
export const punctuation = namespace("punct", [
    named("¡", ["exclamation:inverted"]),
    named("‼", ["exclamation:2"]),
    named("⁉", ["question-exclamation", "eq"]),
    named("⁈", ["exclamation-question", "qe"]),
    named("❢", ["exclamation:heart"]),

    named("¿", ["question:inverted"]),
    named("‽", ["interrobang"]),
    named("⁇", ["question:2"]),

    namespace("ampersand|and", [named("🙴", ["big"]), named("🙵", ["swash"])]),

    namespace("quote", [
        namespace(double, [
            namespace(leftOne, [
                ascii("“", '{"|}', [""]),
                ascii("«", `{"<}`, french),
                ascii("„", `{,,|}`, german),
                ascii("🙸", `{,,||}`, [...german, ...heavy]),
                ascii("🙶", `{"||}`, heavy)
            ]),
            namespace(rightOne, [
                ascii("”", `{|"}`, [""]),
                ascii("»", `{>"}`, french),
                ascii("🙷", `{|""}`, [...french, ...heavy]),
                aliasAscii("..:left", `{|,,}`, german),
                aliasAscii("..left:heavy", `{|,,}`, [...german, ...heavy])
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

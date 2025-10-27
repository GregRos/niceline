import { writeFileSync } from "fs"
import Type from "typebox"

const Alias = Type.String({
    title: "Alias",
    description: "An alias for a Unicode character."
})

const AsciiId = Type.String({
    title: "a {string}.",
    pattern: "^\\{.+\\}$"
})

const AsciiIdOrNull = Type.Union([AsciiId, Type.Null()], {
    title: "AsciiId or null"
})

const UniCharValue = Type.Tuple([Type.String()], {
    minItems: 1,
    additionalItems: true,
    prefixItems: [AsciiIdOrNull],
    title: "Array of aliases"
})

const UniCharKey = Type.String({
    pattern: "^.$",
    title: "A unicode character."
})

const NamespaceRef = Type.Ref("#/$defs/Namespace")
const Namespace = Type.Record(
    UniCharKey,
    Type.Union([UniCharValue, NamespaceRef]),
    {
        title: "Namespace",
        description:
            "Recursive, namespaced dictionary of Unicode to ASCII codes.",
        additionalProperties: NamespaceRef
    }
)

const o = {
    $id: "niceline://namespace",
    $defs: {
        Namespace: Namespace
    },
    ...NamespaceRef
}

writeFileSync(
    "./tools/namespace-shape2.schema.json",
    JSON.stringify(o, null, 2)
)

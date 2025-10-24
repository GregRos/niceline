// prettier-ignore
import type { Ascii_Shape,at_least_one } from "./types"
import type { Value_Of } from "./Value_Of"
export type ascii_shape_or_null = Ascii_Shape | null

type _Names = at_least_one<string>
type _Strs = readonly string[]
type _Headed_Array<Head, Tail extends _Strs> = readonly [Head, ...Tail]
export type TxEntry<
    Shape extends ascii_shape_or_null = ascii_shape_or_null,
    Names extends _Names = _Names
> = _Headed_Array<Shape, Names>
type _Join_Strings<A extends string[], Sep extends string> = A extends [
    infer Head extends string,
    ...infer Tail extends string[]
]
    ? Tail extends []
        ? Head
        : `${Head}${Sep}${_Join_Strings<Tail, Sep>}`
    : ""
type _Maybe_Prefix_String<
    Prefixes extends string[],
    In extends string
> = Prefixes extends []
    ? In
    : In extends Ascii_Shape
      ? In
      : In extends string
        ? `${_Join_Strings<[...Prefixes, In], ":">}`
        : null

type _Prefix_Array<
    Prefixes extends string[],
    Arr extends readonly (string | null)[]
> = Arr extends readonly [infer Head, ...infer Tail extends _Strs]
    ? Head extends string
        ? [
              _Maybe_Prefix_String<Prefixes, Head>,
              ..._Prefix_Array<Prefixes, Tail>
          ]
        : _Prefix_Array<Prefixes, Tail>
    : []

type _Add<T extends string[], U extends string> = [...T, U]

export type NamespaceShape = {
    [K in string]: TxEntry | NamespaceShape
}

type _Expand_Nested_keys<Prefixes extends string[], X> = {
    [K in keyof X & string]: X[K] extends TxEntry
        ? _Prefix_Array<Prefixes, X[K]>[number]
        : _Expand_Nested_keys<_Add<Prefixes, K>, X[K]>
}

type _Flatten_Flip<X> = Value_Of<{
    [K in keyof X & string]: X[K] extends string
        ? {
              [P in X[K]]: K
          }
        : _Flatten_Flip<X[K]>
}>
type _Prettify<T> = T extends object
    ? { [K in keyof T]: _Prettify<T[K]> } & {}
    : T

export type _Flatten<X> = {
    [K in keyof X as X[K] extends string
        ? X[K]
        : keyof X[K]]: X[K] extends string ? X[K] : _Flatten<X[K]>
}

// typed object transform

function _expandNestedKeys(x: any): any {
    const result: any = {}
    const rec = (prefixes: string[], obj: any) => {
        for (const [key, value] of Object.entries(obj)) {
            if (Array.isArray(value))
                for (const entry of value) {
                    if (entry === null) continue
                    const prefixed = [...prefixes, key].join(":")
                    result[prefixed] = entry
                }
            else {
                prefixes.push(key)
                rec(prefixes, value)
                prefixes.pop()
            }
        }
    }
    rec([], x)
    return result
}
function _flattenFlip(x: any): any {
    const result: any = {}
    for (const [key, value] of Object.entries(x)) {
        if (value == null) continue
        if (typeof value === "string") {
            result[value] = key
        } else {
            const nested = _flattenFlip(value)
            for (const [nestedKey, nestedValue] of Object.entries(nested)) {
                result[nestedKey] = nestedValue
            }
        }
    }
    return result
}

export function namespaces<const X extends NamespaceShape>(
    x: X
): _Prettify<_Flatten_Flip<_Expand_Nested_keys<[], X>>> {
    return _flattenFlip(_expandNestedKeys(x))
}
const x = namespaces({
    a4: {
        x: {
            ddd: {
                "😇": [null, "{~x: c}", "c1", "c2"]
            }
        }
    }
})

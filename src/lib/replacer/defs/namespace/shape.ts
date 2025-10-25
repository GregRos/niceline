// prettier-ignore
import type { Ascii_Shape,At_Least_One } from "../types"
import type { Join_Strings, Prettify, Value_Of } from "../util"
export type Ascii_Shape_Or_Null = Ascii_Shape | null

type _Names = At_Least_One<string>
type _Strs = readonly string[]
type _Headed_Array<Head, Tail extends _Strs> = readonly [Head, ...Tail]

type _Maybe_Prefix_String<
    Prefixes extends readonly string[],
    In extends string
> = Prefixes extends []
    ? In
    : In extends Ascii_Shape
      ? In
      : In extends string
        ? `${Join_Strings<[...Prefixes, In], ":">}`
        : null

type _Prefix_Array<
    Prefixes extends readonly string[],
    Arr extends readonly (string | null)[]
> = Arr extends readonly [infer Head, ...infer Tail extends (string | null)[]]
    ? Head extends string
        ? [
              _Maybe_Prefix_String<Prefixes, Head>,
              ..._Prefix_Array<Prefixes, Tail>
          ]
        : _Prefix_Array<Prefixes, Tail>
    : []

type _Add<T extends string[], U extends string> = [...T, U]

export type _Expand_Nested_keys<Prefixes extends string[], X> = {
    [K in keyof X & string]: X[K] extends readonly any[]
        ? _Prefix_Array<Prefixes, X[K]>[number]
        : _Expand_Nested_keys<_Add<Prefixes, K>, X[K]>
}

export type _Flatten_Flip<X> = Value_Of<{
    [K in keyof X & string]: X[K] extends string
        ? Value_Of<{
              [P in X[K]]: {
                  [key in P]: K
              }
          }>
        : _Flatten_Flip<X[K]>
}>

export type TxEntry<
    Shape extends Ascii_Shape_Or_Null = Ascii_Shape_Or_Null,
    Names extends _Names = _Names
> = _Headed_Array<Shape, Names>

export type NamespaceShape = {
    [K in string]: TxEntry | NamespaceShape
}

type UnionToIntersection<U> = (U extends any ? (x: U) => 0 : never) extends (
    x: infer I
) => 0
    ? I
    : 1
export type UnpackNamespaceShape<X> = Prettify<
    UnionToIntersection<_Flatten_Flip<_Expand_Nested_keys<[], X>>>
>

export type PluckNeverKeys<X> = keyof {
    [K in keyof X as X[K] extends never ? K : never]: X[K]
}

export function shape<const X extends NamespaceShape>(shape: X): Prettify<X> {
    return shape as Prettify<X>
}

// typed object transform

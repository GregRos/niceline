// prettier-ignore
import type { Ascii_Shape,At_Least_One } from "../types"
import type { Join_Strings, Prettify, Value_Of } from "../util"
export type Ascii_Shape_Or_Null = Ascii_Shape | null

type _Names = At_Least_One<string>
type _Strs = readonly string[]
type _Headed_Array<Head, Tail extends _Strs> = readonly [Head, ...Tail]

type _Maybe_Prefix_String<
    Prefixes extends string[],
    In extends string
> = Prefixes extends []
    ? In
    : In extends Ascii_Shape
      ? In
      : In extends string
        ? `${Join_Strings<[...Prefixes, In], ":">}`
        : null

type _Prefix_Array<
    Prefixes extends string[],
    Arr extends TxEntry
> = Arr extends readonly [infer Head, ...infer Tail extends _Strs]
    ? Head extends string
        ? [
              _Maybe_Prefix_String<Prefixes, Head>,
              ..._Prefix_Array<Prefixes, Tail>
          ]
        : _Prefix_Array<Prefixes, Tail>
    : []

type _Add<T extends string[], U extends string> = [...T, U]

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

export type TxEntry<
    Shape extends Ascii_Shape_Or_Null = Ascii_Shape_Or_Null,
    Names extends _Names = _Names
> = _Headed_Array<Shape, Names>

export type NamespaceShape = {
    [K in string]: TxEntry | NamespaceShape
}

export type UnpackNamespaceShape<X> = Prettify<
    _Flatten_Flip<_Expand_Nested_keys<[], X>>
>

export function shape<X extends NamespaceShape>(shape: X): X {
    return shape
}

// typed object transform

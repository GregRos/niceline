import type { Ascii_Shape, At_Least_One } from "../util-types"
export type _Headed_Array<Head, Tail extends _Strs> = readonly [Head, ...Tail]
export type Ascii_Shape_Or_Null = Ascii_Shape | null

type _Names = At_Least_One<string>
export type _Strs = readonly string[]
export type TxEntry<
    Shape extends Ascii_Shape_Or_Null = Ascii_Shape_Or_Null,
    Names extends _Names = _Names
> = _Headed_Array<Shape, Names>

export type NamespaceShape = {
    [K in string]: TxEntry | NamespaceShape
}
export function shape<const X extends NamespaceShape>(
    shape: X
): NamespaceShape {
    return shape
}

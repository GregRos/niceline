import {
    NameRef,
    Named,
    Namespace,
    Signed,
    type Ascii_Shape,
    type At_Least_One,
    type Entry
} from "./types"

export function named(value: string, names: At_Least_One<string>): Named {
    return new Named(value, names)
}

export function not(...names: At_Least_One<string>): At_Least_One<string> {
    return names.map(name => `${name}:not`) as any
}

export function aliasNamespace(
    targetNamespace: string,
    aliases: At_Least_One<string>
): NameRef {
    return new NameRef(targetNamespace, aliases)
}
export function aliasName(
    targetName: string,
    aliases: At_Least_One<string>
): NameRef {
    return new NameRef(targetName, aliases)
}
export function aliasAscii(
    targetName: string,
    ascii: Ascii_Shape,
    aliases?: At_Least_One<string>
): NameRef {
    return new NameRef(targetName, aliases ?? [], ascii)
}

export function namespace(
    _name: string | At_Least_One<string>,
    entries: (Entry | Entry[])[]
): Namespace {
    const name = Array.isArray(_name) ? _name : ([_name] as const)
    return new Namespace(entries.flat(), name as any)
}
export function ascii(
    value: string,
    input: Ascii_Shape,
    names: At_Least_One<string>
): Signed {
    return new Signed(value, input, names)
}

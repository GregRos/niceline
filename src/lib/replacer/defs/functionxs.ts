import {
    NameRef,
    Named,
    Namespace,
    Signed,
    type Ascii_Shape,
    type Entry,
    type at_least_one
} from "./types"

export function named(value: string, names: at_least_one<string>): Named {
    return new Named(value, names)
}

export function not(...names: at_least_one<string>): at_least_one<string> {
    return names.map(name => `${name}:not`) as any
}

export function aliasNamespace(
    targetNamespace: string,
    aliases: at_least_one<string>
): NameRef {
    return new NameRef(targetNamespace, aliases)
}
export function aliasName(
    targetName: string,
    aliases: at_least_one<string>
): NameRef {
    return new NameRef(targetName, aliases)
}
export function aliasAscii(
    targetName: string,
    ascii: Ascii_Shape,
    aliases?: at_least_one<string>
): NameRef {
    return new NameRef(targetName, aliases ?? [], ascii)
}

export function namespace(
    _name: string | at_least_one<string>,
    entries: (Entry | Entry[])[]
): Namespace {
    const name = Array.isArray(_name) ? _name : ([_name] as const)
    return new Namespace(entries.flat(), name as any)
}
export function ascii(
    value: string,
    input: Ascii_Shape,
    names: at_least_one<string>
): Signed {
    return new Signed(value, input, names)
}

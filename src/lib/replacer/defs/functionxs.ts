import {
    NameRef,
    Named,
    Namespace,
    Signed,
    type AsciiShape,
    type AtLeastOne,
    type Entry
} from "./types"

export function named(value: string, names: AtLeastOne<string>): Named {
    return new Named(value, names)
}

export function not(...names: AtLeastOne<string>): AtLeastOne<string> {
    return names.map(name => `${name}:not`) as any
}

export function aliasNamespace(
    targetNamespace: string,
    aliases: AtLeastOne<string>
): NameRef {
    return new NameRef(targetNamespace, aliases)
}
export function aliasName(
    targetName: string,
    aliases: AtLeastOne<string>
): NameRef {
    return new NameRef(targetName, aliases)
}
export function aliasAscii(
    targetName: string,
    ascii: AsciiShape,
    aliases?: AtLeastOne<string>
): NameRef {
    return new NameRef(targetName, aliases ?? [], ascii)
}

export function namespace(
    _name: string | AtLeastOne<string>,
    entries: (Entry | Entry[])[]
): Namespace {
    const name = Array.isArray(_name) ? _name : ([_name] as const)
    return new Namespace(entries.flat(), name as any)
}
export function ascii(
    value: string,
    input: AsciiShape,
    names: AtLeastOne<string>
): Signed {
    return new Signed(value, input, names)
}

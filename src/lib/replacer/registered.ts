class _Aliased {
    constructor(readonly aliases: readonly string[]) {}
}
class _Base extends _Aliased {
    constructor(
        readonly value: string,
        aliases: string[] | readonly string[]
    ) {
        super(aliases)
    }

    get name() {
        return this.aliases[0]
    }
}
type AsciiShape = `{${string}}`

class Named extends _Base {}
class Signed extends _Base {
    constructor(
        value: string,
        readonly input: string,
        aliases: AtLeastOne<string>
    ) {
        super(value, aliases)
    }

    private _variation(value: string, suffix: string) {
        const bigNames = this.aliases.map(name => `${name}:${suffix}`) as any
        return (input?: string) => {
            input = `!${this.input}`
            return [this, new Signed(value, input, bigNames)]
        }
    }

    also_big(value: string, input: AsciiShape) {
        return this._variation(value, "big")(input)
    }
    also_not(value: string, input: AsciiShape) {
        return this._variation(value, "not")(input)
    }
}
class NameRef extends _Aliased {
    constructor(
        readonly target: string,
        aliases: string[] | readonly string[],
        readonly ascii?: string
    ) {
        super(aliases)
    }
}
class AsciiRef extends _Aliased {
    constructor(
        readonly target: string,
        readonly ascii: string,
        aliases?: AtLeastOne<string>
    ) {
        super(aliases || [])
    }

    get name() {
        return this.target
    }
}
class NameSpaceRef extends _Aliased {
    constructor(
        readonly target: string,
        aliases: AtLeastOne<string>
    ) {
        super(aliases)
    }
}
class Namespace extends _Aliased {
    constructor(
        readonly entries: Entry[],
        aliases: AtLeastOne<string>
    ) {
        super(aliases)
    }
}
export type Entry =
    | Signed
    | NameRef
    | Named
    | Namespace
    | NameSpaceRef
    | AsciiRef

type AtLeastOne<T> = readonly [T, ...T[]]
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

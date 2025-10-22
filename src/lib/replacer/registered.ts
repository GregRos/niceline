class _Aliased {
    constructor(readonly aliases: AtLeastOne<string>) {}
}
class _Base extends _Aliased {
    constructor(
        readonly value: string,
        aliases: AtLeastOne<string>
    ) {
        super(aliases)
    }

    get name() {
        return this.aliases[0]
    }
}
type InputShape = `{${string}}`

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
        const bigNames = this.aliases.map(
            name => `${name}:${suffix}`
        ) as AtLeastOne<string>
        return (input?: string) => {
            input = `!${this.input}`
            return [this, new Signed(value, input, bigNames)]
        }
    }

    also_big(value: string, input: InputShape) {
        return this._variation(value, "big")(input)
    }
    also_not(value: string, input: InputShape) {
        return this._variation(value, "not")(input)
    }
}
class NameRef extends _Aliased {
    constructor(
        readonly target: string,
        aliases: AtLeastOne<string>
    ) {
        super(aliases)
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
export type Entry = Signed | NameRef | Named | Namespace | NameSpaceRef

type AtLeastOne<T> = [T, ...T[]]
export function named(value: string, names: AtLeastOne<string>): Named {
    return new Named(value, names)
}

export function not(...names: AtLeastOne<string>): AtLeastOne<string> {
    return names.map(name => `${name}:not`) as AtLeastOne<string>
}

export function namespaceRef(
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

export function namespace(
    name: string | AtLeastOne<string>,
    entries: (Entry | Entry[])[]
): Namespace {
    name = Array.isArray(name) ? name : [name]
    return new Namespace(entries.flat(), name)
}
export function ascii(
    input: string,
    value: string,
    names: AtLeastOne<string>
): Signed {
    return new Signed(value, input, names)
}

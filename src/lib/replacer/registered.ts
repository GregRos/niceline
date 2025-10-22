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

class Named extends _Base {}
class Signed extends _Base {
    constructor(
        value: string,
        readonly sign: string,
        aliases: AtLeastOne<string>
    ) {
        super(value, aliases)
    }
}
class SignedRef extends _Aliased {
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
export type Entry = Signed | SignedRef | Named | Namespace

type AtLeastOne<T> = [T, ...T[]]
export function named(value: string, names: AtLeastOne<string>): Named {
    return new Named(value, names)
}

export function not(...names: AtLeastOne<string>): AtLeastOne<string> {
    return names.map(name => `${name}:not`) as AtLeastOne<string>
}
export function ref(
    targetName: string,
    aliases: AtLeastOne<string>
): SignedRef {
    return new SignedRef(targetName, aliases)
}

export function namespace(
    name: string | AtLeastOne<string>,
    entries: Entry[]
): Namespace {
    name = Array.isArray(name) ? name : [name]
    return new Namespace(entries, name)
}
export function ascii(
    input: string,
    value: string,
    names: AtLeastOne<string>
): Signed {
    return new Signed(value, input, names)
}

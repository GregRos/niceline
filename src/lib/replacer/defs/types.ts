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
export type Ascii_Shape = `{${string}}`
export class Named extends _Base {}
export class Signed extends _Base {
    constructor(
        value: string,
        readonly input: string,
        aliases: At_Least_One<string>
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

    also_big(value: string, input: Ascii_Shape) {
        return this._variation(value, "big")(input)
    }
    also_not(value: string, input: Ascii_Shape) {
        return this._variation(value, "not")(input)
    }
}
export class NameRef extends _Aliased {
    constructor(
        readonly target: string,
        aliases: string[] | readonly string[],
        readonly ascii?: string
    ) {
        super(aliases)
    }
}
export class AsciiRef extends _Aliased {
    constructor(
        readonly target: string,
        readonly ascii: string,
        aliases?: At_Least_One<string>
    ) {
        super(aliases || [])
    }

    get name() {
        return this.target
    }
}
export class NameSpaceRef extends _Aliased {
    constructor(
        readonly target: string,
        aliases: At_Least_One<string>
    ) {
        super(aliases)
    }
}
export class Namespace extends _Aliased {
    constructor(
        readonly entries: Entry[],
        aliases: At_Least_One<string>
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
export type At_Least_One<T> = readonly [T, ...T[]]

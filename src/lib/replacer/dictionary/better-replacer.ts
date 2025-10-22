// prettier-ignore

export function replacers<
    const Args extends {
        [x in keyof Args]: [output: string, ...names: string[]]
    }
>(xs: Args): Args {
    return Object.entries(xs).map(([input, args, name]: any) => ({
        input,
        output: args[0],
        caption: args[1],
        name: name
    })) as any
}

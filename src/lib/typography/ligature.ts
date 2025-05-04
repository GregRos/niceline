export interface NestedGroup {}

export function group(tags: string[]) {}

function lg<Name extends string, Seq extends string, Char extends string>(
    name: Name,
    seq: Seq,
    char: Char
) {
    return { name, char }
}

export const Ligs = {
    "<--": ["Left Arrow", "←"],
    "<~~": ["Left Wavey Arrow", "↜"]
} as const

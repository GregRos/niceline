type Prefix = "<" | "{" | "'" | "[" | "(" | "`" | '"' | "|"

function _typeset_quotes(str: string, prefix: Prefix) {}
function _typeset_prettyline(strs: string[], args: string[]) {
    const bits = [] as string[]
    for (let i = 0; i < strs.length; i++) {
        bits.push(strs[i])
        if (i < args.length) {
            bits.push(args[i])
        }
    }
    return bits.join("")
}

export function prettyline(strs: TemplateStringsArray, ...args: any[]) {
    args = args.map(arg => `${arg}`)
    return _typeset_prettyline(Array.from(strs), args as string[])
}

const spaceBeforeAfter = /^[ \t]*|[ \t]*$/gm
const spacesBeforeAfterText = new RegExp(spaceBeforeAfter.source, "g")

export function despace(tokens: TemplateStringsArray, ...args: any[]): string
export function despace(text: string): string
export function despace(a: any, ...rest: any[]): string {
    if (typeof a === "string") {
        return a
            .replace(spaceBeforeAfter, "")
            .replace(spacesBeforeAfterText, "")
    }
    return String.raw(a, ...rest)
}

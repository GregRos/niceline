import type { Pair } from "@niceline/trie"
import { isArray } from "what-are-you"
import { hasBraces, splat } from "../util"
import type { NamespaceShape } from "./shape"

const bracedPattern = /^\{(?<result>.+)\}$/
const getKeyForPath = (initial: string[], alias: string): string[] => {
    for (const p of initial) {
        if (hasBraces(p)) {
            throw new Error(
                `At ${splat(initial)}, namespace component ${p} has braces, which is illegal.`
            )
        }
    }
    if (hasBraces(alias)) {
        const match = alias.match(bracedPattern)
        if (!match) {
            throw new Error(
                `At ${splat(initial)}, braced alias must be in the form {alias}, got: ${alias}`
            )
        }
        return ["ascii", alias]
    }
    return ["name", ...initial, alias]
}

export function shapeToEntries(shape: NamespaceShape): Pair[] {
    const entries: Pair[] = []

    const add = (value: string, path: string[], alias: string) => {
        const key = getKeyForPath(path, alias)
        entries.push([key, value])
    }
    const leaf = (key_val: string, aliases: string[], path: string[]) => {
        for (const alias of aliases) {
            if (alias == null) {
                continue
            }
            add(key_val, path, alias)
        }
    }
    const walk = (node: Record<string, any> | string[], path: string[]) => {
        for (const [k, v] of Object.entries(node)) {
            if (isArray(v)) {
                leaf(k, v as string[], path)
                continue
            }
            path.push(k)
            walk(v, path)
            path.pop()
        }
    }
    walk(shape, [])
    return entries
}

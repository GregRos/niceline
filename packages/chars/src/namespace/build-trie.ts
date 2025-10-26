// Construct a Trie from a nested object shape. Leaves are string values
// (e.g. {a: {b: "v"}} => key ["a","b"] -> "v"). A node may also
// store its own value under the empty-string key (""), e.g.
// {a: {"": "val", b: "v2"}} will map ["a"] -> "val" and

import type { Pair } from "@niceline/trie"
import Trie from "@niceline/trie"
import { isArray } from "what-are-you"
import logger from "../logging"
import type { NamespaceShape } from "./shape"

const bracedPattern = /^\{(?<result>.+)\}$/
// ["a","b"] -> "v2".
export function buildTrieFromNamespaceShape(obj: NamespaceShape): Trie {
    const entries: Pair[] = []

    const splatKeyForPath = (path: string[]): string => {
        return path.join(":")
    }
    const getKeyForPath = (initial: string[], alias: string): string[] => {
        for (const p of initial) {
            if (p.includes("{") || p.includes("}")) {
                throw new Error("Namespace components can't have braces.")
            }
        }
        if (alias.includes("{") || alias.includes("}")) {
            const match = alias.match(bracedPattern)
            if (!match) {
                throw new Error(
                    `At ${splatKeyForPath(initial)}, braced alias must be in the form {alias}, got: ${alias}`
                )
            }
            return [alias]
        }
        return [...initial, alias]
    }
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

    walk(obj, [])
    const t = Trie.make()
    t.onOverwrite = (key, oldValue, newValue) => {
        logger.error(
            `Overwriting existing key ${key.join(":")} from value ${oldValue} to ${newValue}`
        )
    }
    t.addAll(entries)
    return t
}

import { getFunctionName } from "../utils/get-function-name"
import { truncate } from "../utils/truncate"
import { parseOptions } from "./parse-options"

interface ValueTextOptions {
    /** The maximum length of the text to return. Defaults to 100. */
    readonly length: number
    /**
     * Don't print quotes and other characters to indicate the types of values.
     * Defaults to false.
     */
    readonly compact: boolean
}

type Length = `length=${number}`

type Compact = "compact"

export type TextMarkerOptions = Length | Compact
/**
 * Gets a short text representation of a value.
 *
 * @example
 *     textMarker(1234) // `1234`
 *     textMarker("hello") // `"hello"`
 *     textMarker("hello", { compact: true }) // `hello`
 *     textMarker(function foo(a, b) {}) // `foo[2]`
 *     textMarker({ foo: 123 }) // `|Object|`
 *     textMarker(new TypeError()) // `‼TypeError‼`
 *
 * @param value The value to get the text of.
 * @param options Options for the text.
 * @summary abc
 */
export function textMarker(value: unknown, ...options: TextMarkerOptions[]) {
    const rOptions = parseOptions(options, {
        length: 100,
        compact: false
    })
    if (value === null) {
        return "null"
    }
    let result: string
    if (typeof value === "object") {
        result = getObjectTextMarker(value, rOptions.compact)
        return result
    }
    switch (typeof value) {
        case "bigint":
            result = `${value}`
            return rOptions.compact ? result : `${result}n`
        case "number":
        case "boolean":
            return `${value}`
        case "function":
            result = `${truncate(getFunctionName(value), rOptions.length)}[${
                value.length
            }]`
            return rOptions.compact ? result : `function ${result}`
        case "symbol":
            result = truncate(getSymbolDescription(value), rOptions.length)
            return `@@${result}`
        case "string":
            result = truncate(value, rOptions.length)
            return rOptions.compact ? result : `"${result}"`
        default:
            return truncate(str(value), rOptions.length)
    }
}

function getObjectTextMarker(value: object, compact: boolean) {
    const isEmpty = isObjectEmpty(value)
    if (value instanceof Error) {
        const objectName = getErrorName(value)
        return compact ? objectName : `‼${objectName}‼`
    }
    const objectDesc = isEmpty ? "{}" : `{…}`
    let objectName = getClassName(value)
    objectName = objectName === "Object" ? "" : objectName
    return `${objectName}${objectDesc}`
}

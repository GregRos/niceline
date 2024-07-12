import { _prettyline } from "./prettyline"

/**
 * Returns the name of a function.
 *
 * @example
 *     getFunctionName(function foo() {}) // "foo"
 *     getFunctionName(function () {}) // "<anonymous>"
 *     getFunctionName(() => {}) // "<anonymous>"
 *     getFunctionName(async function foo() {}) // "foo"
 *
 * @param theFunction The function to get the display name of.
 */
export function getFunctionName(theFunction: Function) {
    if (typeof theFunction !== "function") {
        throw new TypeError(
            prettyline`Expected a function, but got ${theFunction}.`
        )
    }
    return theFunction.name || "<anonymous>"
}

/**
 * Returns a description of a symbol.
 *
 * @example
 *     import { getSymbolDescription } from "@reflectiz/text"
 *     getSymbolDescription(Symbol("hello")) // "hello"
 *     getSymbolDescription(Symbol.iterator) // "Symbol.iterator"
 *
 * @param symb The symbol to get the description of.
 */
export function getSymbolDescription(symb: symbol): string {
    if (typeof symb !== "symbol") {
        throw new TypeError(
            prettyline`Expected a symbol, but got a ${typeof symb}.`
        )
    }
    return symb.description || "<none>"
}

/**
 * Returns the name of an error.
 *
 * @example
 *     import { getErrorName } from "@reflectiz/text"
 *     getErrorName(new Error("hello")) // "Error"
 *     getErrorName(new TypeError("hello")) // "TypeError"
 *     getErrorName(new (class MyError extends Error {})()) // "MyError"
 *     getErrorName(
 *         new (class MyError extends TypeError {
 *             name = "HisError"
 *         })()
 *     ) // "HisError"
 *
 * @param err The error to get the name of.
 */
export function getErrorName(err: Error) {
    if (typeof err !== "object") {
        throw new TypeError(
            _prettyline(`Expected an object, but got a ${typeof err}.`
        )
    }
    return !err.name || err.name === "Error" ? getClassName(err) : err.name
}

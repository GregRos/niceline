import shrinkPathLib from "shrink-path"

/**
 * Shortens a path to a given length in a human readable way.
 *
 * @example
 *     prettyPath("c:\\Users\\John\\Documents\\foo\\bar", 10) // "c:\\Users\\…\\bar"
 *     prettyPath("/mnt/c/code/explorer/node_modules", 20) // "/mnt/c/code/…/node_modules"
 *     prettyPath("/hello/world/this/is/a/long/path", 20) // "/hello/…/a/long/path"
 *     prettyPath("C:\\Users\\Greg\\Documents\\My Documents\\My Dog.jpg", 20) // "C:\\Users\\…\\My Dog.jpg"
 *
 * @param path The path to format.
 * @param length The maximum length of the path.
 */
export function _Path(length: number) {
    return function prettyPath(path: string) {
        return shrinkPathLib(path, length)
    }
}

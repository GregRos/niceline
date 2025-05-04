/**
 * Formats a URL in a human-readable way by truncating.
 *
 * @example
 *     // Truncates long paths
 *     prettyUrl("http://example.com/foobar/example/file.php", {
 *         length: 30
 *     }) // "https://example.com/…/file.php"
 *
 *     // Truncates long query strings
 *     prettyUrl("http://example.com/foo?bar=1&baz=2&qux=3", {
 *         length: 30
 *     }) // "https://example.com/foo?…"
 *
 * @example
 *     // Special tiny protocol format:
 *     prettyUrl("http://example.com/foo/bar", {
 *     length: 20
 *     proto: "tiny"
 *     }) // "ᴴˢexample.com/foo/bar"
 *     // We didn't have to truncate because the protocol is so short.
 *
 *     // Tiny protocol is forced if length is too short:
 *     prettyUrl("https://example.com/foo/bar", {
 *     length: 5
 *     })
 *     // The length forces proto to chars mode:
 *     // "ᴴˢex…"
 *
 * @param value The URL to display.
 * @param options Options for formatting.
 */
export function _Url(options?: PrettyUrlOptions) {
    function prettyUrl(value: string) {
        options = {
            proto: true,
            ...options
        }

        let [proto, rest] = value.split("://")
        if (!rest) {
            return proto
        }
        if (options.proto === true && options.length! < 10) {
            options.proto = "tiny"
        }
        if (options.proto === "tiny") {
            proto = getTinyProto(proto)
        } else if (options.proto) {
            proto = `${proto}://`
        } else {
            proto = ""
        }

        if (options.length != null) {
            options.length -= proto.length
        }
        return `${proto}${rest}`
    }
}
function getTinyProto(proto: string) {
    const chars = protoChars[proto]
    if (chars == null) {
        return proto
    }
    return chars
}

const protoChars = {
    http: "h⸬",
    https: "H⸬",
    ws: "w⸬",
    wss: "W⸬",
    ftp: "f⸬",
    ftps: "F⸬"
} as Record<string, string | undefined>

/** Formatting options for the `prettyUrl` function. */
export interface PrettyUrlOptions {
    /**
     * How to handle the protocol part of the URL. Defaults to `true`.
     *
     * - `true` - Preserve the protocol
     * - `false` - Remove the protocol
     * - `"tiny"` - Uses one or two characters to indicate the protocol
     */
    proto?: true | false | "tiny"
    /**
     * The length to which the URL should be truncated. Defaults to `undefined`,
     * which means no truncation. If the length is less than 10, and `proto` is
     * true, it will be forced to `"tiny"`.
     */
    length?: number
}

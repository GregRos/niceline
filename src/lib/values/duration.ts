import prettyMsLib, { Options } from "pretty-ms"

/** The format of a readable duration. */
export type DurationFormat = "short" | "long"

/**
 * Formats a duration in a human-readable way.
 *
 * @example
 *     prettyTime(13000) // "13s"
 *     prettyTime(secs(3)) // "3s"
 *     prettyTime(mins(5)) // "3m"
 *     prettyTime(mins(1) + secs(18)) // "1m 18s"
 *     prettyTime(mins(5) + hours(2), "long") // "2 hours 5 minutes"
 *
 * @param milliseconds A number of milliseconds.
 * @param format If `"short"`, each unit will be abbreviated. If `"long"`, each
 *   unit will be spelled out. Defaults to `"short"`.
 */

export function _Duration(format: DurationFormat) {
    return function prettyDuration(milliseconds: number) {
        const baseOptions: Options = {
            unitCount: 3,
            separateMilliseconds: true,
            formatSubMilliseconds: true
        }
        if (format === "short") {
            return prettyMsLib(milliseconds, baseOptions)
        } else {
            return prettyMsLib(milliseconds, {
                ...baseOptions,
                verbose: true
            })
        }
    }
}

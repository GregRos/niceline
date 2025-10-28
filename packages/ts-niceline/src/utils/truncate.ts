/**
 * Truncates strings nicely to a given length, and a single line.
 *
 * @example
 *     truncate("Hello, world!", 6) // "Hello…orld"
 *     truncate("Hello, world!", 2) // "He…"
 *     truncate("Hello, world!", 1) // "H…"
 *     truncate("Hello, world!", 0) // "…"
 *     truncate("A\nB\nC") // "A⏎"
 *
 * @param text The text to truncate.
 * @param length The target length.
 */
export function truncate(text: string, length: number = Infinity) {
    text = String(text)
    length = Number(length)
    const lines = text.split("\n")
    text = lines[0]
    const lineEnd = lines.length > 1 ? "⏎" : ""
    if (text.length <= length) {
        return `${text}${lineEnd}`
    }
    const excluded = text.length - length
    if (length <= 7 || excluded <= 3) {
        // Use end truncation in this case
        return `${text.slice(0, length)}…${lineEnd}`
    }
    const half = Math.ceil(length / 2)
    return `${text.slice(0, text.length - half)}…${text.slice(
        text.length - half
    )}${lineEnd}`
}

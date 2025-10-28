import prettyBytes from "pretty-bytes"

export type BytesFormat = "binary" | "decimal"
export function _Bytes(format: BytesFormat) {
    /** Sdfdsf */
    return function _prettyBytes(value: number) {
        return prettyBytes(value, {
            binary: format === "binary"
        })
    }
}

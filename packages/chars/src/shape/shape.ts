import yaml from "js-yaml"
import fs from "node:fs"
import path from "node:path"
import type { Ascii_Shape, At_Least_One } from "../util-types"
export type _Headed_Array<Head, Tail extends _Strs> = readonly [Head, ...Tail]
export type Ascii_Shape_Or_Null = Ascii_Shape | null

type _Names = At_Least_One<string>
export type _Strs = readonly string[]
export type TxEntry<
    Shape extends Ascii_Shape_Or_Null = Ascii_Shape_Or_Null,
    Names extends _Names = _Names
> = _Headed_Array<Shape, Names>

export type NamespaceShape = {
    [K in string]: TxEntry | NamespaceShape
}
export function shape<const X extends NamespaceShape>(
    shape: X
): NamespaceShape {
    // Side-effect: export this file's shape payload to YAML under `terms/` mirroring `src/terms/…`
    try {
        // Find the calling file within src/terms using the stack trace
        const stack = new Error().stack || ""
        const lines = stack.split(/\r?\n/).slice(1)
        let callerFile: string | undefined
        for (const line of lines) {
            // Match windows or posix paths ending with :line:col
            const m = line.match(/([A-Za-z]:[\\/][^:()]+?):\d+:\d+/)
            if (m) {
                const filePath = m[1]
                const norm = filePath.replace(/\\/g, "/")
                if (norm.includes("/src/terms/")) {
                    callerFile = norm
                    break
                }
            }
        }

        if (callerFile) {
            const norm = callerFile.replace(/\\/g, "/")
            const srcIdx = norm.lastIndexOf("/src/terms/")
            if (srcIdx >= 0) {
                const packageRootPosix = norm.slice(0, srcIdx) // up to but not including /src
                const relFromTerms = norm.slice(srcIdx + "/src/terms/".length)
                const outRel = relFromTerms.replace(
                    /\.(ts|tsx|js|jsx)$/i,
                    ".nice.yaml"
                )
                const outDir = path.join(packageRootPosix, "terms")
                const outPath = path.join(outDir, outRel)

                // Ensure directory exists
                fs.mkdirSync(path.dirname(outPath), { recursive: true })

                // Dump YAML with inline arrays for leaves
                const yamlText = yaml.dump(
                    shape as unknown as Record<string, unknown>,
                    {
                        flowLevel: 0, // render all sequences as flow (inline) style
                        noRefs: true, // do not use anchors/aliases
                        lineWidth: -1 // do not fold long lines
                    }
                )

                fs.writeFileSync(outPath, yamlText, "utf8")
            }
        }
    } catch {
        // Swallow export errors to avoid impacting consumers
    }

    return shape
}

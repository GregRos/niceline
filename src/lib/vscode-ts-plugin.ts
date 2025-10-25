// ts-plugin-niceline/index.ts
import type * as ts from "typescript/lib/tsserverlibrary"

function init({
    typescript: ts
}: {
    typescript: typeof import("typescript/lib/tsserverlibrary")
}) {
    return {
        create(info: ts.server.PluginCreateInfo) {
            const ls = info.languageService
            const proxy: ts.LanguageService = Object.create(null)
            for (const k of Object.keys(ls) as (keyof ts.LanguageService)[]) {
                // @ts-expect-error dynamic
                proxy[k] = (...args: any[]) => (ls[k] as any).apply(ls, args)
            }

            const config = (info.config || {}) as {
                tags?: string[]
                dictPath?: string
            }
            const TAGS = new Set(config.tags ?? ["niceline"])
            const trie = loadTrie(config.dictPath) // your fast prefix→[{key,glyph}] index

            proxy.getCompletionsAtPosition = (fileName, position, options) => {
                const prior = ls.getCompletionsAtPosition(
                    fileName,
                    position,
                    options
                )
                const ctx = nicelineBraceContext(
                    ts,
                    info,
                    fileName,
                    position,
                    TAGS
                )
                if (!ctx) return prior

                const { prefixText, replaceStart, replaceLen } = ctx
                const matches = trie.lookup(prefixText) // returns [{ key, glyph, score }]
                const entries: ts.CompletionEntry[] = matches.map((m, i) => ({
                    name: m.key, // label core
                    insertText: `{${m.key}}`, // what gets inserted
                    kind: ts.ScriptElementKind.string,
                    sortText: `0${i.toString(36)}`,
                    replacementSpan: {
                        start: replaceStart,
                        length: replaceLen
                    },
                    labelDetails: { detail: ` ${m.glyph}` }, // shows → next to the label
                    source: "niceline"
                }))

                return prior
                    ? { ...prior, entries: [...entries, ...prior.entries] }
                    : {
                          isGlobalCompletion: false,
                          isMemberCompletion: false,
                          isNewIdentifierLocation: false,
                          entries
                      }
            }

            proxy.getCompletionEntryDetails = (
                fileName,
                position,
                name,
                formatOptions,
                source,
                preferences,
                data
            ) => {
                if (source === "niceline") {
                    const glyph = trie.glyph(name) ?? ""
                    return {
                        name,
                        kind: ts.ScriptElementKind.string,
                        kindModifiers: "",
                        displayParts: [
                            { text: `{${name}}`, kind: "text" },
                            { text: "  →  ", kind: "text" },
                            { text: glyph, kind: "text" }
                        ],
                        documentation: [
                            { text: "niceline token", kind: "text" }
                        ]
                    }
                }
                return ls.getCompletionEntryDetails(
                    fileName,
                    position,
                    name,
                    formatOptions,
                    source,
                    preferences,
                    data
                )
            }

            // optional preview after closing brace
            proxy.provideInlayHints = (file, span, prefs) =>
                addNicelineHints(ts, info, ls, file, span, prefs, trie, TAGS)

            return proxy
        }
    }
}
export = init

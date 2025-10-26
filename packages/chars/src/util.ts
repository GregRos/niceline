export const splat = (path: readonly string[]): string => {
    return path.join(":")
}

export const unsplat = (s: string): string[] => {
    return s.split(":")
}
export const hasBraces = (s: string): boolean => {
    return s.includes("{") || s.includes("}")
}

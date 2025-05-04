export function parseOptions<T>(options: string[], defaults: T): T {
    const result = {} as T
    for (const option of options) {
        const [key, value] = option.split("=")
        if (value == null) {
            result[key as keyof T] = true as any
        }
        result[key as keyof T] = value as any
    }
    return { ...defaults, ...result }
}

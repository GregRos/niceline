export type Value_Of<T> = T[keyof T]
export type Prettify<T> = T extends object
    ? {
          [K in keyof T]: Prettify<T[K]>
      } & {}
    : T

export type Join_Strings<A extends string[], Sep extends string> = A extends [
    infer Head extends string,
    ...infer Tail extends string[]
]
    ? Tail extends []
        ? Head
        : `${Head}${Sep}${Join_Strings<Tail, Sep>}`
    : ""

export interface UnitTransform {
    byte: ["/sec"]
    meter: ["/sec", "/sec^2", "/sec^3", "^2", "^3"]
    kilogram: ["/sec", "/sec^2", "/sec^3", "/m^2", "/m^3"]
    hertz: ["By"]
}

export interface NiceUnit {
    get bytes(): string
    bytes_(transform: UnitTransform["byte"]): string
    get meters(): stringc
    meters_(transform: UnitTransform["meter"]): string
    get kilograms(): string
    kilograms_(transform: UnitTransform["kilogram"]): string
    get pounds(): string
    pounds_(transform: UnitTransform["kilogram"]): string
    get feet(): string
    feet_(transform: UnitTransform["meter"]): string

    get hertz(): string
}

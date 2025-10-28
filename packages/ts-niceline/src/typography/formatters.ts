const a = ""

type DateMeasure = "time:" | "ago:" | "date:" | "clock:"
type RatableMeasuree =
    | "meters:"
    | "kg:"
    | "meters:area:"
    | "meters:volume:"
    | "pounds:"
    | "bytes:"

type RateMeasure = `${RatableMeasuree}:rate:`

type Measure = RateMeasure | RatableMeasuree | DateMeasure | "hz:"

type NumberFormat =
    | "int:"
    | "int:hex:"
    | "int:binary:"
    | `fixed:${number}:`
    | `exp:`
    | `exp:${number}:`
    | `fraction:`
    | "percent:"

type NumberRendering =
    | "roman:"
    | "ordinal"
    | "progress:"
    | "progress:1:"
    | "progress:2:"
    | "progress:3:"
    | "progress:4:"

import { named, namespace } from "../../registered"

export const progress = namespace("progress", [
    namespace("vblock", [
        named("▁", ["1/8"]),
        named("▂", ["2/8"]),
        named("▃", ["3/8"]),
        named("▄", ["4/8"]),
        named("▅", ["5/8"]),
        named("▆", ["6/8"]),
        named("▇", ["7/8"]),
        named("█", ["8/8"])
    ]),
    namespace("hblock", [
        named("▏", ["1/8"]),
        named("▎", ["2/8"]),
        named("▍", ["3/8"]),
        named("▌", ["4/8"]),
        named("▋", ["5/8"]),
        named("▊", ["6/8"]),
        named("▉", ["7/8"]),
        named("█", ["8/8"])
    ]),
    namespace("shade", [
        named("░", ["1/4"]),
        named("▒", ["2/4"]),
        named("▓", ["3/4"]),
        named("█", ["4/4"])
    ]),
    namespace("quadrant", [
        named("▖", ["bl", "1/4"]),
        named("▗", ["br", "2/4"]),
        named("▘", ["ul", "3/4"]),
        named("▝", ["ur", "4/4"])
    ])
])

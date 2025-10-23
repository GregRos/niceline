import { named, namespace } from "../../registered"

export const geometry = namespace("geometry", [
    named("∥", ["parallel", "par"]),
    named("∦", ["parallel:not", "par:not"]),
    named("⊥", ["perpendicular", "perp"]),
    namespace("arc", [
        named("⌒", [""]),
        named("⌓", ["segment"]),
        named("⌔", ["sector"]),
        named("⏜", ["frown"]),
        named("⏝", ["smile"])
    ]),
    namespace("angle", [
        named("∠", [""]),
        named("⦜", ["right"]),
        named("∡", ["measured"]),
        named("∢", ["spherical"]),
        named("⦟", ["acute"]),
        namespace("obtuse", [named("⦦", ["", "up"]), named("⦧", ["down"])]),

        named("⟀", ["3d"])
    ])
])

import { named, namespace } from "../../registered"

export const traffic = namespace("signage", [
    namespace("no", [
        named("⛔", ["entry"]),
        named("🚫", [""]),
        named("🚭", ["smoking"]),
        named("🚱", ["water"]),
        named("🚳", ["bicycle"]),
        named("🚷", ["pedestrian"]),
        named("🚯", ["litter"]),
        named("🚱", ["drinking"]),
        named("🚷", ["foot"])
    ]),
    named("⛛", ["yield"]),
    namespace("car", [named("⛍", ["disabled"]), named("⛐", ["sliding"])]),
    namespace("warning", [named("⚠", ["general"])]),
    namespace("lanes", [
        named("⛗", ["two:way"]),
        named("⛙", ["left:merge"]),
        named("⛜", ["left:closed"]),
        named("⛚", ["slow"]),
        named("⛌", ["crossing"])
    ]),

    named("🚸", ["kids"]),
    named("🚥", ["traffic:light", "trafficlight"])
])

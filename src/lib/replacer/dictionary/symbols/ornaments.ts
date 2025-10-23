import { named, namespace } from "../../registered"

export const ornaments = namespace("ornament", [
    namespace("quilt", [
        named("🙪", [""]),
        named("🙫", ["black"]),
        namespace("big", [named("🙨", [""]), named("🙩", ["black"])])
    ])
])

const a = {
    "quilt|q": {
        CHAR: ["{>=}", "big"],
        black: {
            CHAR: ["{#>=}", "big", "heavy"]
        }
    }
}

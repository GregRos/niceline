import { shape } from "../../defs/namespace/shape"
import bb from "./bb"
import bold from "./bold"
import cursive from "./cursive"
import fraktur from "./fraktur"
import italic from "./italic"
import mono from "./mono"
import sans from "./sans"

export default shape({
    fonts: {
        ...bb,
        ...bold,
        ...cursive,
        ...fraktur,
        ...italic,
        ...mono,
        ...sans
    }
})

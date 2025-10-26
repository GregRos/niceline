import { shape } from "../shape/shape"
import display from "./display"
import enclosed from "./enclosed"
import fonts from "./fonts"
import greek from "./greek"
import math from "./math"
import mystic from "./mystic"
import shapes from "./shapes"
import things from "./things"
import typography from "./typography"

export default shape({
    ...greek,
    ...shapes,
    ...display,
    ...fonts,
    ...math,
    ...mystic,
    ...things,
    ...typography,
    ...enclosed
})

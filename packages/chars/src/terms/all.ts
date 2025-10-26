import { shape } from "../shape/shape"
import display from "./display"
import enclosed from "./enclosed"
import fonts from "./fonts"
import math from "./math"
import mystic from "./mystic"
import things from "./things"
import typography from "./typography"

export default shape({
    ...display,
    ...fonts,
    ...math,
    ...mystic,
    ...things,
    ...typography,
    ...enclosed
})

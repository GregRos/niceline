import { namespace } from "./namespace/namespace"
import { shape } from "./shape/shape"
import display from "./terms/display"
import fonts from "./terms/fonts"
import math from "./terms/math"
import mystic from "./terms/mystic"
import things from "./terms/things"
import typography from "./terms/typography"

export const complete = shape({
    ...display,
    ...fonts,
    ...math,
    ...mystic,
    ...things,
    ...typography
})

export default namespace(complete)

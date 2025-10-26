import { namespace } from "./defs/namespace/namespace"
import { shape } from "./defs/namespace/shape"
import display from "./dictionary/display"
import fonts from "./dictionary/fonts"
import math from "./dictionary/math"
import mystic from "./dictionary/mystic"
import things from "./dictionary/things"
import typography from "./dictionary/typography"

export const complete = shape({
    ...display,
    ...fonts,
    ...math,
    ...mystic,
    ...things,
    ...typography
})

export default namespace(complete)

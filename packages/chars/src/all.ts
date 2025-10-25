import { shape } from "./defs/namespace/shape"
import display from "./dictionary/display"
import fonts from "./dictionary/fonts"
import math from "./dictionary/math"
import mystic from "./dictionary/mystic"
import things from "./dictionary/things"
import typography from "./dictionary/typography"

export default shape({
    ...display,
    ...fonts,
    ...math,
    ...mystic,
    ...things,
    ...typography
})

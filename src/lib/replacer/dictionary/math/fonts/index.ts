import { namespace } from "../../../registered"
import { bb } from "./bb"
import { bold } from "./bold"
import { fraktur } from "./fraktur"
import { italic } from "./italic"
import { mono } from "./mono"
import { sans } from "./sans"
import { script } from "./script"

export const font = namespace("font", [
    bold,
    italic,
    mono,
    sans,
    fraktur,
    script,
    bb
])

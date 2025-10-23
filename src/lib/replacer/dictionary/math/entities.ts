import { ascii, named, namespace } from "../../registered"

export const entities = namespace("entities", [
    named("∞", ["infinity"]),
    named("π", ["pi"]),
    named("ℏ", ["hbar", "planck:reduced"]),
    named("ℇ", ["epsilon"]),
    ascii("ℍ", "{#H}", ["quaternions"]),
    ascii("ℕ", "{#N}", ["naturals", "N"]),
    ascii("ℤ", "{#Z}", ["integers", "Z"]),
    ascii("ℚ", "{#Q}", ["rationals", "Q"]),
    ascii("ℝ", "{#R}", ["reals", "R"]),
    ascii("ℂ", "{#C}", ["complex", "C"]),
    ascii("ℙ", "{#P}", ["prime", "P"]),
    ascii("ℯ", "{#e}", ["exponential", "e"]),
    ascii("ⅆ", "{d}", ["differential", "dx"]),
    named("ℑ", ["Im"]),
    named("ℜ", ["Re"]),
    named("ℵ", ["aleph"]),
    named("ℶ", ["beth"]),
    named("ℷ", ["gimel"]),
    named("ℸ", ["daleth"])
])

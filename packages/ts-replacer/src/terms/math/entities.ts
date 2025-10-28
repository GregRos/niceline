import { shape } from "../../shape/shape"

export default shape({
    // has ascii:
    ℍ: ["{#H}", "quaternions"],
    ℕ: ["{#N}", "naturals", "N"],
    ℤ: ["{#Z}", "integers", "Z"],
    ℚ: ["{#Q}", "rationals", "Q"],
    ℝ: ["{#R}", "reals", "R"],
    ℂ: ["{#C}", "complex", "C"],
    ℙ: ["{#P}", "prime", "P"],
    ℯ: ["{#e}", "exponential", "e"],
    ⅆ: ["{d}", "differential", "dx"],
    "∎": [null, "proof:end", "qed", "tombstone", "tstone"],
    // no ascii:
    "∞": [null, "infinity"],
    π: [null, "pi"],
    ℏ: [null, "hbar", "planck:reduced"],
    ℇ: [null, "epsilon"],
    ℑ: [null, "Im"],
    ℜ: [null, "Re"],
    ℵ: [null, "aleph"],
    ℶ: [null, "beth"],
    ℷ: [null, "gimel"],
    ℸ: [null, "daleth"]
    // aliasNamespace / aliasAscii helpers removed; leave comments where they were used previously if needed
})

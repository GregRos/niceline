import { shape } from "../../shape/shape"
import arrows from "./arrows"
import brackets from "./brackets"
import marks from "./marks"
import numerals from "./numerals"
import ornaments from "./ornaments"
import punct from "./punct"
import script from "./script"

export default shape({
    ...script,
    ...arrows,
    ...brackets,
    ...marks,
    ...numerals,
    ...ornaments,
    ...punct
})

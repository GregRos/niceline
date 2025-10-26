import { shape } from "../../shape/shape"
import arrows from "./arrows"
import brackets from "./brackets"
import marks from "./marks"
import numerals from "./numerals"
import ornaments from "./ornaments"
import punct from "./punct"
import shapes from "./shapes"
import spaces from "./spaces"

export default shape({
    typo: {
        ...arrows,
        ...brackets,
        ...marks,
        ...numerals,
        ...ornaments,
        ...punct,
        ...shapes,
        ...spaces
    }
})

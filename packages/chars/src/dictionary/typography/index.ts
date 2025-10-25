import { shape } from "../../defs/namespace/shape"
import arrows from "./arrows"
import brackets from "./brackets"
import enclosed from "./enclosed"
import marks from "./marks"
import numerals from "./numerals"
import ornaments from "./ornaments"
import punct from "./punct"
import shapes from "./shapes"
import spaces from "./spaces"

export default shape({
    typography: {
        ...arrows,
        ...brackets,
        ...enclosed,
        ...marks,
        ...numerals,
        ...ornaments,
        ...punct,
        ...shapes,
        ...spaces
    }
})

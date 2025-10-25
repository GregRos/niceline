import { shape } from "../../defs/namespace/shape"
import alchemy from "./alchemy"
import mystic from "./mystic"
import religion from "./religion"

export default shape({
    ...mystic,
    ...religion,
    ...alchemy
})

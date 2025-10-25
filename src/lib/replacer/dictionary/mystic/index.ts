import { shape } from "../../defs/namespace/shape"
import alchemy from "./alchemy"
import astrology from "./astrology"
import mystic from "./mystic"
import religion from "./religion"

export default shape({
    mystic: {
        ...mystic,
        ...religion,
        ...alchemy,
        ...astrology
    }
})

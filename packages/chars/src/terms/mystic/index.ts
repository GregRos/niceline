import { shape } from "../../shape/shape"
import alchemy from "./alchemy"
import astrology from "./astrology"
import magic from "./magic"
import religion from "./religion"

export default shape({
    mystic: {
        ...magic,
        ...religion,
        ...alchemy,
        ...astrology
    }
})

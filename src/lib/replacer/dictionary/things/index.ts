import { shape } from "../../defs/namespace/shape"
import currency from "./currency"
import game from "./game"
import ideograms from "./ideograms"
import music from "./music"
import signs from "./signs"
import tech from "./tech"

export default shape({
    things: {
        ...currency,
        ...game,
        ...ideograms,
        ...music,
        ...signs,
        ...tech
    }
})

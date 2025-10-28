import { shape } from "../../shape/shape"
import circled from "./circled"
import dotted from "./dotted"
import squared from "./squared"

export default shape({
    ...circled,
    ...dotted,
    ...squared
})

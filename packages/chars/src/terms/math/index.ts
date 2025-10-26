import { shape } from "../../shape/shape"
import entities from "./entities"
import geometry from "./geometry"
import greek from "./greek"
import logic_set from "./logic-set"
import operators from "./operators"
import order from "./order"
import script from "./script"

export default shape({
    math: {
        ...entities,
        ...geometry,
        ...greek,
        ...logic_set,
        ...operators,
        ...order,
        ...script
    }
})

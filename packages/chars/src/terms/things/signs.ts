import { shape } from "../../namespace/shape"

export default shape({
    signage: {
        no: {
            "⛔": [null, "entry"],
            "🚫": [null, ""],
            "🚭": [null, "smoking"],
            "🚱": [null, "water"],
            "🚳": [null, "bicycle"],
            "🚷": [null, "pedestrian"],
            "🚯": [null, "litter"]
            // "🚱": [null, "drinking"], // duplicate key
            // "🚷": [null, "foot"] // duplicate key
        },
        "⛛": [null, "yield"],
        car: {
            "⛍": [null, "disabled"],
            "⛐": [null, "sliding"]
        },
        warning: {
            "⚠": [null, "general"]
        },
        lanes: {
            "⛗": [null, "two:way"],
            "⛙": [null, "left:merge"],
            "⛜": [null, "left:closed"],
            "⛚": [null, "slow"],
            "⛌": [null, "crossing"]
        },
        "🚸": [null, "kids"],
        "🚥": [null, "traffic:light", "trafficlight"]
    }
})

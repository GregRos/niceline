import { shape } from "../../shape/shape"

export default shape({
    progress: {
        vblock: {
            "▁": [null, "1/8"],
            "▂": [null, "2/8"],
            "▃": [null, "3/8"],
            "▄": [null, "4/8"],
            "▅": [null, "5/8"],
            "▆": [null, "6/8"],
            "▇": [null, "7/8"],
            "█": [null, "8/8"]
        },
        hblock: {
            "▏": [null, "1/8"],
            "▎": [null, "2/8"],
            "▍": [null, "3/8"],
            "▌": [null, "4/8"],
            "▋": [null, "5/8"],
            "▊": [null, "6/8"],
            "▉": [null, "7/8"],
            "█": [null, "8/8"]
        },
        shade: {
            "░": [null, "1/4"],
            "▒": [null, "2/4"],
            "▓": [null, "3/4"],
            "█": [null, "4/4"]
        },
        quadrant: {
            "▖": [null, "bl", "1/4"],
            "▗": [null, "br", "2/4"],
            "▘": [null, "ul", "3/4"],
            "▝": [null, "ur", "4/4"]
        }
    }
})

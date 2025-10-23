import { named, namespace } from "../../registered"

export const keys = namespace("key", [
    named("⏎", ["return"]),
    named("⇧", ["shift"]),
    named("🄰", ["capslock"]),
    named("⇪", ["capslock:bb"]),
    named("⌫", ["backspace", "delete:left"]),
    named("⌦", ["delete:right"]),
    named("⭾", ["tab"]),
    named("⏏", ["eject"]),
    named("⌘", ["mac:cmd"]),
    named("⌥", ["mac:option"])
])

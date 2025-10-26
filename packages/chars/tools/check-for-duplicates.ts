import { shapeToEntries } from "../src/shape/to-entries"
import all from "../src/terms/all"
import { splat } from "../src/util"
const leaves = shapeToEntries(all)
const seen = new Map<string, string>()
let conflicts = 0
for (const [key, value] of leaves) {
    const compositeKey = splat(key)
    const existing = seen.get(compositeKey)
    if (existing != null) {
        console.error(`🚨 AT ${compositeKey} | ${existing} ⇒ ${value}`)
        conflicts++
    }
    seen.set(compositeKey, value)
}
if (conflicts === 0) {
    console.log("✅ No duplicates found")
} else {
    console.log(`❌ Found ${conflicts} duplicates`)
}

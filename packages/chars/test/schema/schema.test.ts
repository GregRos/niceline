import Ajv, { type ValidateFunction } from "ajv"
import { readFile } from "fs/promises"
let schema: ValidateFunction
declare global {}
const ajv = new Ajv({
    allErrors: true,
    strict: false,
    allowMatchingProperties: true
})
beforeAll(async () => {
    const schemaText = await readFile(
        `${__dirname}/../../terms/chars.schema.json`,
        {
            encoding: "utf-8"
        }
    )
    const schemaObject = JSON.parse(schemaText)

    schema = ajv.compile(schemaObject)
})

it("valid schema", () => {
    expect(schema).toBeDefined()
    schema({
        aa: {
            a: [null, "a"],
            b: ["{string}", "abc"]
        },
        a: [null, "a"]
    })
})

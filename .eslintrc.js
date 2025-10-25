const path = require("path")
module.exports = {
    root: true,
    extends: ["@gregros/eslint-config"],
    parserOptions: {
        "project": "**/tsconfig.json",
    },
    rules: {
        "block-scoped-var": "off"
    }
}

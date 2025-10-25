const path = require("path");
module.exports = {
    root: true,
    extends: ["@gregros/eslint-config"],
    parserOptions: {
        project: [
            path.join(__dirname, "src", "lib", "tsconfig.json"),

            path.join(__dirname, "src", "test", "tsconfig.json"),
            path.join(__dirname, "src", "plugin", "tsconfig.json")

        ]
    },
    rules: {
        "block-scoped-var": "off"
    }
};

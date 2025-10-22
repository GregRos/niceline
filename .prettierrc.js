module.exports = {
    tabWidth: 4,
    arrowParens: "avoid",
    trailingComma: "none",
    printWidth: 100,
    semi: false,
    overrides: [
        {
            files: "*.{yaml,json}",
            options: {
                tabWidth: 2
            }
        }
    ],
    plugins: [
        "prettier-plugin-organize-imports",
        "prettier-plugin-packagejson",
        "prettier-plugin-jsdoc"
    ]
}

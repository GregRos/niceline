In this file:

refactor the current namespace definition as follows. Here is an example of the expected reuslt:

```ts
export default shape({
    ROOT_NAMESPACE_NAME: {
        // has ascii:
        UNICODE_CHAR: ["{ascii repr}", ...aliases],
     `   // used to be namespace("name", ...):
        NAMESPACE_NAME: {
            // has ascii [used to be ascii(...)]
            UNICODE_CHAR: ["{ascii repr}", ...aliases],
            // no ascii [used to be named(...)]
            UNICODE_CHAR_2: [null, ...aliases]
        }
    }
})
```

for aliasNamespace, aliasAscii, etc, just get rid of them and leave a comment.

the resulting structure should not use functions like ascii, named, or namespace at all.
It should just use the shape function to validate.

The parts in capitals are to be replaced with the requisite strings.

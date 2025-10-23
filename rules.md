# Replacement rules
Replacement rules are niceline’s way to giving users access to some Unicode characters, without having to look at big tables or install text replacers. 

Each RR has:
- One or more names
- A value that’s always a single Unicode codepoint.
- An input  that is always specified surrounded in `{...}`

RR names have a tag-based structure. Each name consists of tags separated by `:`. The order of the tags isn’t important. 

For example, `{in:not}` and `{not:in}` always represent the same replacement rule. However, names are case sensitive.

In addition, each tag or combination of tags can also have aliases. For example, `!` is an alias of the `{not}` tag, so `{!:in}` is also fine. This can be shorted to `{!in}`. 

It also has another alias, `nin`. 

Input strings don’t have the `:` -based structure and `:` can be used as a character at any point. They’re supposed to be ascii text that resembles the character. The extent to which this can be achieved varies, and if it can’t be done consistently, something else is used..

For example, `{-->}` is the input for the `→` character. To overlay a slash or “negate” a character, just prefix it with `!`. So a slashed arrow would be `{!-->}`. 

Arrows can go up and down as well. Unfortunately, text only goes sideways on most systems. So up and down arrows are a right arrow with the directional `>` character replaced with one of `^` for up and `v` for down.

For example, a down arrow is `{--v}`, even though that’s not really the right shape. You can also negate it, like `{!--v}`. 

Various heavier arrows can be achieved using:

- `{-->>}` gives a thick barbed arrow.
- `{--|>}` gives a thick triangular arrow.
- `{:>>}` gives an arrowhead.
- `{::>}` gives a thick bookmark/wedge shape.

Each type of shape that can be represented using ASCII art has its own set of conventions.

For arrows, they always consist of:
1. The line characters
2. The arrowhead
3. Sometimes a tail

Arrowheads can be `>>`, `|>`. `:>>` , `^`. 

Lines are always two characters long, which allows them to be more distinctive and so they aren’t confused for math characters.


# Alts
Alternative representations of something will have the tags `b`, `c`, `d` and so forth. For example, the symbol for `mystic:pluto` has 4 alternatives, `mystic:pluto:a`, through `d`. The `:1` alternative is always aliased as the name without any alternatives.


- 
- `
- `

A negation of a character just starts with `!`, like `!-->` which results in the version with a slash.




Their names can be split by the `:` character. The resulting string is both a series of nested namespaces and a set.

This means that the order of the namespaces doesn’t matter
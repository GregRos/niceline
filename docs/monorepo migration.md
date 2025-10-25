monorepo migration

I'm migrating the repo to a monorepo.

# dependency cleanup

Clean up the dependencies in packages/niceline/package.json. Specifically:

-   all lint/formatter dependencies should move to /package.json
-   same with infra tools like shx and husky

Move the dependencies based on their current versions, don't make up your own.

in addition, add the following deps to the root package.j

I want you to generate the package.json of the packages in directories map and trie.

I'm using yarn workspaces.

Use niceline/package.json as a basis.

```yaml
packages/trie:
    name: @niceline/trie
    based on: packages/niceline/package.json
    keywords: none
    private: false

packages/chars:
    name: @niceline/chars
    based on: packages/niceline/package.json
    keywords:
        - unicode
        - pretty
        - string
        - replace
        - math
        - text
    private: false

/package.json:
    workspaces:
        - packages/niceline
        - packages/chars
        - packages/trie

```

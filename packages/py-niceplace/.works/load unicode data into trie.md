# ONLY MODIFY
Files in `py-niceplace`:

- in the niceplace/data/loader/ folder where you'll create the loading script.
- in test/loader (create if needed)

# CONSIDER

- [unicode dictionary to load](../../unicode-dict/terms)
- [format documentation](../../unicode-dict/terms/format.md)

# ONLY DO
Create code to lparse and load Unicode data into a dict.

## Load yaml files
First, load the root YAML file `terms/___.nice.yaml` and parse it.

We define:

```py
type MappingAlias = list[str | null]
type Namespace = dict[str, NamespaceDict | MappingAlias | str]
```

As you parse files, asynchronously load all requirements and deep merge into the namespace based on `<-` rules.

The root folder is `unicode-dict/terms`.

Maintain a dictionary of loaded files (keyed by absolute path) in case something tries to load the same file twice.

The result should be: a `Namespace` type as the above.

## Validate
In a separate file,
## Test
Add a test of this algorithm to `test/loader`.

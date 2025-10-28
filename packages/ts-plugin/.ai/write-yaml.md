Write code that exports the current term definitions in the terms folder.

DO NOT DO PERFORM OTHER TASKS

# Exporting
Use js-yaml, but make sure that the leaf terms are represented with a JSON array, e.g. `["{==>}", "abc"] rather than a YAML bulleted list.

# Preseriving structure
While in the codebase they are combined, using `...`, you should keep the current file structure.

To achieve this, hook into the `shape` function which is called in every file. Put your export code there, parsing the stack trace to get where the file name. 

Place the exported YAML contents under terms with a path relative to the current root (src/terms).

The file names should end in `.nice.yaml`. 

## -> and linking files
In order to link files together, add a special key `"->"`. When a program reads this later, it will resolve it to importing the contents of the specified file into the dictionary at this position.

A value of -> must be a string that starts with:

- `.` to mean relative to the current folder
- `/` to mean relative to the dictionary root (specified at runtime)

It must have one of the extensions:

- .nice.jsonc
- .nice.json
- .nice.yaml


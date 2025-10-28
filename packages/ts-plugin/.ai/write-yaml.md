Write code that exports the current term definitions in the terms folder.

DO NOT DO PERFORM OTHER TASKS

# Exporting
Use js-yaml, but make sure that the leaf terms are represented with a JSON array, e.g. `["{==>}", "abc"] rather than a YAML bulleted list.

# Preseriving structure
You need to keep the current file structure, but discard links between files.

To achieve this, hook into the `shape` function which is called in every file. Put your export code there, parsing the stack trace to get where the file name. 

Place the exported YAML contents under terms with a path relative to the current root (src/terms).

The file names should end in `.nice.yaml`. 

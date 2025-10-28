Change the emitted YAML files by adding links to other files.

DO NOT DO PERFORM OTHER TASKS

# Exporting
Use js-yaml, but make sure that the leaf terms are represented with a JSON array, e.g. `["{==>}", "abc"] rather than a YAML bulleted list.

# Preseriving structure
You need to keep the current file structure, but discard links between files.

To achieve this, hook into the `shape` function which is called in every file. Put your export code there, parsing the stack trace to get where the file name. 

Place the exported YAML contents under terms with a path relative to the current root (src/terms).

The file names should end in `.nice.yaml`. 

## -> and linking files
I have deleted merged files like 
Now create the links between YAML files.

In order to link files together, add a special key `"->"`. When a program reads this later, it will resolve it to importing the contents of the specified file into the dictionary at this position.

A value of -> must be a string that starts with "." to indicate the current folder and have an extension of `.nice.yaml`.



The `->` key should work like `>>` in that contents are merged. It works equivalently to `...`. To see where you should add the `->` files 


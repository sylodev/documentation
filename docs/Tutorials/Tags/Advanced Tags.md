Having fun yet? I certainly am~~n't~~. Now it's time to learn the more intricate and advanced parts of tags - stuff like logic tags, regex, and persistent variables!

## Logic Tags

[{if}](https://docs.atlas.bot/tags/global/if) | [{and}](https://docs.atlas.bot/tags/global/and) | [{or}](https://docs.atlas.bot/tags/global/or)

---

Logic tags enable you to create powerful custom actions with functioning subcommands, error messages, and more! Sounds pretty cool, right? For instance, the [{if}](https://docs.atlas.bot/tags/global/if) tag utilizes conditional parsing - something that is unique to it alone. It will spit out one output if the conditions are met or a different output if they are not. If you'd like to learn more about logic tags, check out our Action Tutorials, where [{if}](https://docs.atlas.bot/tags/global/if) tags are used more extensively.

## Regex Compatible Tags

[find](https://docs.atlas.bot/tags/global/find) | [replace](https://docs.atlas.bot/tags/global/replace)

---

This is where things get interesting. These Atlas tags support regular expressions! Regular expressions are super useful for finding specific strings within your code. If you don't know what that means, you might hold off on using these tags for now but know that it's pretty exciting for those who do!

## Variables

Variables allow you to store strings of information in either volatile or persistent storage. The following tags are for defining and retrieving these variables.

### Temporary Variables

[{set}](https://docs.atlas.bot/tags/global/set) | [{get}](https://docs.atlas.bot/tags/global/get)

---

These tags enable you to set and retrieve variables from volatile or temporary storage. This means that once your code has been parsed, the variable is then discarded.

### Persistent Variables

[{perset}](https://docs.atlas.bot/tags/global/perset) | [{perget}](https://docs.atlas.bot/tags/global/perget)

---

Persistent variables are pretty much the same as temporary variables, except they are kept in permanent storage until they are deleted or overwritten. Useful for times when you need to preserve information between two different actions.

import fs from "fs/promises";
import fetch from "node-fetch";
import { join, resolve } from "path";

const TAGS_SOURCE = "https://raw.githubusercontent.com/sylo-digital/titanscript/main/packages/parser/src/data/tags.json";
const TAGS_DIR = join(resolve(), "./docs/Tags");
const TAG_SYMBOLS = { required: ["<", ">"], optional: ["[", "]"] };

fetch(TAGS_SOURCE).then(async (response) => {
  const tags = await response.json();
  let count = 0;
  for (const tag of tags) {
    const content = [`---\ndescription: ${tag.description}\n---`, `# ${formatUsage(tag)}`];
    if (tag.examples[0]) {
      content.push("## Examples", formatExamples(tag));
    }

    // tag names are formatted as group.tag
    const nameParts = tag.name.split(".");
    // if nameParts doesn't have a second item, the tag doesn't have group
    const globalTag = !nameParts[1];
    // if nameParts does have a second item, use the first item, otherwise use "global" as the group
    const group = !globalTag ? nameParts[0] : "global";
    // if nameParts does have a second item, it's probably the name, if not use the first item
    const name = !globalTag ? nameParts[1] : nameParts[0];
    const path = join(TAGS_DIR, group);
    await fs.mkdir(path, { recursive: true });

    const mergedContent = content.join("\n");
    await fs.writeFile(`${path}/${name}.md`, mergedContent);
    count++;
  }

  console.log(`Wrote ${count} tags.`);
});

function formatUsage(tag) {
  const content = [tag.name];
  const args = tag.args.map((a) => {
    const symbols = a.required ? TAG_SYMBOLS.required : TAG_SYMBOLS.optional;
    const argument = [symbols[0], a.name];
    const defaultValue = a.defaultValue;
    if (defaultValue) argument.push(`=${defaultValue}`);
    argument.push(symbols[1]);
    return argument.join("");
  });

  content.push(...args);
  // gitbook has some problems with markdown in it's titles
  return `{${content.join(";").replace(/</g, "&lt;")}}`;
}

function formatExamples(tag) {
  if (!tag.examples[0]) throw new Error(`"${tag.name}" doesn't any have examples.`);
  const examples = [];
  for (const example of tag.examples) {
    const content = [formatExampleTab("Input", example.input)];
    content.push(formatExampleTab("Output", example.output));
    if (example.note) content.push(formatExampleNote(example.note));
    const mergedContent = content.join("\n");
    examples.push(`{% tabs %}\n${mergedContent}\n{% endtabs %}`);
  }

  return examples.join("\n");
}

function formatExampleTab(title, content) {
  return `{% tab title="${title}" %}\n\`\`\`text\n${content}\n\`\`\`\n{% endtab %}`;
}

function formatExampleNote(content) {
  return `{% hint style="info" %}\n${content}\n{% endhint % }`;
}

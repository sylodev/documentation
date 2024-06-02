import * as astray from "astray";
import * as fs from "fs";
import slugger from "github-slugger"; // same package docusaurus uses to generate slugs
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { dirname, resolve } from "path";
import rrdir from "rrdir";
import { fetch } from "undici";

const TAG_REGEX = /^\{(?<name>[A-z0-9\.]{2,}).*}$/;
const TAGS_MD_DIR = resolve(dirname(import.meta.url.slice(7)), "docs/tags");

/**
 * Cleans a title and removes the heading ### prefix and `code` tags.
 */
const cleanTitle = (input) => {
  return input
    .trim()
    .replace(/^##?#?#?#? /, "")
    .replace(/^\`(.*)\`$/, (match, inner) => inner);
};

async function update(path) {
  const content = await fs.promises.readFile(path, "utf8");
  const ast = fromMarkdown(content);
  const localTags = [];

  astray.walk(ast, {
    heading(node) {
      if (node.children[0]?.type !== "inlineCode") return;
      const value = node.children[0].value;
      const tagMatch = TAG_REGEX.exec(value);
      if (!tagMatch) return;
      const tagName = tagMatch.groups.name;
      const parent = node.path.parent;
      const childIndex = parent.children.indexOf(node);
      const nextHeader = parent.children
        .slice(childIndex + 1)
        .find((child) => child.type === "heading" && child.depth <= node.depth);

      const nextHeaderIndex = nextHeader ? parent.children.indexOf(nextHeader) : -1;

      const betweenCurrentAndNextHeader =
        nextHeaderIndex !== -1
          ? parent.children.slice(childIndex + 1, nextHeaderIndex)
          : parent.children.slice(childIndex + 1);

      const relativeFilePath = path.slice(TAGS_MD_DIR.length + 1).replace(/\.md$/, "");

      const headingValue = toMarkdown({ ...ast, children: [node] });
      const cleanHeading = cleanTitle(headingValue);
      const headingId = slugger.slug(cleanHeading);
      const url = `https://docs.atlas.bot/tags/${relativeFilePath}#${headingId}`;
      const body = toMarkdown({
        ...ast,
        children: betweenCurrentAndNextHeader,
      })
        // ```json is used because docusaurus deosnt support pella, but what we're generating
        // will be consumed by the dashboard which does support pella highlighting.
        .replace(/\`\`\`json/g, `\`\`\`pella`);

      localTags.push({
        id: headingId,
        name: tagName,
        url: url,
        signature: cleanHeading,
        longDescription: body,
      });
    },
  });

  return localTags;
}

const apiRoute = process.env.TAG_API_ROUTE ?? "https://atlas.bot/api/tags";
const remoteTags = await fetch(apiRoute).then((response) => response.json());
const tagsFromFiles = [];
for await (const file of rrdir(TAGS_MD_DIR)) {
  if (!file.path.endsWith(".md")) continue;
  const tagsFromFile = await update(file.path);
  tagsFromFiles.push(...tagsFromFile);
}

for (const remoteTag of remoteTags) {
  const localTag = tagsFromFiles.find((localTag) => {
    if (localTag.name.toLowerCase() === remoteTag.name.toLowerCase()) return true;
    const lowerRemoteAliases = remoteTag.aliases?.map((alias) => alias.toLowerCase());
    if (lowerRemoteAliases?.includes(localTag.name.toLowerCase())) return true;
    return false;
  });

  if (!localTag) {
    console.warn(`Missing documentation for tag {${remoteTag.name}}`);
    continue;
  }

  localTag.shortDescription = remoteTag.description;
  if (remoteTag.description.length > localTag.longDescription?.length - 4) {
    delete localTag.longDescription;
  }

  delete remoteTag.description;
  Object.assign(localTag, remoteTag);
}

fs.writeFileSync("tags.json", JSON.stringify(tagsFromFiles, null, 2));

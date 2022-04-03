import { readFile, writeFile } from "fs/promises";
import { join } from "path";

// for some reason, the npm module used to generate the gitbook summary
// has a few annoying issues, so this script fixes most of them
async function main() {
	const summaryFile = join(process.cwd(), "./docs/SUMMARY.md");
	const content = await readFile(summaryFile);
	const fixedPath = content
		.toString("utf-8")
		// even though the "root" path is specified to be "docs" when generating the summary file
		// it still uses "docs" as the parent directory
		.replace(/docs\//g, "")
		.replace(/Docs/, "Atlas Documentation");
	const array = fixedPath.split("\n");
	array.splice(array.length - 2, 2);
	writeFile(summaryFile, array.join("\n"));
}

main();

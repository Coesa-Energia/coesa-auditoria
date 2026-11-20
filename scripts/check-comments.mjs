import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import parser from "@typescript-eslint/parser";
import postcss from "postcss";

const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"])
  .toString()
  .split("\0")
  .filter(Boolean);
const failures = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const extension = file.split(".").pop();
  let positions = [];

  if (["ts", "tsx", "js", "jsx", "mjs", "cjs"].includes(extension)) {
    positions = parser.parseForESLint(source, {
      comment: true,
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      sourceType: "module",
    }).ast.comments
      .filter((comment) => !/^\*\s*@type\s*\{/.test(comment.value))
      .map((comment) => comment.range[0]);
  } else if (extension === "css") {
    postcss.parse(source).walkComments((comment) => positions.push(comment.source.start.offset));
  } else if (["sh", "yml", "yaml", "example"].includes(extension) || file === ".gitignore" || file === ".githooks/pre-push") {
    let offset = 0;
    for (const line of source.split("\n")) {
      let quote = "";
      for (let index = 0; index < line.length; index++) {
        const char = line[index];
        if (char === quote && line[index - 1] !== "\\") quote = "";
        else if (!quote && (char === "'" || char === '"')) quote = char;
        else if (!quote && char === "#" && (index === 0 || /\s/.test(line[index - 1]))) {
          if (!(offset === 0 && line.startsWith("#!"))) positions.push(offset + index);
          break;
        }
      }
      offset += line.length + 1;
    }
  }

  for (const position of positions) {
    failures.push(`${file}:${source.slice(0, position).split("\n").length}`);
  }
}

if (failures.length) {
  console.error(`Comments are forbidden in source and configuration:\n${failures.join("\n")}`);
  process.exitCode = 1;
}

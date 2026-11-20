import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import parser from "@typescript-eslint/parser";
import ts from "typescript";

const sourceExtensions = new Set(["ts", "tsx", "js", "jsx", "mjs", "cjs", "css", "json", "sh", "yml", "yaml", "example"]);
const hashFiles = new Set([".gitignore", ".githooks/pre-push"]);
const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"])
  .toString()
  .split("\0")
  .filter(Boolean);
const failures = [];

for (const file of files) {
  const extension = file.split(".").pop();
  if ((!sourceExtensions.has(extension) && !hashFiles.has(file)) || !existsSync(file)) continue;
  const source = readFileSync(file, "utf8");
  const positions = [];

  if (["ts", "tsx", "js", "jsx", "mjs", "cjs"].includes(extension)) {
    const comments = parser.parseForESLint(source, {
      filePath: file,
      comment: true,
      ecmaVersion: "latest",
      sourceType: "module",
    }).ast.comments;
    positions.push(...comments
      .filter((comment) => !/^\*\s*@type\s*\{/.test(comment.value))
      .map((comment) => comment.range[0]));
  } else if (extension === "json") {
    const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.Standard, source);
    for (let token = scanner.scan(); token !== ts.SyntaxKind.EndOfFileToken; token = scanner.scan()) {
      if (token === ts.SyntaxKind.SingleLineCommentTrivia || token === ts.SyntaxKind.MultiLineCommentTrivia) {
        positions.push(scanner.getTokenPos());
      }
    }
  } else if (extension === "css") {
    let quote = "";
    for (let index = 0; index < source.length; index++) {
      const char = source[index];
      if (quote) {
        if (char === "\\") index++;
        else if (char === quote) quote = "";
      } else if (char === '"' || char === "'") {
        quote = char;
      } else if (char === "/" && source[index + 1] === "*") {
        positions.push(index);
        index = source.indexOf("*/", index + 2);
        if (index < 0) throw new Error(`Unclosed CSS comment in ${file}`);
        index++;
      }
    }
  } else {
    const initialOnly = file === ".gitignore" || extension === "example";
    const yaml = extension === "yml" || extension === "yaml";
    let quote = "";
    let blockIndent = -1;
    let offset = 0;
    for (const line of source.split("\n")) {
      const indent = line.length - line.trimStart().length;
      if (yaml && blockIndent >= 0 && (line.trim() === "" || indent > blockIndent)) {
        offset += line.length + 1;
        continue;
      }
      blockIndent = -1;
      for (let index = 0; index < line.length; index++) {
        const char = line[index];
        if (quote) {
          if (char === "\\" && !yaml) index++;
          else if (char === quote) quote = "";
        } else if (char === "'" || char === '"') {
          quote = char;
        } else if (char === "#" && (index === 0 || /\s/.test(line[index - 1]))) {
          if (!(offset === 0 && line.startsWith("#!")) && (!initialOnly || line.slice(0, index).trim() === "")) {
            positions.push(offset + index);
          }
          break;
        }
      }
      if (yaml) {
        quote = "";
        if (/:[ \t]*[|>][+-]?[ \t]*(?:#.*)?$/.test(line)) blockIndent = indent;
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

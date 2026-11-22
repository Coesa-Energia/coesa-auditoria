import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import parser from "@typescript-eslint/parser";
import ts from "typescript";

const sourceExtensions = new Set(["ts", "tsx", "js", "jsx", "mjs", "cjs", "css", "json", "sh", "yml", "yaml"]);
const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"])
  .toString()
  .split("\0")
  .filter(Boolean);
const failures = [];

for (const file of files) {
  const extension = file.split(".").pop();
  if (!sourceExtensions.has(extension) && file !== ".gitignore" && file !== ".githooks/pre-push") continue;
  if (!existsSync(file)) continue;
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
    let offset = 0;
    for (const [lineNumber, line] of source.split("\n").entries()) {
      let quote = "";
      for (let index = 0; index < line.length; index++) {
        if (line[index] === "\\" && quote !== "'") { index++; continue; }
        if (quote) { if (line[index] === quote) quote = ""; continue; }
        if (line[index] === "'" || line[index] === '"') { quote = line[index]; continue; }
        if (line[index] === "#" && (index === 0 || (file !== ".gitignore" && /\s/.test(line[index - 1])))) {
          if (!(lineNumber === 0 && index === 0 && line.startsWith("#!") && (extension === "sh" || file === ".githooks/pre-push"))) positions.push(offset + index);
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

import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const checker = fileURLToPath(new URL("./check-comments.mjs", import.meta.url));

test("comment lint accepts code and tool directives, then rejects real comments", () => {
  const cwd = mkdtempSync(join(tmpdir(), "coesa-comment-lint-"));
  const write = (file, source) => writeFileSync(join(cwd, file), source);
  const check = () => spawnSync(process.execPath, [checker], { cwd, encoding: "utf8" });

  try {
    execFileSync("git", ["init", "-q"], { cwd });
    write("valid.ts", "const cast = <number>42; const id = <T>(value:T)=>value;\n");
    write("valid.tsx", 'const url = "https://example.com"; export const el = <div />;\n');
    write("valid.css", 'a { content: "/* text */"; }\n');
    write("missing.ts", "export const missing = true;\n");
    write(".gitignore", "build#cache\n\\#literal\n");
    execFileSync("git", ["add", "missing.ts"], { cwd });
    unlinkSync(join(cwd, "missing.ts"));
    assert.equal(check().status, 0);

    write("invalid.tsx", "export const el = <div>{/* JSX */}</div>;\n");
    write("invalid.css", "a { color: red /* CSS */ !important; }\n");
    write("invalid.json", '{"url":"https://example.com"}\n// JSONC\n');
    write("valid.sh", "#!/usr/bin/env bash\nprintf '%s\\n' '# literal'\n");
    write("valid.yml", 'url: "https://example.com/#anchor"\n');
    write("invalid.sh", "echo ready # shell comment\n");
    write("invalid.yml", "run: echo ready # yaml comment\n");
    write("invalid-shebang.yml", "#! yaml comment\nname: CI\n");
    write(".gitignore", "# section heading\n");
    const result = check();
    assert.equal(result.status, 1);
    for (const file of ["invalid.tsx", "invalid.css", "invalid.json", "invalid.sh", "invalid.yml", "invalid-shebang.yml", ".gitignore"]) {
      assert.match(result.stderr, new RegExp(`${file.replace(".", "\\.")}:`));
    }
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

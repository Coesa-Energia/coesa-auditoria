# Delivery rules

- Use Node 24 (`.nvmrc`).
- Run `mac-gate npm run preflight:ci` before every push (typecheck/lint; `next build` is validated by the Vercel Preview — never on the Mac or in CI).
- Install hooks with `bash scripts/install-hooks.sh`.
- Never use `--no-verify`, `continue-on-error`, `|| true`, skipped checks, or notification muting.
- Never push directly to `main`; use a pull request and verify CI and Vercel on the same SHA.

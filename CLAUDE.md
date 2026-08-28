# Delivery rules

- Use Node 24 (`.nvmrc`).
- Run `npm run preflight` before every push.
- Install hooks with `bash scripts/install-hooks.sh`.
- Never use `--no-verify`, `continue-on-error`, `|| true`, skipped checks, or notification muting.
- Never push directly to `main`; use a pull request and verify CI and Vercel on the same SHA.

# Delivery rules

- Use Node 24 (`.nvmrc`).
- Run `mac-gate npm run preflight:ci` before every push (typecheck/lint; `next build` is validated by the Vercel Preview — never on the Mac or in CI).
- Install the versioned pre-push hook with `npm run hooks:install`.
- Never bypass, skip, weaken, or silence a failing gate.
- Never push directly to `main`; use a pull request and verify CI and Vercel on the same SHA.

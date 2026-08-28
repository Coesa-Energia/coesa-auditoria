# Delivery rules

- Use Node 24 (`.nvmrc`).
- Run `npm run preflight` before every push.
- Install the versioned pre-push hook with `npm run hooks:install`.
- Never bypass, skip, weaken, or silence a failing gate.
- Never push directly to `main`; use a pull request and verify CI and Vercel on the same SHA.

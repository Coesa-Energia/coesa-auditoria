# ADR 0001: Site behavior behind removed comments

Status: accepted

## Lead routing

Before submitting the audit form, calls to action lead to `/#auditoria`. Direct WhatsApp contact is shown on the two thank-you pages after submission. This keeps the form as the first contact path.

## Embedded form sizing

The external form sends its height through `postMessage` while its script is parsed, often before React hydration. A listener installed only in `useEffect` can miss that first message and leave the iframe at 620px with internal scrolling. The inline bootstrap listener receives it early and stores the last height; React continues from that value. Height is written to the iframe element so a rendered `style` prop does not overwrite a pre-hydration update. The rounded wrapper masks white iframe corners.

## Search and performance

The thank-you pages use `robots: { index: false, follow: false }` so they do not compete with the landing page. The Vercel default host sends `X-Robots-Tag: noindex, nofollow` to avoid duplicate indexing. The hero heading renders as plain markup without an opacity animation so the LCP element is visible immediately.

## Delivery gate

The pre-push hook runs typecheck and lint through `mac-gate` on macOS. Vercel Preview performs the Next.js build. The GitHub CI job runs the same `preflight:ci` command without a build.

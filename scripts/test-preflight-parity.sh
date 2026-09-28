#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

grep -q 'npm run preflight:ci' "$ROOT/.githooks/pre-push"
grep -q 'npm run preflight:ci' "$ROOT/.github/workflows/ci.yml"
grep -q 'npm run lint' "$ROOT/scripts/preflight.sh"
grep -q 'npm run build' "$ROOT/scripts/preflight.sh"
grep -q 'v24\.\*' "$ROOT/scripts/preflight.sh"
grep -q 'max-old-space-size=4096' "$ROOT/scripts/preflight.sh"
grep -q 'PRIMARY_ROOT/.githooks' "$ROOT/scripts/install-hooks.sh"

echo "Preflight parity verified."

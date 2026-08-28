#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ "$(node --version)" != v24.* ]]; then
  echo "Node 24 is required; found $(node --version)." >&2
  exit 1
fi

export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=4096}"

npm run test:preflight-parity
npm run lint
npm run build

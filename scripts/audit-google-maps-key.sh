#!/usr/bin/env bash
set -euo pipefail

pattern='AIza[0-9A-Za-z_-]{35}'

hits="$(git rev-list --all | while read -r rev; do
  git grep -nE "$pattern" "$rev" -- . ':!node_modules' || true
done)"

if [[ -z "$hits" ]]; then
  echo "No Google API key pattern found in git history."
  exit 0
fi

echo "Potential Google API key exposures found in git history:"
echo "$hits"
echo
echo "Action required:" 
echo "1) Rotate/revoke exposed keys in Google Cloud Console immediately."
echo "2) Rewrite git history if the key is from this repository."
echo "3) Keep only placeholders in tracked files (e.g. .env.example)."
exit 1

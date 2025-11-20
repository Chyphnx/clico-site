#!/usr/bin/env bash
set -e

cd "$HOME/clico-site"

echo "=== GIT STATUS (BEFORE) ==="
git status -sb

git add .

if ! git diff --cached --quiet; then
  msg="GX-13 deploy $(date '+%Y-%m-%d %H:%M:%S')"
  echo "Committing: $msg"
  git commit -m "$msg"
else
  echo "No staged changes – skipping commit."
fi

echo
echo "=== PUSH TO ORIGIN/MAIN (TRIGGERS VERCEL BUILD) ==="
git push

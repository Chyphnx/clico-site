$ErrorActionPreference = 'Stop'

cd "$env:USERPROFILE\clico-site"

Write-Host "=== GIT STATUS (BEFORE) ==="
git status -sb

git add .

git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    $msg = "GX-13 deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Write-Host "Committing: $msg"
    git commit -m $msg | Out-Null
} else {
    Write-Host "No staged changes – skipping commit."
}

Write-Host "`n=== PUSH TO ORIGIN/MAIN (TRIGGERS VERCEL BUILD) ==="
git push

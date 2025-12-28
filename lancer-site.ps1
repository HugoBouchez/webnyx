# Script PowerShell pour lancer le site web
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Lancement du site web..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "Installation des dépendances..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "Démarrage du serveur de développement..." -ForegroundColor Green
Write-Host ""
Write-Host "Le site sera accessible sur: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

npm run dev


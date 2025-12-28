@echo off
echo ========================================
echo   Lancement du site web...
echo ========================================
echo.

REM Vérifier si node_modules existe
if not exist "node_modules\" (
    echo Installation des dependances...
    call npm install
    echo.
)

echo Démarrage du serveur de développement...
echo.
echo Le site sera accessible sur: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arrêter le serveur
echo.

call npm run dev

pause


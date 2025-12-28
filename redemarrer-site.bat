@echo off
echo ========================================
echo   Redemarrage du site web...
echo ========================================
echo.

REM Arrêter les processus Node.js existants
echo Arrêt des processus Node.js existants...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM Nettoyer le cache Next.js
echo Nettoyage du cache...
if exist ".next\" rmdir /s /q ".next\"
if exist "node_modules\.cache\" rmdir /s /q "node_modules\.cache\"

echo.
echo Installation des dependances...
call npm install

echo.
echo Demarrage du serveur de developpement...
echo.
echo Le site sera accessible sur: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

call npm run dev

pause


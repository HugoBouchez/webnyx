@echo off
echo Copie de l'image pour le site vitrine entreprise...
copy "Image\Image de site Web.jpg" "public\site-vitrine-image.jpg"
if exist "public\site-vitrine-image.jpg" (
    echo.
    echo SUCCES: L'image a ete copiee dans public\site-vitrine-image.jpg
    echo Vous pouvez maintenant rafraichir votre navigateur.
) else (
    echo.
    echo ERREUR: La copie a echoue. Verifiez que le fichier existe dans le dossier Image.
    pause
)


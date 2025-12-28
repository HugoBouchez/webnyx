@echo off
copy "Image\Image de site Web.jpg" "public\site-vitrine-image.jpg"
if %errorlevel% equ 0 (
    echo Image copiee avec succes dans public\site-vitrine-image.jpg
) else (
    echo Erreur lors de la copie
    pause
)


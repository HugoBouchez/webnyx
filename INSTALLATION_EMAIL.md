# 📦 Installation rapide - EmailJS

## Étape 1 : Installer le package

Exécutez cette commande dans votre terminal :

```bash
npm install @emailjs/browser
```

**Si vous avez une erreur PowerShell :**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Puis réessayez `npm install @emailjs/browser`

## Étape 2 : Suivre la configuration

Consultez le fichier `CONFIGURATION_EMAIL.md` pour la configuration complète.

## Résumé rapide

1. Créer un compte sur [emailjs.com](https://www.emailjs.com)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template d'email
4. Ajouter les variables d'environnement dans `.env.local` :
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
   ```
5. Redémarrer le serveur : `npm run dev`

C'est tout ! 🎉


# 📧 Configuration de l'Envoi d'Emails

## Configuration avec Resend (Recommandé)

Le formulaire de contact utilise **Resend** pour envoyer les emails. C'est gratuit jusqu'à 100 emails/jour.

### Étapes de configuration :

1. **Créer un compte Resend**
   - Allez sur https://resend.com
   - Créez un compte gratuit
   - Vérifiez votre email

2. **Obtenir votre clé API**
   - Connectez-vous à votre compte Resend
   - Allez dans "API Keys"
   - Cliquez sur "Create API Key"
   - Donnez-lui un nom (ex: "Portfolio Contact")
   - Copiez la clé API générée

3. **Configurer la variable d'environnement**
   - Créez un fichier `.env.local` à la racine du projet
   - Ajoutez votre clé API :
   ```
   RESEND_API_KEY=re_votre_cle_api_ici
   ```

4. **Vérifier le domaine (optionnel mais recommandé)**
   - Dans Resend, allez dans "Domains"
   - Ajoutez votre domaine (ou utilisez le domaine par défaut `onboarding@resend.dev` pour les tests)
   - Suivez les instructions pour vérifier votre domaine

5. **Redémarrer le serveur**
   ```bash
   npm run dev
   ```

### Test

1. Allez sur la page `/contact`
2. Remplissez le formulaire
3. Envoyez le message
4. Vous devriez recevoir l'email sur `Hugo.bouchez88@gmail.com`

## Alternative : SendGrid

Si vous préférez utiliser SendGrid :

1. Installez SendGrid :
   ```bash
   npm install @sendgrid/mail
   ```

2. Modifiez `app/api/contact/route.ts` pour utiliser SendGrid au lieu de Resend

3. Ajoutez dans `.env.local` :
   ```
   SENDGRID_API_KEY=votre_clé_sendgrid
   ```

## Dépannage

### L'email ne s'envoie pas ?

1. Vérifiez que `RESEND_API_KEY` est bien défini dans `.env.local`
2. Vérifiez que le fichier `.env.local` est à la racine du projet
3. Redémarrez le serveur après avoir ajouté la variable
4. Vérifiez les logs dans la console du serveur
5. Vérifiez votre compte Resend pour voir les emails envoyés

### Erreur "Invalid API key" ?

- Vérifiez que vous avez copié la clé API complète
- Assurez-vous qu'il n'y a pas d'espaces avant/après la clé
- Vérifiez que vous utilisez la bonne clé API dans Resend

## Note

En développement local, si Resend n'est pas configuré, le message sera loggé dans la console mais l'utilisateur verra quand même un message de succès. En production, configurez toujours Resend pour que les emails soient réellement envoyés.


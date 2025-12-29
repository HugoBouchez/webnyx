# 📧 Configuration de l'envoi d'emails

Ce guide vous explique comment configurer l'envoi d'emails pour le formulaire de contact.

## 🎯 Solution utilisée : EmailJS

EmailJS est un service qui permet d'envoyer des emails directement depuis le navigateur, sans avoir besoin d'un serveur backend. C'est parfait pour les sites statiques déployés sur GitHub Pages, Netlify, Vercel, etc.

### ✅ Avantages
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Fonctionne avec les sites statiques
- ✅ Configuration simple
- ✅ Pas besoin de serveur backend
- ✅ Sécurisé (clés API)

---

## 📋 Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Créer un service email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé pour commencer)
   - **Outlook**
   - **Yahoo**
   - Ou un service SMTP personnalisé

4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_xxxxx`)

### 3. Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

**Nom du template :** `contact_form`

**Sujet :**
```
{{subject}} - Message de {{from_name}}
```

**Contenu HTML :**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
    Nouveau message de contact
  </h2>
  
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <p style="margin: 10px 0;"><strong>Nom:</strong> {{from_name}}</p>
    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
    <p style="margin: 10px 0;"><strong>Sujet:</strong> {{subject}}</p>
    <p style="margin: 10px 0;"><strong>Date:</strong> {{date}}</p>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
    <h3 style="color: #333; margin-top: 0;">Message:</h3>
    <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
    <p>Ce message a été envoyé depuis le formulaire de contact de votre site web.</p>
    <p><strong>Pour répondre:</strong> Cliquez simplement sur "Répondre" dans votre client email.</p>
  </div>
</body>
</html>
```

**Contenu texte (version plain text) :**
```
Nouveau message de contact

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}
Date: {{date}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de votre site web.
```

4. **Important :** Dans les paramètres du template, configurez :
   - **Reply-To:** `{{reply_to}}` (pour pouvoir répondre directement)
   - **To Email:** Votre adresse email (ex: `Hugo.bouchez88@gmail.com`)

5. Notez le **Template ID** (ex: `template_xxxxx`)

### 4. Obtenir votre clé publique

1. Allez dans **"Account"** → **"General"**
2. Trouvez votre **Public Key** (ex: `xxxxxxxxxxxxx`)
3. Notez-la

### 5. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**⚠️ Important :** 
- Remplacez les valeurs `xxxxx` par vos vraies valeurs
- Le préfixe `NEXT_PUBLIC_` est obligatoire pour que les variables soient accessibles côté client
- Ne commitez **JAMAIS** ce fichier dans Git (il est déjà dans `.gitignore`)

### 6. Redémarrer le serveur de développement

```bash
npm run dev
```

---

## 🚀 Déploiement en production

### Pour GitHub Pages / Sites statiques

Les variables d'environnement doivent être configurées différemment car les sites statiques n'ont pas accès aux variables d'environnement serveur.

#### Option 1 : Variables d'environnement publiques (recommandé pour EmailJS)

EmailJS utilise des clés publiques qui sont conçues pour être exposées côté client. C'est sécurisé car :
- Les clés publiques ont des limites de taux
- EmailJS gère la sécurité côté serveur
- Vous pouvez limiter les domaines autorisés

**Configuration dans GitHub Actions :**

Modifiez `.github/workflows/deploy.yml` pour ajouter les variables :

```yaml
env:
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
```

Puis dans GitHub :
1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Ajoutez les 3 secrets :
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

#### Option 2 : Configuration directe dans le code (non recommandé)

Si vous préférez, vous pouvez modifier directement `lib/emailService.ts` :

```typescript
const serviceId = 'service_xxxxx' // Remplacez par votre Service ID
const templateId = 'template_xxxxx' // Remplacez par votre Template ID
const publicKey = 'xxxxxxxxxxxxx' // Remplacez par votre Public Key
```

⚠️ **Note :** Cette méthode expose vos clés dans le code source. C'est acceptable pour EmailJS (clés publiques), mais moins propre.

### Pour Vercel / Netlify

1. Allez dans les **Settings** de votre projet
2. Ajoutez les variables d'environnement dans la section **Environment Variables**
3. Redéployez votre site

---

## 🔒 Sécurité et anti-spam

### Protection intégrée

Le formulaire inclut plusieurs protections :

1. **Validation des champs** : Tous les champs sont requis et validés
2. **Validation de l'email** : Format email vérifié
3. **Longueur minimale du message** : Au moins 10 caractères
4. **Rate limiting** : EmailJS limite automatiquement les envois

### Protection supplémentaire (optionnelle)

Vous pouvez ajouter un **honeypot field** (champ invisible pour piéger les bots) :

1. Ajoutez un champ caché dans le formulaire :
```tsx
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```

2. Vérifiez dans `handleSubmit` :
```typescript
if (formData.website) {
  // C'est un bot, ignorez la soumission
  return
}
```

---

## 🧪 Tester l'envoi d'emails

1. Remplissez le formulaire de contact sur votre site
2. Cliquez sur "Envoyer le message"
3. Vérifiez votre boîte email (et les spams si nécessaire)
4. L'email devrait arriver avec :
   - Le nom de l'expéditeur
   - Son email (dans le Reply-To)
   - Le sujet
   - Le message

---

## ❌ Dépannage

### L'email n'arrive pas

1. **Vérifiez les variables d'environnement** : Assurez-vous qu'elles sont correctement configurées
2. **Vérifiez la console du navigateur** : Ouvrez les outils de développement (F12) et regardez les erreurs
3. **Vérifiez les spams** : L'email peut être dans le dossier spam
4. **Vérifiez EmailJS Dashboard** : Allez dans "Logs" pour voir les tentatives d'envoi

### Erreur "EmailJS non configuré"

- Vérifiez que toutes les variables d'environnement commencent par `NEXT_PUBLIC_`
- Redémarrez le serveur de développement après avoir ajouté les variables
- Vérifiez que le fichier `.env.local` est à la racine du projet

### Erreur "Service not found"

- Vérifiez que le Service ID est correct
- Assurez-vous que le service est actif dans EmailJS Dashboard

### Erreur "Template not found"

- Vérifiez que le Template ID est correct
- Assurez-vous que le template est publié (pas en brouillon)

---

## 📊 Limites du plan gratuit EmailJS

- **200 emails/mois** (gratuit)
- **2 services email** (gratuit)
- **5 templates** (gratuit)

Si vous dépassez ces limites, vous pouvez :
- Passer au plan payant EmailJS
- Utiliser une alternative (Formspree, Resend avec serverless function, etc.)

---

## 🔄 Alternative : Resend avec Serverless Function

Si vous préférez utiliser Resend (que vous avez déjà dans le projet), vous pouvez créer une fonction serverless sur Vercel ou Netlify :

1. Créez un fichier `api/send-email.js` dans votre projet
2. Déployez sur Vercel/Netlify (pas GitHub Pages)
3. Modifiez le formulaire pour appeler cette fonction

**Note :** Cette méthode nécessite un hébergement qui supporte les fonctions serverless, ce qui n'est pas le cas de GitHub Pages.

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Consultez la [documentation EmailJS](https://www.emailjs.com/docs/)
2. Vérifiez les logs dans EmailJS Dashboard
3. Contactez le support EmailJS si nécessaire

---

## ✅ Checklist de configuration

- [ ] Compte EmailJS créé
- [ ] Service email configuré (Gmail, Outlook, etc.)
- [ ] Template d'email créé avec les bonnes variables
- [ ] Public Key récupérée
- [ ] Variables d'environnement configurées dans `.env.local`
- [ ] Variables d'environnement configurées pour la production (GitHub Secrets, Vercel, etc.)
- [ ] Test d'envoi réussi
- [ ] Email reçu avec le bon format
- [ ] Reply-To fonctionne correctement

---

**🎉 Félicitations !** Votre formulaire de contact est maintenant configuré pour envoyer des emails en production !


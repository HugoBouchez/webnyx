# 🚀 Guide Rapide - Configuration EmailJS

## ✅ Ce qui est déjà fait

- ✅ Package `@emailjs/browser` installé
- ✅ Code du service email créé (`lib/emailService.ts`)
- ✅ Formulaire de contact configuré
- ✅ Fichier `.env.local` créé avec votre Public Key
- ✅ Templates HTML et texte créés

## 📋 Ce qu'il vous reste à faire

### Étape 1 : Créer le template dans EmailJS

1. **Connectez-vous** à [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)

2. Allez dans **"Email Templates"** → **"Create New Template"**

3. **Nom du template :** `contact_form`

4. **Sujet de l'email :**
   ```
   {{subject}} - Message de {{from_name}}
   ```

5. **Contenu HTML :**
   - Ouvrez le fichier `TEMPLATE_EMAILJS.html` dans votre éditeur
   - Copiez tout le contenu
   - Collez-le dans l'éditeur HTML du template EmailJS

6. **Contenu texte (plain text) :**
   - Ouvrez le fichier `TEMPLATE_EMAILJS_TEXT.txt`
   - Copiez tout le contenu
   - Collez-le dans l'éditeur texte du template

7. **Paramètres du template :**
   - **To Email:** `Hugo.bouchez88@gmail.com`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{reply_to}}` ⚠️ **IMPORTANT**

8. **Sauvegardez** le template

9. **Copiez le Template ID** (format: `template_xxxxx`)

### Étape 2 : Récupérer le Service ID

1. Allez dans **"Email Services"** dans le menu EmailJS
2. Cliquez sur le service que vous avez créé
3. **Copiez le Service ID** (format: `service_xxxxx`)

### Étape 3 : Mettre à jour le fichier .env.local

Ouvrez le fichier `.env.local` à la racine du projet et complétez-le :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=C0pXOsSRR4ZjvK03i

# Collez votre Service ID ici (format: service_xxxxx)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id_ici

# Collez votre Template ID ici (format: template_xxxxx)
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id_ici
```

### Étape 4 : Redémarrer le serveur

1. **Arrêtez** le serveur (Ctrl+C dans le terminal)
2. **Relancez** : `npm run dev`
3. **Testez** le formulaire de contact sur `http://localhost:3000/contact`

---

## 🧪 Tester l'envoi

1. Remplissez le formulaire de contact
2. Cliquez sur "Envoyer le message"
3. Vérifiez votre boîte email `Hugo.bouchez88@gmail.com`
4. L'email devrait arriver avec toutes les informations du formulaire

---

## ⚠️ Notes importantes

- **Private Key :** La private key que vous avez fournie n'est pas nécessaire pour le fonctionnement. EmailJS utilise uniquement la Public Key côté client.
- **Reply-To :** Assurez-vous que le Reply-To est bien configuré à `{{reply_to}}` dans le template pour pouvoir répondre directement aux emails.
- **Variables d'environnement :** Le fichier `.env.local` est déjà dans `.gitignore`, donc il ne sera pas commité (sécurité).

---

## ❌ Si ça ne fonctionne pas

1. **Vérifiez la console du navigateur** (F12) pour voir les erreurs
2. **Vérifiez que les IDs sont corrects** dans `.env.local`
3. **Vérifiez que le serveur a été redémarré** après modification de `.env.local`
4. **Vérifiez les logs EmailJS** dans le dashboard pour voir les tentatives d'envoi

---

**🎉 Une fois ces étapes terminées, votre formulaire de contact fonctionnera !**


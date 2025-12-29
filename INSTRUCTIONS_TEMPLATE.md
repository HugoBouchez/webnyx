# 📧 Instructions pour créer le template EmailJS

## Étape 1 : Créer le template dans EmailJS

1. Connectez-vous à votre compte EmailJS : [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)

2. Allez dans **"Email Templates"** dans le menu de gauche

3. Cliquez sur **"Create New Template"**

4. Donnez un nom au template : `contact_form` (ou un nom de votre choix)

## Étape 2 : Configurer le template

### Sujet de l'email :
```
{{subject}} - Message de {{from_name}}
```

### Contenu HTML :
Copiez-collez le contenu du fichier `TEMPLATE_EMAILJS.html` dans l'éditeur HTML du template.

### Contenu texte (version plain text) :
Copiez-collez le contenu du fichier `TEMPLATE_EMAILJS_TEXT.txt` dans l'éditeur texte du template.

## Étape 3 : Configurer les paramètres

1. Dans la section **"Settings"** du template :
   - **To Email:** `Hugo.bouchez88@gmail.com`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{reply_to}}` (IMPORTANT pour pouvoir répondre directement)

2. Cliquez sur **"Save"** pour sauvegarder le template

## Étape 4 : Récupérer le Template ID

1. Une fois le template sauvegardé, vous verrez son **Template ID** (format: `template_xxxxx`)
2. Copiez ce Template ID

## Étape 5 : Récupérer le Service ID

1. Allez dans **"Email Services"** dans le menu de gauche
2. Cliquez sur le service que vous avez créé
3. Vous verrez le **Service ID** (format: `service_xxxxx`)
4. Copiez ce Service ID

## Étape 6 : Mettre à jour le fichier .env.local

Ouvrez le fichier `.env.local` à la racine du projet et remplacez les valeurs vides :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx  # Collez votre Service ID ici
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx  # Collez votre Template ID ici
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=C0pXOsSRR4ZjvK03i  # Déjà configuré
```

## Étape 7 : Redémarrer le serveur

1. Arrêtez le serveur de développement (Ctrl+C)
2. Relancez : `npm run dev`
3. Testez le formulaire de contact !

---

## ✅ Checklist

- [ ] Template créé dans EmailJS
- [ ] Sujet configuré avec `{{subject}} - Message de {{from_name}}`
- [ ] Contenu HTML copié depuis `TEMPLATE_EMAILJS.html`
- [ ] Contenu texte copié depuis `TEMPLATE_EMAILJS_TEXT.txt`
- [ ] To Email configuré : `Hugo.bouchez88@gmail.com`
- [ ] Reply To configuré : `{{reply_to}}`
- [ ] Template sauvegardé
- [ ] Template ID copié
- [ ] Service ID copié
- [ ] Fichier `.env.local` mis à jour avec les IDs
- [ ] Serveur redémarré
- [ ] Test d'envoi réussi

---

**Note :** La Private Key que vous avez fournie n'est pas nécessaire pour le fonctionnement côté client. EmailJS utilise uniquement la Public Key pour l'authentification depuis le navigateur.


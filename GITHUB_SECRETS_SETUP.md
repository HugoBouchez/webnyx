# 🔐 Configuration des Secrets GitHub pour EmailJS

## ⚠️ IMPORTANT : À faire AVANT le déploiement

Pour que les emails fonctionnent en production sur GitHub Pages, vous devez configurer les secrets GitHub.

## 📋 Étapes à suivre

### 1. Aller dans les Settings du dépôt GitHub

1. Allez sur votre dépôt GitHub : `https://github.com/HugoBouchez/webnyx`
2. Cliquez sur **"Settings"** (en haut du dépôt)
3. Dans le menu de gauche, cliquez sur **"Secrets and variables"** → **"Actions"**

### 2. Ajouter les 3 secrets

Cliquez sur **"New repository secret"** et ajoutez ces 3 secrets :

#### Secret 1 : EMAILJS_PUBLIC_KEY
- **Name :** `EMAILJS_PUBLIC_KEY`
- **Secret :** `C0pXOsSRR4ZjvK03i`

#### Secret 2 : EMAILJS_SERVICE_ID
- **Name :** `EMAILJS_SERVICE_ID`
- **Secret :** `service_777`

#### Secret 3 : EMAILJS_TEMPLATE_ID
- **Name :** `EMAILJS_TEMPLATE_ID`
- **Secret :** `template_yzlvmc1`

### 3. Vérifier le workflow

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) a été mis à jour pour utiliser ces secrets automatiquement.

### 4. Déclencher un nouveau déploiement

Une fois les secrets ajoutés :

1. Allez dans l'onglet **"Actions"** de votre dépôt
2. Le workflow devrait se déclencher automatiquement après le push
3. Si ce n'est pas le cas, cliquez sur **"Deploy to GitHub Pages"** → **"Run workflow"**

## ✅ Vérification

Après le déploiement :

1. Allez sur votre site : `https://HugoBouchez.github.io/webnyx/contact`
2. Testez le formulaire de contact
3. Vérifiez votre boîte email : `hugo.bouchez88@gmail.com`

## 🔍 Si ça ne fonctionne pas

1. Vérifiez que les secrets sont bien configurés dans GitHub
2. Vérifiez les logs du workflow dans l'onglet "Actions"
3. Vérifiez la console du navigateur (F12) pour voir les erreurs
4. Vérifiez les logs EmailJS dans le dashboard

---

**Note :** Les secrets GitHub sont sécurisés et ne sont jamais exposés dans le code source. Ils sont uniquement disponibles pendant le build.


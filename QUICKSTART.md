# 🚀 Démarrage Rapide

## Installation en 3 étapes

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## ⚙️ Configuration rapide

### Personnaliser les informations de contact

1. Modifiez `components/Footer.tsx` :
   - Email
   - Liens réseaux sociaux
   - Numéro de téléphone

2. Modifiez `app/contact/page.tsx` :
   - Email de contact
   - Numéro de téléphone
   - Localisation

### Ajouter vos projets au portfolio

Modifiez le tableau `portfolioProjects` dans `app/portfolio/page.tsx` :

```typescript
{
  title: 'Votre Projet',
  description: 'Description du projet',
  image: '/assets/portfolio/votre-image.jpg', // Placez l'image dans public/assets/portfolio/
  url: 'https://votre-site.com',
}
```

### Configurer le formulaire de contact (optionnel)

1. Créez un fichier `.env.local` :
```env
SENDGRID_API_KEY=votre_clé
CONTACT_EMAIL=votre-email@example.com
```

2. Installez SendGrid :
```bash
npm install @sendgrid/mail
```

3. Décommentez le code SendGrid dans `app/api/contact/route.ts`

## 🎨 Personnaliser les couleurs

Modifiez `tailwind.config.ts` :
- `primary` : Couleur principale (bleu par défaut)
- `accent` : Couleur d'accent (violet par défaut)

## 📝 Prochaines étapes

- Remplacez les images placeholder par vos propres images
- Personnalisez le contenu des pages
- Configurez le formulaire de contact
- Ajoutez votre favicon dans `public/favicon.ico`
- Mettez à jour les URLs dans `app/sitemap.ts` et `public/robots.txt`

---

**Besoin d'aide ?** Consultez le [README.md](README.md) complet.


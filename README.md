# Site Web Professionnel - Freelance Développeur

Site web moderne et professionnel pour un freelance en création de sites web, construit avec Next.js, TailwindCSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne et élégant** avec animations fluides
- **Responsive** sur tous les appareils (mobile, tablette, desktop)
- **Dark mode** automatique avec toggle manuel
- **Pages complètes** : Accueil, Portfolio, Services, Tarifs, Contact, À propos
- **Formulaire de contact** fonctionnel avec API route
- **SEO optimisé** avec meta tags et Open Graph
- **Performance optimale** avec Next.js App Router
- **Animations** avec Framer Motion

## 📋 Prérequis

- Node.js 18+ et npm/yarn/pnpm
- Un compte Resend pour le formulaire de contact (gratuit, https://resend.com)

## 🛠️ Installation

### Méthode rapide (Windows)

**Double-cliquez simplement sur `lancer-site.bat`** dans l'explorateur Windows. Le script installera automatiquement les dépendances et lancera le serveur !

### Méthode manuelle

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir votre navigateur**

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

> 💡 **Astuce :** Consultez `README-LANCEMENT.md` pour plus de détails sur les différentes méthodes de lancement.

## 📁 Structure du Projet

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route pour le formulaire de contact
│   ├── a-propos/
│   │   └── page.tsx              # Page À propos
│   ├── contact/
│   │   └── page.tsx              # Page Contact
│   ├── portfolio/
│   │   └── page.tsx              # Page Portfolio
│   ├── services/
│   │   └── page.tsx              # Page Services
│   ├── tarifs/
│   │   └── page.tsx              # Page Tarifs
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Page d'accueil
├── components/
│   ├── Footer.tsx                # Composant Footer
│   ├── Header.tsx                # Composant Header/Navigation
│   ├── PortfolioCard.tsx         # Carte de portfolio réutilisable
│   └── ThemeProvider.tsx         # Provider pour le dark mode
├── public/
│   └── assets/                   # Images et assets (à créer)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts`. Vous pouvez modifier :
- `primary` : Couleur principale (bleu par défaut)
- `accent` : Couleur d'accent (violet par défaut)
- `dark` : Couleur de fond sombre

### Ajouter des images au portfolio

1. Placez vos images dans `public/assets/portfolio/`
2. Modifiez le tableau `portfolioProjects` dans `app/portfolio/page.tsx`
3. Mettez à jour les URLs des images

Exemple :
```typescript
{
  title: 'Mon Projet',
  description: 'Description du projet',
  image: '/assets/portfolio/mon-projet.jpg',
  url: 'https://mon-site.com',
}
```

### Configurer le formulaire de contact

Le formulaire de contact utilise **Resend** pour envoyer les emails (gratuit jusqu'à 100 emails/jour).

1. **Créer un compte Resend**
   - Allez sur https://resend.com
   - Créez un compte gratuit
   - Vérifiez votre email

2. **Obtenir votre clé API**
   - Dans Resend, allez dans "API Keys"
   - Cliquez sur "Create API Key"
   - Copiez la clé API générée

3. **Créer le fichier `.env.local`** à la racine du projet :
```env
RESEND_API_KEY=re_votre_cle_api_ici
```

4. **Redémarrer le serveur** :
```bash
npm run dev
```

> 📧 **Note** : Consultez `README-EMAIL.md` pour des instructions détaillées et le dépannage.

### Modifier les informations de contact

Modifiez les informations dans :
- `components/Footer.tsx` : Email et liens sociaux
- `app/contact/page.tsx` : Informations de contact détaillées

### Ajouter un blog (optionnel)

La structure est prête pour ajouter un blog. Créez :
- `app/blog/page.tsx` : Liste des articles
- `app/blog/[slug]/page.tsx` : Page d'article individuel

## 🚀 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Configurez les variables d'environnement si nécessaire
4. Déployez !

### Autres plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- etc.

## 📝 Notes importantes

- **Images** : Les images utilisent actuellement des placeholders Unsplash. Remplacez-les par vos propres images.
- **Formulaire** : Le formulaire de contact est configuré avec Resend. Créez un compte gratuit et ajoutez votre clé API dans `.env.local`.
- **SEO** : Les meta tags sont configurés, mais n'oubliez pas de personnaliser les descriptions et les images OG.
- **Favicon** : Ajoutez votre favicon dans `public/favicon.ico`

## 🛠️ Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run start` : Lance le serveur de production
- `npm run lint` : Vérifie le code avec ESLint

## 📄 Licence

Ce projet est libre d'utilisation pour vos projets personnels et commerciaux.

## 🤝 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue ou à me contacter.

---

**Bon développement ! 🚀**


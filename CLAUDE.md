# Webnyx — Direction Artistique (DA)

Ce fichier définit la charte graphique et les règles de design du site Webnyx.
**Toute nouvelle page ou composant DOIT respecter cette DA.**

---

## Stack technique

- Next.js 14 (App Router, `output: 'export'`)
- TypeScript + Tailwind CSS 3 (`darkMode: 'class'`)
- Framer Motion pour les animations
- Lucide React pour les (rares) icônes
- Google Fonts : **Inter** (body) + **Cormorant Garamond** (display/titres)

---

## Palette de couleurs — 3 couleurs uniquement

| Rôle | Valeur | Utilisation |
|---|---|---|
| Bleu marine | `#1E3A5F` (`primary`) | Fonds de section, boutons principaux, accents |
| Bleu acier | `#2D5F8A` (`accent`) | Dégradés subtils, hover |
| Or champagne | `#C9A96E` | Labels, italiques de mise en valeur, traits décoratifs, checkmarks |
| Blanc | `#FFFFFF` / `white` | Fonds clairs, texte sur fond sombre |
| Gris très sombre | `gray-950` / `#030712` | Fond section CTA finale |

**Règle absolue :** Pas d'autres couleurs vives (pas de rouge, vert, orange, violet, rose). Pas de dégradés multicolores (`from-blue-500 to-pink-500`). Uniquement blanc · bleu marine · or.

---

## Typographie

### Police display — Cormorant Garamond
- Utilisée pour **tous les titres** (`h1`, `h2`, `h3`) via `font-display`
- Toujours en `font-light` (weight 300) ou `font-normal` (400)
- **Jamais** `font-bold` sur les titres display — ça casse l'élégance
- Les mots clés en italique doré : `<span className="italic text-[#C9A96E]">mot.</span>`

```tsx
// Titre de section standard
<h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
  Titre principal <span className="italic text-[#C9A96E]">accentué.</span>
</h2>
```

### Police body — Inter
- Utilisée pour tout le texte courant via `font-sans` (défaut)
- Tailles : `text-sm` pour descriptions, `text-base` pour contenu principal
- Couleur : `text-gray-500` ou `text-white/55` selon le fond

---

## En-tête de section — Pattern obligatoire

Chaque section commence par ce pattern centré (ou aligné gauche selon le layout) :

```tsx
<div className="flex items-center [justify-center] gap-3 mb-5">
  <div className="w-6 h-px bg-[#C9A96E]" />
  <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">
    Nom de la section
  </span>
  <div className="w-6 h-px bg-[#C9A96E]" />
</div>
<h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
  Titre <span className="italic text-[#C9A96E]">clé.</span>
</h2>
```

---

## Sections — Alternance de fonds

| Section | Fond light | Fond dark |
|---|---|---|
| Hero | image de fond | — |
| Services | `bg-white` | `dark:bg-dark` |
| Process / Méthode | `bg-primary` (#1E3A5F) | idem |
| Portfolio | `bg-white` | `dark:bg-dark` |
| CTA finale | `bg-gray-950` | `dark:bg-dark-light` |

---

## Boutons

```tsx
// Bouton principal (bleu marine)
<button className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2">
  Texte du bouton <ArrowRight className="w-4 h-4" />
</button>

// Bouton secondaire (outline)
<button className="px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-sm transition-all duration-200">
  Texte secondaire
</button>

// Bouton ghost (sur fond sombre)
<button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg text-sm border border-white/10 transition-colors">
  Texte ghost
</button>
```

---

## Cartes de contenu

```tsx
// Carte service (fond blanc, bordure fine, hover bleu)
<div className="group cursor-pointer p-8 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 bg-white dark:bg-dark">
  <div className="flex items-start justify-between mb-4">
    <span className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase">01</span>
    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
  </div>
  <h3 className="font-display text-2xl font-light text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
    Titre
  </h3>
  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Description</p>
</div>
```

---

## Règles absolues — À NE JAMAIS FAIRE

1. **Pas d'icônes Lucide dans les sections** — ça fait "template IA". Utiliser des numéros (01, 02…) ou des traits décoratifs à la place.
2. **Pas de dégradés multicolores** (`from-blue-500 to-pink-500`, `from-purple-500 to-red-500`…)
3. **Pas de blobs/cercles flous décoratifs** (`bg-primary/5 rounded-full blur-3xl`)
4. **Pas de badges pill** avec gradient (`bg-gradient-to-r from-primary/10 to-accent/10 rounded-full`)
5. **Pas de `font-bold` sur Cormorant Garamond** — utiliser `font-light` ou `font-normal`
6. **Pas de glassmorphism en dehors du Hero** — la carte `bg-black/40 backdrop-blur` est réservée au hero
7. **Pas de `text-gray-*` en dehors de** `text-gray-500`, `text-gray-900`, `text-gray-400` — rester sobre
8. **Pas de `shadow-2xl` ou `shadow-3xl`** sur les cartes standards — `shadow-lg` maximum

---

## Animations — Framer Motion

```tsx
// Standard whileInView pour sections
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

Pas d'animations `whileHover={{ scale: 1.05 }}` excessives — uniquement `scale: 1.02` max ou des translations simples.

---

## Structure d'une nouvelle page

```tsx
'use client'

export default function NomPage() {
  return (
    <div className="pt-16 min-h-screen">

      {/* Hero de page */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Label</span>
            <div className="w-6 h-px bg-[#C9A96E]" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-white leading-tight max-w-3xl">
            Titre principal <span className="italic text-[#C9A96E]">accentué.</span>
          </h1>
        </div>
      </section>

      {/* Sections alternées blanc / bleu */}
      <section className="py-24 bg-white dark:bg-dark">
        {/* contenu */}
      </section>

    </div>
  )
}
```

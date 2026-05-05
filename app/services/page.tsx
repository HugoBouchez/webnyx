'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const sitePacks = [
  {
    num: '01',
    title: 'Site Vitrine',
    tagline: 'Pour lancer votre présence en ligne.',
    price: '749 €',
    priceLabel: 'mise en service',
    hostingEssential: '25 €',
    hostingPremium: '40 €',
    popular: false,
    features: [
      '3 pages personnalisées',
      'Design sur-mesure adapté à votre image',
      'Formulaire de contact',
      'SEO de base intégré',
      'Responsive mobile & tablette',
      'Livraison sous 1 mois',
    ],
    cta: 'Démarrer ce projet',
  },
  {
    num: '02',
    title: 'Site Vitrine +',
    tagline: 'Pour une présence complète et professionnelle.',
    price: '999 €',
    priceLabel: 'mise en service',
    hostingEssential: '45 €',
    hostingPremium: '65 €',
    popular: true,
    features: [
      '5 à 7 pages personnalisées',
      'Tout du pack Site Vitrine',
      'Section blog ou actualités',
      'Animations & interactions avancées',
      'Intégration Google Analytics',
      '1 modification incluse par mois',
      'Livraison sous 1 mois',
    ],
    cta: 'Démarrer ce projet',
  },
  {
    num: '03',
    title: 'Site E-Commerce',
    tagline: 'Pour vendre en ligne sans dépendre d\'une plateforme.',
    price: 'À partir de 1 899 €',
    priceLabel: 'mise en service',
    hostingEssential: '80 €',
    hostingPremium: '130 €',
    popular: false,
    features: [
      'Boutique en ligne complète',
      'Catalogue produits illimité',
      'Paiement sécurisé intégré',
      'Gestion des commandes & stocks',
      'Page produit optimisée conversion',
      'SEO e-commerce avancé',
      'Livraison sous 2 mois',
    ],
    cta: 'Démarrer ce projet',
  },
]

const hostingPlans = [
  {
    title: 'Hébergement Essentiel',
    price: 'À partir de 35 €',
    period: '/mois',
    description: 'L\'essentiel pour que votre site reste en ligne, rapide et sécurisé.',
    features: [
      'Hébergement haute performance',
      'Nom de domaine inclus',
      'Certificat SSL (HTTPS)',
      'Sauvegardes automatiques',
      'Support par email',
    ],
  },
  {
    title: 'Hébergement Premium',
    price: 'À partir de 50 €',
    period: '/mois',
    description: 'La tranquillité d\'esprit complète, avec un suivi actif de votre site.',
    features: [
      'Tout du plan Essentiel',
      'Modifications illimitées',
      'Mises à jour de contenu',
      'Rapport mensuel de performance',
      'Support prioritaire 7j/7',
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-16 min-h-screen">

      {/* ── HERO ── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Tarifs & Services</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight max-w-3xl mb-6">
              Des formules claires,{' '}
              <span className="italic text-[#C9A96E]">sans surprise.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Choisissez le pack adapté à votre projet. Tous les sites incluent design sur-mesure, SEO de base et livraison clé en main.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PACKS SITES ── */}
      <section className="py-24 bg-white dark:bg-dark">
        <div className="container mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Création de site</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-gray-900 dark:text-white leading-tight">
              Choisissez votre <span className="italic text-[#C9A96E]">formule.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sitePacks.map((pack, index) => (
              <motion.div
                key={pack.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  pack.popular
                    ? 'bg-primary border-primary shadow-xl'
                    : 'bg-white dark:bg-dark border-gray-200 dark:border-gray-800'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-8">
                    <span className="px-3 py-1 bg-[#C9A96E] text-white text-xs font-semibold rounded-full tracking-wide">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className={`text-xs font-semibold tracking-widest ${pack.popular ? 'text-[#C9A96E]' : 'text-[#C9A96E]'}`}>
                    {pack.num} —
                  </span>
                  <h3 className={`font-display text-3xl font-light mt-1 mb-2 ${pack.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {pack.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${pack.popular ? 'text-white/55' : 'text-gray-500 dark:text-gray-400'}`}>
                    {pack.tagline}
                  </p>
                </div>

                <div className={`py-6 mb-6 border-t border-b ${pack.popular ? 'border-white/10' : 'border-gray-100 dark:border-gray-800'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-light ${pack.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {pack.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${pack.popular ? 'text-white/40' : 'text-gray-400'}`}>
                    {pack.priceLabel}
                  </p>
                  <div className={`mt-3 pt-3 border-t ${pack.popular ? 'border-white/10' : 'border-gray-100 dark:border-gray-800'}`}>
                    <p className={`text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5 ${pack.popular ? 'text-white/30' : 'text-gray-400'}`}>
                      Hébergement
                    </p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs ${pack.popular ? 'text-white/50' : 'text-gray-500'}`}>
                        Essentiel <span className={`font-semibold ${pack.popular ? 'text-white/70' : 'text-gray-700 dark:text-gray-300'}`}>{pack.hostingEssential}/mois</span>
                      </span>
                      <span className={`text-xs ${pack.popular ? 'text-white/20' : 'text-gray-300'}`}>·</span>
                      <span className={`text-xs ${pack.popular ? 'text-white/50' : 'text-gray-500'}`}>
                        Premium <span className={`font-semibold ${pack.popular ? 'text-white/70' : 'text-gray-700 dark:text-gray-300'}`}>{pack.hostingPremium}/mois</span>
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                      <span className={`text-sm leading-relaxed ${pack.popular ? 'text-white/70' : 'text-gray-600 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                    pack.popular
                      ? 'bg-[#C9A96E] hover:bg-[#b8913e] text-white'
                      : 'bg-primary hover:bg-primary-dark text-white'
                  }`}>
                    {pack.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mt-8">
            Prix indiqués HT · Devis personnalisé disponible sur demande
          </p>
        </div>
      </section>

      {/* ── HÉBERGEMENT ── */}
      <section className="py-24 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Hébergement & Suivi</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-gray-900 dark:text-white leading-tight">
              Votre site, <span className="italic text-[#C9A96E]">toujours en ligne.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base mt-4 max-w-xl leading-relaxed">
              Disponible en complément de chacun des 3 packs ci-dessus. Votre site reste rapide, sécurisé et à jour sans que vous ayez à vous en occuper.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-xl p-8 flex flex-col"
              >
                <h3 className="font-display text-2xl font-light text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <span className="font-display text-4xl font-light text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button className="w-full py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2">
                    Ajouter à mon pack <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gray-950 dark:bg-dark-light">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Projet sur-mesure</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight mb-4">
              Votre projet sort <span className="italic text-[#C9A96E]">du cadre ?</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Fonctionnalités spécifiques, secteur particulier, budget différent — contactez-moi pour un devis personnalisé gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2">
                  Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg text-sm border border-white/10 transition-colors">
                  Voir mes réalisations
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

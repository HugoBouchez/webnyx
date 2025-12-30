'use client'

import { motion } from 'framer-motion'
import { Code, Settings, CheckCircle, ArrowRight, Sparkles, Shield, Zap, Rocket, Crown, Star, X } from 'lucide-react'
import Link from 'next/link'

const siteWebPack = {
  standard: {
    title: 'Pack Site Web',
    price: '300€',
    description: 'Solution complète pour créer votre présence en ligne professionnelle avec un site vitrine moderne et performant.',
    icon: Star,
    color: 'blue',
    features: [
      'Design personnalisé et unique sur-mesure',
      'Site vitrine complet (jusqu\'à 4 rubriques)',
      'Développement UX professionnel',
      'Formulaire de contact fonctionnel et sécurisé',
      'Livraison complète sous 1 mois',
    ],
    notIncluded: [
      'Plus de 4 rubriques',
      'Formation à l\'utilisation',
      'Livraison prioritaire',
      'Modifications durant la création',
    ],
  },
  premium: {
    title: 'Pack Site Web Premium',
    price: '700€',
    description: 'Solution premium avec design haut de gamme, développement avancé et fonctionnalités illimitées pour une présence en ligne exceptionnelle.',
    icon: Crown,
    color: 'premium',
    features: [
      'Design personnalisé et unique haut de gamme',
      'Site vitrine complet (jusqu\'à 10 rubriques)',
      'Développement UX optimisé et expert',
      'Formulaire de contact fonctionnel et sécurisé',
      'Formation complète à l\'utilisation de votre site',
      'Livraison prioritaire sous 2 semaines',
      'Garantie satisfait ou remboursé',
      'Support prioritaire et modifications acceptées durant la création',
    ],
    advantages: [
      '+ Jusqu\'à 10 rubriques (vs 4)',
      '+ Formation complète incluse',
      '+ Livraison prioritaire 2 semaines',
      '+ Modifications acceptées durant la création',
      '+ Support prioritaire',
    ],
  },
}

const hostingPack = {
  standard: {
    title: 'Hébergement',
    price: '25€/mois',
    priceAnnual: '17€/mois',
    description: 'Hébergement sécurisé et performant pour votre site web avec sauvegarde automatique et déploiement rapide.',
    icon: Shield,
    color: 'green',
    features: [
      'Hébergement haute performance',
      'Déploiement sur le net',
      'Sauvegarde automatique en local',
      'Support technique (1 changement simple par mois)',
    ],
    notIncluded: [
      'Plus de 1 changement par mois',
      'Support prioritaire',
      'Nom de domaine inclus',
    ],
  },
  premium: {
    title: 'Hébergement Premium',
    price: '60€/mois',
    priceAnnual: '50€/mois',
    description: 'Hébergement premium avec performances optimales, modifications mensuelles incluses et support prioritaire pour votre site web.',
    icon: Crown,
    color: 'premium',
    features: [
      'Hébergement haute performance',
      'Déploiement sur le net',
      'Sauvegarde automatique en local',
      'Support technique (1 changement simple par mois)',
      '4 modifications par mois',
      'Support prioritaire en cas de problème',
      'Performances du site optimisé et nom de domaine inclus',
    ],
    advantages: [
      '+ 4 modifications par mois (vs 1)',
      '+ Support prioritaire en cas de problème',
      '+ Performances optimisées et nom de domaine inclus',
    ],
  },
}

export default function Services() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark dark:to-dark-light border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Prix & Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight px-4">
              Prix & Services
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 px-4">
              Deux packs complets pour votre présence en ligne. Comparez les formules standard et premium 
              pour choisir celle qui correspond le mieux à vos besoins.
            </p>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                💰 Tarifs inclus : Tous les prix sont détaillés ci-dessous avec chaque pack
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pack Site Web */}
      <section className="py-20 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Code className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Pack Site Web
              </h2>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Création complète de votre site web professionnel
            </p>
            
            {/* Comparison Header */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">FORMULE STANDARD</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">300€</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Prix unique</div>
                </div>
                <div className="p-4 bg-slate-900 dark:bg-slate-800 rounded-lg border border-slate-700 dark:border-slate-700">
                  <div className="text-sm font-semibold text-slate-300 mb-1">FORMULE PREMIUM</div>
                  <div className="text-2xl font-bold text-white">700€</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark border-2 border-slate-300 dark:border-slate-700 rounded-xl p-8 hover:shadow-xl transition-all relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="px-4 py-1.5 bg-slate-800 dark:bg-slate-700 text-white rounded-full text-xs font-bold shadow-lg">
                  STANDARD
                </span>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="w-16 h-16 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {siteWebPack.standard.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                {siteWebPack.standard.description}
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">✓ Inclus dans ce pack :</div>
                <ul className="space-y-2">
                  {siteWebPack.standard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-slate-700 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-6">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-2">✗ Non inclus :</div>
                <ul className="space-y-1">
                  {siteWebPack.standard.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-500 dark:text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Choisir Standard
                </motion.button>
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-700 rounded-xl p-8 hover:shadow-xl transition-all relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="px-4 py-1.5 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-xs font-bold shadow-lg">
                  PREMIUM
                </span>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-lg">
                  <Crown className="w-8 h-8 text-slate-900 dark:text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {siteWebPack.premium.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                {siteWebPack.premium.description}
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-300 mb-3">✓ Tout du Standard + :</div>
                <ul className="space-y-2 mb-4">
                  {siteWebPack.standard.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400 line-through opacity-60">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <div className="text-sm font-semibold text-slate-300 mb-3">+ Avantages Premium :</div>
                  <ul className="space-y-2">
                    {siteWebPack.premium.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Zap className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white font-semibold">{advantage}</span>
                      </li>
                    ))}
                    {siteWebPack.premium.features.slice(5).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Choisir Premium
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pack Hébergement */}
      <section className="py-20 bg-gray-50 dark:bg-dark border-t-2 border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Settings className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Pack Hébergement
              </h2>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Hébergement sécurisé et maintenance pour votre site web
            </p>
            
            {/* Comparison Header */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">FORMULE STANDARD</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">25€/mois</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">ou 17€/mois en annuel</div>
                </div>
                <div className="p-4 bg-slate-900 dark:bg-slate-800 rounded-lg border border-slate-700 dark:border-slate-700">
                  <div className="text-sm font-semibold text-slate-300 mb-1">FORMULE PREMIUM</div>
                  <div className="text-2xl font-bold text-white">60€/mois</div>
                  <div className="text-xs text-slate-400 mt-1">ou 50€/mois en annuel (+3 modifications/mois)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark border-2 border-slate-300 dark:border-slate-700 rounded-xl p-8 hover:shadow-xl transition-all relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="px-4 py-1.5 bg-slate-800 dark:bg-slate-700 text-white rounded-full text-xs font-bold shadow-lg">
                  STANDARD
                </span>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="w-16 h-16 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {hostingPack.standard.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                {hostingPack.standard.description}
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">✓ Inclus dans ce pack :</div>
                <ul className="space-y-2">
                  {hostingPack.standard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-slate-700 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-6">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-2">✗ Non inclus :</div>
                <ul className="space-y-1">
                  {hostingPack.standard.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-500 dark:text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Choisir Standard
                </motion.button>
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 dark:bg-slate-800 border-2 border-slate-700 dark:border-slate-700 rounded-xl p-8 hover:shadow-xl transition-all relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="px-4 py-1.5 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-xs font-bold shadow-lg">
                  PREMIUM
                </span>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-lg">
                  <Crown className="w-8 h-8 text-slate-900 dark:text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                {hostingPack.premium.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                {hostingPack.premium.description}
              </p>
              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-300 mb-3">✓ Tout du Standard + :</div>
                <ul className="space-y-2 mb-4">
                  {hostingPack.standard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-400 line-through opacity-60">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <div className="text-sm font-semibold text-slate-300 mb-3">+ Avantages Premium :</div>
                  <ul className="space-y-2">
                    {hostingPack.premium.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Zap className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white font-semibold">{advantage}</span>
                      </li>
                    ))}
                    {hostingPack.premium.features.slice(4).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Choisir Premium
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark dark:to-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-white dark:bg-dark-light border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-12 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-4">
              Besoin d'Aide pour Choisir ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed px-4">
              Discutons de vos besoins et obtenez un devis gratuit et personnalisé pour trouver la formule qui vous convient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

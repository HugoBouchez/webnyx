'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Shield, Crown, ArrowRight, Sparkles, Zap, Award } from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'Pack Site Web',
    description: 'Solution complète pour créer votre présence en ligne professionnelle avec un site vitrine moderne et performant.',
    price: '300',
    priceAnnual: '300',
    period: '€',
    badge: 'Populaire',
    icon: Star,
    features: [
      'Design personnalisé et unique sur-mesure',
      'Site vitrine complet (jusqu\'à 4 rubriques)',
      'Développement UX professionnel',
      'Formulaire de contact fonctionnel et sécurisé',
      'Livraison complète sous 1 mois',
    ],
    cta: 'Commander ce pack',
    popular: true,
  },
  {
    name: 'Hébergement',
    description: 'Hébergement sécurisé et performant pour votre site web avec sauvegarde automatique et déploiement rapide.',
    price: '25',
    priceAnnual: '17',
    period: '€/mois',
    badge: null,
    icon: Shield,
    features: [
      'Hébergement haute performance',
      'Déploiement sur le net',
      'Sauvegarde automatique en local',
      'Support technique (1 changement simple par mois)',
    ],
    cta: 'Souscrire au pack',
    popular: false,
  },
  {
    name: 'Pack Site Web Premium',
    description: 'Solution premium avec design haut de gamme, développement avancé et fonctionnalités illimitées pour une présence en ligne exceptionnelle.',
    price: '700',
    priceAnnual: '700',
    period: '€',
    badge: 'Premium',
    icon: Crown,
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
    cta: 'Commander ce pack',
    popular: false,
    premium: true,
  },
  {
    name: 'Hébergement Premium',
    description: 'Hébergement premium avec performances optimales, modifications mensuelles incluses et support prioritaire pour votre site web.',
    price: '60',
    priceAnnual: '50',
    period: '€/mois',
    badge: 'Premium',
    icon: Crown,
    features: [
      'Hébergement haute performance',
      'Déploiement sur le net',
      'Sauvegarde automatique en local',
      'Support technique (1 changement simple par mois)',
      '4 modifications par mois',
      'Support prioritaire en cas de problème',
      'Performances du site optimisé et nom de domaine inclus',
    ],
    cta: 'Souscrire au pack',
    popular: false,
    premium: true,
  },
]

export default function Tarifs() {
  const [isAnnual, setIsAnnual] = useState(true)

  const calculateSavings = () => {
    // Calcul des économies pour l'hébergement
    const monthly = 25
    const annual = 17
    const savings = Math.round(((monthly - annual) / monthly) * 100)
    return savings
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-dark dark:via-dark-light dark:to-dark">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-dark-light border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Tarifs Transparents</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight px-4">
              Choisissez le Pack{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Adapté à Vos Besoins
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto px-4">
              Des solutions complètes et professionnelles pour votre présence en ligne. 
              Tous les prix sont indiqués TTC avec garantie satisfaction.
            </p>
          </motion.div>

          {/* Toggle Annuel/Mensuel */}
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1.5 shadow-inner">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    !isAnnual
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Mensuel
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isAnnual
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Annuel
                </button>
              </div>
              {isAnnual && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                    ÉCONOMIES JUSQU'À {calculateSavings()}%
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-700"></div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon
              const displayPrice = isAnnual ? plan.priceAnnual : plan.price
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white dark:bg-dark border-2 rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? 'border-blue-600 dark:border-blue-500 shadow-xl scale-105'
                      : plan.premium
                      ? 'border-gray-300 dark:border-gray-700 shadow-lg'
                      : 'border-gray-200 dark:border-gray-800 shadow-md hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                        plan.premium
                          ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular
                      ? 'bg-blue-100 dark:bg-blue-900/30'
                      : plan.premium
                      ? 'bg-gray-100 dark:bg-gray-800'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      plan.popular
                        ? 'text-blue-600 dark:text-blue-400'
                        : plan.premium
                        ? 'text-gray-700 dark:text-gray-300'
                        : 'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>

                  {/* Plan Name */}
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                    {plan.name}
                  </h2>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed min-h-[3.5rem]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {displayPrice}
                      </span>
                      <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    {plan.period.includes('mois') && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        Facturation {isAnnual ? 'annuelle' : 'mensuelle'}
                        {isAnnual && plan.name === 'Hébergement' && (
                          <span className="ml-2 text-green-600 dark:text-green-400 font-semibold">
                            Économisez {25 - 17}€/mois
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? 'text-blue-600 dark:text-blue-400'
                            : plan.premium
                            ? 'text-gray-700 dark:text-gray-300'
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="space-y-3 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                    <Link href="/contact" className="block">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                            : plan.premium
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                        }`}
                      >
                        {plan.cta}
                      </motion.button>
                    </Link>
                    <Link href="/contact" className="block">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2.5 sm:py-3 bg-white dark:bg-dark border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Demander un devis</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 dark:bg-dark rounded-xl">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Garantie Satisfaction</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Remboursé si non satisfait</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-dark rounded-xl">
              <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Livraison Rapide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sous 2 semaines</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-dark rounded-xl">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Support Inclus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assistance complète</p>
            </div>
          </div>

          {/* Legal Note */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Les prix sont indiqués TTC. Tous les packs incluent un support client et une garantie satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-dark dark:via-dark-light dark:to-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-4">
              Besoin d'une Solution Sur-Mesure ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4">
              Chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques 
              et obtenir un devis personnalisé adapté à votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                >
                  <span>Demander un devis personnalisé</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-dark-light border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  Voir mes réalisations
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

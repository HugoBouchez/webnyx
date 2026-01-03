'use client'

import { motion } from 'framer-motion'
import { Check, Info, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const commonFeatures = [
  'Service de maintenance',
  'Conseils personnalisés',
  'Astuces par email',
]

const pricingPlans = [
  {
    size: 'S',
    title: 'Service de conception de site Web S',
    description: 'Idéal pour un site simple nécessitant peu de modifications',
    priceMonthly: 25,
    priceMonthlyTTC: 30,
    setupFee: 199,
    setupFeeTTC: 238.80,
    features: [
      'Conseils de nos experts + création de 3 pages personnalisées',
      '1 modification du site par trimestre',
      '1 domaine inclus',
    ],
    popular: false,
  },
  {
    size: 'M',
    title: 'Service de conception de site Web M',
    description: 'Idéal pour un site de taille moyenne nécessitant des modifications régulières',
    priceMonthly: 40,
    priceMonthlyTTC: 48,
    setupFee: 299,
    setupFeeTTC: 358.80,
    features: [
      'Conseils de nos experts + création de 5 pages personnalisées',
      '1 modification du site par mois',
      '1 domaine inclus',
    ],
    popular: true,
  },
  {
    size: 'L',
    title: 'Service de conception de site Web L',
    description: 'Idéal pour un site de grande envergure nécessitant des modifications fréquentes',
    priceMonthly: 70,
    priceMonthlyTTC: 84,
    setupFee: 399,
    setupFeeTTC: 478.80,
    features: [
      'Conseils de nos experts + création de 7 pages personnalisées',
      'Modifications du site illimitées',
      '1 domaine inclus',
    ],
    popular: false,
  },
]

export default function Services() {
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
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Prix & Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight px-4">
              Service de conception de site Web
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto px-4 mb-8">
              Choisissez la formule qui correspond le mieux à vos besoins. 
              Tous nos packs incluent l'hébergement et la mise en ligne.
            </p>
            
            {/* Explanation Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                ✨ Chaque pack inclut tous les services
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Nos packs complets incluent <strong>tous les services</strong> nécessaires :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Services de développement</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Design personnalisé, création de pages, développement UX, formulaire de contact
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Services d'hébergement</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hébergement haute performance, déploiement, sauvegarde automatique, support technique
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 sm:py-16 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Common Features */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {commonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.size}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-900 dark:bg-blue-950 shadow-2xl scale-105 z-10'
                      : 'bg-white dark:bg-dark border-2 border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Plan Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-6 leading-relaxed ${
                    plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-baseline mb-2">
                      <span className={`text-3xl sm:text-4xl font-bold ${
                        plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        Seulement {plan.priceMonthly}€ HT/mois
                      </span>
                    </div>
                    <p className={`text-sm ${
                      plan.popular ? 'text-blue-200' : 'text-gray-500 dark:text-gray-500'
                    }`}>
                      ({plan.priceMonthlyTTC} € TTC)
                    </p>
                  </div>

                  {/* Setup Fee */}
                  <div className="mb-6">
                    <p className={`text-sm font-semibold ${
                      plan.popular ? 'text-blue-200' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      Mise en service : {plan.setupFee} € HT
                    </p>
                    <p className={`text-xs mt-1 ${
                      plan.popular ? 'text-blue-300' : 'text-gray-500 dark:text-gray-500'
                    }`}>
                      ({plan.setupFeeTTC} € TTC)
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular 
                            ? 'text-blue-300' 
                            : 'text-blue-600 dark:text-blue-400'
                        }`} />
                        <div className="flex-1">
                          <span className={`text-sm leading-relaxed ${
                            plan.popular 
                              ? 'text-white' 
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {feature}
                          </span>
                          {(feature.includes('modification') || feature.includes('pages')) && (
                            <Info className={`w-4 h-4 inline-block ml-2 ${
                              plan.popular 
                                ? 'text-blue-300' 
                                : 'text-gray-400 dark:text-gray-500'
                            }`} />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="/contact" className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      Continuer
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4">
              Les prix sont indiqués HT et TTC. Tous les packs incluent l'hébergement, la mise en ligne et un support client.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
              >
                <span>Demander un devis personnalisé</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

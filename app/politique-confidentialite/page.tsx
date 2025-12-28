'use client'

import { motion } from 'framer-motion'

// Metadata moved to layout or handled via head

export default function PolitiqueConfidentialite() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              Politique de Confidentialité
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Collecte des données</h2>
                <p>
                  Les données personnelles collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont en aucun cas transmises à des tiers.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Utilisation des données</h2>
                <p>
                  Vos données personnelles sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous fournir les services demandés</li>
                  <li>Améliorer nos services</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


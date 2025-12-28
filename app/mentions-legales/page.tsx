'use client'

import { motion } from 'framer-motion'
import { FileText, Mail, Building, Shield, Scale } from 'lucide-react'

export default function MentionsLegales() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-dark">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-dark dark:to-dark-light border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
              <Scale className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Éditeur du site */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Éditeur du site
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Le site web est édité par <strong className="text-gray-900 dark:text-white">Hugo Bouchez</strong>, développeur freelance.
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Email :</strong>{' '}
                    <a 
                      href="mailto:Hugo.bouchez88@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Hugo.bouchez88@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Statut :</strong> Professionnel indépendant / Freelance
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Hébergement
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Ce site est hébergé par un prestataire d'hébergement professionnel. Les données sont stockées sur des serveurs sécurisés et conformes aux normes de sécurité en vigueur.
                </p>
                <p>
                  L'hébergement garantit une disponibilité optimale du site et la sécurité des données conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Propriété intellectuelle
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                </p>
                <p>
                  Tous les éléments du site (textes, images, vidéos, logos, icônes, graphismes, etc.) sont la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de l'éditeur.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
              </div>
            </div>

            {/* Protection des données personnelles */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Protection des données personnelles
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Les données personnelles collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont en aucun cas transmises à des tiers sans votre consentement explicite.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante :{' '}
                  <a 
                    href="mailto:Hugo.bouchez88@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Hugo.bouchez88@gmail.com
                  </a>
                </p>
                <p>
                  Pour plus d'informations sur le traitement de vos données personnelles, consultez notre{' '}
                  <a 
                    href="/politique-confidentialite" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Politique de Confidentialité
                  </a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Cookies
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être accessibles.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Responsabilité
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  L'éditeur s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  L'éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
                <p>
                  L'éditeur ne pourra également être tenu responsable des dommages indirects consécutifs à l'utilisation du site. Des espaces interactifs (commentaires, formulaires de contact) sont à la disposition des utilisateurs. L'éditeur se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Droit applicable et juridiction compétente
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
                <p>
                  Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents du ressort du siège social de l'éditeur.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Contact
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante :{' '}
                <a 
                  href="mailto:Hugo.bouchez88@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Hugo.bouchez88@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

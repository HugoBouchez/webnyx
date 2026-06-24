'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'
import ServiceModal from '@/components/ServiceModal'
import { useState } from 'react'

const homeFeatured = [
  {
    num: '01', badge: 'CRÉDIBILITÉ', slug: 'site-dentiste-professionnel',
    title: 'Cabinet dentaire professionnel.',
    subtitle: 'Un site qui rassure avant même le premier rendez-vous.',
    image: '/image/Image preview dentiste.png',
    description: 'Pour un cabinet dentaire, le site web est souvent le premier contact avec un patient potentiel. L\'enjeu : inspirer confiance, réduire l\'anxiété et transformer un visiteur hésitant en patient qui prend rendez-vous.',
    points: ['Design épuré et professionnel qui inspire immédiatement confiance', 'Présentation de l\'équipe et des services pour rassurer avant le RDV', 'Formulaire de prise de rendez-vous intégré et simplifié', 'SEO local optimisé pour apparaître sur "dentiste [ville]"'],
  },
  {
    num: '02', badge: 'CONVERSION', slug: 'site-courtier-assurance',
    title: 'Courtier en assurance.',
    subtitle: 'Des visiteurs qui deviennent des prospects qualifiés.',
    image: '/image/Image preview courtier.png',
    description: 'Un courtier en assurance doit convaincre rapidement : expertise visible, clarté des offres et facilité à être contacté. Le site capte les demandes de devis et qualifie les prospects avant même le premier appel.',
    points: ['Présentation claire des produits, garanties et avantages', 'Formulaire de demande de devis optimisé pour la conversion', 'Section "Pourquoi nous choisir" qui lève les objections', 'Design professionnel qui renforce l\'image d\'expert du secteur'],
  },
  {
    num: '03', badge: 'ENGAGEMENT', slug: 'pizzeria-bella-pizza',
    title: 'Pizzeria Bella Pizza.',
    subtitle: 'Un menu qui donne faim avant même d\'arriver.',
    image: '/image/Image pizzeria.png',
    description: 'Pour un restaurant, le site web doit faire ressentir l\'ambiance, mettre l\'eau à la bouche et faciliter la décision. Un visiteur qui passe 3 minutes sur le menu doit repartir avec l\'envie irrésistible de réserver.',
    points: ['Menu complet avec descriptions appétissantes et photos', 'Système de réservation en ligne intégré directement', 'Mise en valeur des spécialités maison et de la carte des vins', 'Design chaleureux qui reflète l\'âme de l\'établissement'],
  },
  {
    num: '04', badge: 'PREMIUM', slug: 'salon-coiffure-elegance',
    title: 'Salon de coiffure Élégance.',
    subtitle: 'L\'image premium, avant même le premier coup de ciseaux.',
    image: '/image/Image coiffeur.png',
    description: 'Un salon haut de gamme doit refléter son positionnement dès la première seconde. Le site devient une vitrine de l\'expertise : galerie de réalisations, prestations détaillées, prise de rendez-vous — tout respire le soin du détail.',
    points: ['Galerie de réalisations pour démontrer l\'expertise stylistique', 'Présentation détaillée des prestations et grille tarifaire', 'Prise de rendez-vous en ligne 24h/24 sans téléphone', 'Identité visuelle premium alignée sur le positionnement du salon'],
  },
]

const services = [
  {
    title: 'Création de site vitrine',
    desc: 'Un site moderne et sur-mesure pour présenter votre activité.',
    modalContent: {
      title: 'Création de site vitrine',
      description: 'Créez un site professionnel sur mesure pour présenter votre activité, améliorer votre visibilité en ligne, renforcer la crédibilité de votre marque et convertir vos visiteurs en clients.',
      details: [
        'Design moderne et personnalisé adapté à votre identité de marque',
        'Site vitrine complet optimisé pour présenter efficacement votre activité',
        'Performance optimale pour un chargement rapide',
        'SEO de base intégré pour améliorer votre visibilité sur Google',
        'Design responsive pour tous les appareils (mobile, tablette, desktop)',
        'Interface intuitive pour guider vos visiteurs vers l\'action',
      ],
    },
  },
  {
    title: 'Refonte de site',
    desc: 'Modernisation de votre site existant pour un rendu actuel et performant.',
    modalContent: {
      title: 'Refonte de site web',
      description: 'Améliorez votre site existant en modernisant son design, optimisant l\'expérience utilisateur et en l\'alignant avec vos objectifs actuels.',
      details: [
        'Modernisation complète du design pour un rendu actuel et professionnel',
        'Optimisation de l\'expérience utilisateur (UX) pour une navigation fluide',
        'Amélioration des performances techniques (vitesse de chargement)',
        'Alignement avec vos objectifs business et stratégie digitale actuelle',
        'Migration vers des technologies modernes et performantes',
        'Amélioration du taux de conversion grâce à une meilleure UX',
      ],
    },
  },
  {
    title: 'Site E-Commerce',
    desc: 'Boutique en ligne complète avec paiement sécurisé intégré.',
    modalContent: {
      title: 'Site E-Commerce',
      description: 'Lancez votre boutique en ligne sur mesure avec une gestion complète des produits, un paiement sécurisé et un design optimisé pour la conversion.',
      details: [
        'Boutique en ligne complète avec catalogue produits illimité',
        'Paiement sécurisé intégré (Stripe, PayPal…)',
        'Gestion des commandes et des stocks en temps réel',
        'Pages produits optimisées pour la conversion',
        'SEO e-commerce avancé pour attirer du trafic qualifié',
        'Design responsive et rapide sur tous les appareils',
      ],
    },
  },
  {
    title: 'Maintenance & hébergement',
    desc: 'Hébergement sécurisé et suivi mensuel de votre site.',
    modalContent: {
      title: 'Maintenance & Hébergement',
      description: 'Gérez la partie technique de votre site avec des mises à jour régulières, une sécurité renforcée et un accompagnement continu.',
      details: [
        'Mises à jour régulières pour maintenir votre site sécurisé',
        'Sécurité renforcée avec protection contre les menaces',
        'Sauvegardes automatiques pour protéger vos données',
        'Optimisation des performances pour un site toujours rapide',
        'Hébergement fiable avec disponibilité maximale',
        'Accompagnement continu et support technique inclus',
      ],
    },
  },
]

const homePacks = [
  {
    num: '01',
    title: 'Site Vitrine',
    price: '749 €',
    tagline: 'Pour lancer votre présence en ligne.',
    popular: false,
    features: ['3 pages personnalisées', 'Design sur-mesure', 'Formulaire de contact', 'SEO de base intégré', 'Responsive mobile & tablette', 'Livraison sous 1 mois'],
  },
  {
    num: '02',
    title: 'Site Vitrine +',
    price: '999 €',
    tagline: 'Pour une présence complète et professionnelle.',
    popular: true,
    features: ['5 à 7 pages personnalisées', 'Tout du pack Site Vitrine', 'Blog ou actualités', 'Animations avancées', 'Google Analytics', '1 modification incluse/mois'],
  },
  {
    num: '03',
    title: 'Site E-Commerce',
    price: 'À partir de 1 899 €',
    tagline: 'Pour vendre en ligne sans dépendre d\'une plateforme.',
    popular: false,
    features: ['Boutique en ligne complète', 'Catalogue produits illimité', 'Paiement sécurisé intégré', 'Gestion commandes & stocks', 'SEO e-commerce avancé', 'Livraison sous 2 mois'],
  },
]

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden pt-16">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath('/Image-test3Bis.png')}
            alt="Background"
            fill
            className="object-cover object-right"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>

        {/* Centered frosted card */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/65 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl">

              {/* Label */}
              <motion.div
                initial={{ y: 16 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                    Développeur Web Freelance · Bruxelles
                  </span>
                  <div className="w-6 h-px bg-[#C9A96E]" />
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight mb-5 text-center"
              >
                Créez votre présence en ligne{' '}
                <span className="italic text-[#C9A96E] block mt-1">professionnelle.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 12 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/65 text-base sm:text-lg text-center max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
              >
                Je conçois des sites modernes, rapides et orientés conversion pour les professionnels et les PME.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 justify-center mb-8 sm:mb-10"
              >
                <Link href="/portfolio">
                  <button className="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Voir mes réalisations <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-sm border border-white/25 transition-colors flex items-center justify-center gap-2">
                    Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>

              {/* Trust */}
              <div className="flex flex-wrap items-center justify-center gap-5 pt-6 border-t border-white/10">
                {['Sans engagement', 'Réponse sous 24h', 'Devis gratuit'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-white/50" />
                    <span className="text-white/50 text-xs">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/35 text-[10px] font-semibold tracking-[0.25em] uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="pt-16 pb-10 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Expertise</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
              Ce que je fais <span className="italic text-[#C9A96E]">pour vous.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onClick={() => setSelectedService(index)}
                className="group cursor-pointer p-8 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 bg-white dark:bg-dark"
              >
                <span className="text-[#C9A96E] text-sm font-semibold tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl font-normal text-gray-900 dark:text-white mt-3 mb-3 group-hover:text-primary transition-colors duration-200 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-white/55 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <p className="text-[#C9A96E] text-sm font-semibold mt-5 group-hover:underline">
                  En savoir plus →
                </p>
              </motion.div>
            ))}
          </div>

          {selectedService !== null && (
            <ServiceModal
              isOpen={selectedService !== null}
              onClose={() => setSelectedService(null)}
              title={services[selectedService].title}
              content={services[selectedService].modalContent}
            />
          )}
        </div>
      </section>

      {/* ── SÉPARATEUR ── */}
      <div className="bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="h-px bg-[#C9A96E]/40" />
        </div>
      </div>

      {/* ── TARIFS ── */}
      <section className="pt-16 pb-24 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Tarifs</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
              Des formules claires, <span className="italic text-[#C9A96E]">sans surprise.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {homePacks.map((pack, index) => (
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
                  <span className="text-xs font-semibold tracking-widest text-[#C9A96E]">{pack.num} —</span>
                  <h3 className={`font-display text-3xl font-light mt-1 mb-2 ${pack.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {pack.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${pack.popular ? 'text-white/55' : 'text-gray-500 dark:text-gray-400'}`}>
                    {pack.tagline}
                  </p>
                </div>

                <div className={`py-6 mb-6 border-t border-b ${pack.popular ? 'border-white/10' : 'border-gray-100 dark:border-gray-800'}`}>
                  <span className={`font-display text-4xl font-light ${pack.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {pack.price}
                  </span>
                  <p className={`text-xs mt-1 ${pack.popular ? 'text-white/40' : 'text-gray-400'}`}>mise en service</p>
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
                    Démarrer ce projet <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link href="/services">
              <button className="px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-sm transition-all duration-200 flex items-center gap-2">
                Voir tous les détails & l'hébergement <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 md:py-32 bg-primary dark:bg-primary">
        <div className="container mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Méthode</span>
              <div className="w-6 h-px bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
              Un processus <span className="italic text-[#C9A96E]">éprouvé.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { num: '01', title: 'Structure & Design', desc: 'Définition de l\'architecture, de la navigation et de l\'identité visuelle.' },
              { num: '02', title: 'Création du contenu', desc: 'Intégration des textes, images et médias adaptés à votre image de marque.' },
              { num: '03', title: 'Optimisation SEO', desc: 'Mise en place des bonnes pratiques pour améliorer votre visibilité sur Google.' },
              { num: '04', title: 'Mise en ligne', desc: 'Hébergement, déploiement et suivi continu de votre présence en ligne.' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-white/20 pt-6"
              >
                <p className="text-[#C9A96E] text-sm font-semibold mb-4">{step.num}</p>
                <h3 className="font-display text-xl font-light text-white mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      {homeFeatured.map((project, index) => (
        <section
          key={project.num}
          className={`py-24 ${index % 2 === 0 ? 'bg-white dark:bg-dark' : 'bg-gray-50 dark:bg-dark-light'}`}
        >
          <div className="container mx-auto px-6 lg:px-8">

            {index === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20 max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-6 h-px bg-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Réalisations</span>
                  <div className="w-6 h-px bg-[#C9A96E]" />
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
                  Des projets <span className="italic text-[#C9A96E]">concrets.</span>
                </h2>
              </motion.div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
              >
                <Link href={`/portfolio/demo/${project.slug}`} className="block group">
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={getImagePath(project.image)}
                      alt={project.title}
                      width={720}
                      height={480}
                      className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-5 py-2.5 bg-white/95 text-primary text-xs font-semibold rounded-lg shadow-lg flex items-center gap-2">
                        Voir la démo <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-[#C9A96E]/25 rounded-xl -z-10" />
              </motion.div>

              {/* Texte */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={index % 2 !== 0 ? 'lg:order-first' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-7xl font-light text-[#C9A96E]/40 leading-none select-none">
                    {project.num}
                  </span>
                  <div className="h-px flex-1 bg-[#C9A96E]/25" />
                  <span className="text-[#C9A96E] text-[10px] font-semibold tracking-[0.2em] uppercase">{project.badge}</span>
                </div>
                <h3 className="font-display text-4xl sm:text-5xl font-light text-gray-900 dark:text-white leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="font-display text-xl font-light italic text-[#C9A96E] mb-6 leading-snug">
                  {project.subtitle}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-8">
                  {project.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#C9A96E] mt-2.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/portfolio/demo/${project.slug}`}>
                  <button className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2">
                    Voir la démo interactive <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>
      ))}

      <div className="py-12 bg-gray-50 dark:bg-dark-light text-center">
        <Link href="/portfolio">
          <button className="px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-sm transition-all duration-200 flex items-center gap-2 mx-auto">
            Voir toutes les réalisations <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gray-950 dark:bg-dark-light">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Contact</span>
              <div className="w-6 h-px bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Votre projet mérite <span className="italic text-[#C9A96E]">mieux.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Devis gratuit, réponse sous 24h, sans engagement. Discutons de ce que je peux faire pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
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
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10">
              {['Sans engagement', 'Réponse sous 24h', 'Devis gratuit'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span className="text-white/40 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

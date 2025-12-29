'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Code, RefreshCw, Palette, Settings } from 'lucide-react'
import PortfolioCard from '@/components/PortfolioCard'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'
import ServiceModal from '@/components/ServiceModal'
import { useState, useEffect } from 'react'

const featuredPortfolio = [
  {
    title: 'Site Web Notaire',
    slug: 'portfolio-creatif',
    description: 'Site web professionnel pour étude notariale avec services juridiques et actualités.',
    image: '/notaire-image.png',
  },
  {
    title: 'Site Web Coach Indépendant',
    slug: 'site-vitrine-entreprise',
    description: 'Site web professionnel pour coach indépendant avec présentation des services et réservation.',
    image: '/coach-image.png',
  },
  {
    title: 'Site E-commerce Moderne',
    slug: 'site-ecommerce-moderne',
    description: 'Plateforme e-commerce complète avec gestion de commandes et paiement sécurisé.',
    image: '/ecommerce-image.png',
  },
]

const services = [
  {
    icon: Code,
    title: 'Création de site vitrine',
    description: 'Sites vitrines modernes et personnalisés pour présenter votre activité, vos services et votre image professionnelle en ligne.',
    color: 'from-blue-500 to-cyan-500',
    modalContent: {
      title: 'Création de site vitrine',
      description: 'Créez un site professionnel sur mesure pour présenter votre activité, améliorer votre visibilité en ligne, renforcer la crédibilité de votre marque et convertir vos visiteurs en clients.',
      details: [
        'Design moderne et personnalisé adapté à votre identité de marque',
        'Site vitrine complet optimisé pour présenter efficacement votre activité et vos services',
        'Performance optimale pour un chargement rapide et une expérience utilisateur fluide',
        'SEO de base intégré pour améliorer votre visibilité sur les moteurs de recherche',
        'Design responsive et adaptatif pour tous les appareils (mobile, tablette, desktop)',
        'Interface intuitive et navigation claire pour guider vos visiteurs vers l\'action',
      ],
    },
  },
  {
    icon: RefreshCw,
    title: 'Refonte de site',
    description: 'Refonte et modernisation de votre site existant pour améliorer son design, sa clarté et son adaptation aux supports actuels.',
    color: 'from-purple-500 to-pink-500',
    modalContent: {
      title: 'Refonte de site web',
      description: 'Améliorez votre site existant en modernisant son design, optimisant l\'expérience utilisateur, améliorant les performances et en l\'alignant avec vos objectifs business actuels.',
      details: [
        'Modernisation complète du design pour un rendu actuel et professionnel',
        'Optimisation de l\'expérience utilisateur (UX) pour une navigation plus fluide et intuitive',
        'Amélioration des performances techniques (vitesse de chargement, optimisation)',
        'Alignement avec vos objectifs business et stratégie digitale actuelle',
        'Migration vers des technologies modernes et performantes',
        'Amélioration du taux de conversion grâce à une meilleure expérience utilisateur',
      ],
    },
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces esthétiques et intuitives pour une navigation fluide et une expérience utilisateur agréable.',
    color: 'from-orange-500 to-red-500',
    modalContent: {
      title: 'Design UI/UX',
      description: 'Concevez des interfaces centrées utilisateur avec des parcours fluides, une esthétique moderne, une meilleure lisibilité et une augmentation du taux de conversion.',
      details: [
        'Interfaces intuitives et faciles à utiliser pour une expérience optimale',
        'Parcours utilisateur fluides et logiques pour guider naturellement vos visiteurs',
        'Esthétique moderne et professionnelle qui reflète votre image de marque',
        'Meilleure lisibilité et hiérarchie visuelle pour une compréhension immédiate',
        'Augmentation du taux de conversion grâce à un design optimisé pour l\'action',
        'Tests et itérations pour garantir la meilleure expérience possible',
      ],
    },
  },
  {
    icon: Settings,
    title: 'Maintenance & hébergement',
    description: 'Hébergement sécurisé et maintenance régulière pour garantir le bon fonctionnement et la sécurité de votre site.',
    color: 'from-green-500 to-emerald-500',
    modalContent: {
      title: 'Maintenance & Hébergement',
      description: 'Gérez la partie technique de votre site avec des mises à jour régulières, une sécurité renforcée, des sauvegardes automatiques, des performances optimisées, un hébergement fiable et un accompagnement continu.',
      details: [
        'Mises à jour régulières pour maintenir votre site à jour et sécurisé',
        'Sécurité renforcée avec protection contre les menaces et vulnérabilités',
        'Sauvegardes automatiques pour protéger vos données et votre contenu',
        'Optimisation des performances pour garantir un site rapide et réactif',
        'Hébergement fiable et performant avec disponibilité maximale',
        'Accompagnement continu pour garantir un site toujours fonctionnel et performant',
      ],
    },
  },
]

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (heroSection) {
        const scrollPosition = window.scrollY
        const heroHeight = heroSection.offsetHeight
        // Calcul du progrès du scroll (0 à 1) dans la section hero
        const progress = Math.min(1, Math.max(0, scrollPosition / (heroHeight * 0.6)))
        setScrollProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Appel initial
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = (index: number) => {
    setSelectedService(index)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <div>
      {/* Hero Section - Full Screen with Background Image */}
      <section 
        id="hero-section"
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/Image-test3Bis.png")}
            alt="Background"
            fill
            className="object-cover object-right"
            priority
            quality={90}
          />
          {/* Gradient Overlay - Balanced for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/10" />
          {/* Additional subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-transparent" />
          {/* Gradient fade to white at bottom - apparaît progressivement au scroll */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none transition-opacity duration-300"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, rgba(255,255,255,${scrollProgress * 0.2}) ${30 - scrollProgress * 10}%, rgba(255,255,255,${scrollProgress * 0.5}) ${50 - scrollProgress * 10}%, rgba(255,255,255,${scrollProgress * 0.8}) ${70 - scrollProgress * 10}%, rgba(255,255,255,${scrollProgress}) 100%)`,
              opacity: scrollProgress
            }}
          />
        </div>

        {/* Content Container - Centered Vertical Layout */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Badge - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                <span className="text-xs font-semibold text-white drop-shadow-lg tracking-wider uppercase">
                  Développeur Web Expert
                </span>
              </div>
            </motion.div>

            {/* Main Heading - Centered */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-center"
            >
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]">Créez votre présence en ligne</span>{' '}
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl block mt-2">
                professionnelle
              </span>
            </motion.h1>

            {/* Subtitle - Centered */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-12 text-center max-w-2xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)] font-semibold"
            >
              Solutions sur-mesure pour votre entreprise.
            </motion.p>

            {/* CTA Buttons - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/portfolio" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 50px rgba(0,0,0,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm w-[320px]"
                >
                  <span>Voir mes réalisations</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 50px rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-white/50 relative overflow-hidden group w-[320px]"
                >
                  <span className="relative z-10">Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Row - Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl text-center">
                <p className="text-white font-bold text-lg mb-1">Réponse rapide</p>
                <p className="text-white/90 text-sm">Sous 24h</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl text-center">
                <p className="text-white font-bold text-lg mb-1">Technologies modernes</p>
                <p className="text-white/90 text-sm">Next.js • React • Tailwind</p>
              </div>
            </motion.div>

            {/* Trust Indicators - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white drop-shadow-lg" />
                <span className="text-sm text-white drop-shadow-lg font-medium">Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white drop-shadow-lg" />
                <span className="text-sm text-white drop-shadow-lg font-medium">Réponse sous 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white drop-shadow-lg" />
                <span className="text-sm text-white drop-shadow-lg font-medium">Devis gratuit</span>
              </div>
            </motion.div>
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Modern & Premium */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark dark:via-dark-light dark:to-dark overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-semibold text-primary dark:text-accent border border-primary/20 dark:border-accent/20">
                EXPERTISE PROFESSIONNELLE
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Services{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Premium
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Des solutions sur-mesure conçues pour transformer votre présence digitale. 
              Chaque service est optimisé pour la performance, l'élégance et l'efficacité.
            </p>
          </motion.div>

          {/* Services Grid - Modern Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  {/* Card */}
                  <div className="relative h-full p-10 bg-white dark:bg-dark-light rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Decorative Corner Element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* CTA Arrow */}
                      <div className="flex items-center text-primary dark:text-accent font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                        <span className="text-sm mr-2">En savoir plus</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Service Modals */}
          {selectedService !== null && (
            <ServiceModal
              isOpen={selectedService !== null}
              onClose={closeModal}
              title={services[selectedService].title}
              icon={services[selectedService].icon}
              color={services[selectedService].color}
              content={services[selectedService].modalContent}
            />
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group"
              >
                <span>Découvrir tous les services</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Mes{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Réalisations
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Découvrez une sélection de projets récents. Chaque site est unique, 
              conçu pour répondre aux besoins spécifiques de mes clients et optimisé pour la performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {featuredPortfolio.map((project, index) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Voir tout le portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Prêt à transformer votre idée en réalité digitale ?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Discutons de votre projet ensemble. Je vous propose un devis gratuit et personnalisé 
              pour créer un site web qui correspond parfaitement à vos besoins et à votre image de marque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-primary rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-200"
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

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Code, RefreshCw, Palette, Settings } from 'lucide-react'
import PortfolioCard from '@/components/PortfolioCard'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'
import ServiceModal from '@/components/ServiceModal'
import { useState } from 'react'

const featuredPortfolio = [
  {
    title: 'Site Web Courtier en Assurance',
    slug: 'site-courtier-assurance',
    description: 'Site web professionnel pour courtier en assurance avec demande de devis en ligne, présentation des produits et gestion des sinistres.',
    image: '/image/Image preview courtier.png',
  },
  {
    title: 'Site Web Dentiste Professionnel',
    slug: 'site-dentiste-professionnel',
    description: 'Site web ultra-professionnel pour cabinet dentaire avec présentation des services, équipe, témoignages et prise de rendez-vous.',
    image: '/image/Image preview dentiste.png',
  },
  {
    title: 'Site Web Pizzeria Bella Pizza',
    slug: 'pizzeria-bella-pizza',
    description: 'Site web moderne pour pizzeria avec menu complet, sélection de vins, témoignages clients et réservation en ligne. Design appétissant et professionnel.',
    image: '/image/Image pizzeria.png',
  },
  {
    title: 'Site Web Salon de Coiffure Élégance',
    slug: 'salon-coiffure-elegance',
    description: 'Site web élégant pour salon de coiffure avec présentation des prestations, tarifs, produits et prise de rendez-vous. Design premium et professionnel.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
  },
  {
    title: 'Landing Page Marketing',
    slug: 'landing-page-marketing',
    description: 'Landing page optimisée pour la conversion avec formulaires, animations et tracking des performances.',
    image: '/plombier-image.png',
  },
  {
    title: 'Site Web Notaire',
    slug: 'portfolio-creatif',
    description: 'Site web professionnel pour étude notariale avec présentation des services, actualités juridiques et prise de rendez-vous.',
    image: '/notaire-image.png',
  },
  {
    title: 'Site Web Coach Indépendant',
    slug: 'site-vitrine-entreprise',
    description: 'Site web professionnel pour coach indépendant avec présentation des services, réservation en ligne et témoignages clients.',
    image: '/coach-image.png',
  },
  {
    title: 'Site E-commerce Moderne',
    slug: 'site-ecommerce-moderne',
    description: 'Plateforme e-commerce complète avec gestion de commandes, panier, et paiement sécurisé. Design moderne et responsive.',
    image: '/ecommerce-image.png',
  },
]

const services = [
  {
    icon: Code,
    title: 'Création de site vitrine',
    price: 'À partir de 749 €',
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
    price: 'À partir de 749 €',
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
    title: 'Site E-Commerce',
    price: 'À partir de 1 899 €',
    description: 'Boutique en ligne complète avec catalogue produits, paiement sécurisé et gestion des commandes pour vendre sans dépendre d\'une plateforme.',
    color: 'from-orange-500 to-red-500',
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
    icon: Settings,
    title: 'Maintenance & hébergement',
    price: 'À partir de 35 €/mois',
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
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 md:py-32 bg-white dark:bg-dark">
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
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Expertise</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
              Ce que je fais <span className="italic text-[#C9A96E]">pour vous.</span>
            </h2>
          </motion.div>

          {/* Liste horizontale */}
          <div className="mt-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setSelectedService(index)}
                className="group cursor-pointer"
              >
                {/* Séparateur doré */}
                <div className="h-px bg-[#C9A96E]/30 group-hover:bg-[#C9A96E] transition-colors duration-300" />

                {/* Contenu */}
                <div className="py-10 grid grid-cols-12 gap-6 items-center">

                  {/* Numéro */}
                  <div className="col-span-2 sm:col-span-1 flex items-center">
                    <span className="font-display text-5xl sm:text-6xl font-light text-[#C9A96E]/20 group-hover:text-[#C9A96E] transition-colors duration-300 leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Titre */}
                  <div className="col-span-10 sm:col-span-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-light text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 sm:col-span-5">
                    <p className="text-gray-400 dark:text-white/45 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="col-span-10 sm:col-span-2">
                    <p className="text-gray-900 dark:text-white font-semibold text-sm">
                      {service.price}
                    </p>
                  </div>

                  {/* Flèche */}
                  <div className="col-span-2 sm:col-span-1 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-gray-200 dark:text-white/20 group-hover:text-[#C9A96E] group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Séparateur final */}
            <div className="h-px bg-[#C9A96E]/30" />
          </div>

          {selectedService !== null && (
            <ServiceModal
              isOpen={selectedService !== null}
              onClose={() => setSelectedService(null)}
              title={services[selectedService].title}
              icon={services[selectedService].icon}
              color={services[selectedService].color}
              content={services[selectedService].modalContent}
            />
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Link href="/services">
              <button className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2">
                Voir tous les tarifs <ArrowRight className="w-4 h-4" />
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
      <section className="py-24 md:py-32 bg-white dark:bg-dark">
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
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Réalisations</span>
              <div className="w-6 h-px bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-tight">
              Des projets <span className="italic text-[#C9A96E]">concrets.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
              <button className="px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-sm transition-all duration-200 flex items-center gap-2 mx-auto">
                Voir tout le portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

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

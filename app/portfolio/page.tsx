'use client'

import { motion } from 'framer-motion'
import PortfolioCard from '@/components/PortfolioCard'

const portfolioProjects = [
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
  {
    title: 'Application Web SaaS',
    slug: 'application-web-saas',
    description: 'Application web complète avec tableau de bord, authentification et gestion des utilisateurs.',
    image: '/saas-image.png',
  },
  {
    title: 'Blog Professionnel',
    slug: 'blog-professionnel',
    description: 'Blog moderne avec système de gestion de contenu, catégories et recherche avancée.',
    image: '/blog-image.png',
  },
  {
    title: 'Landing Page Marketing',
    slug: 'landing-page-marketing',
    description: 'Landing page optimisée pour la conversion avec formulaires, animations et tracking des performances.',
    image: '/plombier-image.png',
  },
]

// Metadata moved to layout or handled via head

export default function Portfolio() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-4">
              Mes réalisations
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Découvrez une sélection de mes réalisations. Chaque projet est unique et conçu pour répondre aux besoins spécifiques de mes clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
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
        </div>
      </section>
    </div>
  )
}


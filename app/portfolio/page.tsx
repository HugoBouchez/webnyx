'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    num: '01', badge: 'CRÉDIBILITÉ', slug: 'site-dentiste-professionnel',
    title: 'Cabinet dentaire professionnel.',
    subtitle: 'Un site qui rassure avant même le premier rendez-vous.',
    image: '/image/Image preview dentiste.png',
    description: 'Pour un cabinet dentaire, le site web est souvent le premier contact avec un patient potentiel. L\'enjeu n\'est pas seulement esthétique : il s\'agit d\'inspirer confiance, de réduire l\'anxiété et de transformer un visiteur hésitant en patient qui prend rendez-vous.',
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
    description: 'Pour un restaurant, le site web doit faire ressentir l\'ambiance, mettre l\'eau à la bouche et faciliter la décision. Un visiteur qui passe 3 minutes sur le menu doit repartir avec l\'envie irrésistible de réserver ou commander.',
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
  {
    num: '05', badge: 'E-COMMERCE', slug: 'site-ecommerce-moderne',
    title: 'Boutique en ligne moderne.',
    subtitle: 'Vendre en ligne, sans dépendre d\'une plateforme.',
    image: '/ecommerce-image.png',
    description: 'Une boutique e-commerce sur-mesure permet de vendre sans commission, de contrôler son image et de fidéliser ses clients. Le site gère produits, stocks et paiements — vous n\'avez qu\'à vendre.',
    points: ['Catalogue produits illimité avec variantes et photos', 'Paiement sécurisé intégré (Stripe, PayPal…)', 'Gestion des commandes et stocks en temps réel', 'Pages produits optimisées pour la conversion et le SEO'],
  },
  {
    num: '06', badge: 'MARKETING', slug: 'landing-page-marketing',
    title: 'Landing page de conversion.',
    subtitle: 'Une page. Un objectif. Un maximum de résultats.',
    image: '/plombier-image.png',
    description: 'La landing page est l\'outil idéal pour une campagne publicitaire : une seule page, un seul message, un seul appel à l\'action. Chaque élément est pensé pour convertir le visiteur en lead ou en client.',
    points: ['Structure en entonnoir orientée conversion', 'Formulaire de capture de leads optimisé', 'Animations et preuves sociales pour rassurer', 'Compatible Google Ads et Meta Ads'],
  },
  {
    num: '07', badge: 'INSTITUTIONNEL', slug: 'portfolio-creatif',
    title: 'Étude notariale.',
    subtitle: 'L\'autorité et la confiance, dès la première visite.',
    image: '/notaire-image.png',
    description: 'Un notaire ou professionnel du droit doit inspirer une confiance absolue en ligne. Le site positionne l\'expertise, clarifie les services et facilite la prise de contact — sans jamais sacrifier le sérieux.',
    points: ['Présentation claire des domaines d\'expertise juridique', 'Section actualités et informations pratiques', 'Formulaire de prise de rendez-vous sécurisé', 'Design sobre et institutionnel qui inspire la rigueur'],
  },
  {
    num: '08', badge: 'VITRINE', slug: 'site-vitrine-entreprise',
    title: 'Coach indépendant.',
    subtitle: 'Vendre son expertise avant même le premier contact.',
    image: '/coach-image.png',
    description: 'Un coach ou consultant doit convaincre de sa valeur en quelques secondes. Le site met en scène son expertise, ses résultats et son approche — pour que le prospect arrive à l\'appel déjà convaincu.',
    points: ['Présentation de la méthode et des résultats concrets', 'Témoignages clients mis en avant pour la preuve sociale', 'Réservation de session de découverte en ligne', 'Design personnel qui reflète l\'identité du coach'],
  },
]

const otherProjects = [
  { title: 'Cabinet Médical', slug: 'contact', desc: 'Site rassurant pour médecin ou spécialiste avec prise de rendez-vous en ligne.' },
  { title: 'Agence Immobilière', slug: 'contact', desc: 'Vitrine de biens avec filtres de recherche, formulaire de contact et carte.' },
  { title: 'Restaurant & Café', slug: 'contact', desc: 'Menu en ligne, galerie ambiance et réservation intégrée pour la restauration.' },
  { title: 'Artisan & PME', slug: 'contact', desc: 'Site vitrine pour valoriser votre savoir-faire et générer des demandes de devis.' },
]

export default function Portfolio() {
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
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Réalisations</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight max-w-3xl mb-6">
              Des projets <span className="italic text-[#C9A96E]">qui convertissent.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Chaque projet est conçu avec un objectif précis. Découvrez les démos interactives et l'analyse de chaque réalisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROJETS PRINCIPAUX ── */}
      {projects.map((project, index) => (
        <section
          key={project.slug}
          className={`py-24 ${index % 2 === 0 ? 'bg-white dark:bg-dark' : 'bg-gray-50 dark:bg-dark-light'}`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image — alterne gauche/droite */}
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
                      src={project.image}
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
                {/* Trait décoratif */}
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
                {/* Numéro + trait */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-7xl font-light text-[#C9A96E]/40 leading-none select-none">
                    {project.num}
                  </span>
                  <div className="h-px flex-1 bg-[#C9A96E]/25" />
                  <span className="text-[#C9A96E] text-[10px] font-semibold tracking-[0.2em] uppercase">{project.badge}</span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl font-light text-gray-900 dark:text-white leading-tight mb-3">
                  {project.title}
                </h2>
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

      {/* ── AUTRES RÉALISATIONS ── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Autres secteurs</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight">
              Et bien d'autres <span className="italic text-[#C9A96E]">domaines.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((p, index) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <Link href="/contact">
                  <div className="group p-6 border border-white/10 hover:border-[#C9A96E]/50 rounded-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <span className="text-[#C9A96E] text-xs font-semibold tracking-widest">
                      {String(projects.length + index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-xl font-normal text-white mt-2 mb-2 group-hover:text-[#C9A96E] transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-white/45 text-xs leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <span className="text-[#C9A96E] text-xs font-semibold group-hover:underline">Me contacter →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gray-950">
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
              <span className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] uppercase">Votre projet</span>
              <div className="w-6 h-px bg-[#C9A96E]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Votre secteur mérite <span className="italic text-[#C9A96E]">mieux.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Devis gratuit, réponse sous 24h, sans engagement. Discutons de ce que je peux créer pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2">
                  Demander un devis gratuit <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg text-sm border border-white/10 transition-colors">
                  Voir les tarifs
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

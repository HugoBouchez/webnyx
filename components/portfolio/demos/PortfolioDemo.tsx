'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, FileText, Home, Users, Scale, Shield, Clock, Calendar, ChevronDown, Award, BookOpen, Briefcase, Heart, Building, Gavel, Info, Newspaper, MessageSquare, ShoppingCart, Search } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioDemo() {
  const [activeTab, setActiveTab] = useState('accueil')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '', service: '' })
    }, 3000)
  }

  const navItems = [
    { id: 'accueil', label: 'ACCUEIL' },
    { id: 'services', label: 'DOMAINES' },
    { id: 'apropos', label: 'À PROPOS' },
    { id: 'actualites', label: 'ACTUALITÉS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const services = [
    {
      icon: Home,
      title: 'Achat & Vente Immobilier',
      desc: 'Accompagnement complet pour vos transactions immobilières',
      details: 'Nous vous accompagnons dans toutes vos démarches d\'achat et de vente immobilière. De la rédaction des actes à la signature finale, notre équipe vous garantit sécurité et sérénité.',
      features: ['Actes authentiques', 'Vérification des documents', 'Conseil juridique', 'Suivi personnalisé'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    {
      icon: Users,
      title: 'Succession & Donation',
      desc: 'Gestion des successions et donations en toute transparence',
      details: 'Nos notaires vous accompagnent dans la gestion des successions et donations. Nous vous aidons à optimiser la transmission de votre patrimoine tout en respectant la législation en vigueur.',
      features: ['Règlement de succession', 'Donations', 'Testaments', 'Conseil en optimisation'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: FileText,
      title: 'Testament & Mandat',
      desc: 'Protection de vos proches et de vos biens',
      details: 'Rédaction de testaments et mandats de protection future pour sécuriser votre avenir et celui de vos proches. Nos experts vous conseillent sur les meilleures solutions.',
      features: ['Testaments authentiques', 'Mandats de protection', 'Conseil personnalisé', 'Mise à jour'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    },
    {
      icon: Briefcase,
      title: 'Droit des Sociétés',
      desc: 'Création et gestion de vos entreprises',
      details: 'Création, modification et dissolution de sociétés. Nos notaires vous accompagnent dans toutes les étapes de la vie de votre entreprise avec expertise et réactivité.',
      features: ['Création de société', 'Modification statutaire', 'Fusion-acquisition', 'Dissolution'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: Heart,
      title: 'Régimes Matrimoniaux',
      desc: 'Conseil en droit de la famille',
      details: 'Conseil et rédaction d\'actes pour les régimes matrimoniaux, PACS et séparations. Nous vous aidons à protéger vos intérêts et ceux de votre famille.',
      features: ['Contrats de mariage', 'PACS', 'Séparation de biens', 'Conseil juridique'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    },
    {
      icon: Building,
      title: 'Droit Immobilier',
      desc: 'Expertise en droit de l\'immobilier',
      details: 'Conseil et accompagnement pour tous vos projets immobiliers : baux commerciaux, copropriété, servitudes et plus encore.',
      features: ['Baux commerciaux', 'Copropriété', 'Servitudes', 'Expertise foncière'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
  ]

  const stats = [
    { value: '25+', label: 'Années d\'expérience', icon: Award },
    { value: '5000+', label: 'Actes réalisés', icon: FileText },
    { value: '98%', label: 'Clients satisfaits', icon: Users },
    { value: '24/7', label: 'Support disponible', icon: Clock },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Particulier',
      content: 'Un accompagnement exceptionnel pour notre achat immobilier. L\'équipe a été réactive, professionnelle et rassurante tout au long du processus. Je recommande vivement !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Jean Martin',
      role: 'Entrepreneur',
      content: 'Création de ma société réalisée avec professionnalisme. Les conseils ont été précieux et l\'accompagnement personnalisé. Une étude notariale de confiance.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Sophie Lefebvre',
      role: 'Particulier',
      content: 'Gestion de la succession de mes parents effectuée avec beaucoup de délicatesse et de professionnalisme. Merci pour votre accompagnement dans ce moment difficile.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Pierre Bernard',
      role: 'Investisseur',
      content: 'Expertise remarquable en droit immobilier. Les conseils ont été déterminants pour notre projet d\'investissement. Une équipe compétente et à l\'écoute.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  ]

  const articles = [
    {
      id: 1,
      title: 'Nouvelle loi sur les successions : ce qui change en 2024',
      excerpt: 'Découvrez les principales modifications de la législation sur les successions et leurs impacts sur votre patrimoine.',
      date: '15 Janvier 2024',
      category: 'Actualités',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Guide complet : Acheter un bien immobilier en 2024',
      excerpt: 'Tout ce que vous devez savoir avant d\'acheter un bien immobilier : étapes, documents nécessaires et conseils pratiques.',
      date: '10 Janvier 2024',
      category: 'Immobilier',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Testament : Pourquoi et comment le rédiger ?',
      excerpt: 'Protégez vos proches en rédigeant votre testament. Nos conseils pour bien préparer la transmission de votre patrimoine.',
      date: '5 Janvier 2024',
      category: 'Conseils',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    },
  ]

  const faqs = [
    {
      question: 'Quels sont les honoraires d\'un notaire ?',
      answer: 'Les honoraires notariaux sont réglementés et transparents. Ils varient selon le type d\'acte (achat immobilier, succession, création de société, etc.). Nous vous fournissons un devis détaillé gratuit avant toute démarche.',
    },
    {
      question: 'Combien de temps prend une vente immobilière ?',
      answer: 'En moyenne, une vente immobilière prend entre 2 et 3 mois entre la signature du compromis et l\'acte authentique. Ce délai peut varier selon la complexité du dossier et les conditions suspensives.',
    },
    {
      question: 'Puis-je venir sans rendez-vous ?',
      answer: 'Nous recommandons fortement de prendre rendez-vous pour garantir la disponibilité d\'un notaire et un temps d\'échange suffisant. Vous pouvez nous contacter par téléphone ou via notre formulaire en ligne.',
    },
    {
      question: 'Quels documents dois-je apporter pour une succession ?',
      answer: 'Pour une succession, vous devrez apporter : l\'acte de décès, les pièces d\'identité des héritiers, les livrets de famille, les justificatifs de patrimoine (comptes bancaires, titres, biens immobiliers), et tout document utile à l\'évaluation du patrimoine.',
    },
    {
      question: 'Le notaire peut-il me conseiller avant l\'achat ?',
      answer: 'Absolument ! Nous recommandons de consulter un notaire dès le début de votre projet d\'achat. Nous pouvons vérifier les documents, analyser les risques et vous conseiller avant la signature du compromis.',
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'accueil':
        return (
          <div className="space-y-0">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop"
                  alt="Expertise notariale"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/85 to-neutral-900/75" />
              </div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white leading-tight">
                      Expertise Notariale
                    </h1>
                    <p className="text-xl md:text-2xl text-white/95 mb-6 leading-relaxed font-light max-w-3xl mx-auto">
                      Votre partenaire de confiance pour tous vos projets immobiliers, familiaux et professionnels depuis 1999
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        disabled
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-amber-700 text-white font-semibold uppercase tracking-wider hover:bg-amber-800 transition-all cursor-not-allowed opacity-75"
                        title="Bouton désactivé (démo)"
                      >
                        Prendre rendez-vous
                      </motion.button>
                      <motion.button
                        disabled
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white/10 transition-all cursor-not-allowed opacity-75"
                        title="Bouton désactivé (démo)"
                      >
                        Nos services
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-20 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={statsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800"
                      >
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-amber-700 dark:text-amber-500" />
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={statsInView ? { scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                          className="text-4xl md:text-5xl font-bold mb-2 text-neutral-900 dark:text-white"
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Services - Section complète avec beaucoup de texte */}
            <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
                >
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-neutral-900 dark:text-white">
                    Nos Domaines d'Expertise Notariale
                  </h2>
                  <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed mb-4">
                    Notre étude notariale vous accompagne dans tous les domaines du droit immobilier, familial et des affaires. 
                    Forts de plus de 25 ans d'expérience, nos notaires mettent leur expertise au service de vos projets les plus importants.
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                    Que vous souhaitiez acheter ou vendre un bien immobilier, organiser votre succession, créer une entreprise ou protéger votre patrimoine, 
                    nous vous garantissons un accompagnement personnalisé, sécurisé et transparent à chaque étape de votre démarche.
                  </p>
                </motion.div>
                <div className="space-y-12">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="grid md:grid-cols-2 gap-12 items-center p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300"
                      >
                        <div>
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                              <Icon className="w-8 h-8 text-amber-700 dark:text-amber-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                            {service.details}
                          </p>
                          <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                            {service.desc} Notre équipe de notaires expérimentés vous guide à travers chaque étape, 
                            en veillant à ce que tous les aspects légaux soient correctement traités et que vos intérêts soient protégés. 
                            Nous nous engageons à vous fournir des conseils clairs et personnalisés adaptés à votre situation spécifique.
                          </p>
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start space-x-3 text-neutral-700 dark:text-neutral-300">
                                <CheckCircle className="w-6 h-6 text-amber-700 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-base leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="relative h-80 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* À propos - Section très détaillée */}
            <section className="py-24 bg-white dark:bg-neutral-950">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[600px] rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                      alt="Notre étude notariale"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-neutral-900 dark:text-white">
                      Une Étude Notariale de Confiance et d'Excellence
                    </h2>
                    <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      <p>
                        Fondée en 1999, notre étude notariale allie tradition et modernité pour vous offrir un service d'excellence. 
                        Depuis plus de 25 ans, nous avons accompagné des milliers de clients dans leurs projets les plus importants, 
                        qu'il s'agisse d'achats immobiliers, de successions, de créations d'entreprises ou de protection patrimoniale.
                      </p>
                      <p>
                        Nos notaires, tous diplômés et expérimentés, mettent leur expertise au service de vos projets personnels et professionnels. 
                        Nous sommes fiers de notre réputation de rigueur, de transparence et de réactivité, valeurs qui guident notre pratique quotidienne.
                      </p>
                      <p>
                        Nous privilégions l'écoute attentive de vos besoins, la transparence dans nos démarches et la réactivité dans nos réponses 
                        pour vous accompagner dans toutes vos démarches juridiques avec sérénité et confiance. Notre engagement : vous offrir des conseils 
                        personnalisés adaptés à votre situation, sécuriser vos actes et protéger vos intérêts à chaque étape.
                      </p>
                      <p>
                        Notre équipe est composée de professionnels dévoués qui comprennent l'importance de chaque dossier. 
                        Nous savons que derrière chaque acte notarial se cachent des projets de vie, des rêves à réaliser ou des situations 
                        délicates à gérer. C'est pourquoi nous mettons un point d'honneur à vous accompagner avec humanité, professionnalisme et discrétion.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                      <div className="flex items-center space-x-2 px-6 py-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                        <Award className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                        <span className="text-neutral-800 dark:text-neutral-200 font-semibold">25+ ans d'expérience</span>
                      </div>
                      <div className="flex items-center space-x-2 px-6 py-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                        <Shield className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                        <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Assurance professionnelle</span>
                      </div>
                      <div className="flex items-center space-x-2 px-6 py-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                        <Users className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                        <span className="text-neutral-800 dark:text-neutral-200 font-semibold">5000+ clients satisfaits</span>
                      </div>
                    </div>
                    <motion.button
                      disabled
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('apropos')}
                      className="mt-10 px-8 py-4 bg-neutral-900 dark:bg-neutral-800 text-white rounded-lg font-semibold text-lg hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors cursor-not-allowed opacity-75"
                      title="Bouton désactivé (démo)"
                    >
                      Découvrir notre histoire
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Testimonials - Section enrichie */}
            <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-neutral-900 dark:text-white">
                    La Confiance de Nos Clients
                  </h2>
                  <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed mb-4">
                    Plus de 98% de nos clients nous recommandent et font confiance à notre expertise pour leurs projets les plus importants. 
                    Découvrez les témoignages de ceux qui nous ont fait confiance pour leurs transactions immobilières, successions et projets professionnels.
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    Chaque témoignage reflète notre engagement envers l'excellence, la transparence et l'accompagnement personnalisé qui caractérisent notre pratique notariale.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-10 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-amber-500 text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-amber-500/20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-neutral-900 dark:text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-base text-neutral-600 dark:text-neutral-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-neutral-900 dark:bg-neutral-950">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white">
                    Besoin d'un Conseil Notarial Personnalisé ?
                  </h2>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Que vous ayez un projet d'achat immobilier, une succession à gérer, une entreprise à créer ou toute autre démarche nécessitant 
                    l'expertise d'un notaire, notre équipe est à votre disposition pour vous accompagner avec professionnalisme et bienveillance.
                  </p>
                  <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                    Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un rendez-vous personnalisé. 
                    Nous vous répondrons dans les plus brefs délais et vous proposerons une solution adaptée à vos besoins.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      disabled
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab('contact')}
                      className="px-10 py-5 bg-amber-700 text-white font-semibold text-lg uppercase tracking-wider hover:bg-amber-800 transition-all cursor-not-allowed opacity-75"
                      title="Bouton désactivé (démo)"
                    >
                      Prendre rendez-vous
                    </motion.button>
                    <motion.button
                      disabled
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 border-2 border-white text-white font-semibold text-lg uppercase tracking-wider hover:bg-white/10 transition-all cursor-not-allowed opacity-75"
                      title="Bouton désactivé (démo)"
                    >
                      +33 1 23 45 67 89
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        )

      case 'services':
        return (
          <div className="py-20 space-y-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">
                Nos Domaines d'Expertise
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Une expertise complète pour tous vos besoins juridiques et patrimoniaux.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                      {service.details}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-amber-700 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )

      case 'apropos':
        return (
          <div className="py-20 space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800"
              >
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Notre étude notariale"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Gavel className="w-16 h-16 text-white mb-4 opacity-70" />
                  <p className="text-white text-lg font-serif italic">"Tradition & Excellence"</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-neutral-900 dark:text-white">
                  Notre Étude Notariale
                </h2>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                  Fondée en 1999, notre étude notariale allie tradition et modernité pour vous offrir 
                  un service d'excellence. Nos notaires, diplômés et expérimentés, mettent leur expertise 
                  au service de vos projets personnels et professionnels.
                </p>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  Nous privilégions l'écoute, la transparence et la réactivité pour vous accompagner 
                  dans toutes vos démarches juridiques avec sérénité et confiance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <Award className="w-5 h-5 text-amber-700 dark:text-amber-500" />
                    <span className="text-neutral-800 dark:text-neutral-200 font-medium">25+ ans d'expérience</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-200 dark:border-amber-800">
                    <Shield className="w-5 h-5 text-amber-700 dark:text-amber-500" />
                    <span className="text-neutral-800 dark:text-neutral-200 font-medium">Assurance professionnelle</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-3xl font-serif font-bold mb-12 text-center text-neutral-900 dark:text-white">
                Notre Méthode de Travail
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Prise de contact', desc: 'Premier échange pour comprendre vos besoins' },
                  { step: '02', title: 'Analyse', desc: 'Étude de votre dossier et préparation des documents' },
                  { step: '03', title: 'Conseil', desc: 'Recommandations personnalisées et devis détaillé' },
                  { step: '04', title: 'Signature', desc: 'Finalisation de l\'acte authentique' },
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-amber-700 dark:text-amber-500">{step.step}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-3xl font-serif font-bold mb-12 text-center text-neutral-900 dark:text-white">
                Questions Fréquentes
              </h3>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <span className="font-semibold text-neutral-900 dark:text-white pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 text-neutral-700 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'actualites':
        return (
          <div className="py-20 space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">
                Actualités & Conseils Juridiques
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                Restez informé des dernières actualités juridiques.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-amber-700 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{article.date}</p>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                      {article.title}
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-neutral-900 dark:text-white">
                  Contactez-nous
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-8 text-lg">
                  Prenez rendez-vous ou posez-nous vos questions. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Notre Adresse', content: '123 Avenue de la République\n75011 Paris' },
                    { icon: Phone, title: 'Appelez-nous', content: '+33 1 23 45 67 89', link: 'tel:+33123456789' },
                    { icon: Mail, title: 'Email', content: 'contact@notaire-example.fr', link: 'mailto:contact@notaire-example.fr' },
                    { icon: Clock, title: 'Horaires', content: 'Lundi - Vendredi : 9h - 18h\nSamedi : 9h - 12h (sur rendez-vous)' },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 p-4 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow"
                      >
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 dark:text-white mb-1">{item.title}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-neutral-700 dark:text-neutral-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors whitespace-pre-line"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white dark:bg-neutral-950 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    Service concerné
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition-all"
                  />
                </div>
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-800 dark:text-green-200">Message envoyé avec succès !</p>
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-800 text-white rounded-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors cursor-not-allowed opacity-75 flex items-center justify-center space-x-2"
                    title="Formulaire désactivé (démo)"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message (Démo)</span>
                  </button>
                )}
              </motion.form>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Top Header Bar */}
      <div className="bg-white dark:bg-neutral-900 py-3 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center shadow-md">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-neutral-900 dark:text-white">NotaireCO</span>
            </div>
            
            {/* Contact Info & Button */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                <span>123 Avenue de la République, Paris</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
                <Phone className="w-4 h-4 text-amber-700 dark:text-amber-500" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <motion.button
                disabled
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 border-2 border-amber-700 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 rounded-md font-semibold text-sm hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors cursor-not-allowed opacity-75"
                title="Bouton désactivé (démo)"
              >
                CONSULTATION
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-neutral-900 dark:bg-neutral-950 py-4 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 md:gap-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 uppercase font-semibold text-sm transition-colors ${
                    activeTab === item.id
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {activeTab === item.id && (
                    <motion.span
                      layoutId="notaire-nav-indicator"
                      className="absolute inset-0 bg-amber-700 rounded-md -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2 bg-neutral-800 rounded-full text-white cursor-not-allowed opacity-75"
                title="Fonctionnalité désactivée (démo)"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </motion.div>
              <motion.button
                disabled
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-amber-700 rounded-full text-white cursor-not-allowed opacity-75"
                title="Fonctionnalité désactivée (démo)"
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

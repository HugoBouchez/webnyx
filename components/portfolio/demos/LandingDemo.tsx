'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, Shield, CheckCircle, Star, MapPin, Wrench, Droplet, Zap, Home, MessageSquare, Mail, Calendar, Award, Users, TrendingUp, FileText, AlertCircle, Settings, Tool, Building, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export default function LandingDemo() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', service: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '', service: '' })
    }, 3000)
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const phoneNumber = '01 23 45 67 89'

  const services = [
    {
      icon: Droplet,
      title: 'Dépannage d\'urgence 24/7',
      description: 'Intervention rapide pour toutes vos urgences plomberie. Fuites, WC bouchés, pannes de chauffe-eau. Disponible jour et nuit, week-end et jours fériés.',
      features: ['Intervention sous 30 minutes', 'Disponible 24/7', 'Matériel professionnel'],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Wrench,
      title: 'Réparation de fuites d\'eau',
      description: 'Diagnostic précis et réparation rapide de toutes les fuites d\'eau. Robinetterie, canalisations, joints défectueux, raccords. Intervention garantie.',
      features: ['Diagnostic gratuit', 'Réparation immédiate', 'Garantie 2 ans'],
      color: 'from-cyan-600 to-cyan-700',
    },
    {
      icon: Zap,
      title: 'Débouchage canalisations',
      description: 'Débouchage professionnel de vos WC, éviers, douches et canalisations. Utilisation de matériel haute pression et techniques modernes.',
      features: ['Caméra d\'inspection', 'Haute pression', 'Garantie résultat'],
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      icon: Home,
      title: 'Installation & Remplacement chauffe-eau',
      description: 'Installation, réparation et remplacement de tous types de chauffe-eau : électrique, gaz, solaire, thermodynamique. Devis gratuit.',
      features: ['Tous modèles', 'Installation garantie', 'Conseil personnalisé'],
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Building,
      title: 'Rénovation salle de bain & cuisine',
      description: 'Rénovation complète de votre salle de bain et cuisine. Installation sanitaire, robinetterie, carrelage, plomberie. Travaux de qualité.',
      features: ['Devis détaillé', 'Travaux garantis', 'Suivi de chantier'],
      color: 'from-teal-600 to-teal-700',
    },
    {
      icon: Settings,
      title: 'Installation & Maintenance plomberie',
      description: 'Installation complète de plomberie neuve et maintenance préventive. Entretien régulier pour éviter les pannes et prolonger la durée de vie.',
      features: ['Maintenance préventive', 'Contrats d\'entretien', 'Intervention rapide'],
      color: 'from-green-600 to-green-700',
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Artisan certifié RGE',
      description: 'Plombier certifié RGE (Reconnu Garant de l\'Environnement) avec plus de 15 ans d\'expérience. Assuré et qualifié pour tous travaux.',
      stat: '15+ ans',
    },
    {
      icon: Clock,
      title: 'Intervention rapide',
      description: 'Disponible 24h/24 et 7j/7 pour vos urgences. Intervention moyenne sous 30 minutes dans Paris et proche banlieue.',
      stat: '< 30 min',
    },
    {
      icon: Shield,
      title: 'Garantie travaux',
      description: 'Tous nos travaux sont garantis. Garantie décennale pour les installations neuves. Satisfaction garantie ou remboursé.',
      stat: '100%',
    },
    {
      icon: FileText,
      title: 'Devis gratuit & transparent',
      description: 'Devis détaillé et gratuit avant toute intervention. Pas de surprise, prix clairs et justes. Transparence totale sur les tarifs.',
      stat: 'Gratuit',
    },
    {
      icon: BadgeCheck,
      title: 'Assurance décennale',
      description: 'Entreprise assurée avec garantie décennale. Tous nos travaux sont couverts par une assurance professionnelle complète.',
      stat: 'Assuré',
    },
    {
      icon: Users,
      title: '500+ clients satisfaits',
      description: 'Plus de 500 clients satisfaits dans Paris et Île-de-France. Taux de satisfaction de 98%. Références disponibles sur demande.',
      stat: '500+',
    },
  ]

  const certifications = [
    { name: 'Certification RGE', icon: Award },
    { name: 'Qualibat', icon: BadgeCheck },
    { name: 'Assurance décennale', icon: Shield },
    { name: 'CAP Plomberie', icon: FileText },
  ]

  const interventionZones = [
    { arrondissement: 'Paris', zones: ['Tous les arrondissements (1er au 20e)'] },
    { arrondissement: 'Hauts-de-Seine', zones: ['Boulogne-Billancourt', 'Nanterre', 'Asnières-sur-Seine', 'Clichy', 'Levallois-Perret', 'Neuilly-sur-Seine', 'Courbevoie', 'Colombes'] },
    { arrondissement: 'Seine-Saint-Denis', zones: ['Saint-Denis', 'Aubervilliers', 'Montreuil', 'Pantin', 'Noisy-le-Grand'] },
    { arrondissement: 'Val-de-Marne', zones: ['Vitry-sur-Seine', 'Créteil', 'Champigny-sur-Marne', 'Ivry-sur-Seine'] },
  ]

  const testimonials = [
    {
      name: 'Marie Dupont',
      location: 'Paris 15e',
      rating: 5,
      text: 'Intervention très rapide pour une fuite d\'eau urgente à 22h. Plombier professionnel, propre et efficace. Travail impeccable, prix correct. Je recommande vivement !',
      date: 'Il y a 2 semaines',
      service: 'Réparation fuite d\'eau',
    },
    {
      name: 'Jean Martin',
      location: 'Boulogne-Billancourt',
      rating: 5,
      text: 'WC complètement bouché un dimanche matin. Intervention sous 1h, débouchage rapide avec caméra. Travail impeccable, prix correct. Très satisfait du service.',
      date: 'Il y a 1 mois',
      service: 'Débouchage WC',
    },
    {
      name: 'Sophie Bernard',
      location: 'Paris 11e',
      rating: 5,
      text: 'Remplacement de chauffe-eau effectué rapidement. Devis respecté, installation propre et soignée. Plombier ponctuel et professionnel. Excellent service.',
      date: 'Il y a 3 semaines',
      service: 'Remplacement chauffe-eau',
    },
    {
      name: 'Pierre Moreau',
      location: 'Nanterre',
      rating: 5,
      text: 'Rénovation complète de la salle de bain. Travail de qualité, respect des délais et du budget. Équipe professionnelle et à l\'écoute. Je recommande vivement.',
      date: 'Il y a 2 mois',
      service: 'Rénovation salle de bain',
    },
    {
      name: 'Claire Dubois',
      location: 'Paris 7e',
      rating: 5,
      text: 'Fuite d\'eau dans la cuisine, intervention en urgence. Diagnostic rapide, réparation immédiate. Plombier sérieux et compétent. Prix transparents.',
      date: 'Il y a 1 semaine',
      service: 'Réparation fuite',
    },
    {
      name: 'Marc Lefebvre',
      location: 'Levallois-Perret',
      rating: 5,
      text: 'Installation complète de plomberie pour appartement neuf. Travaux réalisés dans les temps, qualité irréprochable. Très professionnel, je recommande.',
      date: 'Il y a 3 mois',
      service: 'Installation plomberie',
    },
  ]

  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '15+', label: 'Années d\'expérience' },
    { number: '< 30 min', label: 'Temps d\'intervention moyen' },
    { number: '24/7', label: 'Disponibilité' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      {/* Header */}
      <header className="bg-white dark:bg-dark-light border-b-2 border-blue-600 dark:border-blue-500 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Plombier Pro Paris</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Artisan certifié RGE • Intervention 24/7</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('accueil')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === 'accueil'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === 'services'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === 'a-propos'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('zone')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === 'zone'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Zone d'intervention
              </button>
              <button
                onClick={() => scrollToSection('avis')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === 'avis'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Avis clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Phone CTA */}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-bold text-base transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">{phoneNumber}</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&h=1080&fit=crop"
            alt="Plombier professionnel en intervention"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-white"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full border border-blue-500/50">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-bold">Disponible 24/7 pour vos urgences</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Plombier Professionnel à{' '}
                <span className="text-blue-400">Paris</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Artisan plombier certifié RGE avec plus de 15 ans d'expérience. 
                Intervention rapide 24/7 pour toutes vos urgences plomberie dans Paris et Île-de-France.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span>Appeler maintenant</span>
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Demander un devis gratuit
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop"
                  alt="Plombier professionnel"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Nos Services de Plomberie
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins en plomberie. Intervention rapide, 
              professionnelle et garantie pour tous nos travaux.
            </p>
          </motion.div>

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
                  className="bg-white dark:bg-dark border-2 border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-xl transition-all group hover:border-blue-500 dark:hover:border-blue-500"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-300"
                  >
                    <span>Appeler pour ce service</span>
                    <Phone className="w-4 h-4" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark dark:to-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Pourquoi Choisir Plombier Pro Paris ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Un plombier professionnel certifié à votre service, disponible rapidement pour toutes vos urgences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-light rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.stat}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Équipe de plombiers professionnels"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                À Propos de Plombier Pro Paris
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Plombier Pro Paris est une entreprise de plomberie certifiée RGE avec plus de 15 ans d'expérience 
                dans le domaine de la plomberie résidentielle et commerciale à Paris et en Île-de-France.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Notre équipe de plombiers qualifiés et expérimentés intervient rapidement pour tous vos besoins 
                en plomberie : dépannage d'urgence, réparation de fuites, débouchage de canalisations, installation 
                et remplacement de chauffe-eau, rénovation de salles de bain et cuisines.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Nous nous engageons à fournir un service de qualité, avec des prix transparents, des devis gratuits 
                et une garantie sur tous nos travaux. Disponibles 24/7 pour vos urgences, nous intervenons rapidement 
                dans toute la région parisienne.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {certifications.map((cert, index) => {
                  const CertIcon = cert.icon
                  return (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-dark rounded-lg">
                      <CertIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention Section */}
      <section id="zone" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark dark:to-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Zone d'Intervention
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nous intervenons rapidement dans toute la région parisienne. Délai moyen d'intervention : 30 minutes.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interventionZones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-light rounded-xl p-6 border-2 border-gray-200 dark:border-gray-800"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>{zone.arrondissement}</span>
                  </h3>
                  <div className="space-y-2">
                    {zone.zones.map((z, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span>{z}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center bg-white dark:bg-dark-light rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Vous ne trouvez pas votre ville ? Contactez-nous, nous intervenons dans toute l'Île-de-France 
                et pouvons nous déplacer pour les interventions urgentes.
              </p>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Vérifier la disponibilité dans votre ville</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avis" className="py-20 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Avis Clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Plus de 500 clients satisfaits. Découvrez ce que nos clients disent de nos services de plomberie.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white ml-2">4.9/5</span>
              <span className="text-gray-600 dark:text-gray-400">(127 avis)</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.date}
                    </p>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-2">
                    {testimonial.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark dark:to-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Besoin d'une intervention ? Appelez-nous maintenant ou remplissez le formulaire pour un devis gratuit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-light rounded-xl border-2 border-gray-200 dark:border-gray-800">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Téléphone</h4>
                      <a
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="text-2xl text-blue-600 dark:text-blue-400 font-bold hover:underline"
                      >
                        {phoneNumber}
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Disponible 24/7 pour les urgences</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-light rounded-xl border-2 border-gray-200 dark:border-gray-800">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Horaires</h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Lundi - Dimanche : 24h/24</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Urgences traitées en priorité</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-light rounded-xl border-2 border-gray-200 dark:border-gray-800">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Zone d'intervention</h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">Paris et Île-de-France</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Intervention rapide dans toute la région</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="flex items-center justify-center space-x-3 w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    <span>Appeler maintenant</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-light rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Demander un Devis Gratuit
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="01 23 45 67 89"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Type de service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="urgence">Dépannage d'urgence</option>
                    <option value="fuite">Réparation de fuite</option>
                    <option value="debouchage">Débouchage canalisations</option>
                    <option value="chauffe-eau">Chauffe-eau</option>
                    <option value="renovation">Rénovation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Décrivez votre besoin *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Ex: Fuite d'eau dans la cuisine, WC bouché, remplacement de chauffe-eau..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {formSubmitted ? 'Demande envoyée ✓' : 'Envoyer la demande'}
                </button>

                {formSubmitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-green-600 dark:text-green-400 font-semibold"
                  >
                    Merci ! Nous vous contacterons rapidement.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-dark text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">Plombier Pro Paris</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Plombier professionnel certifié RGE à Paris. Intervention rapide 24/7 pour toutes vos urgences plomberie.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dépannage d'urgence</li>
                <li>Réparation de fuites</li>
                <li>Débouchage canalisations</li>
                <li>Chauffe-eau</li>
                <li>Rénovation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-white font-semibold">
                    {phoneNumber}
                  </a>
                </p>
                <p>Disponible 24/7</p>
                <p>Paris et Île-de-France</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Certifications</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Certification RGE</li>
                <li>Qualibat</li>
                <li>Assurance décennale</li>
                <li>CAP Plomberie</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Plombier Pro Paris. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Mentions légales</a>
                <a href="#" className="hover:text-white">Politique de confidentialité</a>
                <a href="#" className="hover:text-white">CGV</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

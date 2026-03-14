'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MapPin, Mail, Clock, ChevronDown, ShoppingCart, Star, Award, Users, Sparkles, CheckCircle, X } from 'lucide-react'
import Image from 'next/image'

export default function CoiffureDemo() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHours, setShowHours] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Services avec descriptions
  const servicesFemme = [
    { name: 'Coupe et brushing', price: '95€', description: 'Coupe personnalisée suivie d\'un brushing soigné pour un résultat élégant et durable' },
    { name: 'Coupe et séchage naturel', price: '80€', description: 'Coupe adaptée à votre nature de cheveux avec séchage naturel' },
    { name: 'Brushing', price: '50€ / 55€', description: 'Brushing professionnel pour un résultat lisse et brillant' },
    { name: 'Coloration complète', price: '120€', description: 'Coloration complète avec produits de qualité pour un rendu naturel' },
    { name: 'Mèches / Balayage', price: '140€', description: 'Technique de balayage pour un effet naturel et moderne' },
    { name: 'Permanente', price: '180€', description: 'Permanente professionnelle pour des boucles naturelles et durables' },
    { name: 'Lissage brésilien', price: '250€', description: 'Lissage brésilien pour des cheveux lisses et soyeux pendant plusieurs mois' },
    { name: 'Extensions', price: 'À partir de 300€', description: 'Pose d\'extensions pour volume et longueur' },
    { name: 'Chignon / Coiffure de soirée', price: '90€', description: 'Coiffure élégante pour vos événements spéciaux' },
  ]

  const servicesHomme = [
    { name: 'Coupe homme', price: '55€', description: 'Coupe moderne adaptée à votre style' },
    { name: 'Coupe et barbe', price: '75€', description: 'Coupe complète avec entretien de la barbe' },
    { name: 'Rasage traditionnel', price: '45€', description: 'Rasage au rasoir avec soins du visage' },
    { name: 'Coloration cheveux', price: '65€', description: 'Coloration discrète pour couvrir les cheveux blancs' },
    { name: 'Brushing', price: '35€', description: 'Brushing pour un style soigné' },
  ]

  const servicesEnfant = [
    { name: 'Coupe enfant - Garçon', price: '45€', description: 'Coupe adaptée aux enfants avec patience et douceur' },
    { name: 'Coupe enfant - Fille', price: '55€', description: 'Coupe soignée pour les petites filles' },
  ]

  const servicesEsthetique = [
    { name: 'Soin du visage', price: '75€', description: 'Soin complet du visage adapté à votre type de peau' },
    { name: 'Épilation sourcils', price: '15€', description: 'Épilation précise des sourcils' },
    { name: 'Épilation lèvre', price: '12€', description: 'Épilation du duvet de la lèvre supérieure' },
    { name: 'Manucure classique', price: '35€', description: 'Soin complet des ongles avec vernis classique' },
    { name: 'Manucure avec vernis gel', price: '50€', description: 'Manucure avec vernis gel longue tenue' },
    { name: 'Pédicure', price: '45€', description: 'Soin complet des pieds et ongles' },
  ]

  const produits = [
    {
      name: 'VOLUME',
      description: 'La gamme de soins qui donne du volume à vos cheveux',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    },
    {
      name: 'HYDRATE',
      description: 'La gamme de soins nourrissants',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    },
    {
      name: 'THICKENING',
      description: 'La gamme de soins qui renforce les cheveux trop fins',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    },
    {
      name: 'REPAIR',
      description: 'La gamme idéale pour les cheveux secs et endommagés',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    },
  ]

  const team = [
    {
      id: 1,
      name: 'Sophie Dubois',
      role: 'Directrice artistique',
      specialty: 'Coloration & Mèches',
      experience: '15 ans',
      description: 'Spécialisée en coloration et techniques de mèches, Sophie apporte créativité et expertise à chaque prestation.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Marc Lefebvre',
      role: 'Coiffeur expert',
      specialty: 'Coiffure Homme',
      experience: '12 ans',
      description: 'Expert en coiffure masculine, Marc maîtrise toutes les tendances actuelles pour un style sur-mesure.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Marie Bernard',
      role: 'Esthéticienne',
      specialty: 'Soins du visage',
      experience: '10 ans',
      description: 'Spécialiste en soins esthétiques, Marie prend soin de votre peau avec des produits de qualité.',
      image: 'https://images.unsplash.com/photo-1594824476968-48aa8a9e0dcf?w=400&h=400&fit=crop&crop=face',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Claire Martin',
      content: 'J\'ai été enchantée par mon expérience au salon Élégance. L\'équipe est très professionnelle et à l\'écoute. J\'ai eu un balayage et le résultat est absolument parfait. Je recommande vivement !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Thomas Rousseau',
      content: 'Excellent salon ! Marc a su me conseiller pour une coupe moderne qui me va parfaitement. L\'accueil est chaleureux et le salon est magnifique. Je reviendrai sans hésitation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Julie Petit',
      content: 'Un salon exceptionnel ! Sophie est une véritable artiste. J\'ai eu une coloration complète et un brushing, le résultat dépasse mes attentes. L\'ambiance est conviviale et le service impeccable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ]

  const faqs = [
    {
      question: 'Comment prendre rendez-vous ?',
      answer: 'Vous pouvez prendre rendez-vous par téléphone au 01 23 45 67 89. Nous sommes disponibles du lundi au vendredi de 9h à 19h, et le samedi de 9h à 18h.',
    },
    {
      question: 'Combien de temps dure une prestation ?',
      answer: 'La durée varie selon la prestation : une coupe simple dure environ 45 minutes, une coloration complète 2h30, et un lissage brésilien 3h. Nous vous donnerons une estimation précise lors de la prise de rendez-vous.',
    },
    {
      question: 'Acceptez-vous les cartes bancaires ?',
      answer: 'Oui, nous acceptons les cartes bancaires, les espèces et les chèques. Nous acceptons également certains bons cadeaux.',
    },
    {
      question: 'Quels produits utilisez-vous ?',
      answer: 'Nous utilisons exclusivement des produits de qualité professionnelle, sélectionnés pour leur efficacité et leur respect des cheveux. Nous privilégions les marques reconnues pour leur expertise.',
    },
    {
      question: 'Le salon est-il accessible aux personnes à mobilité réduite ?',
      answer: 'Oui, notre salon est accessible et nous sommes équipés pour accueillir les personnes à mobilité réduite. N\'hésitez pas à nous contacter pour toute information complémentaire.',
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: '20 ans d\'expérience',
      description: 'Plus de deux décennies d\'expertise au service de votre beauté',
    },
    {
      icon: Users,
      title: 'Équipe qualifiée',
      description: 'Des professionnels formés aux dernières techniques et tendances',
    },
    {
      icon: Sparkles,
      title: 'Produits de qualité',
      description: 'Sélection rigoureuse de produits professionnels pour des résultats durables',
    },
    {
      icon: Star,
      title: 'Service personnalisé',
      description: 'Chaque prestation est adaptée à vos besoins et à votre style',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-black/40 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('accueil')} className="flex items-center">
              <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Georgia, serif' }}>
                ÉLÉGANCE
              </span>
            </button>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'accueil' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('salon')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'salon' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Le salon
              </button>
              <button 
                onClick={() => scrollToSection('coiffure')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'coiffure' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Coiffure
              </button>
              <button 
                onClick={() => scrollToSection('esthetique')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'esthetique' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Esthétique
              </button>
              <button 
                onClick={() => scrollToSection('produits')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'produits' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Produits
              </button>
              <button 
                onClick={() => scrollToSection('tarifs')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'tarifs' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'} ${activeSection === 'contact' ? 'border-b-2 border-amber-600 pb-1' : ''}`}
              >
                Contact
              </button>
              <button className={`transition-all duration-200 font-medium text-sm ${isScrolled ? 'text-gray-900 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}>
                E-shop
              </button>
            </nav>
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
              <span className="text-xs font-semibold text-gray-700">FR</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop"
            alt="Salon de coiffure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}
          >
            ÉLÉGANCE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl italic mb-8 sm:mb-12" style={{ fontFamily: 'Georgia, serif' }}
          >
            Maison de coiffure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:0123456789"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Prendre rendez-vous</span>
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('tarifs')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Voir nos prestations
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section Expérience / Le Salon */}
      <section id="salon" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="text-7xl sm:text-8xl text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>"</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide leading-tight">
                Plus de 20 ans d'expérience
                <br />
                À votre service...
              </h2>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mt-6 sm:mt-8 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop"
                  alt="Salon"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-amber-600/30 p-6 sm:p-8 md:p-12"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Coiffeur femmes et hommes à Paris
              </h3>
              <div className="h-px bg-amber-600/30 mb-4 sm:mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Nichée dans une magnifique maison de maître au cœur de Paris, la Maison de coiffure Élégance accueille ses clientes et ses clients afin de prendre le plus grand soin de leur chevelure. Plus qu'un salon de coiffure, il s'agit d'un lieu où vivre une agréable expérience dès le pas de la porte passé, avec un résultat époustouflant à la clé.
              </p>
              <div className="h-px bg-amber-600/30 mb-4 sm:mb-6" />
              <div className="space-y-3">
                <motion.button
                  onClick={() => scrollToSection('salon')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 sm:py-4 border border-amber-600 text-amber-600 uppercase font-semibold text-sm sm:text-base hover:bg-amber-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                >
                  Notre salon de coiffure
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('tarifs')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 sm:py-4 border border-amber-600 text-amber-600 uppercase font-semibold text-sm sm:text-base hover:bg-amber-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                >
                  Nos tarifs et prestations
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Pourquoi nous choisir
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Un savoir-faire reconnu, une expertise de plus de 20 ans et une approche personnalisée pour chaque client
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Coiffure Femme */}
      <section id="coiffure" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Coiffure femme
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Notre salon de coiffure à Paris vous propose une gamme complète de prestations pour femmes. De la coupe simple au brushing, en passant par la coloration, le balayage, le lissage brésilien, les extensions ou encore les coiffures de soirée, notre équipe de professionnels expérimentés saura répondre à toutes vos attentes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Chaque prestation est réalisée avec soin et attention, en utilisant des produits de qualité pour garantir un résultat impeccable et durable. Prenez place dans notre salon élégant et laissez-vous choyer par nos experts.
              </p>
              <motion.button
                onClick={() => scrollToSection('tarifs')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 border border-amber-600 text-amber-600 uppercase font-semibold text-sm sm:text-base hover:bg-amber-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              >
                Découvrir
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop"
                alt="Coiffure femme"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Section Coiffure Homme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop"
                alt="Coiffure homme"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Coiffure homme
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Le salon Élégance, situé à Paris, est spécialisé dans différentes techniques de coiffure pour hommes. Que vous recherchiez une coupe classique, moderne ou tendance, nos coiffeurs experts sauront vous conseiller et réaliser la coupe qui vous correspond.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Prenez place dans un fauteuil confortable au sein d'une superbe résidence, où l'excellence et le savoir-faire se rencontrent pour vous offrir une expérience unique.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Notre équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 sm:h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.specialty} • {member.experience}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Esthétique */}
      <section id="esthetique" className="py-16 sm:py-20 bg-white relative">
        <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-16 lg:w-20 h-64 lg:h-96 bg-black z-10 flex items-center justify-center">
          <span className="text-white text-xl lg:text-2xl font-bold transform -rotate-90 whitespace-nowrap" style={{ fontFamily: 'Georgia, serif' }}>
            ÉLÉGANCE
          </span>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:ml-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-600 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                Esthétique
              </h2>
              <p className="text-center text-gray-700 mb-8 sm:mb-12 uppercase tracking-wide text-sm sm:text-base">
                La maison Élégance vous propose divers soins esthétiques
              </p>
              <div className="relative h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop"
                  alt="Soins esthétiques"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Produits */}
      <section id="produits" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop"
                alt="Produits"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Produits
              </h2>
              <p className="text-gray-700 uppercase mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">
                Notre gamme de produits pour cheveux
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Dans notre salon, nous avons toujours sélectionné minutieusement nos produits de soins afin de vous offrir un résultat impeccable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                C'est non sans une pincée de fierté que, depuis 2022, la Maison Élégance a le plaisir de vous proposer sa gamme Premium en vente via notre boutique en ligne.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-3 border border-amber-600 text-amber-600 uppercase font-semibold text-xs sm:text-sm hover:bg-amber-600 hover:text-white transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>WWW.ELEGANCE-HAIRCARE.FR</span>
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Régimes formulés par Premium
            </h3>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
              Découvrez la routine qui correspond le mieux aux besoins de vos cheveux. Notez que certains soins sont également adaptés pour les chevelures masculines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {produits.map((produit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={produit.image}
                      alt={produit.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{produit.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{produit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Témoignages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Découvrez ce que nos clients disent de leur expérience au salon Élégance
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section id="tarifs" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Tarification
            </h2>
            <p className="text-gray-700 uppercase mb-4 sm:mb-8 tracking-wide text-sm sm:text-base">
              Tarifs des prestations de notre salon de coiffure
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
              Située à Paris, au cœur de la capitale, la Maison de coiffure Élégance vous propose des prestations de coiffure, de coloration capillaire et d'esthétique. Laissez-vous choyer par des spécialistes en la matière qui sont à l'écoute de vos envies et vous conseillent de manière experte. Contactez-nous!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
            {/* Coiffure Femme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Coiffure Femme
              </h3>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-3 sm:space-y-4">
                {servicesFemme.map((service, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 sm:pb-4 last:border-0 gap-2">
                    <div className="flex-1">
                      <span className="text-gray-900 font-medium text-sm sm:text-base">{service.name}</span>
                      {service.description && (
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{service.description}</p>
                      )}
                    </div>
                    <span className="text-gray-900 font-bold text-base sm:text-lg">{service.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Coiffure Homme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Coiffure Homme
              </h3>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-3 sm:space-y-4">
                {servicesHomme.map((service, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 sm:pb-4 last:border-0 gap-2">
                    <div className="flex-1">
                      <span className="text-gray-900 font-medium text-sm sm:text-base">{service.name}</span>
                      {service.description && (
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{service.description}</p>
                      )}
                    </div>
                    <span className="text-gray-900 font-bold text-base sm:text-lg">{service.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Coiffure Enfant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Coiffure Enfant
              </h3>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-3 sm:space-y-4">
                {servicesEnfant.map((service, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 sm:pb-4 last:border-0 gap-2">
                    <div className="flex-1">
                      <span className="text-gray-900 font-medium text-sm sm:text-base">{service.name}</span>
                      {service.description && (
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{service.description}</p>
                      )}
                    </div>
                    <span className="text-gray-900 font-bold text-base sm:text-lg">{service.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Esthétique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4 sm:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Esthétique
              </h3>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-3 sm:space-y-4">
                {servicesEsthetique.map((service, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 sm:pb-4 last:border-0 gap-2">
                    <div className="flex-1">
                      <span className="text-gray-900 font-medium text-sm sm:text-base">{service.name}</span>
                      {service.description && (
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">{service.description}</p>
                      )}
                    </div>
                    <span className="text-gray-900 font-bold text-base sm:text-lg">{service.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Questions fréquentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-inset"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <X className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop"
                alt="Salon"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Contact
              </h3>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Adresse</p>
                    <p className="text-gray-700 text-sm sm:text-base">Rue de la République, 42<br />75001 Paris</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Téléphone</p>
                    <a href="tel:0123456789" className="text-amber-600 hover:text-amber-700 font-semibold text-sm sm:text-base">
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</p>
                    <a href="mailto:contact@elegance-coiffure.fr" className="text-amber-600 hover:text-amber-700 text-sm sm:text-base">
                      contact@elegance-coiffure.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Prise de rendez-vous</p>
                    <p className="text-gray-700 mb-3 text-sm sm:text-base">Par téléphone uniquement</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
                      <p className="text-amber-900 font-semibold mb-2 text-sm sm:text-base">Horaires d'ouverture</p>
                      <div className="space-y-1 text-sm sm:text-base">
                        <p className="text-amber-800"><strong>Lundi - Vendredi:</strong> 9h00 - 19h00</p>
                        <p className="text-amber-800"><strong>Samedi:</strong> 9h00 - 18h00</p>
                        <p className="text-amber-800"><strong>Dimanche:</strong> Fermé</p>
                      </div>
                    </div>
                    <motion.a
                      href="tel:0123456789"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Appeler maintenant</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>ÉLÉGANCE</h4>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                Maison de coiffure à Paris
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Plus de 20 ans d'expertise au service de votre beauté
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm sm:text-base">Navigation</h5>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><button onClick={() => scrollToSection('salon')} className="text-gray-400 hover:text-white transition-colors">Le salon</button></li>
                <li><button onClick={() => scrollToSection('coiffure')} className="text-gray-400 hover:text-white transition-colors">Coiffure</button></li>
                <li><button onClick={() => scrollToSection('esthetique')} className="text-gray-400 hover:text-white transition-colors">Esthétique</button></li>
                <li><button onClick={() => scrollToSection('tarifs')} className="text-gray-400 hover:text-white transition-colors">Tarifs</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm sm:text-base">Informations légales</h5>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><span className="text-gray-400">Mentions légales</span></li>
                <li><span className="text-gray-400">Politique de confidentialité</span></li>
                <li><span className="text-gray-400">CGV</span></li>
                <li><span className="text-gray-400">Cookies</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Élégance - Maison de coiffure. Tous droits réservés. | SIRET: 123 456 789 00012 | RCS Paris B 123 456 789
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Site web réalisé pour portfolio professionnel
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

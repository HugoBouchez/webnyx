'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Send, CheckCircle
} from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

export default function DentisteDemo() {
  const [activePage, setActivePage] = useState('accueil')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [activeService, setActiveService] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '', service: '' })
    }, 3000)
  }

  const scrollToSection = (sectionId: string) => {
    setActivePage(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const services = [
    {
      title: 'Soins Dentaires',
      description: 'Soins préventifs et curatifs pour maintenir une santé bucco-dentaire optimale',
      details: 'Détartrage, traitement des caries, soins des gencives, prévention. Nous offrons des soins complets pour toute la famille avec des techniques modernes et indolores.',
      color: 'from-[rgb(113,163,193)] to-[rgb(90,140,170)]',
    },
    {
      title: 'Esthétique Dentaire',
      description: 'Blanchiment, facettes, alignement pour un sourire éclatant',
      details: 'Blanchiment professionnel, facettes céramiques, alignement invisible. Transformez votre sourire avec nos techniques esthétiques de pointe pour des résultats naturels et durables.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Urgences Dentaires',
      description: 'Prise en charge rapide des urgences 24/7',
      details: 'Douleurs aiguës, traumatismes, abcès. Notre équipe est disponible pour vous prendre en charge rapidement en cas d\'urgence dentaire, même en dehors des heures d\'ouverture.',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Implantologie',
      description: 'Pose d\'implants dentaires pour remplacer les dents manquantes',
      details: 'Implants en titane, couronnes sur implants, greffes osseuses. Solutions durables et esthétiques pour retrouver un sourire complet et fonctionnel.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Orthodontie',
      description: 'Correction de l\'alignement dentaire pour enfants et adultes',
      details: 'Appareils dentaires traditionnels, Invisalign, gouttières transparentes. Des solutions adaptées à tous les âges pour un alignement parfait.',
      color: 'from-[rgb(90,140,170)] to-[rgb(113,163,193)]',
    },
  ]

  const team = [
    {
      id: 1,
      name: 'Dr. Sophie Martin',
      role: 'Chirurgien-Dentiste',
      specialty: 'Esthétique & Implantologie',
      experience: '15 ans',
      description: 'Spécialisée en esthétique dentaire et implantologie, le Dr. Martin a suivi de nombreuses formations en France et à l\'étranger. Elle est reconnue pour son approche douce et personnalisée.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Dr. Pierre Dubois',
      role: 'Chirurgien-Dentiste',
      specialty: 'Orthodontie & Pédodontie',
      experience: '12 ans',
      description: 'Expert en orthodontie pour enfants et adultes, le Dr. Dubois utilise les techniques les plus modernes incluant Invisalign. Il est également spécialisé en soins pédiatriques.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Dr. Marie Lefebvre',
      role: 'Chirurgien-Dentiste',
      specialty: 'Parodontologie & Soins',
      experience: '10 ans',
      description: 'Spécialiste en parodontologie et soins préventifs, le Dr. Lefebvre privilégie une approche préventive et éducative pour maintenir une santé bucco-dentaire optimale.',
      image: 'https://images.unsplash.com/photo-1594824476968-48aa8a9e0dcf?w=400&h=400&fit=crop&crop=face',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Claire Bernard',
      role: 'Patient',
      content: 'Un cabinet exceptionnel ! L\'équipe est très professionnelle et à l\'écoute. J\'ai eu un blanchiment dentaire et le résultat est incroyable. Je recommande vivement !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Marc Rousseau',
      role: 'Patient',
      content: 'J\'ai eu besoin d\'une urgence dentaire un dimanche. L\'équipe a été réactive et m\'a pris en charge rapidement. Très professionnel et rassurant. Merci !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Julie Moreau',
      role: 'Patient',
      content: 'Mon fils de 8 ans avait peur du dentiste. Le Dr. Dubois a été fantastique, très patient et rassurant. Mon fils n\'a plus peur maintenant !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Thomas Petit',
      role: 'Patient',
      content: 'J\'ai fait poser un implant il y a 2 ans. Le résultat est parfait, je ne vois aucune différence avec mes dents naturelles. Excellent travail !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Sophie Laurent',
      role: 'Patient',
      content: 'Cabinet moderne avec des équipements à la pointe de la technologie. L\'équipe est très compétente et l\'ambiance est agréable. Je me sens en confiance.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 6,
      name: 'David Martin',
      role: 'Patient',
      content: 'Excellent suivi et soins de qualité. Le cabinet est très bien équipé et l\'équipe est à l\'écoute. Je recommande sans hésitation !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
  ]

  const faqs = [
    {
      question: 'Quels sont les horaires d\'ouverture du cabinet ?',
      answer: 'Le cabinet est ouvert du lundi au vendredi de 9h à 19h, et le samedi de 9h à 13h. Pour les urgences, nous sommes disponibles 24/7. N\'hésitez pas à nous appeler en cas de besoin urgent.',
    },
    {
      question: 'Le cabinet accepte-t-il la carte vitale ?',
      answer: 'Oui, nous acceptons la carte vitale et la plupart des mutuelles. Nous pratiquons également le tiers-payant pour faciliter vos démarches administratives.',
    },
    {
      question: 'Combien coûte une consultation ?',
      answer: 'Le tarif d\'une consultation varie selon le type de soin. Une consultation de contrôle coûte environ 25€ (remboursé à 70% par la Sécurité Sociale). Nous vous fournirons un devis détaillé avant tout traitement.',
    },
    {
      question: 'Proposez-vous des solutions pour les personnes phobiques du dentiste ?',
      answer: 'Absolument ! Nous proposons la sédation consciente et utilisons des techniques douces pour les patients anxieux. Notre équipe est formée pour rassurer et accompagner les patients phobiques.',
    },
    {
      question: 'Quels sont les délais pour un rendez-vous ?',
      answer: 'Pour une consultation de routine, nous pouvons généralement vous proposer un rendez-vous sous 1 à 2 semaines. Pour les urgences, nous vous recevons le jour même ou sous 24h.',
    },
  ]

  const renderContent = () => {
    switch (activePage) {
      case 'accueil':
        return (
          <div className="space-y-0">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={getImagePath("/image/image dentiste.jpg")}
                  alt="Cabinet dentaire professionnel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center text-gray-900 dark:text-white max-w-4xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-6 py-2 bg-[rgb(113,163,193)]/20 backdrop-blur-sm rounded-full mb-6"
                  >
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Cabinet Dentaire Professionnel</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
                  >
                    Votre sourire,{' '}
                    <span className="bg-gradient-to-r from-[rgb(113,163,193)] to-[rgb(90,140,170)] bg-clip-text text-transparent">
                      notre priorité
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed"
                  >
                    Soins dentaires modernes, équipe expérimentée et approche personnalisée 
                    pour une santé bucco-dentaire optimale.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.button
                      disabled
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-[rgb(113,163,193)] rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all cursor-not-allowed opacity-75"
                      title="Bouton désactivé (démo)"
                    >
                      Prendre rendez-vous (Démo)
                    </motion.button>
                    <motion.button
                      onClick={() => scrollToSection('services')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[rgb(113,163,193)] border-2 border-[rgb(113,163,193)] text-white rounded-lg font-semibold text-lg hover:bg-[rgb(90,140,170)] hover:border-[rgb(90,140,170)] transition-colors shadow-lg"
                    >
                      Découvrir nos services
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white dark:bg-dark">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Pourquoi nous choisir ?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Un cabinet dentaire moderne qui allie expertise, technologie de pointe et approche humaine
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      title: 'Excellence reconnue',
                      description: 'Plus de 15 ans d\'expérience et une équipe de professionnels certifiés',
                    },
                    {
                      title: 'Technologie de pointe',
                      description: 'Équipements modernes et techniques les plus récentes pour des soins optimaux',
                    },
                    {
                      title: 'Approche personnalisée',
                      description: 'Chaque patient est unique, nous adaptons nos soins à vos besoins spécifiques',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[rgb(240,247,252)] to-white dark:from-dark-light dark:to-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[rgb(113,163,193)]"
                    >
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Horaires Section */}
            <section className="py-20 bg-gradient-to-r from-[rgb(240,247,252)] to-[rgb(230,240,248)] dark:from-dark-light dark:to-dark">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-dark rounded-2xl p-6 md:p-8 shadow-xl"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      Nos horaires
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Horaires */}
                      <div>
                        <div className="space-y-2">
                          {[
                            { day: 'Lundi', hours: '9h - 18h' },
                            { day: 'Mardi', hours: '9h - 18h' },
                            { day: 'Mercredi', hours: '9h - 18h' },
                            { day: 'Jeudi', hours: '9h - 18h' },
                            { day: 'Vendredi', hours: '9h - 18h' },
                            { day: 'Samedi', hours: 'Fermé' },
                            { day: 'Dimanche', hours: 'Fermé' },
                          ].map((schedule, index) => (
                            <motion.div
                              key={schedule.day}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.03 }}
                              className={`flex items-center justify-between p-3 rounded-lg ${
                                schedule.hours === 'Fermé'
                                  ? 'bg-gray-50 dark:bg-gray-800/50'
                                  : 'bg-[rgb(240,247,252)] dark:bg-[rgb(113,163,193)]/10'
                              }`}
                            >
                              <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                                {schedule.day} :
                              </span>
                              <span
                                className={`text-sm md:text-base font-medium ${
                                  schedule.hours === 'Fermé'
                                    ? 'text-gray-500 dark:text-gray-400'
                                    : 'text-[rgb(113,163,193)] dark:text-[rgb(150,190,215)]'
                                }`}
                              >
                                {schedule.hours}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="mt-4 p-3 bg-[rgb(113,163,193)]/10 dark:bg-[rgb(113,163,193)]/20 rounded-lg border-l-4 border-[rgb(113,163,193)]"
                        >
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong className="text-[rgb(113,163,193)] dark:text-[rgb(150,190,215)]">
                              Urgences disponibles 24/7
                            </strong>
                            {' '} - En cas d'urgence dentaire, n'hésitez pas à nous contacter même en dehors des heures d'ouverture.
                          </p>
                        </motion.div>
                      </div>
                      
                      {/* Carte Google Maps */}
                      <div className="h-64 md:h-full rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.1234567890!2d5.5744!3d50.6450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f8c8c8c8c8c8%3A0x1234567890abcdef!2sRue%20de%20la%20Cath%C3%A9drale%207%2C%204000%20Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1234567890123!5m2!1sfr!2sbe"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-full"
                          title="Localisation du cabinet dentaire à Liège"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white dark:bg-dark">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={getImagePath("/image/image dentiste.jpg")}
                      alt="Cabinet dentaire"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                      Bienvenue au Cabinet Dentaire
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      Depuis plus de 15 ans, notre cabinet dentaire offre des soins de qualité 
                      dans un environnement moderne et rassurant. Nous mettons un point d'honneur 
                      à vous accueillir avec bienveillance et professionnalisme.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      Notre équipe de chirurgiens-dentistes expérimentés utilise les techniques 
                      les plus récentes et les équipements de pointe pour vous offrir des soins 
                      efficaces, indolores et durables.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-2 bg-[rgb(240,247,252)] dark:bg-[rgb(113,163,193)]/20 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">15+ ans d'expérience</span>
                      </div>
                      <div className="px-4 py-2 bg-[rgb(240,247,252)] dark:bg-[rgb(113,163,193)]/20 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">98% de satisfaction</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Services Preview */}
            <section id="services" className="py-20 bg-gray-50 dark:bg-dark-light">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Nos Services
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Des soins complets pour toute la famille
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {services.slice(0, 3).map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[rgb(113,163,193)]"
                    >
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <motion.button
                    onClick={() => setActivePage('services')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[rgb(113,163,193)] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-[rgb(90,140,170)]"
                  >
                    Voir tous les services
                  </motion.button>
                </motion.div>
              </div>
            </section>
          </div>
        )

      case 'services':
        return (
          <div className="min-h-screen bg-white dark:bg-dark pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Nos Services Dentaires
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Des soins complets et modernes pour votre santé bucco-dentaire
                  </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {services.map((service, index) => (
                      <motion.button
                        key={service.title}
                        onClick={() => setActiveService(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          activeService === index
                            ? 'bg-[rgb(113,163,193)] text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {service.title}
                      </motion.button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-light dark:to-dark rounded-2xl p-8 md:p-12 shadow-xl"
                    >
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white border-l-4 border-[rgb(113,163,193)] pl-4">
                            {services[activeService].title}
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                            {services[activeService].description}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {services[activeService].details}
                          </p>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                          <Image
                            src={getImagePath("/image/image dentiste.jpg")}
                            alt={services[activeService].title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>
          </div>
        )

      case 'equipe':
        return (
          <div className="min-h-screen bg-white dark:bg-dark pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Notre Équipe
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Des professionnels expérimentés à votre service
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {team.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-dark-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[rgb(200,220,235)] dark:ring-[rgb(113,163,193)]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-[rgb(113,163,193)] dark:text-[rgb(150,190,215)] font-semibold mb-1">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {member.specialty}
                      </p>
                      <div className="text-center mb-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {member.experience} d'expérience
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )

      case 'temoignages':
        return (
          <div className="min-h-screen bg-gray-50 dark:bg-dark-light pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Témoignages de nos Patients
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Ce que nos patients disent de notre cabinet
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-8 bg-white dark:bg-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            className="text-yellow-400 text-xl"
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[rgb(200,220,235)] dark:ring-[rgb(113,163,193)]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )

      case 'contact':
        return (
          <div className="min-h-screen bg-white dark:bg-dark pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Contactez-nous
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Prenez rendez-vous ou posez-nous vos questions
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                      Informations de Contact
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                      Notre équipe est à votre disposition pour répondre à toutes vos questions 
                      et vous accompagner dans vos soins dentaires.
                    </p>
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="p-4 bg-gray-50 dark:bg-dark-light rounded-xl shadow-md hover:shadow-lg transition-shadow">
                          <p className="font-semibold text-gray-900 dark:text-white mb-1">Téléphone</p>
                          <a
                            href="tel:+33123456789"
                            className="text-gray-600 dark:text-gray-400 hover:text-[rgb(113,163,193)] dark:hover:text-[rgb(150,190,215)] transition-colors"
                          >
                            +33 1 23 45 67 89
                          </a>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-4 bg-gray-50 dark:bg-dark-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      >
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
                        <a
                          href="mailto:contact@cabinet-dentaire.fr"
                          className="text-gray-600 dark:text-gray-400 hover:text-[rgb(113,163,193)] dark:hover:text-[rgb(150,190,215)] transition-colors"
                        >
                          contact@cabinet-dentaire.fr
                        </a>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-4 bg-gray-50 dark:bg-dark-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      >
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Adresse</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Rue de la Cathédrale 7<br />
                          4000 Liège, Belgique
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-4 bg-gray-50 dark:bg-dark-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      >
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Horaires</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Lun-Ven : 9h - 19h<br />
                          Samedi : 9h - 13h<br />
                          Urgences : 24/7
                        </p>
                      </motion.div>
                    </div>

                    {/* Google Maps */}
                    <div className="mt-8 h-64 rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.1234567890!2d5.5744!3d50.6450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f8c8c8c8c8c8%3A0x1234567890abcdef!2sRue%20de%20la%20Cath%C3%A9drale%207%2C%204000%20Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1234567890123!5m2!1sfr!2sbe"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Localisation du cabinet dentaire à Liège"
                      />
                    </div>
                  </motion.div>

                  <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-gray-50 dark:bg-dark-light p-8 rounded-2xl shadow-xl"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      Formulaire de Contact
                    </h2>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Service souhaité
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent transition-all"
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
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
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
                        className="w-full px-6 py-3 bg-gray-400 dark:bg-gray-600 text-white rounded-lg font-semibold cursor-not-allowed opacity-75 flex items-center justify-center space-x-2"
                        title="Formulaire désactivé (démo)"
                      >
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message (Démo)</span>
                      </button>
                    )}
                  </motion.form>
                </div>
              </div>
            </section>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Cabinet Dentaire
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'services', label: 'Services' },
                { id: 'equipe', label: 'Équipe' },
                { id: 'temoignages', label: 'Témoignages' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activePage === item.id
                      ? 'bg-[rgb(113,163,193)] text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <motion.button
              disabled
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-lg font-semibold cursor-not-allowed opacity-75 text-sm"
              title="Bouton désactivé (démo)"
            >
              RDV (Démo)
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cabinet Dentaire</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre santé bucco-dentaire est notre priorité. 
                Des soins modernes et personnalisés pour toute la famille.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setActivePage('accueil')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePage('services')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePage('equipe')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Équipe
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActivePage('contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+33 1 23 45 67 89</li>
                <li>contact@cabinet-dentaire.fr</li>
                <li>123 Avenue de la Santé<br />75001 Paris, France</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suivez-nous</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cabinet Dentaire. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


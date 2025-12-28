'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Users, Award, Target, ChevronDown, Clock, Star } from 'lucide-react'
import Image from 'next/image'

export default function VitrineDemo() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const services = [
    {
      icon: '🎯',
      title: 'Coaching Personnel',
      desc: 'Accompagnement individuel pour atteindre vos objectifs personnels',
      details: 'Un accompagnement sur-mesure pour vous aider à clarifier vos objectifs, surmonter vos obstacles et développer votre potentiel. Séances individuelles adaptées à vos besoins spécifiques.',
    },
    {
      icon: '💼',
      title: 'Coaching Professionnel',
      desc: 'Développement de carrière et leadership',
      details: 'Optimisez votre performance professionnelle, développez vos compétences en leadership et atteignez vos objectifs de carrière avec un accompagnement personnalisé.',
    },
    {
      icon: '👥',
      title: 'Coaching de Groupe',
      desc: 'Ateliers et sessions collectives pour progresser ensemble',
      details: 'Rejoignez des groupes de coaching pour partager vos expériences, apprendre des autres et bénéficier d\'une dynamique de groupe motivante et enrichissante.',
    },
    {
      icon: '🧘',
      title: 'Coaching Bien-être',
      desc: 'Équilibre vie professionnelle et personnelle',
      details: 'Retrouvez l\'équilibre entre votre vie professionnelle et personnelle, gérez votre stress et développez votre bien-être global pour une vie plus épanouie.',
    },
    {
      icon: '🚀',
      title: 'Coaching Performance',
      desc: 'Optimisation de vos performances et résultats',
      details: 'Débloquez votre potentiel, dépassez vos limites et atteignez des résultats exceptionnels grâce à des techniques de coaching éprouvées et adaptées à votre profil.',
    },
  ]

  const stats = [
    { value: '500+', label: 'Personnes accompagnées', icon: Users },
    { value: '95%', label: 'Taux de satisfaction', icon: Award },
    { value: '10+', label: 'Années d\'expérience', icon: Target },
    { value: '24/7', label: 'Support disponible', icon: Clock },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      role: 'Entrepreneure',
      content: 'Le coaching m\'a permis de clarifier mes objectifs et de prendre confiance en moi. Aujourd\'hui, je dirige ma propre entreprise avec sérénité.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Marc Dubois',
      role: 'Manager',
      content: 'Grâce au coaching professionnel, j\'ai développé mes compétences en leadership et j\'ai été promu directeur. Un accompagnement exceptionnel !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Julie Lefebvre',
      role: 'Professionnelle',
      content: 'Le coaching bien-être m\'a aidée à retrouver l\'équilibre entre ma vie professionnelle et personnelle. Je me sens beaucoup mieux aujourd\'hui.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Thomas Bernard',
      role: 'Entrepreneur',
      content: 'Un accompagnement de qualité qui m\'a permis d\'atteindre mes objectifs plus rapidement que prévu. Je recommande vivement !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  ]

  const faqs = [
    {
      question: 'Combien de temps dure un accompagnement en coaching ?',
      answer: 'La durée d\'un accompagnement varie selon vos objectifs et besoins. Un coaching individuel dure généralement entre 3 et 6 mois avec des séances hebdomadaires ou bi-mensuelles. Nous définissons ensemble le rythme qui vous convient le mieux.',
    },
    {
      question: 'Comment se déroule une séance de coaching ?',
      answer: 'Chaque séance dure environ 1h à 1h30. Nous commençons par faire le point sur vos avancées, puis nous travaillons sur vos objectifs du moment. Je vous guide avec des questions puissantes et des outils adaptés pour vous aider à progresser.',
    },
    {
      question: 'Les séances peuvent-elles se faire à distance ?',
      answer: 'Oui, absolument ! Je propose des séances en présentiel et en visioconférence. Les séances à distance sont tout aussi efficaces et offrent une grande flexibilité pour s\'adapter à votre emploi du temps.',
    },
    {
      question: 'Quel est le tarif d\'une séance de coaching ?',
      answer: 'Les tarifs varient selon le type de coaching (individuel, groupe) et la formule choisie. Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé adapté à votre situation.',
    },
  ]

  const processSteps = [
    { step: '01', title: 'Découverte', desc: 'Échange gratuit pour comprendre vos besoins et objectifs' },
    { step: '02', title: 'Programme', desc: 'Création d\'un plan d\'accompagnement personnalisé' },
    { step: '03', title: 'Accompagnement', desc: 'Séances régulières avec outils et méthodes adaptés' },
    { step: '04', title: 'Résultats', desc: 'Atteinte de vos objectifs et autonomie acquise' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      {/* Hero Section pour Coach */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Transformez votre vie avec un{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  coaching personnalisé
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
              >
                Accompagnement professionnel pour atteindre vos objectifs personnels et professionnels. 
                Développez votre potentiel et créez la vie que vous méritez.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  disabled
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-400 dark:bg-gray-600 text-white rounded-lg font-semibold text-lg shadow-lg cursor-not-allowed opacity-75"
                  title="Bouton désactivé (démo)"
                >
                  Réserver une séance (Démo)
                </motion.button>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-primary text-primary dark:text-accent rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Me contacter</span>
                  <ChevronDown className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Image Coaching.webp"
                  alt="Coach professionnel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
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
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white dark:bg-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-primary dark:text-accent" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                    className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mes Services de Coaching
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Des accompagnements adaptés à vos besoins spécifiques
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
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
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
                    <div className="text-6xl mb-6">{services[activeService].icon}</div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {services[activeService].title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                      {services[activeService].desc}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {services[activeService].details}
                    </p>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/Image Coaching.webp"
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mon Approche
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Une méthode éprouvée pour votre réussite
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-x-1/2" />
                  )}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Image Coaching.webp"
                alt="Coach professionnel"
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
                À propos de moi
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Coach certifié avec plus de 10 ans d'expérience dans l'accompagnement de personnes 
                vers la réalisation de leurs objectifs. Ma passion est de vous aider à découvrir 
                votre potentiel et à créer la vie que vous désirez.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                J'ai accompagné des centaines de personnes dans leur développement personnel et 
                professionnel, avec un taux de satisfaction exceptionnel. Ma méthode combine 
                écoute active, questionnement puissant et outils pratiques pour des résultats durables.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                  <Award className="w-5 h-5 text-primary dark:text-accent" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Certifié ICF</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                  <Star className="w-5 h-5 text-primary dark:text-accent" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">10+ ans d'expérience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ce que mes clients disent de leur accompagnement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tout ce que vous devez savoir sur le coaching
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-light rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
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
                      <div className="px-6 py-4 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Prenons contact
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Prêt à transformer votre vie ? Contactez-moi pour discuter de vos objectifs 
                et découvrir comment je peux vous accompagner dans votre parcours.
              </p>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-dark rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <a
                      href="mailto:coach@example.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                    >
                      coach@example.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-dark rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Téléphone</p>
                    <a
                      href="tel:+33123456789"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-dark rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Disponibilité</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Du lundi au vendredi, 9h - 19h
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-dark p-8 rounded-2xl shadow-xl"
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-light focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-light focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
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
}

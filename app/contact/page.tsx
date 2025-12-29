'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, ChevronDown, 
  HelpCircle, Clock, Shield, MessageSquare, ArrowRight, Star,
  Zap, Users, Award, Heart
} from 'lucide-react'
import Link from 'next/link'
import { sendContactEmail } from '@/lib/emailService'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quel est votre délai de réponse ?",
      answer: "Je m'engage à répondre à toutes les demandes sous 24 heures, même le week-end. Pour les demandes urgentes, je peux répondre dans les 2-4 heures pendant les heures ouvrables. Votre projet est important pour moi et je veux m'assurer que vous receviez une réponse rapide et personnalisée."
    },
    {
      question: "Quels types de projets acceptez-vous ?",
      answer: "Je travaille sur tous types de projets web : sites vitrines, e-commerce, applications web, refontes de sites existants, landing pages, et bien plus. Que vous soyez une petite entreprise, un professionnel indépendant ou une grande structure, je peux adapter mes services à vos besoins spécifiques. N'hésitez pas à me décrire votre projet lors de notre échange."
    },
    {
      question: "Comment se déroule le processus de collaboration ?",
      answer: "Le processus est simple et transparent : 1) Nous discutons de votre projet lors d'un premier échange gratuit, 2) Je vous propose un devis détaillé sous 48h, 3) Une fois validé, nous planifions les étapes ensemble, 4) Je vous tiens informé régulièrement de l'avancement, 5) Livraison et formation à l'utilisation. Chaque étape est validée avec vous pour garantir un résultat qui correspond à vos attentes."
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "C'est très simple ! Remplissez le formulaire de contact ci-dessus en décrivant votre projet, ou contactez-moi directement par email ou téléphone. Je vous enverrai un devis gratuit et détaillé sous 48 heures. Le devis inclut tous les éléments du projet, les délais, et les tarifs transparents. Aucun engagement de votre part, c'est gratuit et sans obligation."
    },
    {
      question: "Mes informations sont-elles confidentielles ?",
      answer: "Absolument. Toutes vos informations sont traitées avec la plus grande confidentialité. Je respecte strictement le RGPD et ne partage jamais vos données avec des tiers. Votre projet et vos informations restent privés. Je peux également signer un accord de confidentialité si nécessaire pour votre tranquillité d'esprit."
    },
    {
      question: "Quel support proposez-vous après la livraison ?",
      answer: "Je propose un support complet après la livraison de votre site. Avec le Pack Hébergement Standard, vous bénéficiez d'un support de base. Le Pack Premium inclut un support prioritaire 24/7 et 4 modifications par mois. Je suis également disponible pour vous former à l'utilisation de votre site et répondre à toutes vos questions. Votre satisfaction est ma priorité."
    },
    {
      question: "Combien de temps prend la création d'un site web ?",
      answer: "Pour un site vitrine standard (Pack Site Web), la livraison se fait sous 2 semaines. Pour le pack premium avec plus de pages et de fonctionnalités, le délai peut être légèrement plus long selon la complexité du projet (généralement 3-4 semaines). Je vous tiens informé à chaque étape du développement et vous pouvez suivre l'avancement en temps réel."
    },
    {
      question: "Proposez-vous une garantie de satisfaction ?",
      answer: "Oui, je propose une garantie satisfaction ou remboursé. Si vous n'êtes pas satisfait du résultat final, je vous rembourse intégralement. Mon objectif est de créer un site qui correspond parfaitement à vos attentes et qui dépasse vos espérances. Votre satisfaction est ma meilleure publicité."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "J'accepte les virements bancaires et les paiements par carte bancaire. Un acompte de 50% est généralement demandé au démarrage du projet pour sécuriser la collaboration, le solde étant dû à la livraison finale. Tous les paiements sont sécurisés et je peux vous fournir une facture professionnelle."
    },
    {
      question: "Mon site sera-t-il optimisé pour les mobiles et le SEO ?",
      answer: "Absolument ! Tous les sites que je crée sont entièrement responsives (mobile, tablette, desktop) et optimisés pour le SEO. Cela inclut une structure HTML optimale, des balises meta, un sitemap, et les meilleures pratiques de référencement. Votre site aura une excellente expérience utilisateur sur tous les appareils et sera bien positionné sur les moteurs de recherche."
    },
    {
      question: "Puis-je modifier mon site après la livraison ?",
      answer: "Oui, avec le Pack Hébergement Premium, vous bénéficiez de 4 modifications par mois selon vos besoins. Pour le pack standard, les modifications peuvent être facturées séparément selon leur complexité. Je peux aussi vous former pour que vous puissiez effectuer certaines modifications vous-même. L'objectif est que votre site évolue avec vos besoins."
    },
    {
      question: "Avez-vous besoin de contenu de ma part ?",
      answer: "Je peux créer votre site avec le contenu que vous me fournissez, ou je peux vous aider à rédiger le contenu. Pour un résultat optimal, je recommande de fournir vos textes, images et informations principales avant le début du développement. Si vous n'avez pas de contenu, je peux vous proposer des services de rédaction web professionnelle."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    console.log('📝 Données du formulaire:', formData)

    try {
      const result = await sendContactEmail(formData)

      console.log('📬 Résultat de l\'envoi:', result)

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 8000)
      } else {
        setStatus('error')
        console.error('❌ Erreur:', result.error)
        alert(`Erreur: ${result.error}`) // Message d'alerte pour voir l'erreur
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error)
      alert(`Erreur: ${error}`) // Message d'alerte pour voir l'erreur
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const trustIndicators = [
    { icon: Clock, text: "Réponse sous 24h", color: "text-blue-600 dark:text-blue-400" },
    { icon: Shield, text: "100% confidentiel", color: "text-green-600 dark:text-green-400" },
    { icon: CheckCircle, text: "Devis gratuit", color: "text-purple-600 dark:text-purple-400" },
    { icon: Heart, text: "Satisfaction garantie", color: "text-red-600 dark:text-red-400" },
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark dark:via-dark-light dark:to-dark">
      {/* Hero Section - Premium */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-semibold text-primary dark:text-accent border border-primary/20 dark:border-accent/20 shadow-sm">
                CONTACTEZ-MOI
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Discutons de votre{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                projet
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Transformez votre idée en réalité digitale. Je suis là pour vous accompagner 
              dans la création d'un site web professionnel qui correspond parfaitement à vos besoins.
            </p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            >
              {trustIndicators.map((indicator, index) => {
                const Icon = indicator.icon
                return (
                  <div key={index} className="flex items-center space-x-2 bg-white dark:bg-dark-light px-4 py-2.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-800">
                    <Icon className={`w-5 h-5 ${indicator.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {indicator.text}
                    </span>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Two Columns */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Left Column - Contact Info & Why Contact */}
            <div className="space-y-12">
              {/* Why Contact Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 dark:border-accent/10"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Pourquoi me contacter ?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Consultation gratuite
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Discutons de votre projet sans engagement. Je vous conseille et vous oriente vers la meilleure solution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Réponse rapide
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Je réponds à toutes les demandes sous 24h, même le week-end. Votre projet ne peut pas attendre.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Accompagnement personnalisé
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Chaque projet est unique. Je m'adapte à vos besoins et à votre budget pour un résultat sur-mesure.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-dark-light rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg">
                        Email
                      </h3>
                      <a
                        href="mailto:Hugo.bouchez88@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors text-lg"
                      >
                        Hugo.bouchez88@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+32487748860"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors text-lg"
                      >
                        +32 487 74 88 60
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Disponible du lundi au vendredi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-lg">
                        Localisation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Bruxelles, Belgique
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Travail à distance possible
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional CTA */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Découvrir mes services</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-dark-light rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                  Envoyez-moi un message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                    Votre email ne sera jamais partagé avec des tiers
                  </p>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Devis">Demande de devis</option>
                    <option value="Refonte">Refonte de site</option>
                    <option value="Nouveau projet">Nouveau projet</option>
                    <option value="Hébergement">Hébergement & Maintenance</option>
                    <option value="Question">Question générale</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder-gray-400"
                    placeholder="Décrivez votre projet, vos besoins, votre budget approximatif, ou posez-moi vos questions..."
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                    Plus de détails = réponse plus précise et devis plus adapté
                  </p>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-green-800 dark:text-green-200 font-semibold mb-1">
                          Message envoyé avec succès !
                        </p>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          Je vous répondrai dans les plus brefs délais (sous 24h). Merci pour votre confiance !
                        </p>
                      </div>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl"
                    >
                      <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-800 dark:text-red-200 font-semibold mb-1">
                          Erreur lors de l'envoi
                        </p>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          Une erreur est survenue. Veuillez réessayer ou me contacter directement par email à{' '}
                          <a href="mailto:Hugo.bouchez88@gmail.com" className="underline font-semibold">
                            Hugo.bouchez88@gmail.com
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
                  whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 pt-2">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Vos données sont traitées en toute confidentialité et ne seront jamais partagées avec des tiers.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-light dark:to-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* FAQ Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6"
              >
                <HelpCircle className="w-10 h-10 text-primary dark:text-accent" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Questions{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Fréquentes
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Trouvez rapidement les réponses à vos questions les plus courantes. 
                Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à me contacter directement.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-dark-light border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset group"
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white pr-8 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-accent transition-colors" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                          <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* FAQ CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10 dark:border-accent/10"
            >
              <MessageSquare className="w-12 h-12 text-primary dark:text-accent mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Vous ne trouvez pas la réponse à votre question ?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Je suis là pour vous aider. Contactez-moi directement et je vous répondrai personnellement 
                dans les plus brefs délais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:Hugo.bouchez88@gmail.com"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Envoyer un email</span>
                </a>
                <a
                  href="tel:+32487748860"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-dark-light text-primary dark:text-accent border-2 border-primary dark:border-accent rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler maintenant</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

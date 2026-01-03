'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, CheckCircle, ArrowRight, ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

export default function AssuranceDemo() {
  const [activePage, setActivePage] = useState('accueil')
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '', 
    product: '',
    prenom: '',
    nom: '',
    telephone: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '', 
        product: '',
        prenom: '',
        nom: '',
        telephone: ''
      })
    }, 3000)
  }

  const insuranceProducts = [
    {
      id: 'auto',
      title: 'Auto / Moto',
      description: 'Assurance automobile et moto avec protection complète et tarifs compétitifs',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
    },
    {
      id: 'habitation',
      title: 'Habitation',
      description: 'Protection complète de votre logement et de vos biens',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
    },
    {
      id: 'professionnels',
      title: 'Professionnels',
      description: 'Assurances adaptées aux besoins des entreprises et professionnels',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    },
    {
      id: 'hospitalisation',
      title: 'Hospitalisation',
      description: 'Couverture santé complète pour vous et votre famille',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    },
    {
      id: 'vie',
      title: 'Vie',
      description: 'Assurance vie et décès pour protéger vos proches',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop',
    },
    {
      id: 'pret',
      title: 'Prêt Hypothécaire',
      description: 'Solutions de financement immobilier avec les meilleures conditions',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
  ]

  const processSteps = [
    {
      title: 'Demande en Ligne',
      description: 'Choisissez votre assurance dans le menu ci-dessous et complétez le formulaire dédié en quelques minutes seulement.',
    },
    {
      title: 'Meilleure Tarification',
      description: 'Nos courtiers recherchent pour vous la meilleure offre, aux meilleurs prix et conditions parmi nos nombreux assureurs.',
    },
    {
      title: 'Recevez votre Devis',
      description: 'Vous recevez la meilleure offre du marché en Belgique avec un devis clair et détaillé. Pour l\'accepter, rendez-vous dans nos bureaux.',
    },
  ]

  const advantages = [
    {
      number: '1',
      title: 'Simplicité',
      description: 'Notre équipe de courtiers se charge de comparer les devis et vous propose les meilleures offres.',
    },
    {
      number: '2',
      title: 'Choix',
      description: 'Nous travaillons avec plusieurs compagnies d\'assurances pour répondre au mieux à vos besoins.',
    },
    {
      number: '3',
      title: 'Accompagnement',
      description: 'Nos conseillers vous accompagnent dans vos démarches et en cas de sinistre.',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Frédéric Loffet',
      content: 'Très bon accueil et de très bons conseils. Bureaux faciles d\'accès',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marie Dubois',
      content: 'Service exceptionnel, équipe à l\'écoute et professionnelle. Je recommande vivement !',
      rating: 5,
    },
    {
      id: 3,
      name: 'Pierre Martin',
      content: 'Grâce à leur expertise, j\'ai trouvé la meilleure assurance auto à un prix imbattable.',
      rating: 5,
    },
  ]

  const partners = [
    { name: 'Allianz', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Allianz-Logo.png' },
    { name: 'AXA', logo: 'https://logos-world.net/wp-content/uploads/2021/02/AXA-Logo.png' },
    { name: 'Bâloise', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Baloise-Logo.png' },
    { name: 'AG Insurance', logo: 'https://logos-world.net/wp-content/uploads/2021/02/AG-Insurance-Logo.png' },
  ]

  const renderContent = () => {
    switch (activePage) {
      case 'accueil':
        return (
          <div className="space-y-0">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[rgb(240,247,252)] to-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
                    >
                      Mieux vous connaître{' '}
                      <span className="text-[rgb(113,163,193)]">POUR MIEUX VOUS ASSURER</span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl text-gray-700 mb-8 leading-relaxed"
                    >
                      Courtier en assurances depuis plus de 25 ans, nous vous accompagnons 
                      dans vos démarches d'assurance avec expertise et transparence.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.button
                        onClick={() => setActivePage('assurances')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[rgb(113,163,193)] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Demander un devis
                      </motion.button>
                      <motion.button
                        onClick={() => setActivePage('a-propos')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white border-2 border-[rgb(113,163,193)] text-[rgb(113,163,193)] rounded-lg font-semibold text-lg hover:bg-[rgb(240,247,252)] transition-colors"
                      >
                        En savoir plus
                      </motion.button>
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
                        src={getImagePath("/image/Image assurance.jpg")}
                        alt="Conseil en assurance"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(113,163,193)]/20 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[rgb(220,38,38)]"
                    >
                      <div className="w-16 h-16 bg-[rgb(220,38,38)]/10 rounded-xl flex items-center justify-center mb-6">
                        <span className="text-2xl font-bold text-[rgb(220,38,38)]">{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Insurance Products */}
            <section className="py-20 bg-gradient-to-br from-[rgb(240,247,252)] to-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Demandez votre devis
                  </h2>
                  <p className="text-xl text-gray-600">
                    Choisissez votre produit d'assurance et obtenez un devis personnalisé
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {insuranceProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setSelectedProduct(product.id)
                        setActivePage('assurances')
                      }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-[rgb(113,163,193)]"
                    >
                      <div className="w-12 h-12 bg-[rgb(220,38,38)]/10 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-[rgb(220,38,38)]">{product.title.charAt(0)}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center text-[rgb(113,163,193)] font-semibold text-sm">
                        <span>Demander un devis</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Advantages */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Avantages
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={advantage.number}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[rgb(220,38,38)] rounded-full flex items-center justify-center mb-6">
                        <span className="text-xl font-bold text-white">{advantage.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-br from-[rgb(240,247,252)] to-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                      Nos +800 clients nous adorent
                    </h2>
                    <a href="#" className="text-[rgb(113,163,193)] font-semibold hover:underline inline-flex items-center">
                      Voir tous les avis Google
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[rgb(30,58,138)] rounded-2xl p-8 text-white shadow-xl"
                      >
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-lg mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">{testimonial.name}</p>
                          <div className="bg-white/20 rounded-lg px-3 py-1">
                            <span className="text-sm font-semibold">Google</span>
                            <div className="flex items-center mt-1">
                              <span className="text-yellow-400 text-xs">★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Partners */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Nos Partenaires
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Pour consulter les conditions générales des contrats que nous vous proposons, 
                    veuillez cliquer sur le logo de la Compagnie concernée.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {partners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32 border border-gray-200"
                    >
                      <span className="text-lg font-bold text-gray-700">{partner.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )

      case 'assurances':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[rgb(240,247,252)] to-white pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Nos Assurances
                  </h1>
                  <p className="text-xl text-gray-600">
                    Choisissez votre produit et demandez un devis personnalisé
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                  {insuranceProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedProduct(product.id)}
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 ${
                        selectedProduct === product.id 
                          ? 'border-[rgb(113,163,193)] bg-[rgb(240,247,252)]' 
                          : 'border-[rgb(113,163,193)]'
                      }`}
                    >
                      <div className="w-12 h-12 bg-[rgb(220,38,38)]/10 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-[rgb(220,38,38)]">{product.title.charAt(0)}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {selectedProduct && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                      Demande de devis - {insuranceProducts.find(p => p.id === selectedProduct)?.title}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            value={formData.prenom}
                            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">
                            Nom de famille *
                          </label>
                          <input
                            type="text"
                            value={formData.nom}
                            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Numéro de téléphone *
                        </label>
                        <input
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                        />
                      </div>
                      {formSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <p className="text-green-800">Demande envoyée avec succès !</p>
                        </motion.div>
                      ) : (
                        <button
                          type="submit"
                          disabled
                          className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed opacity-75"
                          title="Formulaire désactivé (démo)"
                        >
                          Envoyer la demande (Démo)
                        </button>
                      )}
                    </form>
                  </motion.div>
                )}
              </div>
            </section>
          </div>
        )

      case 'pret-hypothecaire':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[rgb(240,247,252)] to-white pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Votre Prêt Hypothécaire en toute simplicité
                  </h1>
                  <p className="text-xl text-gray-600">
                    Réalisez votre simulation gratuite et rapide !
                  </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-[rgb(113,163,193)] rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Informations de l'assuré(e) *
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          value={formData.prenom}
                          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                          required
                          placeholder="Jane"
                          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[rgb(113,163,193)] focus:outline-none bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Nom de famille *
                        </label>
                        <input
                          type="text"
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          required
                          placeholder="Smith"
                          className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[rgb(113,163,193)] focus:outline-none bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        required
                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[rgb(113,163,193)] focus:outline-none bg-transparent"
                      />
                    </div>
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800">Formulaire envoyé avec succès !</p>
                      </motion.div>
                    ) : (
                      <button
                        type="submit"
                        disabled
                        className="px-8 py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed opacity-75"
                        title="Formulaire désactivé (démo)"
                      >
                        Continuer (Démo)
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </section>
          </div>
        )

      case 'sinistres':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[rgb(240,247,252)] to-white pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                      Nos experts à
                      <br />
                      vos côtés en
                      <br />
                      cas de sinistre
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Nous gérons tous les sinistres et participons à toutes les expertises requises 
                      (principalement : incendie, dégâts des eaux, vol, etc.)
                    </p>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      En cas de sinistre contactez-nous :
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-lg shadow-md">
                        <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                        <a href="tel:+32123456789" className="text-[rgb(113,163,193)] hover:underline">
                          +32 1 23 45 67 89
                        </a>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-md">
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <a href="mailto:sinistres@assurance-demo.fr" className="text-[rgb(113,163,193)] hover:underline">
                          sinistres@assurance-demo.fr
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                      alt="Gestion de sinistres"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        )

      case 'a-propos':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[rgb(240,247,252)] to-white pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-16"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Qui sommes-nous ?
                  </h1>
                  <p className="text-2xl font-bold text-gray-700 uppercase">
                    Votre courtier en assurances de confiance depuis 2005 !
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre Histoire</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Fondé en 2005, notre cabinet de courtage indépendant s'est spécialisé dans 
                      l'accompagnement personnalisé des particuliers et des professionnels dans leurs 
                      démarches d'assurance et de financement.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Nous avons développé un réseau solide de partenaires assureurs et financiers 
                      pour vous offrir un large choix de solutions adaptées à votre situation.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative h-64 rounded-2xl overflow-hidden shadow-xl bg-[rgb(30,58,138)] flex items-center justify-center"
                  >
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold mb-2">19+</div>
                      <div className="text-xl">Années d'expérience</div>
                    </div>
                  </motion.div>
                </div>

                {/* Valeurs & Engagement */}
                <div className="space-y-12 max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-32 h-32 bg-[rgb(30,58,138)] rounded-2xl flex items-center justify-center"
                    >
                      <span className="text-4xl">🛡️</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre Engagement</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Nous nous engageons à vous fournir des conseils personnalisés et des solutions sur mesure. 
                        Chaque client est unique, et nous adaptons notre approche pour répondre précisément à vos besoins 
                        en assurance et financement.
                      </p>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre Approche</h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Nous privilégions l'écoute, la transparence et la réactivité. Notre équipe de conseillers 
                        expérimentés analyse votre situation pour vous proposer les meilleures options du marché, 
                        en toute indépendance et objectivité.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-32 h-32 bg-[rgb(30,58,138)] rounded-2xl flex items-center justify-center"
                    >
                      <span className="text-4xl">🤝</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )

      case 'contact':
        return (
          <div className="min-h-screen bg-gradient-to-br from-[rgb(240,247,252)] to-white pt-20">
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-2xl p-8 shadow-xl"
                  >
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Contactez-nous</h2>
                    <p className="text-gray-700 mb-8">
                      Pour toute demande d'assurance, crédits ou placements, contactez-nous !<br />
                      Nos conseillers vous accompagnent dans vos projets.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">EMAIL</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">NOM ET PRÉNOM</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            placeholder="Nom et Prénom"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">TÉLÉPHONE</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Indiquez votre numéro de téléphone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">MESSAGE</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          placeholder="Votre message."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(113,163,193)] focus:border-transparent resize-none"
                        />
                      </div>
                      {formSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <p className="text-green-800">Message envoyé avec succès !</p>
                        </motion.div>
                      ) : (
                        <button
                          type="submit"
                          disabled
                          className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed opacity-75"
                          title="Formulaire désactivé (démo)"
                        >
                          Envoyer (Démo)
                        </button>
                      )}
                    </form>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-[rgb(240,247,252)] to-[rgb(113,163,193)]/20 rounded-2xl flex items-center justify-center">
                        <div className="w-32 h-32 bg-[rgb(220,38,38)]/20 rounded-full flex items-center justify-center">
                          <span className="text-6xl">💬</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  <span className="text-[rgb(113,163,193)]">PROTEC</span>{' '}
                  <span className="text-[rgb(220,38,38)]">ASSURANCES</span>
                </span>
                <span className="text-xs text-gray-600">Conseils Des Assureurs Réunis</span>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'assurances', label: 'Assurances' },
                { id: 'pret-hypothecaire', label: 'Prêt Hypothécaire' },
                { id: 'sinistres', label: 'Sinistres' },
                { id: 'a-propos', label: 'À propos' },
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
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={() => setActivePage('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[rgb(113,163,193)] text-white rounded-lg font-semibold text-sm hover:bg-[rgb(90,140,170)] transition-colors"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PROTEC ASSURANCES</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Courtier en assurances indépendant depuis 2005. 
                Votre partenaire de confiance pour tous vos besoins d'assurance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { id: 'accueil', label: 'Accueil' },
                  { id: 'assurances', label: 'Assurances' },
                  { id: 'pret-hypothecaire', label: 'Prêt Hypothécaire' },
                  { id: 'sinistres', label: 'Sinistres' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActivePage(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+32 1 23 45 67 89</li>
                <li>contact@protec-assurances.be</li>
                <li>Rue de la Cathédrale 7<br />4000 Liège, Belgique</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Lun-Ven : 9h - 18h</li>
                <li>Samedi : 9h - 13h</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} PROTEC ASSURANCES. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


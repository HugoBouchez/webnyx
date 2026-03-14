'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Facebook, Instagram, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

export default function PizzeriaDemo() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
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

  const pizzaRouges = [
    {
      name: 'Margherita',
      ingredients: 'Tomate, Basilic et Mozzarella',
      price: '12,50€'
    },
    {
      name: 'Burrata',
      ingredients: 'Tomate, Basilic, Tomates Cerises, Burrata* (Fromage crémeux italien)',
      price: '19,00€'
    },
    {
      name: 'Prosciutto Funghi',
      ingredients: 'Tomate, Basilic, Mozzarella, Jambon de Parme* et Champignons',
      price: '17,50€'
    },
    {
      name: 'Regina',
      ingredients: 'Tomate, Basilic et Mozzarella de Bufflonne',
      price: '16,00€'
    },
    {
      name: 'Marinara',
      ingredients: 'Tomate, Ail, Origan et Basilic',
      price: '11,00€'
    },
    {
      name: 'Quattro Stagioni',
      ingredients: 'Tomate, Basilic, Mozzarella, Jambon, Champignons, Olives Noires et Artichauts',
      price: '18,00€'
    },
    {
      name: 'Principessa',
      ingredients: 'Tomate, Basilic et Scamorza fumée* (Fromage italien typique)',
      price: '14,00€'
    },
    {
      name: 'Rucola Reggiano',
      ingredients: 'Tomate, Mozzarella, Roquette et Parmigiano Reggiano',
      price: '15,00€'
    },
    {
      name: 'Napoli',
      ingredients: 'Tomate, Mozzarella, Câpres, Filets d\'Anchois et Origan',
      price: '16,00€'
    },
  ]

  const pizzaBianche = [
    {
      name: 'Salsiccia Friarelli',
      ingredients: 'Mozzarella, Basilic, Saucisse et Brocoli-rave*',
      price: '18,00€'
    },
    {
      name: '4 Formaggi',
      ingredients: 'Mozzarella, Scamorza fumée, Gorgonzola, Copeaux de Parmesan et Basilic',
      price: '17,00€'
    },
    {
      name: 'Fresca',
      ingredients: 'Mozzarella, Tomates cerises jaunes et rouges, Roquette et Copeaux de Parmesan',
      price: '17,00€'
    },
    {
      name: 'Patate & Tartufo',
      ingredients: 'Mozzarella, Basilic, Pommes de terre bouillies et Truffe Noire',
      price: '21,00€'
    },
    {
      name: 'Mortadella',
      ingredients: 'Mozzarella, Roquette, Mortadelle, Copeaux de Pecorino Romano, Pesto et Pistaches grillées',
      price: '21,00€'
    },
    {
      name: 'Genovese',
      ingredients: 'Mozzarella, Pesto Génois, Tomates Piennolo, Copeaux de Ricotta et Pignons grillés',
      price: '21,00€'
    },
  ]

  const suggestions = [
    {
      name: 'Amatrice',
      ingredients: 'Tomate piennolo rouge, oignon rouge, guanciale croustillant, poivre noir, basilic',
      price: '21,00€'
    },
    {
      name: 'Piccantissima',
      ingredients: 'Tomate, basilic, fiordilatte, salami piquant, \'nduja, 1/2 burrata, fils de piment',
      price: '21,00€'
    },
    {
      name: 'Tricolore',
      ingredients: 'Tomate, basilic, burrata, salami piquant, pesto génois maison, pignons grillés',
      price: '21,00€'
    },
    {
      name: 'Porchetta & tartufo',
      ingredients: 'Tomate, basilic, fiordilatte, porchetta, mascarpone, truffe noire',
      price: '21,00€'
    },
    {
      name: 'Napoli special',
      ingredients: 'Tomate, basilic, burrata, câpres, anchois',
      price: '21,00€'
    },
    {
      name: 'Parmigiana',
      ingredients: 'Tomate, mozzarella de bufflonne, aubergines, tomates cerises, copeaux de parmesan, origan',
      price: '21,00€'
    },
    {
      name: 'Nostra',
      ingredients: 'Tomate, burrata, culatello, truffe noire et basilic',
      price: '21,00€'
    },
    {
      name: 'Burrata & pesto',
      ingredients: 'Tomate, burrata, tomates cerises, pesto génois maison, pignons grillés, copeaux de parmesan',
      price: '21,00€'
    },
  ]

  const vins = [
    {
      name: 'Prosecco Doc Settolo Bio',
      cepage: 'Glera',
      producteur: 'Fratelli Collavo',
      origine: 'Veneto',
      suggestion: 'Pizza Fresca',
      verre: '8,00€',
      bouteille: '36,00€'
    },
    {
      name: 'Trebbiano Charisma Biodinamico',
      cepage: 'Trebbiano',
      producteur: 'Lunaria',
      origine: 'Abruzzo',
      suggestion: 'Pizza Rucola Reggiano',
      verre: '8,50€',
      bouteille: '36,00€'
    },
    {
      name: 'Malvasia Labelle Biodinamico',
      cepage: 'Malvasia',
      producteur: 'Lunaria',
      origine: 'Abruzzo',
      suggestion: 'Pizza Siciliana',
      verre: '8,50€',
      bouteille: '37,00€'
    },
    {
      name: 'Pinot Grigio Ramoro',
      cepage: 'Pinot Grigio',
      producteur: 'Lunaria',
      origine: 'Abruzzo',
      suggestion: 'Pizza Principessa',
      verre: '8,50€',
      bouteille: '37,00€'
    },
    {
      name: 'Lambrusco Emilia Secco Bio',
      cepage: 'Lambrusco',
      producteur: 'Medici Ermete',
      origine: 'Emilia Romagna',
      suggestion: 'Pizza Regina',
      verre: '7,50€',
      bouteille: '28,00€'
    },
    {
      name: 'Nero D\'Avola Bio',
      cepage: 'Nero D\'Avola',
      producteur: 'Due Terre Wines',
      origine: 'Sicilia',
      suggestion: 'Pizza Napoli',
      verre: '8,50€',
      bouteille: '37,00€'
    },
    {
      name: 'Negroamaro del Salento',
      cepage: 'Negroamaro',
      producteur: 'Vecchia Torre',
      origine: 'Puglia',
      suggestion: 'Pizza Calabrese',
      verre: '8,50€',
      bouteille: '37,00€'
    },
    {
      name: 'Primitivo Elementa',
      cepage: 'Primitivo',
      producteur: 'Orsogna',
      origine: 'Abruzzo',
      suggestion: 'Pizza Boscaiola',
      verre: '8,50€',
      bouteille: '40,00€'
    },
    {
      name: 'Montepulciano Coste di Moro Bio',
      cepage: 'Montepulciano',
      producteur: 'Lunaria',
      origine: 'Abruzzo',
      suggestion: 'Pizza 4 Stagioni',
      verre: '8,50€',
      bouteille: '39,00€'
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      content: 'Meilleure pizza ever. La pâte est incroyable et les ingrédients aussi. La Boscaiola est une tuerie avec sa scamorza fumée. Je conseille vivement. Le personnel est super sympa et attentionné même quand il s\'agit du rush et que l\'on commande à emporter.',
      rating: 5
    },
    {
      id: 2,
      name: 'Pierre Dubois',
      content: 'Honnêtement, depuis que j\'ai goûté aux succulentes pizzas de Bella Pizza, je ne veux plus manger de pizza dans un autre restaurant. La pâte est délicieuse, cuite à la perfection et les ingrédients sont de qualité et bien mis en valeur. Les assemblages sont savoureux et il y a une carte de vins exceptionnelle.',
      rating: 5
    },
    {
      id: 3,
      name: 'Marie Lefebvre',
      content: 'Des vrais italiens, un décor moderne. La pizza avec de la vraie farine italienne et du bon jambon (on le voit avec son étiquette italienne dans le frigo à l\'entrée). La pâte est fine. Le prix est raisonnable vu la qualité des produits.',
      rating: 5
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍕</span>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className={`text-2xl font-bold italic transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Georgia, serif' }}>Bella</span>
                <span className={`text-xl font-semibold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Pizza</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('menu')} className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-gray-300'}`}>Le Pizze</button>
              <button onClick={() => scrollToSection('vins')} className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-gray-300'}`}>I Vini</button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors font-medium ${isScrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-gray-300'}`}>Contact</button>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm">🇮🇹</div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm">🇧🇪</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/image/Image pizza.jpg")}
            alt="Pizza"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 italic leading-tight" style={{ fontFamily: 'Georgia, serif' }}
            >
              Pour ceux qui aiment la pizza
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white mb-12 leading-relaxed"
            >
              <div className="text-6xl md:text-7xl leading-none mb-4">"</div>
              <div className="space-y-3 italic">
                <p className="text-2xl md:text-3xl mb-6">
                  L'art de la pizza authentique,
                  <br />
                  l'émotion d'un moment partagé.
                </p>
                <p className="text-lg md:text-xl">
                  Des ingrédients sélectionnés,
                  <br />
                  une tradition préservée,
                  <br />
                  une passion transmise.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <span>TÉLÉCHARGER CARTE</span>
                <span>→</span>
              </button>
              <a href="tel:+33123456789" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>APPEL</span>
              </a>
            </motion.div>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">CAPUTO</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">1924</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Le moulin de Naples</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">VINS VENETI DOC</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">D.O.P.</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Tomate San Marzano</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">PERONI</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Giovanni Peroni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Made with Love Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1200&h=600&fit=crop"
                alt="Pizza préparée avec amour"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-5xl md:text-6xl font-bold italic text-red-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Made with love
                </h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-lg leading-relaxed">
                  Une pâte légère qui repose entre 48 et 72 heures avant d'être utilisée, réalisée avec des ingrédients de haute qualité, pour obtenir une corniche prononcée mais évidée ; la cuisson dans un four rotatif combiné gaz / bois à 450°C permet de conserver les saveurs authentiques de la tomate et de la mozzarella fiordilatte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Pizze Rosse */}
      <section id="menu" className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold italic text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Mais maintenant place à...
            </h2>
          </div>
          
          <div className="relative max-w-6xl mx-auto mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=600&fit=crop"
                alt="Pizze Rosse"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-5xl md:text-6xl font-bold italic text-red-600" style={{ fontFamily: 'Georgia, serif' }}>
                  Pizze Rosse
                </h3>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Sauce à base de tomate Piennolo, typique de la région vésuvienne de Campanie, elle doit son nom à la manière dont les grappes sont entrelacées pour être conservées. Elles ont une forme ovale mais allongée et un goût typiquement acide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pizzaRouges.map((pizza, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b-2 border-gray-200 dark:border-gray-800 pb-6"
                >
                  <h4 className="text-2xl font-bold italic text-gray-900 dark:text-white mb-2">{pizza.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{pizza.ingredients}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{pizza.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Pizze Bianche */}
      <section className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold italic text-gray-900 dark:text-white mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Pizze Bianche
            </h3>
            <div className="mb-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Expressément conçu sans sauce tomate pour rehausser les saveurs typiques des produits italiens uniques. Une combinaison époustouflante qui ravira vos papilles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pizzaBianche.map((pizza, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b-2 border-gray-200 dark:border-gray-800 pb-6"
                >
                  <h4 className="text-2xl font-bold italic text-gray-900 dark:text-white mb-2">{pizza.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{pizza.ingredients}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{pizza.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold italic text-red-600 mb-12 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Les suggestions les plus demandées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestions.map((pizza, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b-2 border-gray-200 dark:border-gray-800 pb-6"
                >
                  <h4 className="text-2xl font-bold italic text-gray-900 dark:text-white mb-2">{pizza.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{pizza.ingredients}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{pizza.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vins Section */}
      <section id="vins" className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold italic text-blue-900 dark:text-blue-300 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Sélection de vins
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
              Ce qui compte c'est que cette fois pour accompagner ta pizza il y aura du bon vin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vins.map((vin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b-2 border-gray-200 dark:border-gray-800 pb-6"
                >
                  <h4 className="text-xl font-bold italic text-gray-900 dark:text-white mb-3">{vin.name}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                    <p><span className="font-semibold">Cépages:</span> {vin.cepage} - <span className="font-semibold">Producteur:</span> {vin.producteur}</p>
                    <p><span className="font-semibold">Origine:</span> {vin.origine}</p>
                    <p><span className="font-semibold">Suggestion:</span> {vin.suggestion}</p>
                    <p className="pt-2"><span className="font-semibold">Verre:</span> {vin.verre} - <span className="font-semibold">Bouteille:</span> {vin.bouteille}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-dark relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold italic text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Votre avis est très important pour nous!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Nous vous demandons de laisser un commentaire. Parce que vos commentaires sont notre meilleure publicité. Merci !
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-dark-light p-6 rounded-lg"
                >
                  <div className="text-4xl text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-3xl font-bold italic mb-6" style={{ fontFamily: 'Georgia, serif' }}>Contact</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cliquez sur les icônes pour nous trouver sur une carte ou sur les réseaux sociaux. Vous souhaitez réserver une table ou commander une pizza ? Cliquez sur le téléphone ! Nous vous attendons !
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-gray-300">Rue de la République 42<br />75001 Paris</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Contact</p>
                    <p className="text-gray-300">TEL: 01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-gray-300">Bella Pizza Facebook</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-gray-300">Bella Pizza Instagram</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-bold italic mb-6" style={{ fontFamily: 'Georgia, serif' }}>Horaires d'ouverture</h4>
              <div className="space-y-3 border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-semibold">LUN</span>
                  <span className="text-gray-300">Fermé</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-semibold">MAR</span>
                  <span className="text-gray-300">12:00 - 14:30, 18:00 - 22:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-semibold">MER</span>
                  <span className="text-gray-300">12:00 - 14:30, 18:00 - 22:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-semibold">JEU</span>
                  <span className="text-gray-300">12:00 - 14:30, 18:00 - 22:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-semibold">VEN</span>
                  <span className="text-gray-300">12:00 - 14:30, 18:00 - 22:30</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-semibold">SAM</span>
                  <span className="text-gray-300">12:00 - 14:30, 18:00 - 22:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">DIM</span>
                  <span className="text-gray-300">12:00 - 14:30, 18:00 - 22:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Bella Pizza. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


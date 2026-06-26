'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronUp, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

const OR = '#C4A55A'
const NOIR = '#0A0A0A'
const CREME = '#F2EDE4'
const ROUGE = '#9B1B2A'

const MONTHS_FR = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
const DAYS_FR = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const lunchSlots = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30']
const dinnerSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']

export default function PizzeriaDemo() {
  const today = new Date()

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [calYear, setCalYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [guests, setGuests] = useState(2)
  const [resForm, setResForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [resSubmitted, setResSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const getDaysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate()
  const getFirstDayOfMonth = (m: number, y: number) => {
    const d = new Date(y, m, 1).getDay()
    return d === 0 ? 6 : d - 1
  }
  const isDateDisabled = (day: number) => {
    const date = new Date(calYear, calMonth, day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayStart || date.getDay() === 1
  }
  const isSameDate = (date: Date | null, day: number) =>
    !!date && date.getDate() === day && date.getMonth() === calMonth && date.getFullYear() === calYear

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
    setSelectedDate(null); setSelectedTime(null)
  }
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
    setSelectedDate(null); setSelectedTime(null)
  }

  const handleDateSelect = (day: number) => {
    if (isDateDisabled(day)) return
    setSelectedDate(new Date(calYear, calMonth, day))
    setSelectedTime(null)
  }

  const handleSubmit = () => {
    if (selectedDate && selectedTime && resForm.name && resForm.email) {
      setResSubmitted(true)
    }
  }

  const daysInMonth = getDaysInMonth(calMonth, calYear)
  const firstDay = getFirstDayOfMonth(calMonth, calYear)
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7

  // ── DATA ──────────────────────────────────────────────────────────────────

  const pizzaRouges = [
    { name: 'Margherita', ingredients: 'Tomate · Basilic · Mozzarella', price: '12,50 €' },
    { name: 'Burrata', ingredients: 'Tomate · Basilic · Tomates Cerises · Burrata', price: '19,00 €' },
    { name: 'Prosciutto Funghi', ingredients: 'Tomate · Basilic · Mozzarella · Jambon de Parme · Champignons', price: '17,50 €' },
    { name: 'Regina', ingredients: 'Tomate · Basilic · Mozzarella de Bufflonne', price: '16,00 €' },
    { name: 'Marinara', ingredients: 'Tomate · Ail · Origan · Basilic', price: '11,00 €' },
    { name: 'Quattro Stagioni', ingredients: 'Tomate · Mozzarella · Jambon · Champignons · Olives · Artichauts', price: '18,00 €' },
    { name: 'Principessa', ingredients: 'Tomate · Basilic · Scamorza fumée', price: '14,00 €' },
    { name: 'Rucola Reggiano', ingredients: 'Tomate · Mozzarella · Roquette · Parmigiano Reggiano', price: '15,00 €' },
    { name: 'Napoli', ingredients: 'Tomate · Mozzarella · Câpres · Filets d\'Anchois · Origan', price: '16,00 €' },
  ]

  const pizzaBianche = [
    { name: 'Salsiccia Friarelli', ingredients: 'Mozzarella · Basilic · Saucisse · Brocoli-rave', price: '18,00 €' },
    { name: '4 Formaggi', ingredients: 'Mozzarella · Scamorza · Gorgonzola · Parmesan · Basilic', price: '17,00 €' },
    { name: 'Fresca', ingredients: 'Mozzarella · Tomates cerises jaunes et rouges · Roquette · Parmesan', price: '17,00 €' },
    { name: 'Patate & Tartufo', ingredients: 'Mozzarella · Basilic · Pommes de terre · Truffe Noire', price: '21,00 €' },
    { name: 'Mortadella', ingredients: 'Mozzarella · Roquette · Mortadelle · Pecorino · Pesto · Pistaches', price: '21,00 €' },
    { name: 'Genovese', ingredients: 'Mozzarella · Pesto Génois · Tomates Piennolo · Ricotta · Pignons', price: '21,00 €' },
  ]

  const suggestions = [
    { name: 'Amatrice', ingredients: 'Tomate piennolo · Oignon rouge · Guanciale croustillant · Poivre noir · Basilic', price: '21,00 €' },
    { name: 'Piccantissima', ingredients: 'Tomate · Basilic · Fiordilatte · Salami piquant · \'Nduja · Burrata · Piment', price: '21,00 €' },
    { name: 'Tricolore', ingredients: 'Tomate · Basilic · Burrata · Salami piquant · Pesto génois · Pignons', price: '21,00 €' },
    { name: 'Porchetta & Tartufo', ingredients: 'Tomate · Basilic · Fiordilatte · Porchetta · Mascarpone · Truffe noire', price: '21,00 €' },
    { name: 'Napoli Special', ingredients: 'Tomate · Basilic · Burrata · Câpres · Anchois', price: '21,00 €' },
    { name: 'Parmigiana', ingredients: 'Tomate · Bufflonne · Aubergines · Tomates cerises · Parmesan · Origan', price: '21,00 €' },
    { name: 'Nostra', ingredients: 'Tomate · Burrata · Culatello · Truffe noire · Basilic', price: '21,00 €' },
    { name: 'Burrata & Pesto', ingredients: 'Tomate · Burrata · Tomates cerises · Pesto génois · Pignons · Parmesan', price: '21,00 €' },
  ]

  const vins = [
    { name: 'Prosecco Doc Settolo Bio', cepage: 'Glera', producteur: 'Fratelli Collavo', origine: 'Veneto', verre: '8,00 €', bouteille: '36,00 €' },
    { name: 'Trebbiano Charisma Biodinamico', cepage: 'Trebbiano', producteur: 'Lunaria', origine: 'Abruzzo', verre: '8,50 €', bouteille: '36,00 €' },
    { name: 'Malvasia Labelle Biodinamico', cepage: 'Malvasia', producteur: 'Lunaria', origine: 'Abruzzo', verre: '8,50 €', bouteille: '37,00 €' },
    { name: 'Pinot Grigio Ramoro', cepage: 'Pinot Grigio', producteur: 'Lunaria', origine: 'Abruzzo', verre: '8,50 €', bouteille: '37,00 €' },
    { name: 'Lambrusco Emilia Secco Bio', cepage: 'Lambrusco', producteur: 'Medici Ermete', origine: 'Emilia Romagna', verre: '7,50 €', bouteille: '28,00 €' },
    { name: "Nero D'Avola Bio", cepage: "Nero D'Avola", producteur: 'Due Terre Wines', origine: 'Sicilia', verre: '8,50 €', bouteille: '37,00 €' },
    { name: 'Negroamaro del Salento', cepage: 'Negroamaro', producteur: 'Vecchia Torre', origine: 'Puglia', verre: '8,50 €', bouteille: '37,00 €' },
    { name: 'Primitivo Elementa', cepage: 'Primitivo', producteur: 'Orsogna', origine: 'Abruzzo', verre: '8,50 €', bouteille: '40,00 €' },
    { name: 'Montepulciano Coste di Moro Bio', cepage: 'Montepulciano', producteur: 'Lunaria', origine: 'Abruzzo', verre: '8,50 €', bouteille: '39,00 €' },
  ]

  const testimonials = [
    { name: 'Sophie Martin', content: 'Meilleure pizza ever. La pâte est incroyable et les ingrédients aussi. La Boscaiola est une tuerie avec sa scamorza fumée. Le personnel est super sympa et attentionné même quand il s\'agit du rush.' },
    { name: 'Pierre Dubois', content: 'Depuis que j\'ai goûté aux succulentes pizzas de Bella Pizza, je ne veux plus manger de pizza dans un autre restaurant. La pâte est délicieuse, cuite à la perfection. Une carte de vins exceptionnelle.' },
    { name: 'Marie Lefebvre', content: 'Des vrais italiens, un décor moderne. De la vraie farine italienne et du bon jambon. La pâte est fine. Le prix est raisonnable vu la qualité des produits.' },
  ]

  const provenance = [
    { num: '1924', title: 'Farine Caputo', desc: 'Le moulin de Naples, référence mondiale de la pizza napoletana.' },
    { num: 'D.O.P.', title: 'Tomate San Marzano', desc: 'Cultivée en Campanie, au pied du Vésuve. Aucun substitut accepté.' },
    { num: '450°', title: 'Four gaz & bois', desc: 'La température exacte pour une cuisson en 90 secondes chrono.' },
    { num: '72h', title: 'Fermentation lente', desc: 'La pâte repose. La levure travaille. La patience fait la différence.' },
  ]

  // ── JSX ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen" style={{ backgroundColor: NOIR }}>

      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(196,165,90,0.12)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <span className="text-2xl italic font-normal text-white leading-none" style={{ fontFamily: 'Georgia, serif' }}>Bella</span>
              <div className="w-px h-5 bg-white/20" />
              <span className="text-sm font-light tracking-[0.3em] uppercase text-white/70">Pizza</span>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              {[['Le Pizze', 'menu'], ['I Vini', 'vins'], ['Réserver', 'reservation']].map(([label, id]) => (
                <button key={id} onClick={() => scrollToSection(id)}
                  className="text-xs tracking-[0.2em] uppercase font-light text-white/55 hover:text-white transition-colors duration-200">
                  {label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-6">
              <span className="hidden lg:block text-xs tracking-[0.2em] uppercase text-white/25">Napoli · Bruxelles</span>
              <button onClick={() => scrollToSection('reservation')}
                className="px-5 py-2 text-xs tracking-[0.2em] uppercase font-light text-white transition-all duration-200 hover:bg-white hover:text-black"
                style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                Réserver
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO — INTACT ── */}
      <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image src={getImagePath('/image/Image pizza.jpg')} alt="Pizza" fill className="object-cover object-center" priority />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 italic leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Pour ceux qui aiment la pizza
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
              <div className="text-6xl md:text-7xl leading-none mb-4">"</div>
              <div className="space-y-3 italic">
                <p className="text-2xl md:text-3xl mb-6">L'art de la pizza authentique,<br />l'émotion d'un moment partagé.</p>
                <p className="text-lg md:text-xl">Des ingrédients sélectionnés,<br />une tradition préservée,<br />une passion transmise.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <span>TÉLÉCHARGER CARTE</span><span>→</span>
              </button>
              <a href="tel:+33123456789" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" /><span>APPEL</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROVENANCE ── */}
      <section className="py-24" style={{ backgroundColor: NOIR }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: OR }}>Les origines</p>
            <h2 className="text-4xl md:text-5xl font-light italic text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Les origines ne se compromettent pas.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '1px', backgroundColor: 'rgba(196,165,90,0.12)' }}>
            {provenance.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }} className="p-10" style={{ backgroundColor: NOIR }}>
                <div className="text-5xl md:text-6xl font-light mb-5 leading-none" style={{ color: OR, fontFamily: 'Georgia, serif' }}>{item.num}</div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-3">{item.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: 'rgba(242,237,228,0.4)' }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHIE ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '65vh' }}>
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-10 lg:px-20 py-24" style={{ backgroundColor: CREME }}>
          <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: ROUGE }}>Notre méthode</p>
          <h2 className="text-4xl md:text-5xl font-light italic leading-tight mb-8" style={{ fontFamily: 'Georgia, serif', color: NOIR }}>
            Made<br />with love.
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(10,10,10,0.55)' }}>
            Une pâte légère qui repose entre 48 et 72 heures avant d'être utilisée, réalisée avec des ingrédients de haute qualité, pour obtenir une corniche prononcée mais évidée.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,10,10,0.55)' }}>
            La cuisson dans un four rotatif combiné gaz / bois à 450°C permet de conserver les saveurs authentiques de la tomate et de la mozzarella fiordilatte.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="relative" style={{ minHeight: '400px' }}>
          <Image src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=900&h=700&fit=crop"
            alt="Préparation artisanale" fill className="object-cover" />
        </motion.div>
      </section>

      {/* ── IMAGE PANORAMIQUE PIZZA 1 ── */}
      <div className="relative overflow-hidden" style={{ height: '55vh', minHeight: '340px' }}>
        <Image
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1600&h=800&fit=crop"
          alt="Pizza napolitaine"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.1) 60%, rgba(10,10,10,0.4) 100%)' }} />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: OR }}>Notre carte</p>
              <h2 className="text-5xl md:text-7xl font-light italic text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Le Pizze
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MENU PIZZE ROSSE ── */}
      <section id="menu" className="py-24" style={{ backgroundColor: NOIR }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(196,165,90,0.2)' }} />
              <span className="text-xs tracking-[0.35em] uppercase" style={{ color: OR }}>Sauce tomate Piennolo</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(196,165,90,0.2)' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-light italic text-white mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Pizze Rosse</h2>
            <p className="text-sm max-w-2xl leading-relaxed" style={{ color: 'rgba(242,237,228,0.4)' }}>
              Sauce à base de tomate Piennolo, typique de la région vésuvienne de Campanie. Forme ovale et allongée, goût typiquement acide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            {pizzaRouges.map((pizza, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }} className="py-6 border-b" style={{ borderColor: 'rgba(196,165,90,0.12)' }}>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-xl italic text-white pr-4" style={{ fontFamily: 'Georgia, serif' }}>{pizza.name}</h4>
                  <span className="flex-shrink-0 text-sm font-light" style={{ color: OR }}>{pizza.price}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(242,237,228,0.38)' }}>{pizza.ingredients}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE PANORAMIQUE PIZZA 2 ── */}
      <div className="relative overflow-hidden" style={{ height: '45vh', minHeight: '260px' }}>
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&h=700&fit=crop"
          alt="Pizze au feu de bois"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.45)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl italic text-white/80 text-center px-6" style={{ fontFamily: 'Georgia, serif' }}>
            "Une corniche prononcée, une pâte légère — la signature napolitaine."
          </motion.p>
        </div>
      </div>

      {/* ── MENU PIZZE BIANCHE ── */}
      <section className="py-24" style={{ backgroundColor: '#0E0E0E' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(196,165,90,0.2)' }} />
              <span className="text-xs tracking-[0.35em] uppercase" style={{ color: OR }}>Sans sauce tomate</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(196,165,90,0.2)' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-light italic text-white mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Pizze Bianche</h2>
            <p className="text-sm max-w-2xl leading-relaxed" style={{ color: 'rgba(242,237,228,0.4)' }}>
              Expressément conçues sans sauce tomate pour rehausser les saveurs typiques des produits italiens uniques.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            {pizzaBianche.map((pizza, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }} className="py-6 border-b" style={{ borderColor: 'rgba(196,165,90,0.12)' }}>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-xl italic text-white pr-4" style={{ fontFamily: 'Georgia, serif' }}>{pizza.name}</h4>
                  <span className="flex-shrink-0 text-sm font-light" style={{ color: OR }}>{pizza.price}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(242,237,228,0.38)' }}>{pizza.ingredients}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUGGESTIONS ── */}
      <section className="py-24" style={{ backgroundColor: CREME }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(155,27,42,0.2)' }} />
              <span className="text-xs tracking-[0.35em] uppercase" style={{ color: ROUGE }}>Signature</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(155,27,42,0.2)' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-light italic leading-tight" style={{ fontFamily: 'Georgia, serif', color: NOIR }}>
              Les suggestions<br />les plus demandées.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            {suggestions.map((pizza, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }} className="py-6 border-b" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-xl italic pr-4" style={{ fontFamily: 'Georgia, serif', color: NOIR }}>{pizza.name}</h4>
                  <span className="flex-shrink-0 text-sm font-light" style={{ color: ROUGE }}>{pizza.price}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(10,10,10,0.45)' }}>{pizza.ingredients}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VINS — image + liste ── */}
      <section id="vins">
        {/* Image atmosphérique vin */}
        <div className="relative overflow-hidden" style={{ height: '60vh', minHeight: '380px' }}>
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop"
            alt="Sélection de vins italiens"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.75) 100%)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="text-center">
              <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: OR }}>La Cave</p>
              <h2 className="text-5xl md:text-7xl font-light italic text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>I Vini</h2>
              <p className="mt-5 text-sm italic max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                "Ce qui compte, c'est que cette fois pour accompagner ta pizza il y aura du bon vin."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Liste des vins */}
        <div className="py-20" style={{ backgroundColor: NOIR }}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
              {vins.map((vin, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }} className="py-6 border-b" style={{ borderColor: 'rgba(196,165,90,0.12)' }}>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg italic text-white pr-6 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{vin.name}</h4>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-xs mb-0.5" style={{ color: 'rgba(196,165,90,0.6)' }}>verre · {vin.verre}</div>
                      <div className="text-xs" style={{ color: OR }}>btl · {vin.bouteille}</div>
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: 'rgba(242,237,228,0.3)' }}>
                    {vin.cepage} — {vin.producteur}, {vin.origine}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE PANORAMIQUE PIZZA 3 ── */}
      <div className="relative overflow-hidden" style={{ height: '50vh', minHeight: '300px' }}>
        <Image
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&h=800&fit=crop"
          alt="Pizza fraîchement sortie du four"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.35)' }} />
      </div>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-28" style={{ backgroundColor: CREME }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
                <div className="text-9xl font-light leading-none mb-6 select-none" style={{ color: OR, fontFamily: 'Georgia, serif', lineHeight: 0.8 }}>"</div>
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10" style={{ fontFamily: 'Georgia, serif', color: NOIR }}>
                  {testimonials[activeTestimonial].content}
                </p>
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(10,10,10,0.38)' }}>
                  — {testimonials[activeTestimonial].name}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center gap-3 mt-14">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)} className="transition-all duration-300"
                  style={{ height: '2px', width: i === activeTestimonial ? '32px' : '10px', backgroundColor: i === activeTestimonial ? ROUGE : 'rgba(10,10,10,0.2)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉSERVATION ── */}
      <section id="reservation" className="py-24" style={{ backgroundColor: NOIR }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(196,165,90,0.2)' }} />
              <span className="text-xs tracking-[0.35em] uppercase" style={{ color: OR }}>En ligne</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(196,165,90,0.2)' }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-light italic text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Réservez votre table.
            </h2>
            <p className="mt-4 text-sm" style={{ color: 'rgba(242,237,228,0.38)' }}>
              Fermé le lundi. Réservation conseillée le week-end.
            </p>
          </motion.div>

          {resSubmitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center py-20">
              <div className="text-5xl mb-6 font-light italic" style={{ color: OR, fontFamily: 'Georgia, serif' }}>Grazie.</div>
              <p className="text-white text-lg font-light mb-3">
                Votre réservation est confirmée.
              </p>
              <p className="text-sm" style={{ color: 'rgba(242,237,228,0.4)' }}>
                {selectedDate?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedTime} · {guests} {guests > 1 ? 'couverts' : 'couvert'}
              </p>
              <p className="text-xs mt-6" style={{ color: 'rgba(242,237,228,0.25)' }}>Un e-mail de confirmation vous sera envoyé.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              {/* Colonne gauche : calendrier + créneaux */}
              <div>
                {/* Calendrier */}
                <div className="mb-10">
                  <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: OR }}>Choisir une date</p>

                  {/* Navigation mois */}
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-light tracking-widest uppercase text-white">
                      {MONTHS_FR[calMonth]} {calYear}
                    </span>
                    <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* En-tête jours */}
                  <div className="grid grid-cols-7 mb-2">
                    {DAYS_FR.map((d, i) => (
                      <div key={i} className="text-center text-xs py-1 font-light" style={{ color: 'rgba(255,255,255,0.25)' }}>{d}</div>
                    ))}
                  </div>

                  {/* Grille jours */}
                  <div className="grid grid-cols-7">
                    {Array.from({ length: totalCells }, (_, idx) => {
                      const dayNum = idx - firstDay + 1
                      if (dayNum < 1 || dayNum > daysInMonth) {
                        return <div key={idx} className="aspect-square" />
                      }
                      const disabled = isDateDisabled(dayNum)
                      const selected = isSameDate(selectedDate, dayNum)
                      const isToday = dayNum === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()
                      return (
                        <button
                          key={idx}
                          onClick={() => handleDateSelect(dayNum)}
                          disabled={disabled}
                          className="aspect-square flex items-center justify-center text-sm font-light transition-all duration-200"
                          style={{
                            color: disabled ? 'rgba(255,255,255,0.15)' : selected ? NOIR : isToday ? OR : 'rgba(255,255,255,0.7)',
                            backgroundColor: selected ? OR : 'transparent',
                            cursor: disabled ? 'not-allowed' : 'pointer',
                            border: isToday && !selected ? `1px solid ${OR}30` : '1px solid transparent',
                          }}
                          onMouseEnter={e => { if (!disabled && !selected) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.06)' }}
                          onMouseLeave={e => { if (!selected) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
                        >
                          {dayNum}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Créneaux horaires */}
                {selectedDate && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: OR }}>Choisir un créneau</p>
                    <div className="mb-4">
                      <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>Déjeuner</p>
                      <div className="grid grid-cols-3 gap-2">
                        {lunchSlots.map(slot => (
                          <button key={slot} onClick={() => setSelectedTime(slot)}
                            className="py-2 text-xs font-light tracking-widest transition-all duration-200"
                            style={{
                              border: `1px solid ${selectedTime === slot ? OR : 'rgba(255,255,255,0.12)'}`,
                              color: selectedTime === slot ? NOIR : 'rgba(255,255,255,0.6)',
                              backgroundColor: selectedTime === slot ? OR : 'transparent',
                            }}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>Dîner</p>
                      <div className="grid grid-cols-3 gap-2">
                        {dinnerSlots.map(slot => (
                          <button key={slot} onClick={() => setSelectedTime(slot)}
                            className="py-2 text-xs font-light tracking-widest transition-all duration-200"
                            style={{
                              border: `1px solid ${selectedTime === slot ? OR : 'rgba(255,255,255,0.12)'}`,
                              color: selectedTime === slot ? NOIR : 'rgba(255,255,255,0.6)',
                              backgroundColor: selectedTime === slot ? OR : 'transparent',
                            }}>
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Colonne droite : infos + formulaire */}
              <div>
                {/* Nombre de couverts */}
                <div className="mb-8">
                  <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: OR }}>Nombre de couverts</p>
                  <div className="flex items-center gap-5">
                    <button onClick={() => setGuests(g => Math.max(1, g - 1))}
                      className="w-10 h-10 flex items-center justify-center transition-colors hover:border-white/40"
                      style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}>
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-3xl font-light italic text-white w-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                      {guests}
                    </span>
                    <button onClick={() => setGuests(g => Math.min(12, g + 1))}
                      className="w-10 h-10 flex items-center justify-center transition-colors hover:border-white/40"
                      style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}>
                      <Plus className="w-3 h-3" />
                    </button>
                    <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {guests > 1 ? 'couverts' : 'couvert'}
                    </span>
                  </div>
                </div>

                {/* Champs formulaire */}
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: OR }}>Nom complet</label>
                    <input type="text" placeholder="Maria Rossi" value={resForm.name}
                      onChange={e => setResForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 text-sm font-light text-white bg-transparent outline-none placeholder-white/20 transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(196,165,90,0.5)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: OR }}>E-mail</label>
                      <input type="email" placeholder="maria@email.com" value={resForm.email}
                        onChange={e => setResForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 text-sm font-light text-white bg-transparent outline-none placeholder-white/20"
                        style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                        onFocus={e => e.currentTarget.style.borderColor = 'rgba(196,165,90,0.5)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: OR }}>Téléphone</label>
                      <input type="tel" placeholder="+33 6 00 00 00" value={resForm.phone}
                        onChange={e => setResForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 text-sm font-light text-white bg-transparent outline-none placeholder-white/20"
                        style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                        onFocus={e => e.currentTarget.style.borderColor = 'rgba(196,165,90,0.5)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase mb-2" style={{ color: OR }}>
                      Demandes particulières <span style={{ color: 'rgba(255,255,255,0.2)' }}>(facultatif)</span>
                    </label>
                    <textarea placeholder="Allergie, chaise bébé, occasion spéciale..." value={resForm.notes}
                      onChange={e => setResForm(f => ({ ...f, notes: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 text-sm font-light text-white bg-transparent outline-none placeholder-white/20 resize-none"
                      style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                      onFocus={e => e.currentTarget.style.borderColor = 'rgba(196,165,90,0.5)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                </div>

                {/* Récapitulatif */}
                {selectedDate && selectedTime && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
                    className="mb-6 px-5 py-4" style={{ border: '1px solid rgba(196,165,90,0.2)', backgroundColor: 'rgba(196,165,90,0.04)' }}>
                    <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: OR }}>Récapitulatif</p>
                    <p className="text-sm font-light text-white/70">
                      {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                      {' · '}{selectedTime}
                      {' · '}{guests} {guests > 1 ? 'couverts' : 'couvert'}
                    </p>
                  </motion.div>
                )}

                {/* Bouton */}
                <button
                  onClick={handleSubmit}
                  disabled={!selectedDate || !selectedTime || !resForm.name || !resForm.email}
                  className="w-full py-4 text-xs tracking-[0.25em] uppercase font-light transition-all duration-300"
                  style={{
                    backgroundColor: (!selectedDate || !selectedTime || !resForm.name || !resForm.email) ? 'rgba(255,255,255,0.05)' : OR,
                    color: (!selectedDate || !selectedTime || !resForm.name || !resForm.email) ? 'rgba(255,255,255,0.25)' : NOIR,
                    cursor: (!selectedDate || !selectedTime || !resForm.name || !resForm.email) ? 'not-allowed' : 'pointer',
                    border: 'none',
                  }}
                >
                  Confirmer la réservation
                </button>
                <p className="text-xs text-center mt-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  Démonstration — aucune réservation réelle ne sera enregistrée.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="py-20" style={{ backgroundColor: '#050505' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl italic font-normal text-white leading-none" style={{ fontFamily: 'Georgia, serif' }}>Bella</span>
              <div className="w-px h-6 bg-white/15" />
              <span className="text-base font-light tracking-[0.3em] uppercase text-white/50">Pizza</span>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: OR }}>Napoli · Bruxelles</p>
          </div>
          <div className="h-px mb-16" style={{ backgroundColor: 'rgba(196,165,90,0.15)' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: OR }}>Adresse</p>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Rue de la République 42<br />75001 Paris
              </p>
              <div className="space-y-1.5">
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.35)' }}>01 23 45 67 89</p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.35)' }}>bellapizza@email.com</p>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: OR }}>Horaires</p>
              <div className="space-y-3">
                {[['Lundi', 'Fermé'], ['Mardi — Vendredi', '12:00 – 14:30 / 18:00 – 22:30'], ['Samedi — Dimanche', '12:00 – 14:30 / 18:00 – 22:30']].map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-4 text-xs"
                    style={{ color: hours === 'Fermé' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.45)' }}>
                    <span className="flex-shrink-0">{day}</span>
                    <span className="text-right">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: OR }}>Réservation</p>
              <p className="text-2xl font-light text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>01 23 45 67 89</p>
              <div className="flex gap-6">
                <span className="text-xs tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.3)' }}>Instagram</span>
                <span className="text-xs tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.3)' }}>Facebook</span>
              </div>
            </div>
          </div>
          <div className="h-px mb-8" style={{ backgroundColor: 'rgba(196,165,90,0.08)' }} />
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>© 2024 Bella Pizza — Tous droits réservés</p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-6 w-10 h-10 flex items-center justify-center z-50 transition-all duration-200 group"
        style={{ border: '1px solid rgba(196,165,90,0.35)', backgroundColor: NOIR, color: OR }}>
        <ChevronUp className="w-4 h-4" />
      </button>

    </div>
  )
}

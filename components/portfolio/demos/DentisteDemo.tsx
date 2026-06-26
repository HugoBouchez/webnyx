'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

// Palette dentaire : blanc · bleu ciel · bleu profond
const BLUE      = '#71A3C1'   // bleu primaire doux
const BLUE_DARK = '#1C3A5C'   // bleu profond — titres, 1 section dark
const BLUE_LIGHT = '#EBF4FA'  // fond bleu très clair
const BLUE_HOVER = '#5A8FAF'  // hover
const WHITE     = '#FFFFFF'
const NEAR_WHITE = '#F7FBFE'  // fond presque blanc légèrement bleuté
const BODY      = '#4A6880'   // texte corps

export default function DentisteDemo() {
  const [expandedFaq, setExpandedFaq]     = useState<number | null>(null)
  const [formData, setFormData]           = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 4000)
  }

  // ── DATA ─────────────────────────────────────────────────────────────────

  const services = [
    { num: '01', title: 'Soins Dentaires',     desc: 'Détartrage, traitement des caries, soins des gencives. Des soins complets pour toute la famille avec des techniques modernes et indolores.' },
    { num: '02', title: 'Esthétique Dentaire', desc: 'Blanchiment professionnel, facettes céramiques, alignement invisible. Transformez votre sourire pour des résultats naturels et durables.' },
    { num: '03', title: 'Urgences 24/7',       desc: 'Douleurs aiguës, traumatismes, abcès. Notre équipe vous prend en charge rapidement, même en dehors des heures habituelles.' },
    { num: '04', title: 'Implantologie',       desc: 'Implants en titane, couronnes sur implants, greffes osseuses. Solutions durables pour retrouver un sourire complet et fonctionnel.' },
    { num: '05', title: 'Orthodontie',         desc: 'Appareils dentaires, Invisalign, gouttières transparentes. Des solutions adaptées à tous les âges pour un alignement parfait.' },
  ]

  const steps = [
    { num: '01', title: 'Écoute & Diagnostic',  desc: 'Chaque parcours commence par une consultation approfondie. Nous prenons le temps de comprendre vos besoins, vos craintes et vos objectifs.' },
    { num: '02', title: 'Plan de traitement',    desc: 'Un plan personnalisé est élaboré avec vous. Transparence totale sur les soins, les délais et les coûts — avant de commencer.' },
    { num: '03', title: 'Soins & Suivi',         desc: 'Des soins réalisés avec précision et des techniques douces. Un suivi régulier pour maintenir votre santé bucco-dentaire dans la durée.' },
  ]

  const team = [
    { name: 'Dr. Sophie Martin',  specialty: 'Esthétique & Implantologie', exp: '15 ans', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face' },
    { name: 'Dr. Pierre Dubois',  specialty: 'Orthodontie & Pédodontie',   exp: '12 ans', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop&crop=face' },
    { name: 'Dr. Marie Lefebvre', specialty: 'Parodontologie & Soins',     exp: '10 ans', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&h=600&fit=crop&crop=face' },
  ]

  const testimonials = [
    { name: 'Claire Bernard', date: 'Mars 2024',    content: 'Un cabinet exceptionnel. L\'équipe est très professionnelle et à l\'écoute. J\'ai eu un blanchiment dentaire et le résultat est incroyable. Je recommande vivement.' },
    { name: 'Marc Rousseau',  date: 'Février 2024', content: 'J\'ai eu besoin d\'une urgence dentaire un dimanche. L\'équipe a été réactive et m\'a pris en charge rapidement. Très professionnel et rassurant.' },
    { name: 'Julie Moreau',   date: 'Janvier 2024', content: 'Mon fils de 8 ans avait peur du dentiste. Le Dr. Dubois a été fantastique, très patient et rassurant. Mon fils n\'a plus peur maintenant.' },
  ]

  const faqs = [
    { q: 'Quels sont vos horaires ?',                  a: 'Lundi au vendredi de 9h à 19h, samedi de 9h à 13h. Pour les urgences, nous sommes disponibles 24/7.' },
    { q: 'Acceptez-vous la carte vitale ?',            a: 'Oui, nous acceptons la carte vitale et la plupart des mutuelles. Nous pratiquons le tiers-payant pour faciliter vos démarches.' },
    { q: 'Combien coûte une consultation ?',           a: 'Une consultation de contrôle coûte environ 25€, remboursée à 70% par la Sécurité Sociale. Un devis détaillé vous est fourni avant tout traitement.' },
    { q: 'Solutions pour les patients phobiques ?',    a: 'Absolument. Nous proposons la sédation consciente et des techniques douces. Notre équipe est formée pour accompagner les patients anxieux.' },
    { q: 'Délais pour un rendez-vous non urgent ?',    a: 'Pour une consultation de routine, généralement sous 1 à 2 semaines. Pour les urgences, le jour même ou sous 24h.' },
  ]

  // ── JSX ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen" style={{ backgroundColor: WHITE }}>

      {/* ── HEADER ── toujours blanc ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'rgba(255,255,255,0.97)',
          borderBottom: `1px solid ${BLUE_LIGHT}`,
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: BLUE }}>Dr.</span>
                <span className="text-xl font-semibold" style={{ color: BLUE_DARK }}>Martin & Associés</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: BLUE, opacity: 0.7 }}>
                Cabinet Dentaire
              </p>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[['Services', 'services'], ['Équipe', 'equipe'], ['Témoignages', 'temoignages'], ['Contact', 'contact']].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: BODY }}
                  onMouseEnter={e => { e.currentTarget.style.color = BLUE }}
                  onMouseLeave={e => { e.currentTarget.style.color = BODY }}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLUE_HOVER }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = BLUE }}
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO — original intact ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getImagePath('/image/image dentiste.jpg')}
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
            className="text-center max-w-4xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${BLUE}20` }}
            >
              <span className="text-sm font-semibold" style={{ color: BLUE_DARK }}>Cabinet Dentaire Professionnel</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ color: BLUE_DARK }}
            >
              Votre sourire,{' '}
              <span style={{ color: BLUE }}>notre priorité</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: BODY }}
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
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 font-semibold text-lg text-white rounded-lg shadow-lg transition-all duration-200"
                style={{ backgroundColor: BLUE }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLUE_HOVER }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = BLUE }}
              >
                Prendre rendez-vous
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="px-8 py-4 font-semibold text-lg rounded-lg border-2 transition-all duration-200"
                style={{ borderColor: BLUE, color: BLUE, backgroundColor: 'rgba(255,255,255,0.8)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLUE; (e.currentTarget as HTMLButtonElement).style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)'; (e.currentTarget as HTMLButtonElement).style.color = BLUE }}
              >
                Découvrir nos services
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{ backgroundColor: BLUE_DARK }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 py-10 gap-8">
            {[['2 400+', 'Patients suivis'], ['15 ans', 'D\'expérience'], ['98%', 'De satisfaction'], ['5', 'Spécialités']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold mb-1 text-white">{num}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24" style={{ backgroundColor: NEAR_WHITE }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: BLUE_LIGHT, color: BLUE }}
            >
              Nos soins
            </span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: BLUE_DARK }}>
              Des soins complets<br />
              <span style={{ color: BLUE, fontWeight: 400 }}>pour toute la famille</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-8 rounded-xl border-2 transition-all duration-300 cursor-default"
                style={{ backgroundColor: WHITE, borderColor: BLUE_LIGHT }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = `0 8px 30px ${BLUE}18` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = BLUE_LIGHT; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div
                  className="text-3xl font-bold mb-5"
                  style={{ color: BLUE, opacity: 0.35 }}
                >
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: BLUE_DARK }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: BODY }}>{s.desc}</p>
                <div className="mt-5 w-8 h-0.5 rounded-full" style={{ backgroundColor: BLUE }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTRE APPROCHE ── */}
      <section className="py-24" style={{ backgroundColor: WHITE }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
              style={{ minHeight: '480px' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&h=700&fit=crop"
                alt="Consultation dentaire"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ backgroundColor: BLUE_LIGHT, color: BLUE }}
              >
                Notre méthode
              </span>
              <h2 className="text-4xl font-bold mb-10 leading-tight" style={{ color: BLUE_DARK }}>
                Une prise en charge<br />
                <span style={{ color: BLUE, fontWeight: 400 }}>à votre image</span>
              </h2>
              <div className="space-y-10">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white mt-0.5"
                      style={{ backgroundColor: BLUE }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1.5" style={{ color: BLUE_DARK }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: BODY }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section id="equipe" className="py-24" style={{ backgroundColor: BLUE_LIGHT }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: WHITE, color: BLUE }}
            >
              L'équipe
            </span>
            <h2 className="text-4xl font-bold" style={{ color: BLUE_DARK }}>
              Des professionnels<br />
              <span style={{ color: BLUE, fontWeight: 400 }}>à votre service</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ backgroundColor: WHITE }}
              >
                <div className="relative h-64">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                </div>
                <div className="p-6">
                  <div
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: BLUE }}
                  >
                    {member.specialty}
                  </div>
                  <h3 className="text-lg font-bold mb-0.5" style={{ color: BLUE_DARK }}>{member.name}</h3>
                  <p className="text-xs" style={{ color: BODY }}>{member.exp} d'expérience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE TECHNOLOGIE ── */}
      <div className="relative overflow-hidden" style={{ height: '50vh', minHeight: '300px' }}>
        <Image
          src="https://images.unsplash.com/photo-1588776814546-1ffeddc3e3d7?w=1600&h=800&fit=crop"
          alt="Équipements de pointe"
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(28,58,92,0.90) 0%, rgba(28,58,92,0.55) 55%, rgba(28,58,92,0.2) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="max-w-lg"
            >
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ backgroundColor: `${BLUE}40`, color: 'rgba(255,255,255,0.9)' }}
              >
                Technologie
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-snug">
                Des équipements<br />à la hauteur de votre confiance.
              </h2>
              <div className="space-y-3">
                {['Scanner 3D & Radiologie numérique', 'Laser dentaire dernière génération', 'Protocoles certifiés & Formation continue'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: BLUE }}>
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── TÉMOIGNAGES ── */}
      <section id="temoignages" className="py-24" style={{ backgroundColor: NEAR_WHITE }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: BLUE_LIGHT, color: BLUE }}
            >
              Témoignages
            </span>
            <h2 className="text-4xl font-bold" style={{ color: BLUE_DARK }}>
              Ce que nos patients<br />
              <span style={{ color: BLUE, fontWeight: 400 }}>disent de nous</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-xl shadow-sm"
                style={{ backgroundColor: WHITE, borderTop: `3px solid ${BLUE}` }}
              >
                <div className="text-4xl font-bold mb-3 leading-none" style={{ color: BLUE, opacity: 0.3 }}>"</div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: BODY }}>
                  {t.content}
                </p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${BLUE_LIGHT}` }}>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BLUE_DARK }}>{t.name}</p>
                    <p className="text-[10px] font-semibold tracking-widest uppercase mt-0.5" style={{ color: BLUE }}>Patient vérifié</p>
                  </div>
                  <p className="text-xs" style={{ color: BODY, opacity: 0.5 }}>{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ backgroundColor: WHITE }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ backgroundColor: BLUE_LIGHT, color: BLUE }}
              >
                Questions fréquentes
              </span>
              <h2 className="text-4xl font-bold" style={{ color: BLUE_DARK }}>
                Vos questions,{' '}
                <span style={{ color: BLUE, fontWeight: 400 }}>nos réponses</span>
              </h2>
            </motion.div>

            <div>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                    style={{ borderBottom: `1px solid ${BLUE_LIGHT}`, borderTop: i === 0 ? `1px solid ${BLUE_LIGHT}` : 'none' }}
                  >
                    <span className="text-sm font-semibold pr-8" style={{ color: BLUE_DARK }}>{faq.q}</span>
                    <ChevronDown
                      className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                      style={{ color: BLUE, transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed pb-5 pt-2" style={{ color: BODY }}>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24" style={{ backgroundColor: BLUE_DARK }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ backgroundColor: `${BLUE}50`, color: 'rgba(255,255,255,0.9)' }}
            >
              Rendez-vous
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Prenez rendez-vous<br />
              <span style={{ color: BLUE, fontWeight: 400 }}>dès aujourd'hui</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Infos */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div className="mb-10">
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: BLUE }}>Téléphone</p>
                <p className="text-3xl font-bold text-white">+33 1 23 45 67 89</p>
              </div>
              <div className="space-y-6 mb-10">
                {[
                  { label: 'Adresse', val: 'Rue de la Cathédrale 7\n4000 Liège, Belgique' },
                  { label: 'Email',   val: 'contact@cabinet-dentaire.fr' },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: BLUE }}>{label}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.55)' }}>{val}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-0 rounded-xl overflow-hidden">
                {[
                  ['Lun — Ven', '09:00 – 19:00'],
                  ['Samedi',    '09:00 – 13:00'],
                  ['Dimanche',  'Fermé'],
                  ['Urgences',  '24h/24 · 7j/7'],
                ].map(([day, hours], i) => (
                  <div
                    key={day}
                    className="flex justify-between text-sm px-4 py-3"
                    style={{
                      backgroundColor: i % 2 === 0 ? 'rgba(113,163,193,0.08)' : 'rgba(113,163,193,0.04)',
                      color: hours === 'Fermé' ? 'rgba(255,255,255,0.2)' : hours.includes('24h') ? BLUE : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    <span>{day}</span>
                    <span className={hours.includes('24h') ? 'font-semibold' : ''}>{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl"
                  style={{ backgroundColor: `${BLUE}18` }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: BLUE }}>
                    <div className="w-6 h-6 border-2 border-white rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Demande envoyée !</h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Nous vous recontactons sous 24h.
                  </p>
                </motion.div>
              ) : (
                <div className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                  <h3 className="text-xl font-bold mb-6" style={{ color: BLUE_DARK }}>Formulaire de contact</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: BLUE_DARK }}>Nom</label>
                        <input
                          type="text" required value={formData.name} placeholder="Votre nom"
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                          style={{ backgroundColor: NEAR_WHITE, border: `1.5px solid ${BLUE_LIGHT}`, color: BLUE_DARK }}
                          onFocus={e => { e.currentTarget.style.borderColor = BLUE }}
                          onBlur={e => { e.currentTarget.style.borderColor = BLUE_LIGHT }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: BLUE_DARK }}>Téléphone</label>
                        <input
                          type="tel" value={formData.phone} placeholder="+33 6 00 00 00"
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                          style={{ backgroundColor: NEAR_WHITE, border: `1.5px solid ${BLUE_LIGHT}`, color: BLUE_DARK }}
                          onFocus={e => { e.currentTarget.style.borderColor = BLUE }}
                          onBlur={e => { e.currentTarget.style.borderColor = BLUE_LIGHT }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: BLUE_DARK }}>Email</label>
                      <input
                        type="email" required value={formData.email} placeholder="votre@email.com"
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                        style={{ backgroundColor: NEAR_WHITE, border: `1.5px solid ${BLUE_LIGHT}`, color: BLUE_DARK }}
                        onFocus={e => { e.currentTarget.style.borderColor = BLUE }}
                        onBlur={e => { e.currentTarget.style.borderColor = BLUE_LIGHT }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: BLUE_DARK }}>Soin souhaité</label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                        style={{ backgroundColor: NEAR_WHITE, border: `1.5px solid ${BLUE_LIGHT}`, color: formData.service ? BLUE_DARK : BODY }}
                        onFocus={e => { e.currentTarget.style.borderColor = BLUE }}
                        onBlur={e => { e.currentTarget.style.borderColor = BLUE_LIGHT }}
                      >
                        <option value="">Sélectionner un soin</option>
                        {['Soins Dentaires', 'Esthétique Dentaire', 'Urgence', 'Implantologie', 'Orthodontie'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase mb-1.5" style={{ color: BLUE_DARK }}>Message</label>
                      <textarea
                        value={formData.message} required placeholder="Décrivez votre besoin..." rows={4}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none resize-none transition-all"
                        style={{ backgroundColor: NEAR_WHITE, border: `1.5px solid ${BLUE_LIGHT}`, color: BLUE_DARK }}
                        onFocus={e => { e.currentTarget.style.borderColor = BLUE }}
                        onBlur={e => { e.currentTarget.style.borderColor = BLUE_LIGHT }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 text-sm font-bold tracking-wide text-white rounded-lg transition-all duration-200"
                      style={{ backgroundColor: BLUE }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLUE_HOVER }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = BLUE }}
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-14" style={{ backgroundColor: '#0F2540' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10 pb-10" style={{ borderBottom: `1px solid rgba(113,163,193,0.15)` }}>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: BLUE }}>Dr.</span>
                <span className="text-xl font-bold text-white">Martin & Associés</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Cabinet Dentaire</p>
              <p className="text-xs mt-4 max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Votre santé bucco-dentaire est notre priorité. Des soins modernes et personnalisés pour toute la famille.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: BLUE }}>Navigation</p>
                <div className="space-y-2">
                  {[['Services', 'services'], ['Équipe', 'equipe'], ['Témoignages', 'temoignages'], ['Contact', 'contact']].map(([label, id]) => (
                    <button key={id} onClick={() => scrollTo(id)}
                      className="block text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.4)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: BLUE }}>Contact</p>
                <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <p>+33 1 23 45 67 89</p>
                  <p>contact@cabinet-dentaire.fr</p>
                  <p className="leading-relaxed">Rue de la Cathédrale 7<br />4000 Liège</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: BLUE }}>Suivez-nous</p>
                <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {['Instagram', 'Facebook', 'LinkedIn'].map(s => <p key={s}>{s}</p>)}
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Cabinet Dentaire Martin & Associés — Tous droits réservés
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-6 w-10 h-10 rounded-full flex items-center justify-center z-50 shadow-lg transition-all duration-200"
        style={{ backgroundColor: BLUE, color: WHITE }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = BLUE_HOVER }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = BLUE }}
      >
        <ChevronUp className="w-4 h-4" />
      </button>

    </div>
  )
}

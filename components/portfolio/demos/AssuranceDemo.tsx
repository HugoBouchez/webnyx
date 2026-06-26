'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

const NAVY     = '#1B2E4B'
const GOLD     = '#B8935A'
const PEARL    = '#F4F6F9'
const WHITE    = '#FFFFFF'
const MUTED    = '#64748B'
const NAVY_DARK = '#111E30'

type Page = 'accueil' | 'pret-hypothecaire' | 'sinistres'

export default function AssuranceDemo() {
  const [activePage, setActivePage]         = useState<Page>('accueil')
  const [formData, setFormData]             = useState({ name: '', email: '', phone: '', product: '', message: '' })
  const [formSubmitted, setFormSubmitted]   = useState(false)
  const [expandedFaq, setExpandedFaq]       = useState<number | null>(null)

  // Prêt hypothécaire state
  const [pretData, setPretData]             = useState({ prenom: '', nom: '', phone: '' })
  const [pretSubmitted, setPretSubmitted]   = useState(false)
  const [montant, setMontant]               = useState(200000)
  const [duree, setDuree]                   = useState(20)
  const [taux, setTaux]                     = useState(3.5)
  const [calcDone, setCalcDone]             = useState(false)

  // Calcul mensualité
  const r = taux / 100 / 12
  const n = duree * 12
  const mensualite = r > 0 ? +(montant * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)).toFixed(2) : +(montant / n).toFixed(2)
  const totalRembourse = +(mensualite * n).toFixed(2)
  const coutTotal      = +(totalRembourse - montant).toFixed(2)

  const fmt = (v: number) => v.toLocaleString('fr-BE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

  const scrollTo = (id: string) => {
    if (activePage !== 'accueil') { setActivePage('accueil'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100) }
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => { window.scrollTo(0, 0) }, [activePage])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setFormSubmitted(true)
    setTimeout(() => { setFormSubmitted(false); setFormData({ name: '', email: '', phone: '', product: '', message: '' }) }, 4000)
  }
  const handlePretSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setPretSubmitted(true)
    setTimeout(() => { setPretSubmitted(false); setPretData({ prenom: '', nom: '', phone: '' }) }, 4000)
  }

  // ── DATA ────────────────────────────────────────────────────────────────

  const products = [
    { num: '01', title: 'Auto & Moto',      desc: 'Responsabilité civile, omnium, protection du conducteur. Tarifs négociés auprès de 12 compagnies partenaires.' },
    { num: '02', title: 'Habitation',        desc: 'Incendie, dégâts des eaux, vol, responsabilité civile. Une couverture complète pour votre logement et vos biens.' },
    { num: '03', title: 'Professionnels',    desc: 'RC professionnelle, protection juridique, matériel, véhicules utilitaires. Des solutions sur mesure pour votre activité.' },
    { num: '04', title: 'Hospitalisation',   desc: 'Frais médicaux, chambre particulière, transport, rapatriement. Vous et votre famille protégés en toutes circonstances.' },
    { num: '05', title: 'Assurance Vie',     desc: "Épargne-pension, capital décès, assurance solde restant dû. Préparez l'avenir et protégez vos proches." },
    { num: '06', title: 'Prêt Hypothécaire', desc: 'Simulation gratuite, comparaison des meilleures offres bancaires. Nous négocions pour vous les conditions les plus avantageuses.', action: () => setActivePage('pret-hypothecaire') },
  ]

  const steps = [
    { num: '01', title: 'Demande en ligne',      desc: 'Remplissez notre formulaire en 2 minutes. Choisissez votre produit, renseignez vos besoins. Aucun engagement, aucune pression.' },
    { num: '02', title: 'Analyse & comparaison', desc: 'Nos courtiers comparent les offres de 12 assureurs partenaires et sélectionnent la solution la plus adaptée à votre profil.' },
    { num: '03', title: 'Devis personnalisé',    desc: "Vous recevez un devis clair et détaillé sous 24h. Nos conseillers restent disponibles pour vous accompagner jusqu'à la signature." },
  ]

  const reasons = [
    { num: '01', title: 'Courtier indépendant',       desc: 'Nous ne sommes liés à aucune compagnie. Notre seul objectif : vous trouver la meilleure offre au meilleur prix.' },
    { num: '02', title: '12 assureurs partenaires',   desc: 'Un réseau solide de compagnies de premier rang pour couvrir tous vos besoins, particuliers comme professionnels.' },
    { num: '03', title: 'Gestion des sinistres',      desc: "En cas de sinistre, nous vous représentons auprès de l'assureur. Vous n'êtes jamais seul face aux démarches." },
    { num: '04', title: 'Conseil sur mesure',         desc: 'Chaque client est unique. Nos conseillers prennent le temps de comprendre votre situation avant de vous proposer une solution.' },
  ]

  const testimonials = [
    { name: 'Frédéric Loffet', role: 'Particulier',      content: "Très bon accueil, équipe à l'écoute et de très bons conseils. J'ai enfin trouvé une assurance auto qui corresponde vraiment à mes besoins." },
    { name: 'Marie Dubois',    role: "Chef d'entreprise", content: 'Service exceptionnel pour la couverture de mon cabinet. Réactifs, professionnels et toujours disponibles. Je recommande sans hésitation.' },
    { name: 'Pierre Martin',   role: 'Particulier',       content: "Grâce à leur expertise, j'ai économisé plus de 30% sur mon assurance habitation tout en bénéficiant d'une meilleure couverture." },
  ]

  const partners = ['Allianz', 'AXA', 'Bâloise', 'AG Insurance', 'Ethias', 'ING', 'Belfius', 'KBC']

  const faqs = [
    { q: 'Vos services de courtage sont-ils payants ?',   a: "Non. En tant que courtier indépendant, notre rémunération provient d'une commission versée par les compagnies d'assurance. Nos conseils et services sont entièrement gratuits pour vous." },
    { q: 'Combien de temps pour recevoir un devis ?',     a: 'Sous 24 heures ouvrables après réception de votre demande. Pour les dossiers simples (auto, habitation), nous pouvons souvent vous rappeler dans la journée.' },
    { q: "Que se passe-t-il en cas de sinistre ?",        a: "Vous nous contactez directement. Nous prenons en charge la déclaration et les négociations avec l'assureur. Vous n'avez pas à gérer les démarches administratives seul." },
    { q: 'Vous travaillez avec quelles compagnies ?',     a: "Nous collaborons avec plus de 12 compagnies : Allianz, AXA, Bâloise, AG Insurance, Ethias, ING, Belfius, KBC et d'autres. Cette diversité nous permet de vous trouver la meilleure offre." },
    { q: 'Puis-je transférer mes contrats existants ?',   a: "Oui. Nous analysons vos contrats actuels et vous proposons une solution plus avantageuse si elle existe. La résiliation de l'ancien contrat peut être gérée par nos soins." },
  ]

  // ── NAV ITEMS ───────────────────────────────────────────────────────────

  const navItems: [string, string, (() => void)][] = [
    ['Solutions',         'solutions',        () => scrollTo('solutions')],
    ['Méthode',           'methode',          () => scrollTo('methode')],
    ['Prêt Hypothécaire', 'pret-hypothecaire',() => setActivePage('pret-hypothecaire')],
    ['Sinistres',         'sinistres',        () => setActivePage('sinistres')],
    ['Contact',           'contact',          () => scrollTo('contact')],
  ]

  // ── SHARED HEADER ───────────────────────────────────────────────────────

  const Header = () => (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'rgba(255,255,255,0.97)', borderBottom: `1px solid ${PEARL}`, backdropFilter: 'blur(8px)' }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => setActivePage('accueil')} className="flex items-baseline gap-2.5">
            <span className="text-2xl font-bold tracking-tight" style={{ color: NAVY }}>Axiom</span>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>Assurances</span>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(([label, id, action]) => (
              <button key={id} onClick={action}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: (activePage === id || (activePage === 'accueil' && id === 'solutions')) ? NAVY : MUTED, fontWeight: activePage === id ? 600 : 400 }}
                onMouseEnter={e => { e.currentTarget.style.color = NAVY }}
                onMouseLeave={e => { e.currentTarget.style.color = activePage === id ? NAVY : MUTED }}
              >
                {label}
              </button>
            ))}
          </nav>
          <button onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
            style={{ backgroundColor: NAVY }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = GOLD }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = NAVY }}
          >
            Demander un devis
          </button>
        </div>
      </div>
    </header>
  )

  // ── SHARED FOOTER ───────────────────────────────────────────────────────

  const Footer = () => (
    <footer className="py-14" style={{ backgroundColor: NAVY_DARK }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <div className="flex items-baseline gap-2.5 mb-1">
              <span className="text-xl font-bold text-white">Axiom</span>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>Assurances</span>
            </div>
            <p className="text-xs mt-3 max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Cabinet de courtage indépendant depuis 2005. Votre partenaire de confiance pour tous vos besoins d'assurance et de financement.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Navigation</p>
              <div className="space-y-2">
                {[['Accueil', 'accueil'], ['Prêt Hypothécaire', 'pret-hypothecaire'], ['Sinistres', 'sinistres']].map(([label, id]) => (
                  <button key={id} onClick={() => setActivePage(id as Page)}
                    className="block text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.35)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Contact</p>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <p>+32 1 23 45 67 89</p>
                <p>contact@axiom-assurances.be</p>
                <p className="leading-relaxed">Rue de la Cathédrale 7<br />4000 Liège</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>Légal</p>
              <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {['Mentions légales', 'Confidentialité', 'Agréments FSMA'].map(s => <p key={s}>{s}</p>)}
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>
          © {new Date().getFullYear()} Axiom Assurances — Cabinet de courtage agréé FSMA · Tous droits réservés
        </p>
      </div>
    </footer>
  )

  // ── PAGE PRÊT HYPOTHÉCAIRE ───────────────────────────────────────────────

  const PagePret = () => (
    <div className="min-h-screen" style={{ backgroundColor: WHITE }}>
      <Header />

      {/* Hero page */}
      <section className="pt-20" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <button onClick={() => setActivePage('accueil')} className="text-xs font-semibold tracking-widest uppercase mb-8 flex items-center gap-2 transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.color = GOLD }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
            ← Retour à l'accueil
          </button>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Prêt Hypothécaire</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Votre projet immobilier<br />
            <span style={{ color: GOLD, fontWeight: 400 }}>en toute simplicité.</span>
          </h1>
          <p className="mt-5 text-sm max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Simulation gratuite et sans engagement. Nous comparons les offres de 8 banques partenaires pour vous obtenir le meilleur taux.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16" style={{ backgroundColor: PEARL }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* Calculateur */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
              <h2 className="text-xl font-bold mb-1" style={{ color: NAVY }}>Simulateur de mensualité</h2>
              <p className="text-sm mb-8" style={{ color: MUTED }}>Ajustez les paramètres pour estimer votre mensualité en temps réel.</p>

              <div className="space-y-7">
                {/* Montant */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold tracking-wide uppercase" style={{ color: NAVY }}>Montant emprunté</label>
                    <span className="text-lg font-bold" style={{ color: GOLD }}>{fmt(montant)}</span>
                  </div>
                  <input type="range" min={50000} max={1000000} step={5000} value={montant}
                    onChange={e => { setMontant(Number(e.target.value)); setCalcDone(true) }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${(montant - 50000) / 9500}%, ${PEARL} ${(montant - 50000) / 9500}%, ${PEARL} 100%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: MUTED }}>
                    <span>50 000 €</span><span>1 000 000 €</span>
                  </div>
                </div>

                {/* Durée */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold tracking-wide uppercase" style={{ color: NAVY }}>Durée du prêt</label>
                    <span className="text-lg font-bold" style={{ color: GOLD }}>{duree} ans</span>
                  </div>
                  <input type="range" min={5} max={30} step={1} value={duree}
                    onChange={e => { setDuree(Number(e.target.value)); setCalcDone(true) }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${(duree - 5) / 25 * 100}%, ${PEARL} ${(duree - 5) / 25 * 100}%, ${PEARL} 100%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: MUTED }}>
                    <span>5 ans</span><span>30 ans</span>
                  </div>
                </div>

                {/* Taux */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold tracking-wide uppercase" style={{ color: NAVY }}>Taux d'intérêt annuel</label>
                    <span className="text-lg font-bold" style={{ color: GOLD }}>{taux.toFixed(1)} %</span>
                  </div>
                  <input type="range" min={1} max={8} step={0.1} value={taux}
                    onChange={e => { setTaux(Number(e.target.value)); setCalcDone(true) }}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${(taux - 1) / 7 * 100}%, ${PEARL} ${(taux - 1) / 7 * 100}%, ${PEARL} 100%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: MUTED }}>
                    <span>1 %</span><span>8 %</span>
                  </div>
                </div>
              </div>

              {/* Résultats */}
              <div className="mt-8 rounded-xl p-6" style={{ backgroundColor: NAVY }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Résultats de la simulation</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold" style={{ color: GOLD }}>{fmt(mensualite)}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>/ mois</p>
                  </div>
                  <div className="text-center" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="text-2xl font-bold text-white">{fmt(totalRembourse)}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Total remboursé</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{fmt(coutTotal)}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Coût du crédit</p>
                  </div>
                </div>
                <p className="text-xs mt-4 text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  Simulation indicative · Taux susceptibles de varier
                </p>
              </div>

              <button onClick={() => document.getElementById('pret-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-5 w-full py-4 text-sm font-bold text-white rounded-lg transition-all duration-200"
                style={{ backgroundColor: GOLD }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#A07840' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = GOLD }}
              >
                Obtenir un vrai devis personnalisé →
              </button>
            </motion.div>

            {/* Formulaire de contact + infos */}
            <div className="space-y-6">
              {/* Avantages */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                <h3 className="text-base font-bold mb-5" style={{ color: NAVY }}>Pourquoi passer par un courtier ?</h3>
                <div className="space-y-4">
                  {[
                    ['Gratuit', "Notre rémunération provient des banques, pas de vous."],
                    ['Multi-banques', "Accès aux offres de 8 banques en une seule démarche."],
                    ['Meilleur taux', "Nous négocions pour vous les conditions les plus avantageuses."],
                    ['Accompagnement', "De la simulation jusqu'à la signature chez le notaire."],
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: GOLD }}>
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold" style={{ color: NAVY }}>{title}</p>
                        <p className="text-sm" style={{ color: MUTED }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Formulaire */}
              <motion.div id="pret-form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                <h3 className="text-base font-bold mb-1" style={{ color: NAVY }}>Informations de contact</h3>
                <p className="text-sm mb-6" style={{ color: MUTED }}>Un conseiller vous recontacte sous 24h avec une offre personnalisée.</p>

                {pretSubmitted ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 rounded-xl"
                    style={{ backgroundColor: PEARL }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: GOLD }}>
                      <div className="w-4 h-4 border-2 border-white rounded-full" />
                    </div>
                    <p className="font-bold text-lg mb-1" style={{ color: NAVY }}>Demande envoyée !</p>
                    <p className="text-sm" style={{ color: MUTED }}>Nous vous recontactons sous 24h.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handlePretSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>Prénom *</label>
                        <input type="text" required value={pretData.prenom} placeholder="Jean"
                          onChange={e => setPretData({ ...pretData, prenom: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                          style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: NAVY }}
                          onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                          onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>Nom *</label>
                        <input type="text" required value={pretData.nom} placeholder="Dupont"
                          onChange={e => setPretData({ ...pretData, nom: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                          style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: NAVY }}
                          onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                          onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>Téléphone *</label>
                      <input type="tel" required value={pretData.phone} placeholder="+32 4 00 00 00"
                        onChange={e => setPretData({ ...pretData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                        style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: NAVY }}
                        onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}
                      />
                    </div>
                    <div className="rounded-xl p-4" style={{ backgroundColor: PEARL }}>
                      <p className="text-xs font-bold mb-1" style={{ color: NAVY }}>Votre simulation</p>
                      <p className="text-xs" style={{ color: MUTED }}>
                        {fmt(montant)} · {duree} ans · {taux.toFixed(1)}% → <strong style={{ color: NAVY }}>{fmt(mensualite)}/mois</strong>
                      </p>
                    </div>
                    <button type="submit"
                      className="w-full py-4 text-sm font-bold text-white rounded-lg transition-all duration-200"
                      style={{ backgroundColor: NAVY }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = GOLD }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = NAVY }}
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )

  // ── PAGE SINISTRES ───────────────────────────────────────────────────────

  const PageSinistres = () => (
    <div className="min-h-screen" style={{ backgroundColor: WHITE }}>
      <Header />

      {/* Hero page */}
      <section className="pt-20" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <button onClick={() => setActivePage('accueil')} className="text-xs font-semibold tracking-widest uppercase mb-8 flex items-center gap-2 transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.color = GOLD }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
            ← Retour à l'accueil
          </button>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Gestion des sinistres</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Nos experts à vos côtés<br />
            <span style={{ color: GOLD, fontWeight: 400 }}>en cas de sinistre.</span>
          </h1>
          <p className="mt-5 text-sm max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Nous gérons tous les sinistres et participons à toutes les expertises requises — incendie, dégâts des eaux, vol, accidents et plus.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16" style={{ backgroundColor: PEARL }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">

            {/* Infos + étapes */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                <h2 className="text-xl font-bold mb-6" style={{ color: NAVY }}>En cas de sinistre, contactez-nous</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-5 p-5 rounded-xl" style={{ backgroundColor: PEARL }}>
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: GOLD }}>
                      <div className="w-3 h-3 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: GOLD }}>Téléphone — Urgence</p>
                      <p className="text-2xl font-bold" style={{ color: NAVY }}>+32 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-5 rounded-xl" style={{ backgroundColor: PEARL }}>
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: NAVY }}>
                      <div className="w-3 h-3 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: MUTED }}>Email sinistres</p>
                      <p className="text-base font-semibold" style={{ color: NAVY }}>sinistres@axiom-assurances.be</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 rounded-xl overflow-hidden">
                  {[['Lun — Ven', '09:00 – 18:00'], ['Samedi', '09:00 – 13:00'], ['Dimanche', 'Fermé']].map(([d, h], i) => (
                    <div key={d} className="flex justify-between text-sm px-4 py-3"
                      style={{ backgroundColor: i % 2 === 0 ? PEARL : WHITE, color: h === 'Fermé' ? '#CBD5E1' : MUTED }}>
                      <span>{d}</span><span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Étapes */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                <h3 className="text-base font-bold mb-6" style={{ color: NAVY }}>Comment ça se passe ?</h3>
                <div className="space-y-6">
                  {[
                    ['01', 'Vous nous contactez', "Par téléphone ou email, dès que le sinistre survient. Disponibles du lundi au samedi."],
                    ['02', 'Déclaration & expertise', "Nous prenons en charge la déclaration auprès de l'assureur et participons à l'expertise si nécessaire."],
                    ['03', 'Suivi & indemnisation', "Un conseiller dédié suit votre dossier et négocie votre indemnisation. Vous êtes informé à chaque étape."],
                  ].map(([num, title, desc]) => (
                    <div key={num} className="flex gap-5">
                      <span className="text-3xl font-bold flex-shrink-0 leading-none" style={{ color: GOLD, opacity: 0.35 }}>{num}</span>
                      <div style={{ borderLeft: `2px solid ${PEARL}`, paddingLeft: '1.25rem' }}>
                        <p className="text-sm font-bold mb-1" style={{ color: NAVY }}>{title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Image + types de sinistres */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-xl" style={{ minHeight: '300px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
                  alt="Gestion de sinistres"
                  fill className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,30,48,0.85) 0%, transparent 55%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: GOLD }}>Notre engagement</p>
                  <p className="text-lg font-bold text-white">Vous n'êtes jamais seul<br />face à votre assureur.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                <h3 className="text-base font-bold mb-5" style={{ color: NAVY }}>Types de sinistres gérés</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Incendie', 'Dégâts des eaux', 'Vol & cambriolage', 'Accident auto', 'Tempête & grêle', 'Bris de glace', 'Responsabilité civile', 'Dommages corporels'].map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: MUTED }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                      {s}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-2xl p-6 flex items-center gap-5"
                style={{ backgroundColor: NAVY }}>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: GOLD }}>Conseil urgent ?</p>
                  <p className="text-white font-bold">Appelez directement</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>+32 1 23 45 67 89</p>
                </div>
                <button onClick={() => scrollTo('contact')}
                  className="ml-auto px-5 py-2.5 text-xs font-bold text-white rounded-lg transition-all duration-200 flex-shrink-0"
                  style={{ backgroundColor: GOLD }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#A07840' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = GOLD }}
                >
                  Nous écrire
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )

  // ── PAGE ACCUEIL ─────────────────────────────────────────────────────────

  const PageAccueil = () => (
    <div className="min-h-screen" style={{ backgroundColor: WHITE }}>
      <Header />

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={getImagePath('/image/Image assurance.jpg')} alt="Cabinet Axiom Assurances" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(27,46,75,0.93) 0%, rgba(27,46,75,0.80) 45%, rgba(27,46,75,0.35) 100%)' }} />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: GOLD }}>Courtier indépendant depuis 2005</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
              Protéger ce<br />qui compte.<br />
              <span style={{ color: GOLD }}>Avec les meilleurs.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Cabinet de courtage indépendant, nous comparons les offres de 12 assureurs pour vous trouver la solution la plus adaptée — sans frais, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo('contact')}
                className="px-8 py-4 text-sm font-bold text-white rounded-lg transition-all duration-200"
                style={{ backgroundColor: GOLD }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#A07840' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = GOLD }}>
                Obtenir un devis gratuit
              </button>
              <button onClick={() => scrollTo('solutions')}
                className="px-8 py-4 text-sm font-bold rounded-lg border transition-all duration-200"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)', backgroundColor: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)' }}>
                Nos solutions
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-10 animate-pulse" style={{ background: `linear-gradient(to bottom, transparent, ${GOLD})` }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
        </div>
      </section>

      {/* Stats */}
      <div style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 py-10 gap-8">
            {[['800+', 'Clients accompagnés'], ['20 ans', "D'expérience"], ['12', 'Assureurs partenaires'], ['24h', 'Pour votre devis']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: GOLD }}>{num}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.40)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <section id="solutions" className="py-24" style={{ backgroundColor: PEARL }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Nos solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: NAVY }}>
              Une couverture complète<br /><span style={{ color: MUTED, fontWeight: 400 }}>pour chaque besoin.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-8 rounded-xl border-2 transition-all duration-300 cursor-default"
                style={{ backgroundColor: WHITE, borderColor: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.boxShadow = `0 8px 30px rgba(27,46,75,0.10)` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}>
                <div className="text-4xl font-bold mb-5 leading-none" style={{ color: GOLD, opacity: 0.45 }}>{p.num}</div>
                <h3 className="text-lg font-bold mb-2.5" style={{ color: NAVY }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{p.desc}</p>
                <button onClick={p.action ?? (() => scrollTo('contact'))}
                  className="mt-5 text-xs font-bold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: GOLD }}
                  onMouseEnter={e => { e.currentTarget.style.color = NAVY }}
                  onMouseLeave={e => { e.currentTarget.style.color = GOLD }}>
                  {p.action ? 'Simuler mon prêt →' : 'Demander un devis →'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="py-24" style={{ backgroundColor: WHITE }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Notre méthode</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12" style={{ color: NAVY }}>
                Simple, rapide,<br /><span style={{ color: MUTED, fontWeight: 400 }}>sans engagement.</span>
              </h2>
              <div className="space-y-10">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-7">
                    <div className="text-4xl font-bold flex-shrink-0 leading-none mt-0.5" style={{ color: GOLD, opacity: 0.5, minWidth: '3rem' }}>{step.num}</div>
                    <div style={{ borderLeft: `2px solid ${PEARL}`, paddingLeft: '1.5rem' }}>
                      <h3 className="text-base font-bold mb-1.5" style={{ color: NAVY }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl shadow-xl" style={{ minHeight: '520px' }}>
              <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=700&fit=crop" alt="Conseil en assurance" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,46,75,0.75) 0%, transparent 55%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm font-semibold text-white/60 mb-1 tracking-widest uppercase">Notre promesse</p>
                <p className="text-xl font-bold text-white leading-snug">Un devis personnalisé<br />sous 24 heures ouvrables.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-24" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Pourquoi nous choisir</span>
              <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              L'indépendance au service<br /><span style={{ color: GOLD, fontWeight: 400 }}>de vos intérêts.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.07)' }}>
                <div className="text-3xl font-bold mb-4 leading-none" style={{ color: GOLD, opacity: 0.5 }}>{r.num}</div>
                <h3 className="text-base font-bold mb-2 text-white">{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* CTA sinistres */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl p-6"
            style={{ backgroundColor: 'rgba(184,147,90,0.12)', border: `1.5px solid rgba(184,147,90,0.25)` }}>
            <div>
              <p className="text-white font-bold mb-0.5">Vous avez un sinistre à déclarer ?</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Notre équipe est disponible lundi–vendredi 9h–18h.</p>
            </div>
            <button onClick={() => setActivePage('sinistres')}
              className="px-6 py-3 text-sm font-bold text-white rounded-lg transition-all duration-200 flex-shrink-0"
              style={{ backgroundColor: GOLD }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#A07840' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = GOLD }}>
              Déclarer un sinistre →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Panoramique */}
      <div className="relative overflow-hidden" style={{ height: '45vh', minHeight: '260px' }}>
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=600&fit=crop" alt="Bureau professionnel Axiom" fill className="object-cover object-center" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(27,46,75,0.72)' }}>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center px-6">
            <p className="text-4xl md:text-5xl font-bold text-white mb-3">Fondé en 2005.</p>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>20 ans d'expertise au service de 800+ clients particuliers et professionnels.</p>
          </motion.div>
        </div>
      </div>

      {/* Témoignages */}
      <section id="temoignages" className="py-24" style={{ backgroundColor: PEARL }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Témoignages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: NAVY }}>
              800+ clients nous font confiance.<br /><span style={{ color: MUTED, fontWeight: 400 }}>Voici ce qu'ils en disent.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-xl shadow-sm"
                style={{ backgroundColor: WHITE, borderTop: `3px solid ${GOLD}` }}>
                <div className="text-4xl font-bold mb-3 leading-none" style={{ color: NAVY, opacity: 0.1 }}>"</div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: MUTED }}>{t.content}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${PEARL}` }}>
                  <div>
                    <p className="text-sm font-bold" style={{ color: NAVY }}>{t.name}</p>
                    <p className="text-xs font-semibold tracking-widest uppercase mt-0.5" style={{ color: GOLD }}>{t.role}</p>
                  </div>
                  <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: PEARL, color: MUTED }}>Client vérifié</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16" style={{ backgroundColor: WHITE }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Nos compagnies partenaires</span>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {partners.map((name, i) => (
              <motion.span key={name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-sm font-bold tracking-wider uppercase cursor-default transition-colors duration-200"
                style={{ color: '#C0C8D2' }}
                onMouseEnter={e => { e.currentTarget.style.color = NAVY }}
                onMouseLeave={e => { e.currentTarget.style.color = '#C0C8D2' }}>
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: PEARL }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>FAQ</span>
              </div>
              <h2 className="text-4xl font-bold" style={{ color: NAVY }}>
                Vos questions,<br /><span style={{ color: MUTED, fontWeight: 400 }}>nos réponses.</span>
              </h2>
            </motion.div>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  style={{ borderBottom: '1px solid rgba(27,46,75,0.12)', borderTop: i === 0 ? '1px solid rgba(27,46,75,0.12)' : 'none' }}>
                  <span className="text-sm font-semibold pr-8" style={{ color: NAVY }}>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                    style={{ color: GOLD, transform: expandedFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="text-sm leading-relaxed pb-5 pt-2" style={{ color: MUTED }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ backgroundColor: GOLD }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>Demande de devis</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Un conseiller vous<br /><span style={{ color: GOLD, fontWeight: 400 }}>rappelle sous 24h.</span>
              </h2>
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: GOLD }}>Téléphone</p>
                  <p className="text-2xl font-bold text-white">+32 1 23 45 67 89</p>
                </div>
                {[['Email', 'contact@axiom-assurances.be'], ['Adresse', 'Rue de la Cathédrale 7\n4000 Liège, Belgique']].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: GOLD }}>{label}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.45)' }}>{val}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl overflow-hidden">
                {[['Lun — Ven', '09:00 – 18:00'], ['Samedi', '09:00 – 13:00'], ['Dimanche', 'Fermé']].map(([day, hours], i) => (
                  <div key={day} className="flex justify-between text-sm px-4 py-3"
                    style={{ backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)', color: hours === 'Fermé' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.55)' }}>
                    <span>{day}</span><span>{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {formSubmitted ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl"
                  style={{ backgroundColor: 'rgba(184,147,90,0.12)', border: '1.5px solid rgba(184,147,90,0.25)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: GOLD }}>
                    <div className="w-5 h-5 border-2 border-white rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Demande envoyée !</h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Un conseiller vous contacte sous 24 heures ouvrables.</p>
                </motion.div>
              ) : (
                <div className="rounded-2xl p-8" style={{ backgroundColor: WHITE }}>
                  <h3 className="text-xl font-bold mb-6" style={{ color: NAVY }}>Votre demande de devis</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>Nom & prénom</label>
                      <input type="text" required value={formData.name} placeholder="Jean Dupont"
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                        style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: NAVY }}
                        onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[['Email', 'email', 'email', 'jean@email.com'], ['Téléphone', 'phone', 'tel', '+32 4 00 00 00']].map(([label, key, type, ph]) => (
                        <div key={key}>
                          <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>{label}</label>
                          <input type={type} value={(formData as any)[key]} placeholder={ph}
                            onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                            className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                            style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: NAVY }}
                            onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                            onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>Produit souhaité</label>
                      <select value={formData.product} onChange={e => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all"
                        style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: formData.product ? NAVY : MUTED }}
                        onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}>
                        <option value="">Sélectionner un produit</option>
                        {products.map(p => <option key={p.num} value={p.title}>{p.title}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wide uppercase mb-1.5" style={{ color: NAVY }}>Message</label>
                      <textarea value={formData.message} required placeholder="Décrivez votre besoin..." rows={4}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none resize-none transition-all"
                        style={{ backgroundColor: PEARL, border: '1.5px solid transparent', color: NAVY }}
                        onFocus={e => { e.currentTarget.style.borderColor = NAVY }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'transparent' }}
                      />
                    </div>
                    <button type="submit"
                      className="w-full py-4 text-sm font-bold tracking-wide text-white rounded-lg transition-all duration-200"
                      style={{ backgroundColor: NAVY }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = GOLD }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = NAVY }}>
                      Envoyer ma demande
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-6 w-10 h-10 rounded-full flex items-center justify-center z-50 shadow-lg transition-all duration-200"
        style={{ backgroundColor: GOLD }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#A07840' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = GOLD }}>
        <ChevronUp className="w-4 h-4 text-white" />
      </button>
    </div>
  )

  // ── RENDER ───────────────────────────────────────────────────────────────

  if (activePage === 'pret-hypothecaire') return <PagePret />
  if (activePage === 'sinistres')         return <PageSinistres />
  return <PageAccueil />
}

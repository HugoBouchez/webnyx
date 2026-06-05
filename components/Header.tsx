'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Services & Prix', href: '/services' },
  { name: 'Réalisations', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || pathname !== '/'
          ? 'bg-[#1E3A5F] shadow-[0_4px_32px_rgba(0,0,0,0.35)]'
          : 'bg-gradient-to-b from-black/55 to-transparent'
      }`}
    >
      {/* Filet or en bas — visible seulement au scroll */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-[#C9A96E]/35 transition-opacity duration-500 ${isScrolled || pathname !== '/' ? 'opacity-100' : 'opacity-0'}`} />

      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 border border-[#C9A96E]/55 flex items-center justify-center">
              <span className="font-display text-[#C9A96E] font-light text-xl italic leading-none">W</span>
            </div>
            <span className="font-display text-white font-light text-[1.35rem] tracking-wide leading-none">
              Webnyx
            </span>
          </Link>

          {/* Nav Desktop */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 text-[15px] font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#C9A96E]'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-5 right-5 h-px bg-[#C9A96E]"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Changer le thème"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Link href="/contact">
              <button className="px-5 py-2 border border-[#C9A96E]/55 text-[#C9A96E] text-[15px] font-semibold hover:bg-[#C9A96E] hover:text-[#1E3A5F] transition-all duration-200">
                Devis gratuit
              </button>
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/45 hover:text-white transition-colors"
              aria-label="Thème"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#1E3A5F] border-t border-[#C9A96E]/20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 text-sm font-medium border-b border-white/8 transition-colors ${
                      isActive
                        ? 'text-[#C9A96E]'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 py-2.5 border border-[#C9A96E]/55 text-[#C9A96E] text-sm font-semibold text-center hover:bg-[#C9A96E] hover:text-[#1E3A5F] transition-all duration-200"
              >
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

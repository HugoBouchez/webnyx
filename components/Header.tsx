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
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-dark border-b border-gray-100 dark:border-gray-800/60 shadow-sm'
          : 'bg-white dark:bg-dark'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">W</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-[15px] tracking-tight">
              Webnyx
            </span>
          </Link>

          {/* Nav Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-label="Changer le thème"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Link href="/contact">
              <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-md transition-colors duration-150">
                Devis gratuit
              </button>
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Thème"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-dark"
          >
            <div className="container mx-auto px-6 py-3 flex flex-col gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 py-2.5 px-3 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-md text-center transition-colors"
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

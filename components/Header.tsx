'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Mes réalisations', href: '/portfolio' },
  { name: 'Prix & Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-dark shadow-lg border-b border-gray-200 dark:border-gray-800'
          : 'bg-white/95 dark:bg-dark/95 backdrop-blur-xl shadow-md border-b border-gray-200/50 dark:border-gray-800/50'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  Webnyx
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Expert
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center space-x-1 bg-white/80 dark:bg-dark/80 backdrop-blur-md rounded-xl px-2 py-1 border border-gray-200 dark:border-gray-700 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-accent transition-colors font-semibold text-sm rounded-lg"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="block"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Actions - Right */}
          <div className="hidden md:flex items-center justify-end space-x-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              ) : (
                <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              )}
            </motion.button>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm whitespace-nowrap"
              >
                Demander un devis
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button - Right */}
          <div className="md:hidden col-start-3 flex items-center justify-end space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              ) : (
                <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-semibold"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-center mt-4 shadow-lg"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

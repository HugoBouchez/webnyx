'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  content: {
    title: string
    description: string
    details: string[]
  }
}

export default function ServiceModal({
  isOpen,
  onClose,
  content,
}: ServiceModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-xl bg-white dark:bg-dark rounded-2xl shadow-2xl pointer-events-auto max-h-[88vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-primary px-7 pt-7 pb-6 flex-shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-5 h-px bg-[#C9A96E]" />
                      <span className="text-[#C9A96E] text-[10px] font-semibold tracking-[0.2em] uppercase">Service</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-light text-white leading-tight">
                      {content.title}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors mt-1"
                    aria-label="Fermer"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mt-4">
                  {content.description}
                </p>
              </div>

              {/* Content */}
              <div className="px-7 py-6 overflow-y-auto flex-1">
                <ul className="space-y-4">
                  {content.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#C9A96E] mt-2.5" />
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {detail}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-7 pb-7 pt-4 border-t border-gray-100 dark:border-gray-800 flex-shrink-0">
                <Link href="/contact" onClick={onClose}>
                  <button className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                    Demander un devis gratuit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

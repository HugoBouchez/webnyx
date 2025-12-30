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
  title,
  icon: Icon,
  color,
  content,
}: ServiceModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none pt-20 sm:pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl bg-white dark:bg-dark-light rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className={`relative bg-gradient-to-br ${color} p-5 sm:p-6 md:p-8 pb-4 sm:pb-5 md:pb-6`}>
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 group"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>

                {/* Icon and Title */}
                <div className="flex items-start space-x-3 sm:space-x-4 pr-10 sm:pr-12">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                      {content.title}
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="space-y-4 sm:space-y-6">
                  {/* Details List */}
                  <div className="space-y-3 sm:space-y-4">
                    {content.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start space-x-3 sm:space-x-4"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mt-0.5`}>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
                          {detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with CTA */}
              <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link href="/contact" onClick={onClose}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${color} text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 group`}
                  >
                    <span>Demander un devis gratuit</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}


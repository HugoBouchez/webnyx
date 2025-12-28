'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DemoHeader() {
  return (
    <>
      {/* Bannière fixe en bas de l'écran */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary/95 dark:bg-primary/90 border-t border-primary/20 dark:border-accent/20 py-3 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-center md:text-left text-sm md:text-base font-medium text-white">
              ⚠️ Cette démonstration est à des fins de présentation uniquement. Les interactions sont limitées.
            </p>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white text-dark rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm flex items-center space-x-2 whitespace-nowrap"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Retour au portfolio</span>
                <span className="sm:hidden">Retour</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


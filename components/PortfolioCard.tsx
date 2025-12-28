'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  slug?: string
  url?: string
  index: number
}

export default function PortfolioCard({
  title,
  description,
  image,
  slug,
  url,
  index,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-light shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {slug ? (
            <Link href={`/portfolio/demo/${slug}`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-white text-dark rounded-lg font-semibold flex items-center space-x-2 shadow-xl"
              >
                <span>Voir le site</span>
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </Link>
          ) : url ? (
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-white text-dark rounded-lg font-semibold flex items-center space-x-2 shadow-xl"
            >
              <span>Voir le site</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          ) : null}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}


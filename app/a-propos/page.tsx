'use client'

import { motion } from 'framer-motion'
import { Code, Heart, Target, Award } from 'lucide-react'
import Image from 'next/image'

// Metadata moved to layout or handled via head

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              À Propos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionné par le web et la création de sites modernes qui font la différence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Mon Parcours
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  Développeur freelance passionné, je me spécialise dans la création de sites web modernes,
                  performants et optimisés pour la conversion. Avec plusieurs années d'expérience dans le
                  développement web, j'ai accompagné de nombreux clients dans leur transformation digitale.
                </p>
                <p>
                  Mon approche combine expertise technique et sens du design pour créer des sites web qui
                  non seulement impressionnent visuellement, mais qui génèrent également des résultats
                  concrets pour votre entreprise.
                </p>
                <p>
                  Je crois en un travail de qualité, une communication transparente et des solutions
                  sur-mesure adaptées à chaque projet unique.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Développeur web"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: 'Expertise Technique',
                description: 'Maîtrise des dernières technologies web pour des sites performants.',
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Une véritable passion pour créer des expériences web exceptionnelles.',
              },
              {
                icon: Target,
                title: 'Résultats',
                description: 'Focus sur les résultats et l\'optimisation de la conversion.',
              },
              {
                icon: Award,
                title: 'Qualité',
                description: 'Engagement envers l\'excellence et la satisfaction client.',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Prêt à travailler ensemble ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Me contacter
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


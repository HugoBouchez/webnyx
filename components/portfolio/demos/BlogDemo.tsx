'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, categories, popularPosts } from '@/lib/demo-data/blog-data'

export default function BlogDemo() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      {/* Header */}
      <header className="bg-white dark:bg-dark-light border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-gray-900 dark:text-white" />
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                Blog Professionnel
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <span className="text-gray-600 dark:text-gray-400 cursor-not-allowed font-medium" title="Lien désactivé (démo)">
                Accueil
              </span>
              <span className="text-gray-600 dark:text-gray-400 cursor-not-allowed font-medium" title="Lien désactivé (démo)">
                Articles
              </span>
              <span className="text-gray-600 dark:text-gray-400 cursor-not-allowed font-medium" title="Lien désactivé (démo)">
                À propos
              </span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white dark:bg-dark-light border-b border-gray-200 dark:border-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">
              Articles & Actualités
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Découvrez nos articles sur le design, le développement web et les tendances digitales. 
              Des contenus de qualité pour vous tenir informé des dernières innovations.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-14 pr-5 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Main Articles */}
            <div className="lg:col-span-3">
              {/* Categories */}
              <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-200 dark:border-gray-800">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentPage(1)
                    }}
                    className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md'
                        : 'bg-white dark:bg-dark-light text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="bg-white dark:bg-dark-light rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex items-center space-x-5 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center space-x-1.5">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </span>
                        <span className="flex items-center space-x-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min de lecture</span>
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed line-clamp-3 text-base">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                        <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-semibold uppercase tracking-wide">
                          {post.category}
                        </span>
                        <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
                          <span>Lire l'article</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 pt-8 border-t border-gray-200 dark:border-gray-800">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                        currentPage === i + 1
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md'
                          : 'bg-white dark:bg-dark-light text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-10">
                {/* Popular Posts */}
                <div>
                  <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white pb-3 border-b border-gray-200 dark:border-gray-800">
                    Articles Populaires
                  </h3>
                  <div className="space-y-5">
                    {popularPosts.map((post) => (
                      <div key={post.id} className="flex space-x-4 group cursor-pointer">
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white line-clamp-2 leading-snug group-hover:text-primary dark:group-hover:text-accent transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white pb-3 border-b border-gray-200 dark:border-gray-800">
                    Catégories
                  </h3>
                  <div className="space-y-2">
                    {categories.filter(c => c !== 'Tous').map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setCurrentPage(1)
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}


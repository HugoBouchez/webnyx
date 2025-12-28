'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Plus, Minus, X, Search, Star, Heart, Truck, Shield, CheckCircle, Menu, ChevronDown, Filter } from 'lucide-react'
import Image from 'next/image'
import { products, categories, Product } from '@/lib/demo-data/ecommerce-data'

export default function EcommerceDemo() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [cart, setCart] = useState<Array<{ product: Product; quantity: number }>>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name')

  // Charger le panier depuis localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('demo-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Sauvegarder le panier dans localStorage
  useEffect(() => {
    localStorage.setItem('demo-cart', JSON.stringify(cart))
  }, [cart])

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const newQuantity = item.quantity + delta
          if (newQuantity <= 0) {
            return null
          }
          return { ...item, quantity: newQuantity }
        }
        return item
      }).filter(Boolean) as Array<{ product: Product; quantity: number }>
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const featuredProducts = products.filter(p => p.inStock).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-light">
      {/* Premium Header */}
      <header className="bg-white dark:bg-dark shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="hidden md:flex items-center justify-between py-2 text-xs text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Livraison gratuite dès 50€</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Paiement sécurisé</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="cursor-not-allowed opacity-75" title="Désactivé (démo)">Connexion</span>
              <span className="cursor-not-allowed opacity-75" title="Désactivé (démo)">Aide</span>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <motion.h1 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
              >
                ShopPremium
              </motion.h1>
              <nav className="hidden lg:flex space-x-6">
                <span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium cursor-not-allowed opacity-75" title="Désactivé (démo)">
                  Nouveautés
                </span>
                <span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium cursor-not-allowed opacity-75" title="Désactivé (démo)">
                  Catégories
                </span>
                <span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium cursor-not-allowed opacity-75" title="Désactivé (démo)">
                  Promotions
                </span>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </button>
              <button className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Heart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Premium */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <span className="text-sm font-semibold">Nouvelle Collection</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Découvrez l'excellence
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  à chaque achat
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Une sélection premium de produits soigneusement choisis pour leur qualité et leur design.
                Livraison rapide et service client exceptionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Découvrir les produits
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200"
                >
                  Voir les promotions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, text: 'Livraison gratuite' },
              { icon: Shield, text: 'Paiement sécurisé' },
              { icon: CheckCircle, text: 'Retours faciles' },
              { icon: Star, text: 'Satisfaction garantie' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary dark:text-accent" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Produits{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Phares
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Nos best-sellers sélectionnés pour vous
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-dark-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">(24)</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {product.price.toFixed(2)} €
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product)
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Ajouter</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white dark:bg-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="name">Trier par nom</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-dark rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                        Rupture de stock
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">(12)</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {product.price.toFixed(2)} €
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product)
                      }}
                      disabled={!product.inStock}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Ajouter</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal - Premium */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="mb-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.8 (124 avis)</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {selectedProduct.price.toFixed(2)} €
                    </span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Livraison gratuite</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Retours gratuits sous 30 jours</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Garantie 2 ans</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      addToCart(selectedProduct)
                      setSelectedProduct(null)
                    }}
                    disabled={!selectedProduct.inStock}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{selectedProduct.inStock ? 'Ajouter au panier' : 'Rupture de stock'}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar - Premium */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white dark:bg-dark shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Panier ({cartItemsCount})
                  </h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingCart className="w-20 h-20 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Votre panier est vide</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Ajoutez des produits pour commencer</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <motion.div
                          key={item.product.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-light rounded-xl border border-gray-200 dark:border-gray-800"
                        >
                          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 truncate">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {item.product.price.toFixed(2)} €
                            </p>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                              >
                                <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              </button>
                              <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                              >
                                <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white mb-2">
                              {(item.product.price * item.quantity).toFixed(2)} €
                            </p>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6 space-y-4">
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Sous-total</span>
                        <span className="font-bold text-gray-900 dark:text-white">{cartTotal.toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                        <span>Livraison</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold">Gratuite</span>
                      </div>
                      <div className="flex justify-between items-center text-xl pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="font-bold text-gray-900 dark:text-white">Total</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {cartTotal.toFixed(2)} €
                        </span>
                      </div>
                      <button 
                        disabled
                        className="w-full px-6 py-4 bg-gray-400 dark:bg-gray-600 text-white rounded-lg cursor-not-allowed font-semibold text-lg opacity-75"
                        title="Fonctionnalité désactivée (démo)"
                      >
                        Passer la commande (Démo)
                      </button>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        Continuer les achats
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

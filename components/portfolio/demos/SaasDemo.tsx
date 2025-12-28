'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, DollarSign, TrendingUp, Settings, Bell, Search, Menu, X } from 'lucide-react'

export default function SaasDemo() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { label: 'Utilisateurs actifs', value: '12,543', change: '+12%', icon: Users, color: 'text-blue-500' },
    { label: 'Revenus', value: '€45,231', change: '+8%', icon: DollarSign, color: 'text-green-500' },
    { label: 'Taux de conversion', value: '3.24%', change: '+2.1%', icon: TrendingUp, color: 'text-purple-500' },
    { label: 'Taux de rebond', value: '24.5%', change: '-4.3%', icon: BarChart3, color: 'text-red-500' },
  ]

  const recentActivity = [
    { user: 'Marie Dupont', action: 'a créé un nouveau projet', time: 'Il y a 5 min' },
    { user: 'Jean Martin', action: 'a mis à jour son profil', time: 'Il y a 12 min' },
    { user: 'Sophie Laurent', action: 'a publié un article', time: 'Il y a 1h' },
    { user: 'Pierre Bernard', action: 'a commenté', time: 'Il y a 2h' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-light flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-white dark:bg-dark border-r border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SaaSApp
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="space-y-2">
            {[
              { icon: BarChart3, label: 'Dashboard', active: true },
              { icon: Users, label: 'Utilisateurs' },
              { icon: DollarSign, label: 'Revenus' },
              { icon: Settings, label: 'Paramètres' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  disabled={!item.active}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-primary/10 text-primary dark:text-accent'
                      : 'text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-50'
                  }`}
                  title={!item.active ? 'Navigation désactivée (démo)' : undefined}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-dark-light focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative">
              <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              JD
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Bienvenue dans votre tableau de bord
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-dark-light flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-white dark:bg-dark rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Vue d'ensemble des revenus
              </h3>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-dark-light rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Graphique de démonstration
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Intégrez votre bibliothèque de graphiques préférée
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-dark rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Activité récente
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary dark:text-accent font-semibold text-sm">
                        {activity.user[0]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="mt-6 bg-white dark:bg-dark rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Données récentes
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Nom
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Statut
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#1234', name: 'Projet Alpha', status: 'Actif', date: '2024-01-15' },
                    { id: '#1235', name: 'Projet Beta', status: 'En attente', date: '2024-01-14' },
                    { id: '#1236', name: 'Projet Gamma', status: 'Actif', date: '2024-01-13' },
                    { id: '#1237', name: 'Projet Delta', status: 'Terminé', date: '2024-01-12' },
                  ].map((row, index) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-dark-light"
                    >
                      <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{row.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{row.name}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            row.status === 'Actif'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : row.status === 'En attente'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


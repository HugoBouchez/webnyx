export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
  rating?: number
  reviews?: number
}

export const categories = [
  'Tous',
  'Électronique',
  'Mode',
  'Maison',
  'Sport',
  'Livres',
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Premium Pro',
    description: 'Smartphone dernière génération avec écran OLED 6.7", processeur haute performance, caméra 108MP et batterie longue durée. Design premium en verre et métal.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
    category: 'Électronique',
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Casque Audio Sans Fil Pro',
    description: 'Casque audio haute qualité avec réduction de bruit active, autonomie 30h, son Hi-Fi et design ergonomique. Compatible Bluetooth 5.0.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
    category: 'Électronique',
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Montre Connectée Sport',
    description: 'Montre intelligente avec suivi de la santé avancé, GPS intégré, écran AMOLED et autonomie 7 jours. Résistante à l\'eau jusqu\'à 50m.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    category: 'Électronique',
    inStock: true,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: '4',
    name: 'Sneakers Running Pro',
    description: 'Chaussures de sport haut de gamme pour la course et le fitness. Semelle amortissante, respirabilité optimale et design moderne.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    category: 'Sport',
    inStock: true,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: '5',
    name: 'Sac à Dos Professionnel',
    description: 'Sac à dos élégant et fonctionnel avec compartiments multiples, compartiment pour ordinateur 15", design ergonomique et matériaux durables.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop',
    category: 'Mode',
    inStock: true,
    rating: 4.5,
    reviews: 78,
  },
  {
    id: '6',
    name: 'Livre Best-Seller Édition Premium',
    description: 'Roman à succès de l\'année, édition limitée avec couverture premium, papier de qualité et illustrations exclusives. Parfait pour collectionneurs.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
    category: 'Livres',
    inStock: true,
    rating: 4.9,
    reviews: 312,
  },
  {
    id: '7',
    name: 'Lampadaire Design Moderne',
    description: 'Lampadaire contemporain avec éclairage LED réglable, contrôle via application mobile, design minimaliste et finition premium.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop',
    category: 'Maison',
    inStock: true,
    rating: 4.7,
    reviews: 95,
  },
  {
    id: '8',
    name: 'Vélo Électrique Premium',
    description: 'Vélo électrique pliable haut de gamme avec autonomie 50km, assistance au pédalage, freins à disque et design compact. Idéal pour la ville.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
    category: 'Sport',
    inStock: false,
    rating: 4.8,
    reviews: 67,
  },
]

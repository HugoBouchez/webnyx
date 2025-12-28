export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Les Tendances du Web Design en 2024',
    excerpt: 'Découvrez les dernières tendances en matière de design web qui façonnent l\'expérience utilisateur moderne.',
    content: 'Le web design évolue constamment, et 2024 apporte son lot d\'innovations...',
    author: 'Marie Dubois',
    date: '2024-01-15',
    category: 'Design',
    tags: ['Design', 'Web', 'Tendances'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
    readTime: 5,
  },
  {
    id: '3',
    title: 'React vs Vue : Quel Framework Choisir ?',
    excerpt: 'Comparaison approfondie entre React et Vue.js pour vous aider à faire le bon choix.',
    content: 'Le choix entre React et Vue.js dépend de nombreux facteurs...',
    author: 'Sophie Laurent',
    date: '2024-01-05',
    category: 'Développement',
    tags: ['React', 'Vue', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    readTime: 10,
  },
  {
    id: '4',
    title: 'Les Meilleures Pratiques pour l\'Accessibilité Web',
    excerpt: 'Comment rendre votre site web accessible à tous les utilisateurs, y compris ceux avec des handicaps.',
    content: 'L\'accessibilité web est cruciale pour garantir une expérience inclusive...',
    author: 'Pierre Bernard',
    date: '2023-12-28',
    category: 'Accessibilité',
    tags: ['Accessibilité', 'UX', 'Inclusion'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop',
    readTime: 6,
  },
  {
    id: '5',
    title: 'Introduction à Next.js 14 : Les Nouvelles Fonctionnalités',
    excerpt: 'Explorez les nouveautés de Next.js 14 et comment elles améliorent le développement web moderne.',
    content: 'Next.js 14 apporte de nombreuses améliorations...',
    author: 'Lucie Moreau',
    date: '2023-12-20',
    category: 'Développement',
    tags: ['Next.js', 'React', 'Framework'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    readTime: 7,
  },
  {
    id: '6',
    title: 'Marketing Digital : Stratégies Efficaces pour 2024',
    excerpt: 'Découvrez les stratégies de marketing digital les plus efficaces pour cette année.',
    content: 'Le marketing digital continue d\'évoluer rapidement...',
    author: 'Thomas Petit',
    date: '2023-12-15',
    category: 'Marketing',
    tags: ['Marketing', 'Digital', 'Stratégie'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    readTime: 9,
  },
]

export const categories = ['Tous', 'Design', 'Développement', 'Accessibilité', 'Marketing']

export const popularPosts = blogPosts.slice(0, 3)


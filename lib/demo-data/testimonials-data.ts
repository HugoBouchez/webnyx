export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Claire Dupont',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'Service exceptionnel ! L\'équipe a su comprendre nos besoins et livrer un produit qui dépasse nos attentes. Je recommande vivement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '2',
    name: 'Antoine Moreau',
    role: 'Directeur Marketing',
    company: 'Digital Solutions',
    content: 'Professionnalisme et créativité au rendez-vous. Notre nouveau site web a considérablement amélioré notre présence en ligne.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '3',
    name: 'Marie Leclerc',
    role: 'Fondatrice',
    company: 'Boutique Moderne',
    content: 'Un accompagnement personnalisé et des résultats qui parlent d\'eux-mêmes. Notre chiffre d\'affaires a augmenté de 40% depuis le lancement.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    rating: 5,
  },
  {
    id: '4',
    name: 'Pierre Martin',
    role: 'Directeur Commercial',
    company: 'Innovation Corp',
    content: 'Réactivité, expertise et qualité. Tout ce qu\'on peut attendre d\'un partenaire de confiance. Merci pour ce travail remarquable !',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    rating: 5,
  },
]


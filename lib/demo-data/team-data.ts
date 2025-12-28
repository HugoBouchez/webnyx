export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'Directrice Générale',
    bio: '15 ans d\'expérience dans le management et la stratégie d\'entreprise. Passionnée par l\'innovation et le développement durable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    social: {
      linkedin: '#',
      email: 'sophie@example.com',
    },
  },
  {
    id: '2',
    name: 'Marc Dubois',
    role: 'Directeur Technique',
    bio: 'Expert en architecture logicielle et développement web. Spécialisé dans les technologies modernes et les solutions scalables.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: '3',
    name: 'Emma Laurent',
    role: 'Designer UX/UI',
    bio: 'Créative et passionnée par l\'expérience utilisateur. Transforme les idées en interfaces intuitives et élégantes.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    social: {
      linkedin: '#',
      email: 'emma@example.com',
    },
  },
  {
    id: '4',
    name: 'Lucas Bernard',
    role: 'Développeur Full Stack',
    bio: 'Polyvalent et curieux, spécialisé dans les technologies web modernes. Aime relever de nouveaux défis techniques.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
]


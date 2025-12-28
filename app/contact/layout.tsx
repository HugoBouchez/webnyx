import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Demander un Devis',
  description: 'Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


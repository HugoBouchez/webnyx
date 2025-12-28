import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos | Mon Parcours',
  description: 'Découvrez mon parcours et ma passion pour la création de sites web modernes.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


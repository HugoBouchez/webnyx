import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Création de Sites Web',
  description: 'Découvrez mes services : création de sites vitrines, refonte, design UI/UX, maintenance et SEO.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


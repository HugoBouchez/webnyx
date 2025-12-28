import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs | Packages et Prix',
  description: 'Découvrez mes tarifs pour la création de sites web et les services de maintenance.',
}

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


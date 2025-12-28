import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Réalisations Web',
  description: 'Découvrez mes réalisations : sites web modernes, applications et projets de développement.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


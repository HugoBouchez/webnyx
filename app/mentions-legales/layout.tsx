import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site web.',
}

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


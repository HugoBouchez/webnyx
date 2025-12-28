import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalHeader from '@/components/ConditionalHeader'
import ConditionalFooter from '@/components/ConditionalFooter'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Création de Sites Web Modernes | Freelance Développeur',
  description: 'Développeur freelance spécialisé dans la création de sites web modernes, performants et optimisés. Sites vitrines, refonte, design UI/UX, SEO et maintenance.',
  keywords: 'développeur freelance, création site web, site vitrine, refonte site, design UI/UX, SEO, maintenance site web',
  authors: [{ name: 'Freelance Développeur' }],
  openGraph: {
    title: 'Création de Sites Web Modernes | Freelance Développeur',
    description: 'Développeur freelance spécialisé dans la création de sites web modernes et performants.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <ConditionalHeader />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


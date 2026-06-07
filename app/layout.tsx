import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import ConditionalHeader from '@/components/ConditionalHeader'
import ConditionalFooter from '@/components/ConditionalFooter'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

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
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <ConditionalHeader />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}


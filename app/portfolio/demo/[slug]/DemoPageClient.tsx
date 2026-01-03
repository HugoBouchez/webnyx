'use client'

import DemoLayout from '@/components/portfolio/DemoLayout'
import EcommerceDemo from '@/components/portfolio/demos/EcommerceDemo'
import VitrineDemo from '@/components/portfolio/demos/VitrineDemo'
import PortfolioDemo from '@/components/portfolio/demos/PortfolioDemo'
import LandingDemo from '@/components/portfolio/demos/LandingDemo'
import DentisteDemo from '@/components/portfolio/demos/DentisteDemo'
import AssuranceDemo from '@/components/portfolio/demos/AssuranceDemo'

const demoComponents: Record<string, React.ComponentType> = {
  'site-ecommerce-moderne': EcommerceDemo,
  'site-vitrine-entreprise': VitrineDemo,
  'portfolio-creatif': PortfolioDemo,
  'landing-page-marketing': LandingDemo,
  'site-dentiste-professionnel': DentisteDemo,
  'site-courtier-assurance': AssuranceDemo,
}

export default function DemoPageClient({ slug }: { slug: string }) {
  const DemoComponent = demoComponents[slug]

  if (!DemoComponent) {
    return (
      <DemoLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Démonstration non trouvée
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              La démonstration demandée n'existe pas.
            </p>
            <a
              href="/portfolio"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Retour au portfolio
            </a>
          </div>
        </div>
      </DemoLayout>
    )
  }

  return (
    <DemoLayout>
      <DemoComponent />
    </DemoLayout>
  )
}


import DemoPageClient from './DemoPageClient'

const demoSlugs = [
  'site-ecommerce-moderne',
  'site-vitrine-entreprise',
  'portfolio-creatif',
  'blog-professionnel',
  'landing-page-marketing',
  'application-web-saas',
]

// Required for static export - must be in server component
export function generateStaticParams() {
  return demoSlugs.map((slug) => ({
    slug,
  }))
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  return <DemoPageClient slug={params.slug} />
}


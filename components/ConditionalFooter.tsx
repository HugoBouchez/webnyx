'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Ne pas afficher le Footer sur les routes de démo
  if (pathname?.startsWith('/portfolio/demo')) {
    return null
  }
  
  return <Footer />
}


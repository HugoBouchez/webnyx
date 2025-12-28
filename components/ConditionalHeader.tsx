'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  
  // Ne pas afficher le Header sur les routes de démo
  if (pathname?.startsWith('/portfolio/demo')) {
    return null
  }
  
  return <Header />
}


'use client'

import { ReactNode } from 'react'
import DemoHeader from './DemoHeader'

interface DemoLayoutProps {
  children: ReactNode
}

export default function DemoLayout({ children }: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <DemoHeader />
      <main>{children}</main>
    </div>
  )
}


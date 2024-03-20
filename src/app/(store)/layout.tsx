import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto grid min-h-screen max-w-largeDesktop grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}

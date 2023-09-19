import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components'

const inter = Inter({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'W',
  description: 'News Homepage project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

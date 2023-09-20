import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components'
import { Locale } from '../../../i18n-config'

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
  params: { lang },
}: {
  children: React.ReactNode,
  params: { lang: Locale },
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  )
}

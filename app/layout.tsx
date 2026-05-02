import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dishdiscover.app'),
  title: {
    template: '%s — DishDiscover',
    default: 'DishDiscover — Discover & Share Recipes',
  },
  description:
    'DishDiscover helps you explore thousands of recipes, share your own culinary creations, and connect with food lovers worldwide.',
  openGraph: {
    type: 'website',
    siteName: 'DishDiscover',
    images: [{ url: '/assets/app_logo.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import { Bebas_Neue, Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const barlow = Barlow({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

export const metadata = {
  title: 'VERVE Run Club — KIIT University',
  description:
    'Free running community at KIIT University, Bhubaneswar. Promoting the art of running for all. Verve for all. All for Verve.',
  openGraph: {
    title: 'VERVE Run Club',
    description: 'Free running community at KIIT. Verve for all. All for Verve.',
    url: 'https://verve-runclub.netlify.app',
    siteName: 'Verve Run Club',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

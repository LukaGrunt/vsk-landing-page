import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'VSK — Vojaški Strelski Klub',
  description: 'Vojaški Strelski Klub združuje ljubitelje strelskega športa iz vrst MORS. Ponujamo treninge IPSC, IDPA, tekmovanja in strokovno usposabljanje. Pridruži se nam!',
  keywords: ['strelski klub', 'IPSC', 'IDPA', 'strelstvo', 'Slovenija', 'MORS', 'vojaški', 'tekmovanje', 'trening', 'orožje'],
  authors: [{ name: 'Vojaški Strelski Klub' }],
  creator: 'Vojaški Strelski Klub',
  publisher: 'Vojaški Strelski Klub',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'VSK — Vojaški Strelski Klub',
    description: 'Vojaški Strelski Klub združuje ljubitelje strelskega športa iz vrst MORS. Ponujamo treninge IPSC, IDPA, tekmovanja in strokovno usposabljanje.',
    type: 'website',
    locale: 'sl_SI',
    siteName: 'Vojaški Strelski Klub',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'VSK Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'VSK — Vojaški Strelski Klub',
    description: 'Vojaški Strelski Klub združuje ljubitelje strelskega športa iz vrst MORS. IPSC, IDPA, tekmovanja in usposabljanje.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

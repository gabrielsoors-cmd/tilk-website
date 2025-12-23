import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tilk – Say it.',
  description: 'AI-drivna mötessammanfattningar på perfekt svenska. Var närvarande, inte upptagen med anteckningar.',
  keywords: 'möten, AI, sammanfattning, transkribering, svenska, anteckningar, produktivitet',
  authors: [{ name: 'Soors Ventures AB' }],
  openGraph: {
    title: 'Tilk – Say it.',
    description: 'AI-drivna mötessammanfattningar på perfekt svenska.',
    url: 'https://tilk.app',
    siteName: 'Tilk',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tilk – Say it.',
    description: 'AI-drivna mötessammanfattningar på perfekt svenska.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="bg-bg antialiased">{children}</body>
    </html>
  )
}
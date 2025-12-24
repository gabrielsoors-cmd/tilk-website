import type { Metadata } from 'next'
import Script from 'next/script'
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E9TS1S6Q1E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E9TS1S6Q1E');
          `}
        </Script>
      </head>
      <body className="bg-bg antialiased">{children}</body>
    </html>
  )
}
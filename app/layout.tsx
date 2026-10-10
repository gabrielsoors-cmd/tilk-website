import type { Metadata } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import './globals.css'
import { Fraunces } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'
import { SITE_URL } from '@/lib/seo'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-genty',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tilk - Anteckna med AI byggd för Svenska företag',
    template: '%s',
  },
  description: 'AI-drivna mötessammanfattningar på perfekt svenska. Var närvarande, inte upptagen med anteckningar.',
  keywords: 'möten, AI, sammanfattning, transkribering, svenska, anteckningar, produktivitet, svenska företag',
  authors: [{ name: 'Soors Ventures AB' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Set via middleware.ts so we can correctly set <html lang> and the
  // cookie banner's language on /en/* pages without a second root layout.
  const pathname = headers().get('x-pathname') || ''
  const lang: 'sv' | 'en' = pathname.startsWith('/en') ? 'en' : 'sv'

  return (
    <html lang={lang} className={fraunces.variable}>
      <head>
        {/* Consent Mode v2 default: deny all before any Google tag loads */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>
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
      <body className="bg-background antialiased">
        {children}
        <CookieConsent lang={lang} />
      </body>
    </html>
  )
}

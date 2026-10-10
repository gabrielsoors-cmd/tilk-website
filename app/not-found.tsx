'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  const pathname = usePathname()
  const lang: 'sv' | 'en' = pathname?.startsWith('/en') ? 'en' : 'sv'
  const basePath = lang === 'en' ? '/en' : ''

  const content = {
    sv: {
      title: 'Sidan kunde inte hittas',
      description: 'Sidan du letar efter finns inte längre, eller har flyttats.',
      cta: 'Till startsidan',
      pricing: 'Priser',
      contact: 'Kontakt',
    },
    en: {
      title: 'Page not found',
      description: 'The page you are looking for no longer exists, or has moved.',
      cta: 'Go to homepage',
      pricing: 'Pricing',
      contact: 'Contact',
    },
  }

  const t = content[lang]

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 bg-background min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-genty text-7xl sm:text-9xl text-primary/70 mb-4">404</p>
          <h1 className="font-genty text-2xl sm:text-4xl font-medium mb-4 text-gray-900">
            {t.title}
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mb-8">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href={basePath || '/'}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition hover:shadow-lg hover:shadow-primary/30"
            >
              {t.cta}
            </Link>
            <Link
              href={`${basePath}/contact`}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/10 transition"
            >
              {t.contact}
            </Link>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  )
}

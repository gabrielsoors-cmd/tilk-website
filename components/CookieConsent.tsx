'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const STORAGE_KEY = 'tilk_cookie_consent'

interface CookieConsentProps {
  lang: 'sv' | 'en'
}

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [visible, setVisible] = useState(false)

  const content = {
    sv: {
      text: 'Vi använder cookies för att analysera trafik och förbättra Tilk. Du väljer själv vad du vill tillåta.',
      acceptAll: 'Acceptera alla',
      onlyNecessary: 'Endast nödvändiga',
      privacyLink: 'Läs mer i vår integritetspolicy',
    },
    en: {
      text: 'We use cookies to analyze traffic and improve Tilk. You choose what to allow.',
      acceptAll: 'Accept all',
      onlyNecessary: 'Necessary only',
      privacyLink: 'Read more in our privacy policy',
    },
  }

  const t = content[lang]
  const basePath = lang === 'en' ? '/en' : ''

  const applyConsent = (analyticsGranted: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: analyticsGranted ? 'granted' : 'denied',
      })
    }
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ analytics: analyticsGranted, timestamp: Date.now() })
    )
    setVisible(false)
  }

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
    } else {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.analytics && window.gtag) {
          window.gtag('consent', 'update', { analytics_storage: 'granted' })
        }
      } catch {
        setVisible(true)
      }
    }

    const handleReopen = () => setVisible(true)
    window.addEventListener('open-cookie-settings', handleReopen)
    return () => window.removeEventListener('open-cookie-settings', handleReopen)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-4 sm:px-6 sm:py-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left flex-1">
          {t.text}{' '}
          <Link href={basePath + '/privacy'} className="text-primary underline">
            {t.privacyLink}
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={() => applyConsent(false)}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            {t.onlyNecessary}
          </button>
          <button
            onClick={() => applyConsent(true)}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  )
}

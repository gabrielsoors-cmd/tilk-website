'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  lang: 'sv' | 'en'
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    sv: {
      tagline: 'Say it.',
      headline: 'Sluta anteckna. Börja lyssna.',
      description: 'Tilk förvandlar kaos till klarhet – med AI-drivna sammanfattningar på perfekt svenska.',
      cta: 'Prova gratis idag',
      appStoreAlt: 'Ladda ned på App Store',
    },
    en: {
      tagline: 'Say it.',
      headline: 'Stop taking notes. Start listening.',
      description: 'Tilk transforms chaos into clarity – with AI-powered summaries in perfect Swedish.',
      cta: 'Try for free today',
      appStoreAlt: 'Download on the App Store',
    },
  }

  const t = content[lang]
  const SESSION_KEY = 'tilk_typing_done'

  const [displayedTagline, setDisplayedTagline] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const hasTyped = useRef(false)

  useEffect(() => {
    const alreadyDone = sessionStorage.getItem(SESSION_KEY)
    if (alreadyDone) {
      setDisplayedTagline(t.tagline)
      setTypingDone(true)
      return
    }
    if (hasTyped.current) return
    hasTyped.current = true

    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayedTagline(t.tagline.slice(0, i))
      if (i >= t.tagline.length) {
        clearInterval(interval)
        setTypingDone(true)
        sessionStorage.setItem(SESSION_KEY, '1')
      }
    }, 80)
    return () => clearInterval(interval)
  }, [t.tagline])

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-background">
      {/* Subtil blå glow-blob i bakgrunden, i stil med Wispr Flows "levande" känsla */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <Image
              src="/images/tilk-logo-text.svg"
              alt="Tilk"
              width={160}
              height={54}
              className="mb-8 mx-auto lg:mx-0"
            />

            <p className="text-2xl italic text-primary/70 mb-6 min-h-[2rem] font-genty">
              {displayedTagline}
              {!typingDone && (
                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 align-middle animate-pulse" />
              )}
            </p>

            <h1 className="font-genty text-5xl lg:text-6xl font-medium mb-6 leading-tight text-gray-900">
              {t.headline}
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              
                href="#pricing"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                {t.cta}
                <span>→</span>
              </a>

              
                href="https://apps.apple.com/se/app/tilk/id6759267312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt={t.appStoreAlt}
                  className="h-12 hover:opacity-80 transition"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <Image
              src="/images/tilk-templates-mockup.png"
              alt="Tilk Templates"
              width={600}
              height={800}
              className="mx-auto rounded-3xl shadow-2xl shadow-primary/10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

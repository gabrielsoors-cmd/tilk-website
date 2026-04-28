'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
    },
    en: {
      tagline: 'Say it.',
      headline: 'Stop taking notes. Start listening.',
      description: 'Tilk transforms chaos into clarity – with AI-powered summaries in perfect Swedish.',
      cta: 'Try for free today',
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

  const heroRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
    const timer = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark to-dark pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Image
              src="/images/tilk-logo-text.svg"
              alt="Tilk"
              width={180}
              height={60}
              className="mb-8 mx-auto lg:mx-0 invert"
            />
            <p className="text-2xl italic text-gray-400 mb-6 min-h-[2rem]">
              {displayedTagline}
              {!typingDone && (
                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 align-middle animate-pulse" />
              )}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.headline}
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              
              <a href="#pricing"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-glow"
              >
                {t.cta}
                <span>→</span>
             </a>
              
              <a href="https://apps.apple.com/se/app/tilk/id6759267312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt={lang === 'sv' ? 'Ladda ned på App Store' : 'Download on the App Store'}
                  className="h-12 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <Image
                src="/images/tilk-templates-mockup.png"
                alt="Tilk Templates"
                width={600}
                height={800}
                className="mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

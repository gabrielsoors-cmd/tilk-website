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
              
                href="#pricing"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-glow"
              >
                {t.cta}
                <span>→</span>
              </a>
              
                href="https://apps.apple.com/app/id6748013897"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition duration-200 group"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 814 1000" fill="currentColor">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-150.3-109.7C79.6 728.1 32 583.3 32 443.8c0-234 152.5-360 300.8-360 79.6 0 146 52.5 196.1 52.5 47.8 0 122.4-55.7 211.5-55.7.8 0 1.6 0 2.4.1zm-174.2-120.5c37.1-44.2 63.1-105.5 63.1-166.8 0-8.5-.8-17.1-2.4-24.3-59.8 2.4-130.4 40.2-173.6 89.6-33.5 37.8-65.7 99-65.7 161.1 0 9.3 1.6 18.6 2.4 21.6 3.2.8 8.5 1.6 13.7 1.6 54.2 0 119.4-36.3 162.5-83.8z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60 leading-none">
                    {lang === 'sv' ? 'Ladda ned på' : 'Download on the'}
                  </div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
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

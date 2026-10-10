'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, FileText, CheckCircle2 } from 'lucide-react'

interface HeroProps {
  lang: 'sv' | 'en'
}

const LIVE_DEMO_STEPS = {
  sv: [
    { icon: Mic, label: 'Spelar in mötet...' },
    { icon: FileText, label: 'Transkriberar...' },
    { icon: CheckCircle2, label: 'Sammanfattning klar ✓' },
  ],
  en: [
    { icon: Mic, label: 'Recording the meeting...' },
    { icon: FileText, label: 'Transcribing...' },
    { icon: CheckCircle2, label: 'Summary ready ✓' },
  ],
}

function LiveDemoBadge({ lang }: { lang: 'sv' | 'en' }) {
  const steps = LIVE_DEMO_STEPS[lang]
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [steps.length])

  const current = steps[stepIndex]
  const Icon = current.icon
  const isDone = stepIndex === steps.length - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 sm:-right-4 sm:bottom-6 bg-white rounded-2xl shadow-xl shadow-primary/15 border border-gray-100 px-4 py-3 flex items-center gap-2.5 whitespace-nowrap"
    >
      <span
        className={`flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0 ${
          isDone ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={stepIndex}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Icon size={15} />
          </motion.span>
        </AnimatePresence>
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={stepIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-xs sm:text-sm font-medium text-gray-700"
        >
          {current.label}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    sv: {
      tagline: 'Say it.',
      headline: 'Sluta anteckna. Börja lyssna.',
      description: 'Tilk förvandlar kaos till klarhet – med AI-drivna sammanfattningar på perfekt svenska.',
      cta: 'Prova gratis idag',
      appStoreAlt: 'Ladda ned på App Store',
      heroImageAlt: 'En hand håller upp Tilk-appen bland en hög av lösa mötesanteckningar – Tilk skapar ordning ur mötes-kaoset',
    },
    en: {
      tagline: 'Say it.',
      headline: 'Stop taking notes. Start listening.',
      description: 'Tilk transforms chaos into clarity – with AI-powered summaries in perfect Swedish.',
      cta: 'Try for free today',
      appStoreAlt: 'Download on the App Store',
      heroImageAlt: 'A hand holds up the Tilk app above a pile of loose meeting notes – Tilk brings order to meeting chaos',
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
    <section className="relative pt-20 pb-10 px-4 sm:pt-28 sm:px-6 lg:pt-32 lg:pb-24 overflow-hidden bg-background">
      <div className="absolute -top-20 -right-20 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <Image
              src="/images/tilk-logo-text.svg"
              alt="Tilk"
              width={100}
              height={34}
              className="mb-3 sm:mb-8 mx-auto lg:mx-0"
            />

            <p className="text-xl sm:text-2xl italic text-primary/70 mb-4 sm:mb-6 min-h-[1.75rem] font-genty">
              {displayedTagline}
              {!typingDone && (
                <span className="inline-block w-0.5 h-5 sm:h-6 bg-primary ml-0.5 align-middle animate-pulse" />
              )}
            </p>

            <h1 className="font-genty text-3xl sm:text-4xl lg:text-6xl font-medium mb-4 sm:mb-6 leading-tight text-gray-900">
              {t.headline}
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
              >
                {t.cta}
                <span>→</span>
              </a>

              <a
                href="https://apps.apple.com/se/app/tilk/id6759267312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt={t.appStoreAlt}
                  className="h-11 sm:h-12 hover:opacity-80 transition"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative max-w-[200px] sm:max-w-sm lg:max-w-none mx-auto mt-8 lg:mt-0"
          >
            <Image
              src="/images/tilk-hero-produktivitetskaos.png"
              alt={t.heroImageAlt}
              width={1122}
              height={1402}
              className="mx-auto rounded-3xl shadow-2xl shadow-primary/10 w-full h-auto"
              priority
            />
            <LiveDemoBadge lang={lang} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface ClosingCTAProps {
  lang: 'sv' | 'en'
}

export default function ClosingCTA({ lang }: ClosingCTAProps) {
  const content = {
    sv: {
      title: 'Sluta anteckna. Börja lyssna.',
      description: 'Ladda ner Tilk gratis och få din första AI-sammanfattning på under 60 sekunder.',
      cta: 'Prova gratis idag',
      appStoreAlt: 'Ladda ned på App Store',
      note: 'Inget kreditkort krävs · 60 minuter gratis',
    },
    en: {
      title: 'Stop taking notes. Start listening.',
      description: 'Download Tilk for free and get your first AI summary in under 60 seconds.',
      cta: 'Try for free today',
      appStoreAlt: 'Download on the App Store',
      note: 'No credit card required · 60 minutes free',
    },
  }

  const t = content[lang]

  return (
    <section className="relative py-16 px-4 sm:py-24 sm:px-6 bg-primary overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="font-genty text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-5 sm:mb-6 leading-tight">
          {t.title}
        </h2>
        <p className="text-base sm:text-xl text-white/85 mb-8 sm:mb-10 max-w-xl mx-auto">
          {t.description}
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://apps.apple.com/se/app/tilk/id6759267312"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition hover:shadow-lg"
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
              width={132}
              height={44}
              className="h-11 sm:h-12 w-auto hover:opacity-80 transition"
            />
          </a>

          <p className="text-xs sm:text-sm text-white/80 mt-1">{t.note}</p>
        </div>
      </motion.div>
    </section>
  )
}

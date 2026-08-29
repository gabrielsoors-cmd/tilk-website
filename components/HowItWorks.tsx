'use client'

import { motion } from 'framer-motion'

interface HowItWorksProps {
  lang: 'sv' | 'en'
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const content = {
    sv: {
      eyebrow: 'Så funkar det',
      title: 'Från möte till beslut på sekunder',
      subtitle: 'Ingen inlärningskurva. Tryck, prata, klart.',
      steps: [
        { number: '1', title: 'Spela in', description: 'Tryck på record-knappen på iPhone eller Apple Watch. Tilk lyssnar medan du är närvarande – inga anteckningar behövs.' },
        { number: '2', title: 'Transkribera', description: 'AI transkriberar automatiskt till perfekt svensk text, oavsett om mötet hölls fysiskt eller digitalt.' },
        { number: '3', title: 'Sammanfatta', description: 'Få strukturerade sammanfattningar, beslut och action items direkt – redigerbara och redo att dela.' },
      ],
    },
    en: {
      eyebrow: 'How it works',
      title: 'From meeting to action in seconds',
      subtitle: 'No learning curve. Tap, talk, done.',
      steps: [
        { number: '1', title: 'Record', description: 'Hit the record button on your iPhone or Apple Watch. Tilk listens while you stay present – no note-taking needed.' },
        { number: '2', title: 'Transcribe', description: 'AI automatically transcribes to perfect Swedish text, whether the meeting was in-person or digital.' },
        { number: '3', title: 'Summarize', description: 'Get structured summaries, decisions and action items instantly – editable and ready to share.' },
      ],
    },
  }

  const t = content[lang]

  return (
    <section className="py-14 px-4 sm:py-20 sm:px-6 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-2 sm:mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-genty text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.15, ease: 'easeOut' }}
              className="text-center relative"
            >
              {i < t.steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left' }}
                  className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-primary/10 z-0"
                />
              )}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-semibold mx-auto mb-5 sm:mb-6 shadow-lg shadow-primary/20">
                {step.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

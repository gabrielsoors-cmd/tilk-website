'use client'

import { motion } from 'framer-motion'
import { MapPin, ShieldCheck, Sparkles } from 'lucide-react'

interface TrustProps {
  lang: 'sv' | 'en'
}

export default function Trust({ lang }: TrustProps) {
  const content = {
    sv: {
      eyebrow: 'Varför Tilk',
      quote:
        'Vi ville inte bygga en till sammanfattningsapp som ger dig samma anteckningar oavsett möte. Vi ville bygga appen som anpassar sig efter dig – med mallar för hur just ditt företag eller förening faktiskt jobbar.',
      quoteHighlight: 'Tilk är appen som anpassar sig efter dina möten, inte tvärtom.',
      founder: 'Gabriel, grundare av Tilk',
      badges: [
        {
          icon: MapPin,
          title: 'Byggd i Sverige',
          description: 'Utvecklad för svenska företag och föreningar, på perfekt svenska.',
        },
        {
          icon: ShieldCheck,
          title: 'Din data, dina villkor',
          description: 'Mötesinnehåll är ditt. Ingen delas eller används för att träna andras modeller.',
        },
        {
          icon: Sparkles,
          title: 'Aktivt under utveckling',
          description: 'Nya mallar och funktioner löpande, baserat på hur riktiga team faktiskt jobbar.',
        },
      ],
    },
    en: {
      eyebrow: 'Why Tilk',
      quote:
        'We didn\u2019t want to build another summary app that gives you the same notes regardless of the meeting. We wanted to build the app that adapts to you – with templates for how your company or association actually works.',
      quoteHighlight: 'Tilk is the app that adapts to your meetings, not the other way around.',
      founder: 'Gabriel, founder of Tilk',
      badges: [
        {
          icon: MapPin,
          title: 'Built in Sweden',
          description: 'Developed for Swedish companies and associations, in perfect Swedish.',
        },
        {
          icon: ShieldCheck,
          title: 'Your data, your terms',
          description: 'Your meeting content is yours. Never shared or used to train other models.',
        },
        {
          icon: Sparkles,
          title: 'Actively evolving',
          description: 'New templates and features shipped regularly, based on how real teams work.',
        },
      ],
    },
  }

  const t = content[lang]

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block text-sm font-semibold text-white/70 tracking-wide uppercase mb-6">
            {t.eyebrow}
          </span>
          <p className="font-genty text-2xl md:text-3xl leading-relaxed text-white mb-6">
            {t.quote}
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white mb-4">
            {t.quoteHighlight}
          </p>
          <p className="text-white/70">— {t.founder}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="grid sm:grid-cols-3 gap-6 mt-16"
        >
          {t.badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white mb-4">
                <badge.icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">{badge.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

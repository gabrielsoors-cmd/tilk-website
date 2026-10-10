'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQProps {
  lang: 'sv' | 'en'
}

export default function FAQ({ lang }: FAQProps) {
  const content = {
    sv: {
      eyebrow: 'Vanliga frågor',
      title: 'Allt du undrar över',
      subtitle: 'Hittar du inte svaret du letar efter? Hör av dig på contact@tilk.app.',
      items: [
        {
          question: 'Fungerar Tilk med Android?',
          answer: 'Just nu är Tilk byggd för iPhone och Apple Watch, för att vi ska kunna göra upplevelsen så smidig som möjligt. Vi utvärderar Android löpande baserat på efterfrågan.',
        },
        {
          question: 'Är det lagligt att spela in möten?',
          answer: 'Du är ansvarig för att ha samtycke från de som spelas in – det är en del av våra användarvillkor. Vi rekommenderar att alltid informera mötesdeltagarna innan du startar en inspelning, som god mötessed.',
        },
        {
          question: 'Är mina mötesanteckningar säkra?',
          answer: 'Ja. Ljudet raderas omedelbart efter transkribering – endast texten sparas. All data är krypterad och isolerad per användare, och delas aldrig med tredje part för annat än att leverera tjänsten.',
        },
        {
          question: 'Hur bra är den svenska transkriberingen?',
          answer: 'Tilk är byggt från grunden för svenska – inte en översatt engelsk tjänst. Det märks på hur väl appen hanterar svensk grammatik, dialekter och branschjargong.',
        },
        {
          question: 'Kan jag anpassa mallarna till mitt företag?',
          answer: 'Ja! Alla planer har tillgång till 6 standardmallar. Med Enterprise kan du dessutom skapa helt egna mallar som matchar hur just er organisation jobbar.',
        },
        {
          question: 'Vad händer om AI:n gör ett fel i sammanfattningen?',
          answer: 'AI är inte perfekt, så alla sammanfattningar är redigerbara direkt i appen. Du har alltid sista ordet innan du delar eller sparar en sammanfattning.',
        },
      ],
    },
    en: {
      eyebrow: 'FAQ',
      title: 'Everything you’re wondering',
      subtitle: 'Can’t find the answer you’re looking for? Reach out at contact@tilk.app.',
      items: [
        {
          question: 'Does Tilk work with Android?',
          answer: 'Right now Tilk is built for iPhone and Apple Watch, so we can make the experience as smooth as possible. We’re evaluating Android based on demand.',
        },
        {
          question: 'Is it legal to record meetings?',
          answer: 'You are responsible for having consent from everyone being recorded – this is part of our terms of service. We recommend always informing meeting participants before you start recording, as good meeting etiquette.',
        },
        {
          question: 'Are my meeting notes secure?',
          answer: 'Yes. Audio is deleted immediately after transcription – only the text is saved. All data is encrypted and isolated per user, and is never shared with third parties beyond delivering the service.',
        },
        {
          question: 'How good is the Swedish transcription?',
          answer: 'Tilk is built from the ground up for Swedish – not a translated English service. It shows in how well the app handles Swedish grammar, dialects and industry jargon.',
        },
        {
          question: 'Can I customize the templates for my company?',
          answer: 'Yes! Every plan includes access to 6 standard templates. With Enterprise you can also create fully custom templates that match how your organization works.',
        },
        {
          question: 'What happens if the AI makes a mistake in the summary?',
          answer: 'AI isn’t perfect, so every summary is editable right in the app. You always have the final say before sharing or saving a summary.',
        },
      ],
    },
  }

  const t = content[lang]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-14 px-4 sm:py-20 sm:px-6 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-2 sm:mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-genty text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">{t.title}</h2>
          <p className="text-base sm:text-lg text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {t.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                className="bg-background border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-900">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Users,
  GraduationCap,
  Handshake,
  Landmark,
  Building2,
} from 'lucide-react'

interface UseCasesProps {
  lang: 'sv' | 'en'
}

export default function UseCases({ lang }: UseCasesProps) {
  const content = {
    sv: {
      eyebrow: 'Vem är Tilk för',
      title: 'Appen som anpassar sig efter dina möten',
      subtitle:
        'Inte tvärtom. Oavsett bransch eller roll, hittar Tilk rätt format för just ditt sammanhang.',
      cases: [
        {
          icon: Briefcase,
          title: 'Konsulter & frilansare',
          description:
            'Dokumentera kundmöten och workshops utan att tappa fokus på samtalet. Skicka snygga sammanfattningar direkt efter mötet.',
        },
        {
          icon: Users,
          title: 'HR & rekrytering',
          description:
            'Fokusera helt på kandidaten. Tilks intervjumall fångar svar, intryck och nästa steg – redo att delas med teamet.',
        },
        {
          icon: GraduationCap,
          title: 'Utbildare & föreläsare',
          description:
            'Spela in föreläsningar och utbildningstillfällen. Få strukturerat material att dela med deltagare i efterhand.',
        },
        {
          icon: Handshake,
          title: 'Säljare & kundansvariga',
          description:
            'Fånga behov, invändningar och nästa steg från varje säljsamtal – utan att sluta lyssna aktivt för att anteckna.',
        },
        {
          icon: Landmark,
          title: 'Styrelser & föreningar',
          description:
            'Skapa korrekta mötesprotokoll med agenda, beslut och justering – enligt formen din förening faktiskt använder.',
        },
        {
          icon: Building2,
          title: 'Företag & team',
          description:
            'Bygg egna mallar för hur just er organisation jobbar, med företagets logga och färger på varje exporterat dokument.',
        },
      ],
    },
    en: {
      eyebrow: 'Who Tilk is for',
      title: 'The app that adapts to your meetings',
      subtitle:
        'Not the other way around. Whatever your industry or role, Tilk finds the right format for your context.',
      cases: [
        {
          icon: Briefcase,
          title: 'Consultants & freelancers',
          description:
            'Document client meetings and workshops without losing focus on the conversation. Send polished summaries right after.',
        },
        {
          icon: Users,
          title: 'HR & recruitment',
          description:
            'Focus entirely on the candidate. Tilk\u2019s interview template captures answers, impressions and next steps – ready to share with your team.',
        },
        {
          icon: GraduationCap,
          title: 'Educators & speakers',
          description:
            'Record lectures and training sessions. Get structured material to share with participants afterwards.',
        },
        {
          icon: Handshake,
          title: 'Sales & account managers',
          description:
            'Capture needs, objections and next steps from every sales call – without breaking active listening to take notes.',
        },
        {
          icon: Landmark,
          title: 'Boards & associations',
          description:
            'Create accurate meeting minutes with agenda, decisions and approval – in the format your organization actually uses.',
        },
        {
          icon: Building2,
          title: 'Companies & teams',
          description:
            'Build your own templates for how your organization works, with your company logo and colors on every exported document.',
        },
      ],
    },
  }

  const t = content[lang]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-genty text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <useCase.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Watch,
  Upload,
  Video,
  FileText,
  Camera,
  Edit3,
  FolderOpen,
  Palette,
  Building2,
} from 'lucide-react'

interface FeaturesProps {
  lang: 'sv' | 'en'
}

export default function Features({ lang }: FeaturesProps) {
  const content = {
    sv: {
      eyebrow: 'Funktioner',
      title: 'Allt du behöver för perfekta mötesanteckningar',
      subtitle: 'Från inspelning till färdig rapport – Tilk hänger med genom hela flödet.',
      features: [
        {
          icon: Watch,
          title: 'Spela in var du än är',
          description: 'Från iPhone eller direkt från Apple Watch. Perfekt för möten on-the-go.',
        },
        {
          icon: Upload,
          title: 'Importera ljud',
          description: 'Redan spelat in mötet? Importera ljudfilen direkt från telefonen.',
        },
        {
          icon: Video,
          title: 'Digitala möten',
          description: 'Koppla upp mot Teams, Google Meet och Zoom (Enterprise) och låt Tilk lyssna med.',
        },
        {
          icon: Camera,
          title: 'Skanna mötesagendan',
          description: 'Fota agendan med kameran – Tilk strukturerar sammanfattningen efter den.',
        },
        {
          icon: Edit3,
          title: 'Redigerbara sammanfattningar',
          description: 'AI:n gör grovjobbet, du finslipar. Allt går att justera i efterhand.',
        },
        {
          icon: FolderOpen,
          title: 'Mappar med AI-insikter',
          description: 'Samla möten i mappar och få mönster och insikter över tid – inte bara enskilda anteckningar.',
        },
        {
          icon: Palette,
          title: 'Egna PDF-dokument',
          description: 'Exportera med företagets logga och färger. Ser proffsigt ut varje gång.',
        },
        {
          icon: Building2,
          title: 'Enterprise-mallar',
          description: 'Skräddarsy mallar efter er organisations behov och struktur.',
        },
      ],
      templatesCard: {
        icon: FileText,
        title: '6 professionella mallar',
        description: 'Välj den mall som passar mötet – Tilk formaterar automatiskt.',
        items: [
          'Kort sammanfattning',
          'Komplett mötesanteckning',
          'Intervju & Rekrytering',
          'Föreläsning & Utbildning',
          'Kundmöte & Säljsamtal',
          'Mötesprotokoll med agenda',
        ],
      },
    },
    en: {
      eyebrow: 'Features',
      title: 'Everything you need for perfect meeting notes',
      subtitle: 'From recording to finished report – Tilk follows you through the whole flow.',
      features: [
        {
          icon: Watch,
          title: 'Record anywhere',
          description: 'From your iPhone or straight from your Apple Watch. Perfect for meetings on-the-go.',
        },
        {
          icon: Upload,
          title: 'Import audio',
          description: 'Already recorded the meeting? Import the audio file straight from your phone.',
        },
        {
          icon: Video,
          title: 'Digital meetings',
          description: 'Connect to Teams, Google Meet and Zoom (Enterprise) and let Tilk listen in.',
        },
        {
          icon: Camera,
          title: 'Scan the agenda',
          description: 'Snap a photo of the agenda – Tilk structures the summary around it.',
        },
        {
          icon: Edit3,
          title: 'Editable summaries',
          description: 'AI does the heavy lifting, you polish the details. Everything is editable afterwards.',
        },
        {
          icon: FolderOpen,
          title: 'Folders with AI insights',
          description: 'Group meetings into folders and get patterns and insights over time – not just isolated notes.',
        },
        {
          icon: Palette,
          title: 'Custom PDF documents',
          description: 'Export with your company logo and colors. Looks professional every time.',
        },
        {
          icon: Building2,
          title: 'Enterprise templates',
          description: 'Tailor templates to your organization\u2019s needs and structure.',
        },
      ],
      templatesCard: {
        icon: FileText,
        title: '6 professional templates',
        description: 'Pick the template that fits the meeting – Tilk formats it automatically.',
        items: [
          'Quick summary',
          'Complete meeting notes',
          'Interview & Recruitment',
          'Lecture & Education',
          'Client meeting & Sales call',
          'Meeting minutes with agenda',
        ],
      },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mallar-kortet - extra brett eftersom det har en lista */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white border border-gray-200 rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
              <t.templatesCard.icon size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.templatesCard.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-5">{t.templatesCard.description}</p>
            <ul className="space-y-2.5">
              {t.templatesCard.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {t.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <feature.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

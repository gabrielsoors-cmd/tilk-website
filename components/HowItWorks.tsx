interface HowItWorksProps {
  lang: 'sv' | 'en'
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const content = {
    sv: {
      title: 'Så funkar det',
      steps: [
        {
          number: '1',
          title: 'Spela in',
          description: 'Tryck på record-knappen. Tilk lyssnar medan du är närvarande.',
        },
        {
          number: '2',
          title: 'Transkribera',
          description: 'AI transkriberar automatiskt till perfekt svensk text.',
        },
        {
          number: '3',
          title: 'Sammanfatta',
          description: 'Få strukturerade sammanfattningar, beslut och action items direkt.',
        },
      ],
      subtitle: 'Från möte till beslut på sekunder.',
    },
    en: {
      title: 'How it works',
      steps: [
        {
          number: '1',
          title: 'Record',
          description: 'Hit the record button. Tilk listens while you stay present.',
        },
        {
          number: '2',
          title: 'Transcribe',
          description: 'AI automatically transcribes to perfect Swedish text.',
        },
        {
          number: '3',
          title: 'Summarize',
          description: 'Get structured summaries, decisions and action items instantly.',
        },
      ],
      subtitle: 'From meeting to action in seconds.',
    },
  }

  const t = content[lang]

  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t.title}
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">{t.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-12">
          {t.steps.map((step, i) => (
            <div key={i} className="text-center relative">
              {/* Connecting line */}
              {i < t.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0" />
              )}

              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-glow">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
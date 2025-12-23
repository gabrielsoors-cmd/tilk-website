interface FeaturesProps {
  lang: 'sv' | 'en'
}

export default function Features({ lang }: FeaturesProps) {
  const content = {
    sv: {
      title: 'Allt du behöver för perfekta mötesanteckningar',
      features: [
        {
          title: '5 professionella mallar',
          description: 'Snabb sammanfattning, 3-5 punkter, Action items, Beslut, Kort mötesprotokoll – välj vad som passar.',
        },
        {
          title: 'Perfekt svenska',
          description: 'Byggt för svenska företag. Ingen Google Translate-känsla, bara naturlig svenska.',
        },
        {
          title: 'Apple Watch integration',
          description: 'Spela in direkt från handleden. Perfekt för möten on-the-go.',
        },
        {
          title: 'Från möte till beslut',
          description: 'Få beslutspunkter, action items och sammanfattningar direkt. Redo att agera på.',
        },
      ],
    },
    en: {
      title: 'Everything you need for perfect meeting notes',
      features: [
        {
          title: '5 professional templates',
          description: 'Quick summary, 3-5 key points, Action items, Decisions, Meeting protocol – choose what fits.',
        },
        {
          title: 'Perfect Swedish',
          description: 'Built for Swedish companies. No Google Translate feel, just natural Swedish.',
        },
        {
          title: 'Apple Watch integration',
          description: 'Record directly from your wrist. Perfect for meetings on-the-go.',
        },
        {
          title: 'From meeting to decision',
          description: 'Get decision points, action items and summaries instantly. Ready to act on.',
        },
      ],
    },
  }

  const t = content[lang]

  return (
    <section className="py-20 px-6 bg-darkCard">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-dark border border-darkBorder rounded-card p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary/20 transition">
                {i + 1}
              </div>

              <h3 className="text-xl font-bold mb-3 pr-12">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'

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

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark to-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <Image
              src="/images/tilk-logo-text.svg"
              alt="Tilk"
              width={180}
              height={60}
              className="mb-8 mx-auto lg:mx-0 invert"
            />

            <p className="text-2xl italic text-gray-400 mb-6">{t.tagline}</p>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.headline}
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
              {t.description}
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-glow"
            >
              {t.cta}
              <span>→</span>
            </a>
          </div>

          {/* Right: Mockup */}
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
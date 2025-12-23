import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Priser - Tilk',
  description: 'Välj den plan som passar dina behov. Från gratis till Enterprise.',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '0 kr',
      period: '',
      minutes: '60 minuter totalt',
      ideal: 'Perfekt för att testa Tilk',
      features: [
        '60 minuter inspelning (totalt)',
        'Alla 5 standardmallar',
        'Apple Watch integration',
        'Perfekt svenska transkribering',
        'AI-sammanfattningar',
      ],
      cta: 'Ladda ner gratis',
      ctaLink: 'https://apps.apple.com/app/tilk',
      highlight: false,
      popular: false,
    },
    {
      name: 'Basic',
      price: '49 kr',
      period: '/mån',
      minutes: '300 minuter/månad',
      ideal: 'För dig med få möten',
      features: [
        '300 minuter/månad',
        '1 standardmall att välja',
        'Perfekt svenska transkribering',
        'AI-sammanfattningar',
        'Email support',
      ],
      cta: 'Kom igång',
      ctaLink: 'https://apps.apple.com/app/tilk',
      highlight: false,
      popular: false,
    },
    {
      name: 'Pro',
      price: '149 kr',
      period: '/mån',
      minutes: '1000 minuter/månad',
      ideal: 'För dagliga möten',
      features: [
        '1000 minuter/månad',
        'Alla 5 standardmallar',
        'Apple Watch integration',
        'Perfekt svenska transkribering',
        'AI-sammanfattningar',
        'Prioriterad support',
      ],
      cta: 'Kom igång',
      ctaLink: 'https://apps.apple.com/app/tilk',
      highlight: true,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Från 499 kr',
      period: '/mån',
      minutes: 'Anpassat minutpaket',
      ideal: 'För dig som vill maxa produktiviteten',
      features: [
        'Anpassat antal minuter',
        'Alla standardmallar',
        'Custom templates (egna mallar)',
        'Apple Watch integration',
        'Organization management',
        'Dedikerad support',
        'Fakturering',
      ],
      cta: 'Kontakta oss',
      ctaLink: 'mailto:enterprise@tilk.app',
      highlight: false,
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'Kan jag byta plan när som helst?',
      answer: 'Ja! Du kan uppgradera eller nedgradera din plan när som helst via appen. Ändringar träder i kraft omedelbart.',
    },
    {
      question: 'Vad händer om jag går över min minutgräns?',
      answer: 'För Free-plan: Nya inspelningar blockeras när du når 60 minuter. För betalda planer: Kontakta oss för att uppgradera till en högre plan.',
    },
    {
      question: 'Hur funkar Enterprise-planen?',
      answer: (
        <>
          Kontakta oss på{' '}
          <a href="mailto:enterprise@tilk.app" className="text-primary hover:underline">
            enterprise@tilk.app
          </a>
          {' '}så skräddarsyr vi en lösning för ert företag. Vi kan anpassa antal minuter, skapa custom templates och sätta upp organization management.
        </>
      ),
    },
    {
      question: 'Vilka betalsätt accepterar ni?',
      answer: 'Vi accepterar alla vanliga kreditkort via Apple\'s betalningssystem. För Enterprise-planer kan vi även fakturera.',
    },
    {
      question: 'Kan jag avsluta när som helst?',
      answer: 'Ja, du kan när som helst avsluta din prenumeration. Du har tillgång till din plan till slutet av den betalda perioden.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Priser</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Välj den plan som passar dina behov. Byt eller avsluta när som helst.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-card p-8 transition-all duration-300 flex flex-col ${
                  plan.highlight
                    ? 'bg-primary shadow-glow scale-105 border-2 border-primary'
                    : 'bg-darkCard border border-darkBorder hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold">
                    Populärast
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={plan.highlight ? 'text-white/80' : 'text-gray-400'}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlight ? 'text-white/90' : 'text-gray-400'
                  }`}
                >
                  {plan.minutes}
                </p>

                <p className={`text-xs italic mb-6 ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.ideal}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.highlight ? 'text-white/90' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                href={plan.ctaLink}
                  target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-full py-3 rounded-full font-semibold transition text-center block ${
                    plan.highlight
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Vanliga frågor
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-darkCard border border-darkBorder rounded-card p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Redo att börja?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Ladda ner Tilk gratis och börja spara tid på dina mötesanteckningar idag.
            </p>
            <Link
              href="https://apps.apple.com/app/tilk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-glow"
            >
              Prova gratis idag →
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}
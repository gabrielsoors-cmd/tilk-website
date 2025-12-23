import Link from 'next/link'

interface PricingTeaserProps {
  lang: 'sv' | 'en'
}

export default function PricingTeaser({ lang }: PricingTeaserProps) {
  const content = {
    sv: {
      title: 'Välj din plan',
      plans: [
        { name: 'Free', price: '0 kr', minutes: '60 min totalt' },
        { name: 'Basic', price: '49 kr', period: '/mån', minutes: '300 min/mån' },
        { name: 'Pro', price: '149 kr', period: '/mån', minutes: '1000 min/mån', highlight: true },
        { name: 'Enterprise', price: 'Från 499 kr', period: '/mån', minutes: 'Anpassat' },
      ],
      cta: 'Se alla planer',
    },
    en: {
      title: 'Choose your plan',
      plans: [
        { name: 'Free', price: '0 kr', minutes: '60 min total' },
        { name: 'Basic', price: '49 kr', period: '/month', minutes: '300 min/month' },
        { name: 'Pro', price: '149 kr', period: '/month', minutes: '1000 min/month', highlight: true },
        { name: 'Enterprise', price: 'From 499 kr', period: '/month', minutes: 'Custom' },
      ],
      cta: 'See all plans',
    },
  }

  const t = content[lang]

  return (
    <section className="py-20 px-6 bg-darkCard">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {t.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-card p-8 text-center transition-all duration-300 ${
                plan.highlight
                  ? 'bg-primary shadow-glow scale-105 border-2 border-primary'
                  : 'bg-dark border border-darkBorder hover:border-primary/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold">
                  Populärast
                </div>
              )}

              <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlight ? 'text-white/80' : 'text-gray-400'}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>
                {plan.minutes}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={lang === 'en' ? '/en/pricing' : '/pricing'}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
          >
            {t.cta} →
          </Link>
        </div>
      </div>
    </section>
  )
}
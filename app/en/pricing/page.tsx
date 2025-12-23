import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing - Tilk',
  description: 'Choose the plan that fits your needs. From free to Enterprise.',
}

export default function PricingPageEN() {
  const plans = [
    {
      name: 'Free',
      price: '0 kr',
      period: '',
      minutes: '60 minutes total',
      ideal: 'Perfect for testing Tilk',
      features: [
        '60 minutes recording (total)',
        'All 5 standard templates',
        'Apple Watch integration',
        'Perfect Swedish transcription',
        'AI summaries',
      ],
      cta: 'Download free',
      ctaLink: 'https://apps.apple.com/app/tilk',
      highlight: false,
      popular: false,
    },
    {
      name: 'Basic',
      price: '49 kr',
      period: '/month',
      minutes: '300 minutes/month',
      ideal: 'For 1-2 meetings per week',
      features: [
        '300 minutes/month',
        '1 standard template to choose',
        'Perfect Swedish transcription',
        'AI summaries',
        'Email support',
      ],
      cta: 'Get started',
      ctaLink: 'https://apps.apple.com/app/tilk',
      highlight: false,
      popular: false,
    },
    {
      name: 'Pro',
      price: '149 kr',
      period: '/month',
      minutes: '1000 minutes/month',
      ideal: 'For daily meetings',
      features: [
        '1000 minutes/month',
        'All 5 standard templates',
        'Apple Watch integration',
        'Perfect Swedish transcription',
        'AI summaries',
        'Priority support',
      ],
      cta: 'Get started',
      ctaLink: 'https://apps.apple.com/app/tilk',
      highlight: true,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'From 499 kr',
      period: '/month',
      minutes: 'Custom minute package',
      ideal: 'For real professionals',
      features: [
        'Custom number of minutes',
        'All standard templates',
        'Custom templates',
        'Apple Watch integration',
        'Organization management',
        'Dedicated support',
        'Invoicing',
      ],
      cta: 'Contact us',
      ctaLink: 'mailto:enterprise@tilk.app',
      highlight: false,
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan anytime via the app. Changes take effect immediately.',
    },
    {
      question: 'What happens if I exceed my minute limit?',
      answer: 'For Free plan: New recordings are blocked when you reach 60 minutes. For paid plans: Contact us to upgrade to a higher plan.',
    },
    {
      question: 'How does the Enterprise plan work?',
      answer: (
        <>
          Contact us at{' '}
          <a href="mailto:enterprise@tilk.app" className="text-primary hover:underline">
            enterprise@tilk.app
          </a>
          {' '}and we will tailor a solution for your company. We can customize the number of minutes, create custom templates and set up organization management.
        </>
      ),
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all common credit cards via Apple\'s payment system. For Enterprise plans we can also invoice.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You have access to your plan until the end of the paid period.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Pricing</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Change or cancel anytime.
            </p>
          </div>

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
                    Most Popular
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
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/90' : 'text-gray-400'}`}>
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

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              FAQ
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

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Download Tilk for free and start saving time on your meeting notes today.
            </p>
            <Link
              href="https://apps.apple.com/app/tilk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-glow"
            >
              Try for free today →
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  )
}
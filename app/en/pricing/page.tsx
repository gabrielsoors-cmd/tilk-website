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
        'All 6 standard templates',
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
        'All 6 standard templates',
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
        'All 6 standard templates',
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
      <main className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="font-genty text-3xl sm:text-5xl md:text-6xl font-medium mb-3 sm:mb-4 text-gray-900">Pricing</h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Change or cancel anytime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14 sm:mb-20">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-card p-6 sm:p-8 transition-all duration-300 flex flex-col ${
                  plan.highlight
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 sm:scale-105'
                    : 'bg-white border border-gray-200 hover:border-primary/40 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold shadow">
                    Most Popular
                  </div>
                )}

                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mb-4">
                  <span className={`text-3xl sm:text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  {plan.period && (
                    <span className={plan.highlight ? 'text-white/80' : 'text-gray-500'}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                  {plan.minutes}
                </p>

                <p className={`text-xs italic mb-6 ${plan.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                  {plan.ideal}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm sm:text-base ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>
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
            <h2 className="font-genty text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-8 sm:mb-12 text-gray-900">
              FAQ
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-card p-5 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-20 text-center">
            <h2 className="font-genty text-2xl sm:text-3xl font-medium mb-4 text-gray-900">Ready to get started?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Download Tilk for free and start saving time on your meeting notes today.
            </p>
            <Link
              href="https://apps.apple.com/app/tilk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition hover:shadow-lg hover:shadow-primary/30"
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

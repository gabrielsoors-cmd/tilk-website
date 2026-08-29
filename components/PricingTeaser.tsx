'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingTeaserProps {
  lang: 'sv' | 'en'
}

function useCounter(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started || target <= 0) {
      setCount(target > 0 ? target : 0)
      return
    }
    let current = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

interface Plan {
  name: string
  price: string
  numericMinutes: number
  minuteLabel: string
  period?: string
  highlight?: boolean
  features: string[]
}

function PlanCard({ plan, index, started, lang }: { plan: Plan; index: number; started: boolean; lang: 'sv' | 'en' }) {
  const count = useCounter(plan.numericMinutes > 0 ? plan.numericMinutes : 0, 1200, started)
  const displayMinutes = plan.numericMinutes <= 0 ? plan.minuteLabel : `${count} ${plan.minuteLabel}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-left transition-all duration-300 ${
        plan.highlight
          ? 'bg-primary text-white shadow-xl shadow-primary/25 lg:scale-105'
          : 'bg-white border border-gray-200 hover:border-primary/40 hover:shadow-lg'
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-3.5 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-sm">
          {lang === 'sv' ? 'Populärast' : 'Most popular'}
        </div>
      )}
      <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
        {plan.name}
      </h3>
      <div className="mb-1">
        <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
        {plan.period && <span className={plan.highlight ? 'text-white/80' : 'text-gray-500'}>{plan.period}</span>}
      </div>
      <p className={`text-sm tabular-nums min-h-[1.25rem] mb-5 sm:mb-6 ${plan.highlight ? 'text-white/80' : 'text-gray-500'}`}>
        {displayMinutes}
      </p>
      <ul className="space-y-2 sm:space-y-2.5">
        {plan.features.map((feature, i) => (
          <li key={i} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>
            <Check size={16} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-primary'}`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function PricingTeaser({ lang }: PricingTeaserProps) {
  const content = {
    sv: {
      eyebrow: 'Priser',
      title: 'Välj din plan',
      subtitle: 'Kom igång gratis. Uppgradera när du behöver mer.',
      plans: [
        { name: 'Free', price: '0 kr', numericMinutes: 60, minuteLabel: 'min totalt', period: undefined, highlight: false, features: ['Provmöte på 60 minuter', 'Alla 6 mallar', 'Inspelning från iPhone & Apple Watch'] },
        { name: 'Basic', price: '49 kr', numericMinutes: 300, minuteLabel: 'min/mån', period: '/mån', highlight: false, features: ['300 min/mån', 'Alla 6 mallar', 'Redigerbara sammanfattningar'] },
        { name: 'Pro', price: '149 kr', numericMinutes: 1000, minuteLabel: 'min/mån', period: '/mån', highlight: true, features: ['1000 min/mån', 'Mappar med AI-insikter', 'Anpassade PDF-dokument'] },
        { name: 'Enterprise', price: 'Från 499 kr', numericMinutes: -1, minuteLabel: 'Obegränsad tid', period: '/mån', highlight: false, features: ['Obegränsad inspelningstid', 'Egna mallar för organisationen', 'Digitala möten (Teams, Meet, Zoom)'] },
      ],
      cta: 'Se alla planer',
    },
    en: {
      eyebrow: 'Pricing',
      title: 'Choose your plan',
      subtitle: 'Start for free. Upgrade when you need more.',
      plans: [
        { name: 'Free', price: '0 kr', numericMinutes: 60, minuteLabel: 'min total', period: undefined, highlight: false, features: ['60-minute trial meeting', 'All 6 templates', 'Recording from iPhone & Apple Watch'] },
        { name: 'Basic', price: '49 kr', numericMinutes: 300, minuteLabel: 'min/month', period: '/month', highlight: false, features: ['300 min/month', 'All 6 templates', 'Editable summaries'] },
        { name: 'Pro', price: '149 kr', numericMinutes: 1000, minuteLabel: 'min/month', period: '/month', highlight: true, features: ['1000 min/month', 'Folders with AI insights', 'Custom PDF documents'] },
        { name: 'Enterprise', price: 'From 499 kr', numericMinutes: -1, minuteLabel: 'Unlimited time', period: '/month', highlight: false, features: ['Unlimited recording time', 'Custom templates for your org', 'Digital meetings (Teams, Meet, Zoom)'] },
      ],
      cta: 'See all plans',
    },
  }

  const t = content[lang]
  const sectionRef = useRef<HTMLElement>(null)
  const [counterStarted, setCounterStarted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="py-14 px-4 sm:py-20 sm:px-6 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-2 sm:mb-3">
            {t.eyebrow}
          </span>
          <h2 className="font-genty text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-3 sm:mb-4">{t.title}</h2>
          <p className="text-base sm:text-lg text-gray-600">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {t.plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} started={counterStarted} lang={lang} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href={lang === 'en' ? '/en/pricing' : '/pricing'}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-base sm:text-lg py-2"
          >
            {t.cta} →
          </Link>
        </div>
      </div>
    </section>
  )
}

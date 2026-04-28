'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface PricingTeaserProps {
  lang: 'sv' | 'en'
}

function useCounter(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started || target <= 0) { setCount(target > 0 ? target : 0); return }
    let current = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else { setCount(current) }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])
  return count
}

function PlanCard({ name, price, numericMinutes, minuteLabel, period, highlight, started, lang }: {
  name: string; price: string; numericMinutes: number; minuteLabel: string
  period?: string; highlight?: boolean; started: boolean; lang: 'sv' | 'en'
}) {
  const count = useCounter(numericMinutes > 0 ? numericMinutes : 0, 1200, started)
  const displayMinutes = numericMinutes <= 0 ? minuteLabel : `${count} ${minuteLabel}`

  return (
    <div
      className={`relative rounded-card p-8 text-center transition-all duration-300 ${
        highlight ? 'border-2 border-primary scale-105' : 'border border-white/10 hover:border-primary/40'
      }`}
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: highlight
          ? 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.10) 100%)'
          : 'rgba(255,255,255,0.04)',
        boxShadow: highlight ? '0 0 40px rgba(99,102,241,0.2)' : undefined,
      }}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
          {lang === 'sv' ? 'Populärast' : 'Most popular'}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3">{name}</h3>
      <div className="mb-2">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className={highlight ? 'text-white/80' : 'text-gray-400'}>{period}</span>}
      </div>
      <p className={`text-sm tabular-nums min-h-[1.25rem] ${highlight ? 'text-white/80' : 'text-gray-400'}`}>
        {displayMinutes}
      </p>
    </div>
  )
}

export default function PricingTeaser({ lang }: PricingTeaserProps) {
  const content = {
    sv: {
      title: 'Välj din plan',
      plans: [
        { name: 'Free', price: '0 kr', numericMinutes: 60, minuteLabel: 'min totalt', period: undefined, highlight: false },
        { name: 'Basic', price: '49 kr', numericMinutes: 300, minuteLabel: 'min/mån', period: '/mån', highlight: false },
        { name: 'Pro', price: '149 kr', numericMinutes: 1000, minuteLabel: 'min/mån', period: '/mån', highlight: true },
        { name: 'Enterprise', price: 'Från 499 kr', numericMinutes: -1, minuteLabel: 'Anpassat', period: '/mån', highlight: false },
      ],
      cta: 'Se alla planer',
    },
    en: {
      title: 'Choose your plan',
      plans: [
        { name: 'Free', price: '0 kr', numericMinutes: 60, minuteLabel: 'min total', period: undefined, highlight: false },
        { name: 'Basic', price: '49 kr', numericMinutes: 300, minuteLabel: 'min/month', period: '/month', highlight: false },
        { name: 'Pro', price: '149 kr', numericMinutes: 1000, minuteLabel: 'min/month', period: '/month', highlight: true },
        { name: 'Enterprise', price: 'From 499 kr', numericMinutes: -1, minuteLabel: 'Custom', period: '/month', highlight: false },
      ],
      cta: 'See all plans',
    },
  }

  const t = content[lang]
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [counterStarted, setCounterStarted] = useState(false)

  useEffect(() => {
    const titleEl = titleRef.current
    if (titleEl) {
      titleEl.style.opacity = '0'
      titleEl.style.transform = 'translateY(20px)'
      titleEl.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
    }
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCounterStarted(true)
        if (titleEl) { titleEl.style.opacity = '1'; titleEl.style.transform = 'translateY(0)' }
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-darkCard">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">{t.title}</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {t.plans.map((plan, i) => (
            <PlanCard key={i} {...plan} started={counterStarted} lang={lang} />
          ))}
        </div>
        <div className="text-center">
          <Link href={lang === 'en' ? '/en/pricing' : '/pricing'} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
            {t.cta} →
          </Link>
        </div>
      </div>
    </section>
  )
}

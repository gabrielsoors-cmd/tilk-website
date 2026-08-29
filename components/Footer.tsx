'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface FooterProps {
  lang: 'sv' | 'en'
}

export default function Footer({ lang }: FooterProps) {
  const content = {
    sv: {
      tagline: 'Say it.',
      description: 'AI-driven mötesinspelning för iPhone och Apple Watch.',
      product: 'Produkt',
      company: 'Företag',
      legal: 'Juridiskt',
      links: { pricing: 'Priser', enterprise: 'Enterprise', compare: 'Jämför', contact: 'Kontakt', privacy: 'Integritetspolicy', terms: 'Användarvillkor' },
      contact: { general: 'Allmänt', enterprise: 'Företag' },
      appStoreAlt: 'Ladda ned på App Store',
      builtIn: 'Byggd i Sverige.',
      rights: 'Alla rättigheter förbehållna.',
    },
    en: {
      tagline: 'Say it.',
      description: 'AI-powered meeting recording for iPhone and Apple Watch.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      links: { pricing: 'Pricing', enterprise: 'Enterprise', compare: 'Compare', contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Service' },
      contact: { general: 'General', enterprise: 'Enterprise' },
      appStoreAlt: 'Download on the App Store',
      builtIn: 'Built in Sweden.',
      rights: 'All rights reserved.',
    },
  }

  const t = content[lang]
  const basePath = lang === 'en' ? '/en' : ''

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12"
        >
          <div className="col-span-2 md:col-span-2">
            <Image src="/images/tilk-icon.svg" alt="Tilk" width={40} height={40} className="mb-3 sm:mb-4" />
            <p className="font-genty text-primary italic text-base sm:text-lg mb-2 sm:mb-3">{t.tagline}</p>
            <p className="text-sm sm:text-base text-gray-500 max-w-xs mb-5 sm:mb-6">{t.description}</p>
            <a
              href="https://apps.apple.com/se/app/tilk/id6759267312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt={t.appStoreAlt}
                className="h-9 sm:h-10 hover:opacity-80 transition"
              />
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t.product}</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><Link href={`${basePath}/pricing`} className="text-sm sm:text-base text-gray-500 hover:text-primary transition">{t.links.pricing}</Link></li>
              <li><Link href={`${basePath}/enterprise`} className="text-sm sm:text-base text-gray-500 hover:text-primary transition">{t.links.enterprise}</Link></li>
              <li><Link href={`${basePath}/compare`} className="text-sm sm:text-base text-gray-500 hover:text-primary transition">{t.links.compare}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t.company}</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><Link href={`${basePath}/contact`} className="text-sm sm:text-base text-gray-500 hover:text-primary transition">{t.links.contact}</Link></li>
              <li><a href="mailto:contact@tilk.app" className="text-sm sm:text-base text-gray-500 hover:text-primary transition break-all">{t.contact.general}: contact@tilk.app</a></li>
              <li><a href="mailto:enterprise@tilk.app" className="text-sm sm:text-base text-gray-500 hover:text-primary transition break-all">{t.contact.enterprise}: enterprise@tilk.app</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t.legal}</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><Link href={`${basePath}/privacy`} className="text-sm sm:text-base text-gray-500 hover:text-primary transition">{t.links.privacy}</Link></li>
              <li><Link href={`${basePath}/terms`} className="text-sm sm:text-base text-gray-500 hover:text-primary transition">{t.links.terms}</Link></li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-500">© 2026 Powered by Soors Ventures AB. {t.rights}</p>
          <p className="text-xs sm:text-sm text-gray-400">{t.builtIn}</p>
        </div>
      </div>
    </footer>
  )
}

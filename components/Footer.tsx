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
      links: {
        pricing: 'Priser',
        enterprise: 'Enterprise',
        compare: 'Jämför',
        contact: 'Kontakt',
        privacy: 'Integritetspolicy',
        terms: 'Användarvillkor',
      },
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
      links: {
        pricing: 'Pricing',
        enterprise: 'Enterprise',
        compare: 'Compare',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      contact: { general: 'General', enterprise: 'Enterprise' },
      appStoreAlt: 'Download on the App Store',
      builtIn: 'Built in Sweden.',
      rights: 'All rights reserved.',
    },
  }

  const t = content[lang]
  const basePath = lang === 'en' ? '/en' : ''

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid md:grid-cols-5 gap-12 mb-12"
        >
          <div className="md:col-span-2">
            <Image src="/images/tilk-icon.svg" alt="Tilk" width={44} height={44} className="mb-4" />
            <p className="font-genty text-primary italic text-lg mb-3">{t.tagline}</p>
            <p className="text-gray-500 max-w-xs mb-6">{t.description}</p>
            
              href="https://apps.apple.com/se/app/tilk/id6759267312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt={t.appStoreAlt}
                className="h-10 hover:opacity-80 transition"
              />
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.product}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${basePath}/pricing`} className="text-gray-500 hover:text-primary transition">
                  {t.links.pricing}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/enterprise`} className="text-gray-500 hover:text-primary transition">
                  {t.links.enterprise}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/compare`} className="text-gray-500 hover:text-primary transition">
                  {t.links.compare}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${basePath}/contact`} className="text-gray-500 hover:text-primary transition">
                  {t.links.contact}
                </Link>
              </li>
              <li>
                <a href="mailto:contact@tilk.app" className="text-gray-500 hover:text-primary transition">
                  {t.contact.general}: contact@tilk.app
                </a>
              </li>
              <li>
                <a href="mailto:enterprise@tilk.app" className="text-gray-500 hover:text-primary transition">
                  {t.contact.enterprise}: enterprise@tilk.app
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.legal}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${basePath}/privacy`} className="text-gray-500 hover:text-primary transition">
                  {t.links.privacy}
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/terms`} className="text-gray-500 hover:text-primary transition">
                  {t.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Powered by Soors Ventures AB. {t.rights}
          </p>
          <p className="text-gray-400 text-sm">{t.builtIn}</p>
        </div>
      </div>
    </footer>
  )
}

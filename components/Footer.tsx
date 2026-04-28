import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  lang: 'sv' | 'en'
}

export default function Footer({ lang }: FooterProps) {
  const content = {
    sv: {
      tagline: 'Say it.',
      product: 'Produkt',
      company: 'Företag',
      legal: 'Juridiskt',
      appStoreLabel: 'Ladda ned appen',
      links: { pricing: 'Priser', enterprise: 'Enterprise', contact: 'Kontakt', privacy: 'Integritetspolicy', terms: 'Användarvillkor' },
      contact: { general: 'Allmänt', enterprise: 'Företag' },
    },
    en: {
      tagline: 'Say it.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      appStoreLabel: 'Download the app',
      links: { pricing: 'Pricing', enterprise: 'Enterprise', contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Service' },
      contact: { general: 'General', enterprise: 'Enterprise' },
    },
  }

  const t = content[lang]
  const basePath = lang === 'en' ? '/en' : ''

  return (
    <footer className="bg-darkCard border-t border-darkBorder py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src="/images/tilk-icon.svg" alt="Tilk" width={48} height={48} className="invert mb-4" />
            <p className="text-gray-400 italic text-lg">{t.tagline}</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">{t.product}</h3>
            <ul className="space-y-3">
              <li><Link href={`${basePath}/pricing`} className="text-gray-400 hover:text-primary transition">{t.links.pricing}</Link></li>
              <li><Link href={`${basePath}/enterprise`} className="text-gray-400 hover:text-primary transition">{t.links.enterprise}</Link></li>
              <li><Link href={`${basePath}/compare`} className="text-gray-400 hover:text-primary transition">{lang === 'sv' ? 'Jämför' : 'Compare'}</Link></li>
              <li>
                
                <a href="https://apps.apple.com/app/id6748013897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 814 1000" fill="currentColor">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-150.3-109.7C79.6 728.1 32 583.3 32 443.8c0-234 152.5-360 300.8-360 79.6 0 146 52.5 196.1 52.5 47.8 0 122.4-55.7 211.5-55.7.8 0 1.6 0 2.4.1zm-174.2-120.5c37.1-44.2 63.1-105.5 63.1-166.8 0-8.5-.8-17.1-2.4-24.3-59.8 2.4-130.4 40.2-173.6 89.6-33.5 37.8-65.7 99-65.7 161.1 0 9.3 1.6 18.6 2.4 21.6 3.2.8 8.5 1.6 13.7 1.6 54.2 0 119.4-36.3 162.5-83.8z" />
                  </svg>
                  {t.appStoreLabel}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li><Link href={`${basePath}/contact`} className="text-gray-400 hover:text-primary transition">{t.links.contact}</Link></li>
              <li><a href="mailto:contact@tilk.app" className="text-gray-400 hover:text-primary transition">{t.contact.general}: contact@tilk.app</a></li>
              <li><a href="mailto:enterprise@tilk.app" className="text-gray-400 hover:text-primary transition">{t.contact.enterprise}: enterprise@tilk.app</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">{t.legal}</h3>
            <ul className="space-y-3">
              <li><Link href={`${basePath}/privacy`} className="text-gray-400 hover:text-primary transition">{t.links.privacy}</Link></li>
              <li><Link href={`${basePath}/terms`} className="text-gray-400 hover:text-primary transition">{t.links.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-darkBorder pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 Powered by Soors Ventures AB. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Built in Sweden.</p>
        </div>
      </div>
    </footer>
  )
}

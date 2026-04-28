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
                
                <a href="https://apps.apple.com/se/app/tilk/id6759267312"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt={lang === 'sv' ? 'Ladda ned på App Store' : 'Download on the App Store'}
                    className="h-8 hover:opacity-80 transition"
                  />
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

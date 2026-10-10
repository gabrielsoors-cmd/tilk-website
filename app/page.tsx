import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import HowItWorks from '@/components/HowItWorks'
import Trust from '@/components/Trust'
import PricingTeaser from '@/components/PricingTeaser'
import FAQ from '@/components/FAQ'
import ClosingCTA from '@/components/ClosingCTA'
import Footer from '@/components/Footer'
import { buildMetadata, SITE_URL } from '@/lib/seo'

export const metadata = buildMetadata({
  path: '',
  lang: 'sv',
  title: 'Tilk - Anteckna med AI byggd för Svenska företag',
  description: 'Tilk förvandlar mötes-kaos till klarhet med AI-sammanfattningar på perfekt svenska. Byggd för svenska företag och föreningar – prova gratis idag.',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tilk',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS',
  url: SITE_URL,
  description: 'AI-drivna mötessammanfattningar på perfekt svenska för iPhone och Apple Watch.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'SEK',
  },
  author: {
    '@type': 'Organization',
    name: 'Soors Ventures AB',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero lang="sv" />
        <Features lang="sv" />
        <UseCases lang="sv" />
        <HowItWorks lang="sv" />
        <Trust lang="sv" />
        <PricingTeaser lang="sv" />
        <FAQ lang="sv" />
        <ClosingCTA lang="sv" />
      </main>
      <Footer lang="sv" />
    </>
  )
}

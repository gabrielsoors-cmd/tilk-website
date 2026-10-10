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
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: '',
  lang: 'en',
  title: 'Tilk - AI Meeting Notes Built for Swedish Companies',
  description: 'Tilk turns meeting chaos into clarity with AI summaries in perfect Swedish. Built for Swedish companies and organizations – try it free today.',
})

export default function HomePageEN() {
  return (
    <>
      <Navbar />
      <main>
        <Hero lang="en" />
        <Features lang="en" />
        <UseCases lang="en" />
        <HowItWorks lang="en" />
        <Trust lang="en" />
        <PricingTeaser lang="en" />
        <FAQ lang="en" />
        <ClosingCTA lang="en" />
      </main>
      <Footer lang="en" />
    </>
  )
}

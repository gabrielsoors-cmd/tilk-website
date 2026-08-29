import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import HowItWorks from '@/components/HowItWorks'
import Trust from '@/components/Trust'
import PricingTeaser from '@/components/PricingTeaser'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero lang="sv" />
        <Features lang="sv" />
        <UseCases lang="sv" />
        <HowItWorks lang="sv" />
        <Trust lang="sv" />
        <PricingTeaser lang="sv" />
      </main>
      <Footer lang="sv" />
    </>
  )
}

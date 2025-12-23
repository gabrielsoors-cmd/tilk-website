import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import PricingTeaser from '@/components/PricingTeaser'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero lang="sv" />
        <Features lang="sv" />
        <HowItWorks lang="sv" />
        <PricingTeaser lang="sv" />
      </main>
      <Footer lang="sv" />
    </>
  )
}
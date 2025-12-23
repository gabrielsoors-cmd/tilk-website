import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import PricingTeaser from '@/components/PricingTeaser'
import Footer from '@/components/Footer'

export default function HomePageEN() {
  return (
    <>
      <Navbar />
      <main>
        <Hero lang="en" />
        <Features lang="en" />
        <HowItWorks lang="en" />
        <PricingTeaser lang="en" />
      </main>
      <Footer lang="en" />
    </>
  )
}
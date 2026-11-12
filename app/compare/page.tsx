import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComparisonView from '@/components/ComparisonView'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: 'compare',
  lang: 'sv',
  title: 'Jämför Tilk med andra mötestjänster - Tilk',
  description: 'Belagd och daterad jämförelse av Tilk, Granola, Fireflies, Otter, Fathom, Klang, Notetaker.se och Microsoft Teams för svenska möten. Skriven 13 november 2026.',
})

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <ComparisonView lang="sv" />
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}

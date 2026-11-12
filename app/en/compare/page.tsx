import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ComparisonView from '@/components/ComparisonView'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: 'compare',
  lang: 'en',
  title: 'Compare Tilk with other meeting tools - Tilk',
  description: 'A sourced, dated comparison of Tilk, Granola, Fireflies, Otter, Fathom, Klang, Notetaker.se and Microsoft Teams for Swedish meetings. Written 13 November 2026.',
})

export default function ComparePageEN() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto">
          <ComparisonView lang="en" />
        </div>
      </main>
      <Footer lang="en" />
    </>
  )
}

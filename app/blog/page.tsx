import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { buildMetadata } from '@/lib/seo'
import { getAllPostsMeta } from '@/lib/blog'

export const metadata = buildMetadata({
  path: 'blog',
  lang: 'sv',
  title: 'Blogg - Tilk',
  description: 'Research, analyser och jämförelser om AI-mötesanteckningar, produktivitet och svenskt arbetsliv – alltid med källhänvisningar.',
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta()

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase mb-2 sm:mb-3">
              Blogg
            </span>
            <h1 className="font-genty text-3xl sm:text-5xl md:text-6xl font-medium mb-4 sm:mb-6 text-gray-900">
              Research & analyser
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Djupdykningar i AI-mötesanteckningar, möteskultur och produktivitet – alltid med källhänvisningar till den senaste datan.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-gray-500">Inga artiklar publicerade än – kom tillbaka snart.</p>
          ) : (
            <div className="space-y-5 sm:space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg transition"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{post.description}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{formatDate(post.date)}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { buildMetadata } from '@/lib/seo'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return buildMetadata({
    path: `blog/${post.slug}`,
    lang: 'sv',
    title: `${post.title} - Tilk`,
    description: post.description,
  })
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline mb-8">
            ← Alla artiklar
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-genty text-3xl sm:text-5xl font-medium mb-4 text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-gray-400 mb-10">{formatDate(post.date)}</p>

          <article
            className="prose prose-primary max-w-none prose-headings:font-genty prose-headings:font-medium prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-blockquote:border-primary prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-14 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              ← Till alla artiklar
            </Link>
          </div>
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}

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
            className="prose prose-lg max-w-none
              prose-headings:font-genty prose-headings:font-medium prose-headings:text-gray-900
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:leading-snug
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:my-5
              prose-li:text-gray-600 prose-li:my-1.5 prose-ul:my-5 prose-ol:my-5
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-em:text-gray-500
              prose-a:text-blue-600 prose-a:underline prose-a:underline-offset-2 prose-a:font-normal hover:prose-a:text-blue-800
              prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:my-8
              prose-table:text-sm prose-table:my-8
              prose-thead:border-gray-200
              prose-th:bg-primary/5 prose-th:text-gray-900 prose-th:font-semibold prose-th:py-3 prose-th:px-4
              prose-td:py-3 prose-td:px-4 prose-td:border-gray-100
              prose-hr:border-gray-200 prose-hr:my-10"
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

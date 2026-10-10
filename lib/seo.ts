import type { Metadata } from 'next'

export const SITE_URL = 'https://tilk.app'
export const SITE_NAME = 'Tilk'

interface PageSeoInput {
  /** Path with no leading/trailing slash, e.g. '' for home, 'pricing' for /pricing. */
  path: string
  title: string
  description: string
  lang: 'sv' | 'en'
}

/**
 * Builds a page's metadata, including the canonical URL and the
 * sv/en hreflang pair, so search engines know the two language
 * versions of a page are alternates of each other rather than
 * duplicate content.
 */
export function buildMetadata({ path, title, description, lang }: PageSeoInput): Metadata {
  const svUrl = path ? `${SITE_URL}/${path}` : SITE_URL
  const enUrl = path ? `${SITE_URL}/en/${path}` : `${SITE_URL}/en`
  const canonical = lang === 'en' ? enUrl : svUrl

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        sv: svUrl,
        en: enUrl,
        'x-default': svUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: lang === 'en' ? 'en_US' : 'sv_SE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

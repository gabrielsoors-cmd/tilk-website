import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const paths = ['', 'pricing', 'compare', 'enterprise', 'contact', 'privacy', 'terms']

function priorityFor(path: string): number {
  if (path === '') return 1
  if (path === 'pricing') return 0.8
  return 0.6
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const path of paths) {
    const svUrl = path ? `${SITE_URL}/${path}` : SITE_URL
    const enUrl = path ? `${SITE_URL}/en/${path}` : `${SITE_URL}/en`
    const languages = { sv: svUrl, en: enUrl }

    entries.push({
      url: svUrl,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: priorityFor(path),
      alternates: { languages },
    })
    entries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: priorityFor(path) - 0.1,
      alternates: { languages },
    })
  }

  return entries
}

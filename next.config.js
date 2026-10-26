/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Let Next/Vercel resize and convert images (AVIF/WebP) instead of
    // serving the multi-megabyte originals from /public as they are.
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

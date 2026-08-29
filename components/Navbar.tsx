'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={isEnglish ? '/en' : '/'} className="flex items-center">
          <Image src="/images/tilk-icon.svg" alt="Tilk" width={36} height={36} />
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 hidden sm:inline">Language:</span>
          <Link
            href={pathname === '/en' ? '/' : pathname.replace('/en', '') || '/'}
            className={`text-sm transition ${
              !isEnglish ? 'text-primary font-semibold' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Svenska
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href={pathname === '/' ? '/en' : `/en${pathname}`}
            className={`text-sm transition ${
              isEnglish ? 'text-primary font-semibold' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            English
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

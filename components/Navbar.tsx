'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = {
  sv: [
    { href: '/pricing', label: 'Priser' },
    { href: '/compare', label: 'Jämför' },
    { href: '/enterprise', label: 'Enterprise' },
    { href: '/contact', label: 'Kontakt' },
  ],
  en: [
    { href: '/pricing', label: 'Pricing' },
    { href: '/compare', label: 'Compare' },
    { href: '/enterprise', label: 'Enterprise' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Navbar() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const basePath = isEnglish ? '/en' : ''
  const links = NAV_LINKS[isEnglish ? 'en' : 'sv']

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href={basePath || '/'} className="flex items-center">
          <Image src="/images/tilk-icon.svg" alt="Tilk" width={32} height={32} className="sm:w-9 sm:h-9" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`${basePath}${link.href}`}
              className="text-sm font-medium text-gray-600 hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href={isEnglish ? pathname.replace('/en', '') || '/' : pathname}
              className={`text-xs sm:text-sm transition py-2 ${
                !isEnglish ? 'text-primary font-semibold' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Svenska
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href={isEnglish ? pathname : `/en${pathname === '/' ? '' : pathname}`}
              className={`text-xs sm:text-sm transition py-2 ${
                isEnglish ? 'text-primary font-semibold' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              English
            </Link>
          </div>

          <a
            href="#pricing"
            className="hidden md:inline-flex items-center justify-center bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition"
          >
            {isEnglish ? 'Try for free' : 'Prova gratis'}
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 text-gray-700"
            aria-label={menuOpen ? (isEnglish ? 'Close menu' : 'Stäng meny') : (isEnglish ? 'Open menu' : 'Öppna meny')}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={`${basePath}${link.href}`}
                  className="text-base font-medium text-gray-700 hover:text-primary transition py-3 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-primary/90 transition"
              >
                {isEnglish ? 'Try for free' : 'Prova gratis'}
              </a>

              <div className="flex items-center justify-center gap-3 mt-5 pt-4 border-t border-gray-100">
                <Link
                  href={isEnglish ? pathname.replace('/en', '') || '/' : pathname}
                  className={`text-sm transition py-2 px-2 ${
                    !isEnglish ? 'text-primary font-semibold' : 'text-gray-500'
                  }`}
                >
                  Svenska
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href={isEnglish ? pathname : `/en${pathname === '/' ? '' : pathname}`}
                  className={`text-sm transition py-2 px-2 ${
                    isEnglish ? 'text-primary font-semibold' : 'text-gray-500'
                  }`}
                >
                  English
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

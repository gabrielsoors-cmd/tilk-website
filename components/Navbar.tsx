'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-darkBorder">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={isEnglish ? '/en' : '/'} className="flex items-center">
          <Image
            src="/images/tilk-icon.svg"
            alt="Tilk"
            width={40}
            height={40}
            className="invert"
          />
        </Link>

        <div className="relative group">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Language:</span>
            <Link
              href={pathname === '/en' ? '/' : pathname.replace('/en', '') || '/'}
              className={`text-sm transition ${!isEnglish ? 'text-primary font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              Svenska
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href={pathname === '/' ? '/en' : `/en${pathname}`}
              className={`text-sm transition ${isEnglish ? 'text-primary font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

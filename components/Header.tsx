'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.meet.dishdiscover'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = scrolled
    ? 'text-gray-700 hover:text-brand-800'
    : 'text-white/90 hover:text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="DishDiscover home">
          <Image
            src={scrolled ? '/assets/app_logo_light.svg' : '/assets/app_logo_dark.svg'}
            alt="DishDiscover"
            width={140}
            height={36}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            About
          </Link>
          <Link href="/privacy" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={`text-sm font-medium transition-colors ${navLinkClass}`}>
            Terms
          </Link>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <PlayIcon />
            Get the App
          </a>
        </nav>
      </div>
    </header>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76a2 2 0 0 0 2.2-.29l13.4-7.74-3.08-3.08-12.52 11.11zm-1.18-22c-.06.2-.1.43-.1.67v19.14c0 .24.04.47.1.67l.08.07 10.72-10.72v-.24L2.08 1.69l-.08.07zm21.27 9.71-3.03-1.75-3.39 3.39 3.39 3.39 3.05-1.76c.87-.5.87-1.77-.02-2.27zM3.18.24l12.41 11.13 3.08-3.08L5.38.53A2 2 0 0 0 3.18.24z" />
    </svg>
  )
}

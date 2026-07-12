import { useEffect, useState } from 'react'
import siteConfig from '../data/siteConfig.json'
import logo from '../assets/logo.jpg'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#estimator', label: 'Get an Estimate' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur shadow-[0_1px_0_0_rgba(36,31,25,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="JLB Outdoor Solutions logo"
            className="h-14 w-14 object-contain rounded-full bg-cream shadow-sm"
          />
          <span className="font-display uppercase tracking-wide text-lg text-ink leading-none hidden sm:block">
            JLB Outdoor
            <span className="block text-xs tracking-[0.3em] text-rust font-body font-semibold not-italic mt-1">
              Solutions
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold uppercase tracking-wide text-ink/80 hover:text-rust transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-cream font-display uppercase tracking-wide text-sm px-5 py-2.5 rounded-sm hover:bg-rust transition-colors"
          >
            {siteConfig.phone}
          </a>
          <button
            className="lg:hidden p-2 text-ink"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l14 14M20 6L6 20" strokeLinecap="round" />
              ) : (
                <path d="M3 7h20M3 13h20M3 19h20" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-paper border-t border-ink/10 px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display uppercase tracking-wide text-ink text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-display uppercase tracking-wide text-rust text-base"
          >
            Call {siteConfig.phone}
          </a>
        </nav>
      )}
    </header>
  )
}

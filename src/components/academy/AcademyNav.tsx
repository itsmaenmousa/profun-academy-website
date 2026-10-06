import { useState, useEffect } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const LINKS = [
  { label: 'About',              href: '#authority' },
  { label: 'Services',           href: '#services' },
  { label: 'Learning Experiences', href: '#delivery' },
  { label: 'Programs',           href: '#credentials' },
  { label: 'Projects',           href: '#projects' },
  { label: 'Team',               href: '#team' },
  { label: 'Contact',            href: '#contact' },
]

/*
  Desktop layout uses a stable three-column grid:
    [logo — 1fr]  [nav — auto]  [ctas — 1fr]

  Equal 1fr side columns guarantee the auto-width nav is
  always mathematically centred against the full viewport —
  regardless of logo or CTA widths.

  The logo area always occupies its widest state (full colour
  logo + Academy label) so no layout shift occurs during the
  symbol → full-logo crossfade. Only opacity changes.

  CTAs are always rendered in the DOM; in the hero state they
  are opacity-0 + pointer-events-none so they still reserve
  the right column's space.
*/

export default function AcademyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Academy main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#F9F8F6] border-b border-[#DDDBD6]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* ── Main bar ───────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-10 h-24 hidden xl:grid grid-cols-[1fr_auto_1fr] items-center">

        {/* ── LEFT: Logo ─────────────────────────────────────── */}
        <div className="flex items-center justify-start">
          <a href="#" aria-label="The ProFun Academy home" className="relative flex items-center h-[68px]">
            {/*
              Both logos are always in the DOM at identical dimensions.
              Only opacity transitions — zero layout shift, no CSS filter tricks.
              Black logo defines flow width; white logo is absolutely overlaid.
            */}
            <img
              src="./academy-full-color.svg"
              alt="The ProFun Academy"
              className="h-[68px] w-auto block transition-opacity duration-200"
              style={{ opacity: scrolled ? 1 : 0 }}
              aria-hidden={!scrolled}
            />
            <img
              src="./academy-symbol.svg"
              alt="The ProFun Academy"
              className="absolute inset-0 h-[68px] w-auto transition-opacity duration-200"
              style={{ opacity: scrolled ? 0 : 1 }}
              aria-hidden={scrolled}
            />
          </a>
        </div>

        {/* ── CENTRE: Navigation ─────────────────────────────── */}
        <div className="flex items-center gap-7" role="list">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              role="listitem"
              className={`text-[14px] font-medium whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] focus-visible:ring-offset-2 ${
                scrolled
                  ? 'text-[#6B6B65] hover:text-[#1C1C1A]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* ── RIGHT: CTAs ────────────────────────────────────── */}
        <div className="flex items-center justify-end gap-5">
          {/*
            Both CTAs are always rendered — the column is always
            1fr wide. In the hero state they are invisible so the
            right 1fr still mirrors the left 1fr and keeps the
            nav truly centred.
          */}
          <a
            href="https://profun.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[14px] font-medium whitespace-nowrap transition-all duration-200 hover:text-[#F85707] ${
              scrolled
                ? 'opacity-100 pointer-events-auto text-[#6B6B65]'
                : 'opacity-0 pointer-events-none text-[#6B6B65]'
            }`}
            tabIndex={scrolled ? 0 : -1}
            aria-hidden={!scrolled}
          >
            profun.com
          </a>

          <a
            href="#contact"
            className={`text-[14px] font-medium text-white bg-[#F85707] px-5 py-2.5 whitespace-nowrap transition-all duration-200 hover:bg-[#D94A05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] focus-visible:ring-offset-2 ${
              scrolled
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
            tabIndex={scrolled ? 0 : -1}
            aria-hidden={!scrolled}
          >
            Discuss your learning strategy
          </a>
        </div>
      </div>

      {/* ── Mobile / tablet bar ────────────────────────────────── */}
      <div className="xl:hidden flex items-center justify-between h-20 px-6 sm:px-10">

        {/* Mobile logo — same crossfade logic, real black/white SVGs */}
        <a href="#" aria-label="The ProFun Academy home" className="relative flex items-center h-[52px]">
          <img
            src="./academy-full-color.svg"
            alt="The ProFun Academy"
            className="h-[52px] w-auto block transition-opacity duration-200"
            style={{ opacity: scrolled ? 1 : 0 }}
            aria-hidden={!scrolled}
          />
          <img
            src="./academy-symbol.svg"
            alt="The ProFun Academy"
            className="absolute inset-0 h-[52px] w-auto transition-opacity duration-200"
            style={{ opacity: scrolled ? 0 : 1 }}
            aria-hidden={scrolled}
          />
        </a>

        {/* Hamburger */}
        <button
          className="p-2 flex flex-col justify-center gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''} ${scrolled ? 'bg-[#1C1C1A]' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-[#1C1C1A]' : 'bg-white'}`} />
          <span className={`block w-4 h-px transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px] w-6' : ''} ${scrolled ? 'bg-[#1C1C1A]' : 'bg-white'}`} />
        </button>
      </div>

      {/* ── Scroll progress ──────────────────────────────────────── */}
      <div className="h-[2px] bg-transparent relative" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 bg-[#F85707] transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Mobile panel ─────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`xl:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-[#F9F8F6]' : 'bg-[#0E0E0D]'} border-t ${scrolled ? 'border-[#DDDBD6]' : 'border-white/8'}`}
      >
        <div className="px-6 sm:px-10 py-8 space-y-1">
          {LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-[17px] font-medium border-b transition-colors duration-200 hover:text-[#F85707] ${
                scrolled
                  ? 'text-[#1C1C1A] border-[#DDDBD6]'
                  : 'text-white/80 border-white/8'
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-6">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-3 text-[14px] font-medium text-white bg-[#F85707] px-6 py-3 hover:bg-[#D94A05] transition-colors duration-200"
            >
              Discuss your learning strategy
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

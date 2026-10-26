import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ProfileSwitch } from './ProfileSwitch'

export const PAGES: [string, string][] = [
  ['About', '/about'],
  ['Sectors', '/sectors'],
  ['Services', '/services'],
  ['Our Work', '/work'],
  ['People', '/team'],
  ['News', '/news'],
  ['Contact', '/contact'],
]

/*
  Three-column stable grid.
  [logo 1fr]  [nav auto]  [ctas 1fr]
  Home: transparent over the hero video with the color flare, then a white bar
  with the full-color logo once scrolled. Inner pages: always the white bar.
*/
export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolledY, setScrolledY] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = scrolledY || !isHome
  // Open mobile menu always uses the solid white bar
  const solid = scrolled || mobileOpen

  useEffect(() => {
    const h = () => setScrolledY(window.scrollY > 40)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative before:absolute before:-inset-x-2 before:-inset-y-3 before:content-[''] text-[13px] xl:text-[15px] font-medium tracking-wide uppercase whitespace-nowrap transition-colors duration-200 hover:text-[#F85707] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
      isActive ? 'text-[#F85707]' : scrolled ? 'text-[#000050]' : 'text-white/85'
    }`

  return (
    <nav
      role="navigation"
      aria-label="ProFun main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-400 ${
        solid
          ? `${mobileOpen ? 'bg-white' : 'bg-white/95'} backdrop-blur-md border-b border-[#E2E0DB]`
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* ── Desktop bar ─────────────────────────────────────────── */}
      <div className="hidden lg:grid grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)] gap-6 items-center h-20 max-w-[1920px] mx-auto px-8 xl:px-12">

        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link to="/" aria-label="ProFun home" className="relative flex items-center h-14">
            {/* Full color logo, shown on the white bar */}
            <img
              src="./profun-logo-color.svg"
              alt="ProFun"
              className="h-9 xl:h-10 w-auto max-w-none transition-opacity duration-300"
              style={{ opacity: scrolled ? 1 : 0 }}
            />
            {/* White logo, shown over the hero */}
            <img
              src="./profun-logo-white.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-9 xl:h-10 w-auto max-w-none transition-opacity duration-300"
              style={{ opacity: scrolled ? 0 : 1 }}
            />
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <div className="flex items-center gap-5 xl:gap-8">
          {PAGES.map(([label, to]) => (
            <NavLink key={to} to={to} className={linkCls}>
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-[#F85707] transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* RIGHT: CTA, visible on the white bar */}
        <div className="flex items-center justify-end gap-3 xl:gap-5">
          <ProfileSwitch current="profun" onDark={!scrolled} />
        </div>
      </div>

      {/* ── Mobile bar ──────────────────────────────────────────── */}
      <div className="lg:hidden flex items-center justify-between h-[72px] px-6">
        <Link to="/" aria-label="ProFun home" className="relative flex items-center h-12">
          <img
            src="./profun-logo-color.svg"
            alt="ProFun"
            className="h-8 w-auto transition-opacity duration-300"
            style={{ opacity: solid ? 1 : 0 }}
          />
          <img
            src="./profun-logo-white.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-auto transition-opacity duration-300"
            style={{ opacity: solid ? 0 : 1 }}
          />
        </Link>

        <div className="flex items-center gap-4">
        <a href="../academy/index.html#/" className={`profile-pill-mobile inline-flex items-center gap-1.5 pr-1 text-[13px] font-medium tracking-wide uppercase transition-colors ${solid ? 'text-[#000050]' : 'text-white'}`} aria-label="Go to ProFun Academy">
          <img src="./profun-symbol-color.svg" alt="" aria-hidden="true" className="h-4 w-4" />
          Academy
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="p-2 -mr-1 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707]"
        >
          {/* One icon element, so every line always shares the same colour */}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className={`transition-colors duration-300 ${solid ? 'text-[#000050]' : 'text-white'}`}>
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-opacity duration-300" style={{ opacity: mobileOpen ? 0 : 1 }}>
              <line x1="3" y1="7.5" x2="23" y2="7.5" />
              <line x1="3" y1="13" x2="23" y2="13" />
              <line x1="3" y1="18.5" x2="16" y2="18.5" />
            </g>
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-opacity duration-300" style={{ opacity: mobileOpen ? 1 : 0 }}>
              <line x1="6" y1="6" x2="20" y2="20" />
              <line x1="20" y1="6" x2="6" y2="20" />
            </g>
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-350 ${
          mobileOpen ? 'max-h-[calc(100dvh-72px)] h-[calc(100dvh-72px)] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-[#E2E0DB]`}
      >
        <div className="px-6 py-8 space-y-1">
          {PAGES.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-3 text-[18px] font-medium border-b transition-colors hover:text-[#F85707] ${
                  isActive ? 'text-[#F85707]' : 'text-[#000050]'
                } border-[#E2E0DB]`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-6 space-y-5">
            <Link
              to="/contact"
              className="inline-block text-[15px] font-medium text-white bg-[#F85707] px-6 py-3 hover:bg-[#D94A05] transition-colors"
            >
              Contact us
            </Link>
            <div className="pt-5 border-t border-[#E2E0DB]">
              <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[#6B6B65] mb-3">Switch profile</p>
              <ProfileSwitch current="profun" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

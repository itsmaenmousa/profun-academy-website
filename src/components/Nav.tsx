import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const PAGES: [string, string][] = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Learning', '/learning'],
  ['Programs', '/programs'],
  ['Projects', '/projects'],
  ['Team', '/team'],
  ['Contact', '/contact'],
]

/*
  Three-column stable grid.
  [logo 1fr]  [nav auto]  [ctas 1fr]
  Home: transparent over the hero video with the colour flare, then a white bar
  with the full-colour logo once scrolled. Inner pages: always the white bar.
*/
export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolledY, setScrolledY] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = scrolledY || !isHome

  useEffect(() => {
    const h = () => setScrolledY(window.scrollY > 40)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 hover:text-[#F85707] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
      isActive ? 'text-[#F85707]' : scrolled ? 'text-[#000050]' : 'text-white/85'
    }`

  return (
    <nav
      role="navigation"
      aria-label="The ProFun Academy main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E0DB]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* ── Desktop bar ─────────────────────────────────────────── */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-20 max-w-[1920px] mx-auto px-12">

        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link to="/" aria-label="The ProFun Academy home" className="relative flex items-center h-14">
            {/* Full colour logo, shown on the white bar */}
            <img
              src="./academy-full-color.svg"
              alt="The ProFun Academy"
              className="h-14 w-auto transition-opacity duration-300"
              style={{ opacity: scrolled ? 1 : 0 }}
            />
            {/* Colour flare, shown over the hero */}
            <img
              src="./academy-symbol.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-14 w-auto transition-opacity duration-300"
              style={{ opacity: scrolled ? 0 : 1 }}
            />
          </Link>
        </div>

        {/* CENTRE: Navigation */}
        <div className="flex items-center gap-8">
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
        <div className="flex items-center justify-end gap-6">
          <Link
            to="/contact"
            className={`text-[14px] font-medium text-white bg-[#F85707] px-5 py-2.5 whitespace-nowrap transition-all duration-300 hover:bg-[#000050] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
              scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            tabIndex={scrolled ? 0 : -1}
            aria-hidden={!scrolled}
          >
            Start a conversation
          </Link>
        </div>
      </div>

      {/* ── Mobile bar ──────────────────────────────────────────── */}
      <div className="lg:hidden flex items-center justify-between h-[72px] px-6">
        <Link to="/" aria-label="The ProFun Academy home" className="relative flex items-center h-12">
          <img
            src="./academy-full-color.svg"
            alt="The ProFun Academy"
            className="h-12 w-auto transition-opacity duration-300"
            style={{ opacity: scrolled ? 1 : 0 }}
          />
          <img
            src="./academy-symbol.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-auto transition-opacity duration-300"
            style={{ opacity: scrolled ? 0 : 1 }}
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="p-2 flex flex-col justify-center gap-[5px]"
        >
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''} ${scrolled ? 'bg-[#000050]' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-[#000050]' : 'bg-white'}`} />
          <span className={`block w-4 h-px transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px] w-6' : ''} ${scrolled ? 'bg-[#000050]' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-350 ${
          mobileOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-white border-t border-[#E2E0DB]' : 'bg-[#000050] border-t border-white/10'}`}
      >
        <div className="px-6 py-8 space-y-1">
          {PAGES.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-3 text-[17px] font-medium border-b transition-colors hover:text-[#F85707] ${
                  isActive ? 'text-[#F85707]' : scrolled ? 'text-[#000050]' : 'text-white/85'
                } ${scrolled ? 'border-[#E2E0DB]' : 'border-white/10'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-block text-[14px] font-medium text-white bg-[#F85707] px-6 py-3 hover:bg-[#D94A05] transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

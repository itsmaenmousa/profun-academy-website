import { useEffect, useRef, useState } from 'react'

/*
  Profile switcher shared by the ProFun and ProFun Academy sites.
  The button always offers the *other* profile. On the ProFun site it is the
  highlighted ProFun Academy pill, so visitors can't miss the Academy.
  A small menu also lists both profiles and the profile picker.
*/
type Profile = 'profun' | 'academy'

const LINKS = {
  profun: '../profun/index.html#/',
  academy: '../academy/index.html#/',
  picker: '../index.html',
}

const BRAND = 'conic-gradient(from 0deg, #3985FD, #15D2A4, #99CA32, #FFCA03, #F85707, #FC026F, #8238EB, #3985FD)'

export function ProfileSwitch({ current, onDark = false, compact = false }: { current: Profile; onDark?: boolean; compact?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const other: Profile = current === 'profun' ? 'academy' : 'profun'

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc) }
  }, [open])

  const toAcademy = other === 'academy'

  return (
    <div ref={ref} className="relative flex items-center gap-1.5">
      {/* Main pill: goes straight to the other profile */}
      <a
        href={LINKS[other]}
        className={`profile-pill group relative inline-flex items-center gap-2 whitespace-nowrap rounded-full text-[13px] xl:text-[14px] font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
          toAcademy
            ? 'p-[2px] hover:scale-[1.03]'
            : `px-3.5 py-2 border ${onDark ? 'border-white/40 text-white hover:bg-white/10' : 'border-[#000050]/20 text-[#000050] hover:border-[#000050]/50'}`
        }`}
        style={toAcademy ? { background: BRAND } : undefined}
        aria-label={toAcademy ? 'Go to ProFun Academy' : 'Go to ProFun'}
      >
        {toAcademy ? (
          <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-[7px] ${onDark ? 'bg-[#111110]/80 text-white' : 'bg-white text-[#000050]'}`}>
            <img src="./profun-symbol-color.svg" alt="" aria-hidden="true" className="h-4 w-4" />
            {compact ? 'Academy' : 'ProFun Academy'}
            <svg width="11" height="8" viewBox="0 0 14 10" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5"><path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        ) : (
          <>
            <img src="./profun-symbol-color.svg" alt="" aria-hidden="true" className="h-4 w-4" />
            {compact ? 'ProFun' : 'Switch to ProFun'}
          </>
        )}
      </a>

      {/* All profiles menu */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label="Switch profile"
        title="Switch profile"
        className={`w-8 h-8 inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${onDark ? 'text-white/80 hover:bg-white/10' : 'text-[#000050]/70 hover:bg-[#000050]/5'}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="9.5" y="1.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="1.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>

      {open && (
        <div role="menu" className="absolute right-0 top-[calc(100%+12px)] w-[260px] bg-white shadow-[0_24px_48px_-16px_rgba(0,0,80,0.35)] border border-[#E2E0DB] p-2 z-[60]">
          <p className="px-3 pt-2 pb-3 text-[12px] font-medium tracking-[0.12em] uppercase text-[#6B6B65]">Switch profile</p>
          <ProfileRow href={LINKS.profun} logo="./profun-symbol-color.svg" name="ProFun" sub="Attraction operations" active={current === 'profun'} />
          <ProfileRow href={LINKS.academy} logo="./profun-symbol-color.svg" name="ProFun Academy" sub="Training and learning" active={current === 'academy'} highlight />
          <a href={LINKS.picker} role="menuitem" className="mt-1 block px-3 py-2.5 text-[14px] text-[#6B6B65] hover:text-[#F85707] border-t border-[#E2E0DB]">
            All profiles
          </a>
        </div>
      )}
    </div>
  )
}

function ProfileRow({ href, logo, name, sub, active, highlight }: { href: string; logo: string; name: string; sub: string; active: boolean; highlight?: boolean }) {
  return (
    <a href={href} role="menuitem" aria-current={active ? 'page' : undefined} className={`flex items-center gap-3 px-3 py-2.5 transition-colors ${active ? 'bg-[#F2F1EF]' : 'hover:bg-[#F9F8F6]'}`}>
      <span className="relative w-10 h-10 rounded-full flex items-center justify-center flex-none" style={highlight ? { background: BRAND, padding: 2 } : { background: '#000050' }}>
        <span className={`w-full h-full rounded-full flex items-center justify-center ${highlight ? 'bg-white' : ''}`}>
          <img src={logo} alt="" aria-hidden="true" className={`w-5 h-5 ${highlight ? '' : 'brightness-0 invert'}`} />
        </span>
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[15px] font-medium text-[#000050]">{name}</span>
        <span className="block text-[13px] text-[#6B6B65]">{sub}</span>
      </span>
      {active && <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#F85707" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
    </a>
  )
}

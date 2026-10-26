import { useEffect, useRef, useState } from 'react'
import { useDeepLink, scrollToId } from '../lib/deeplink'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import { SERVICES, ACADEMY_URL } from '../data'

// Soft hyphen lets the long label break neatly in the smallest phone cells
const services = SERVICES.map(x => ({ id: x.id, short: x.short.replace('Implementation', 'Implemen\u00ADtation'), title: x.short, desc: x.lead, color: x.color }))

export default function Services({ asPage = false }: { asPage?: boolean }) {
  const H = asPage ? 'h1' : 'h2'
  const { ref, inView } = useInView()

  return (
    <section id="services" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-8 sm:mb-10 lg:mb-12 border-b border-[#E2E0DB] pb-8 sm:pb-10 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">What We Do</p>
            <H className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] max-w-[760px] tracking-[-0.01em]">
              From first plans to daily operations.
            </H>
          </div>
        </div>

        {/* Honeycomb around the Academy flare (all screen sizes) */}
        <Honeycomb inView={inView} />

      </div>
    </section>
  )
}

/* ── Honeycomb (desktop) ─────────────────────────────────────── */

// Pointy-top hex grid, positions in units of the hex width.
// Services sit in the ring around the center; a few ghost cells add texture.
const RING: [number, number][] = [
  [0.5, -1], [1, 0], [0.5, 1], [-0.5, 1], [-1, 0],
]
// One soft ghost completes the ring around the flare
const GHOSTS: [number, number][] = [[-0.5, -1]]

function cellStyle([x, y]: [number, number], delay = 0): React.CSSProperties {
  return {
    ['--cx' as string]: x,
    ['--cy' as string]: y,
    left: `calc(50% + ${x} * var(--step-x) - var(--hex-w) / 2)`,
    top: `calc(50% + ${y} * var(--step-y) - var(--hex-h) / 2)`,
    transitionDelay: `${delay}ms`,
  }
}

function Honeycomb({ inView }: { inView: boolean }) {
  const combRef = useRef<HTMLDivElement>(null)
  const [onScreen, setOnScreen] = useState(true)
  useEffect(() => {
    const el = combRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting))
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const [active, setActive] = useState(0)
  const [touched, setTouched] = useState(false)
  // Starts folded on the Academy flare. It opens once the visitor scrolls (or hovers / taps
  // the flare) while it is on screen, and folds back when they scroll it out of view.
  const [open, setOpen] = useState(false)
  const s = services[active]
  const scrolledRef = useRef(false)
  const pendingRef = useRef<number | null>(null)
  const updateRef = useRef<() => void>(() => {})

  // Footer links: scroll to the honeycomb, open it and show the chosen service
  useDeepLink(go => {
    const i = services.findIndex(x => x.id === go)
    if (i < 0) return
    scrolledRef.current = true
    pendingRef.current = i
    scrollToId('service-detail')
    window.setTimeout(() => updateRef.current(), 1500)
  })

  useEffect(() => {
    const el = combRef.current
    if (!el) return
    let startY = window.scrollY
    const mountedAt = performance.now()
    // "In view" means the middle of the honeycomb sits inside the screen, away from the edges
    const centred = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const c = r.top + r.height / 2
      return c > vh * 0.12 && c < vh * 0.88
    }
    const update = () => {
      if (!centred()) {
        // Scrolled away: fold back and wait for the next scroll into view
        setOpen(false); setTouched(false); setActive(0)
      } else if (scrolledRef.current) {
        setOpen(true)
        if (pendingRef.current !== null) { setTouched(true); setActive(pendingRef.current); pendingRef.current = null }
      }
    }
    updateRef.current = update
    const onScroll = () => {
      // Ignore the jump back to the top when the page first opens
      if (performance.now() - mountedAt < 600) { startY = window.scrollY; return }
      if (!scrolledRef.current && Math.abs(window.scrollY - startY) > 30) scrolledRef.current = true
      update()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', update) }
  }, [])

  // Gently cycle through the services while open, until the visitor picks one
  useEffect(() => {
    if (!open || touched || !inView || !onScreen) return
    const t = setTimeout(() => setActive(a => (a + 1) % services.length), 4200)
    return () => clearTimeout(t)
  }, [active, touched, inView, onScreen, open])

  const pick = (i: number) => { setTouched(true); setActive(i) }

  return (
    <div id="service-detail" className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:gap-10 xl:gap-16">
      {/* Active service */}
      <div className="max-w-[640px] xl:max-w-[460px] order-2 xl:order-1 mx-auto xl:mx-0 text-center xl:text-left" aria-live="polite">
        {open ? (
          <div key={active} className="hc-copy">
            <span className="block w-12 h-1 mb-8 mx-auto xl:mx-0" style={{ background: s.color }} aria-hidden="true" />
            <h3 className="font-serif text-[clamp(30px,2.6vw,44px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-6">{s.title}</h3>
            <p className="text-[19px] text-[#4A4A45] leading-relaxed font-light mb-8">{s.desc}</p>
            {s.id === 'training' ? (
              <a href={ACADEMY_URL} className="inline-flex items-center gap-3 text-[17px] font-medium text-[#F85707] hover:gap-5 transition-all duration-300">
                Delivered by ProFun Academy
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            ) : (
              <Link to={`/services?go=${s.id}`} className="inline-flex items-center gap-3 text-[17px] font-medium text-[#1C1C1A] hover:text-[#F85707] hover:gap-5 transition-all duration-300">
                More on {s.title.toLowerCase()}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            )}
          </div>
        ) : (
          <div key="intro" className="hc-copy">
            <span className="block w-12 h-1 mb-8 mx-auto xl:mx-0 bg-[#F85707]" aria-hidden="true" />
            <p className="font-serif text-[clamp(22px,1.9vw,30px)] text-[#000050] leading-[1.3] tracking-[-0.01em]">Concepts inspire. Design excites. But success is decided on the ground. Five services take an attraction from first plans to daily operations.</p>
          </div>
        )}
        <div className={`flex items-center justify-center xl:justify-start gap-2 mt-10 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
          {services.map((x, i) => (
            <span key={x.title} className="h-1 rounded-full transition-all duration-500" style={{ width: i === active ? 32 : 10, background: i === active ? x.color : '#D4D2CC' }} />
          ))}
        </div>
      </div>

      {/* Honeycomb */}
      <div
        ref={combRef}
        className={`honeycomb relative order-1 xl:order-2 mx-auto ${onScreen ? '' : 'is-paused'} ${open ? 'is-open' : ''}`}
        onMouseMove={e => {
          const r = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--px', String(((e.clientX - r.left) / r.width - 0.5) * 2))
          e.currentTarget.style.setProperty('--py', String(((e.clientY - r.top) / r.height - 0.5) * 2))
        }}
        onMouseLeave={e => {
          setTouched(false)
          e.currentTarget.style.setProperty('--px', '0')
          e.currentTarget.style.setProperty('--py', '0')
        }}
      >
        {GHOSTS.map((g, i) => (
          <span key={i} className={`hc-cell hc-ghost ${inView ? 'is-in' : ''}`} style={{ ...cellStyle(g, 300 + i * 60), ['--depth' as string]: 1.8, ['--float-delay' as string]: `${-i * 0.9}s`, ['--tint' as string]: s.color }}>
            <span className="hc-par"><span className="hc-float"><span className="hc-face">
              <span className="relative flex flex-col items-center justify-center h-full px-[16%] text-center">
                <span className="w-5 sm:w-6 h-1 rounded-full mb-2 sm:mb-3 bg-[#F85707]" aria-hidden="true" />
                <span className="hidden sm:block font-serif italic text-[#000050] text-[16px] lg:text-[clamp(15px,1.25vw,19px)] leading-tight lg:leading-snug">Tailored to your people and operations.</span>
                <span className="sm:hidden font-serif italic text-[#000050] text-[13px] leading-tight">Tailored to you.</span>
              </span>
            </span></span></span>
          </span>
        ))}

        {/* Center flare: hover or tap also opens the services */}
        <span
          aria-hidden="true"
          onMouseEnter={() => setOpen(true)}
          onClick={() => setOpen(true)}
          className={`hc-cell hc-center cursor-pointer ${inView ? 'is-in' : ''}`}
          style={{ ...cellStyle([0, 0]), ['--glow' as string]: open ? s.color : '#F85707', ['--depth' as string]: 0.35, ['--float-delay' as string]: '-1.2s' }}
        >
          <span className="hc-par"><span className="hc-float">
            <span className="hc-face flex items-center justify-center">
              <img key={open ? active : 'idle'} src="./profun-symbol-color.svg" alt="" className="hc-flare w-[46%] h-auto" />
            </span>
          </span></span>
        </span>

        {services.map((x, i) => {
          const on = i === active
          return (
            <button
              key={x.title}
              type="button"
              onMouseEnter={() => pick(i)}
              onFocus={() => pick(i)}
              onClick={() => pick(i)}
              aria-pressed={on}
              className={`hc-cell hc-service ${on ? 'is-active' : ''} ${inView ? 'is-in' : ''}`}
              style={{ ...cellStyle(RING[i], 120 + i * 90), ['--brand' as string]: x.color, ['--depth' as string]: 1, ['--float-delay' as string]: `${-i * 1.3}s` }}
            >
              <span className="hc-par"><span className="hc-float">
              <span className="hc-face">
                <span className="hc-fill" aria-hidden="true" />
                <span className="relative flex flex-col items-center justify-center h-full px-[6%] sm:px-[16%] text-center">
                  <span className="hc-dot w-5 sm:w-6 h-1 rounded-full mb-2 sm:mb-3" style={{ background: x.color }} aria-hidden="true" />
                  <span className="hc-title hidden lg:block font-serif text-[clamp(15px,1.25vw,19px)] leading-snug">{x.title}</span>
                  <span className="hc-title lg:hidden font-serif text-[12px] min-[380px]:text-[13px] sm:text-[16px] leading-tight">{x.short}</span>
                </span>
              </span>
              </span></span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

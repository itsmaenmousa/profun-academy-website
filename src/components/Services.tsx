import { useEffect, useRef, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    short: 'Learning Strategy',
    title: 'Learning Strategy and Management',
    desc: 'Align learning with business priorities through needs analysis, planning, governance, and performance measurement.',
    color: '#000050',
  },
  {
    short: 'Workforce Capability',
    title: 'Workforce Capability Development',
    desc: 'Define role competencies, career pathways, and leadership development priorities to build a capable workforce.',
    color: '#3985FD',
  },
  {
    short: 'Program Design',
    title: 'Program Design and Content Development',
    desc: 'Create customized programs, materials, and assessments shaped around your operations, culture, and workforce needs.',
    color: '#8238EB',
  },
  {
    short: 'Training Delivery',
    title: 'Training Delivery and Facilitation',
    desc: 'Build practical skills through facilitated training, on-site coaching, and train-the-trainer programs tailored to your teams.',
    color: '#FC026F',
  },
  {
    short: 'Operational Readiness',
    title: 'Pre-Opening and Operational Readiness Training',
    desc: 'Prepare teams for opening through role-specific training, operational simulations, and readiness assessments.',
    color: '#F85707',
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">What We Offer</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] max-w-[760px] tracking-[-0.01em]">
              From individual skills to operational readiness.
            </h2>
          </div>
          <p className="max-w-[460px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            From tailored training to comprehensive learning strategies, we help organizations build workforce capability at every stage, from pre-opening to ongoing operations.
          </p>
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
  // Collapsed: only the Academy flare shows. Hover (or tap) it to open the services
  const [open, setOpen] = useState(false)
  const [canHover] = useState(() => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches)
  const s = services[active]

  // Tap anywhere outside the honeycomb to close it again (touch screens)
  useEffect(() => {
    if (!open || canHover) return
    const close = (e: PointerEvent) => { if (!combRef.current?.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open, canHover])

  // Gently cycle through the services while open, until the visitor picks one
  useEffect(() => {
    if (!open || touched || !inView || !onScreen) return
    const t = setTimeout(() => setActive(a => (a + 1) % services.length), 4200)
    return () => clearTimeout(t)
  }, [active, touched, inView, onScreen, open])

  const pick = (i: number) => { setTouched(true); setActive(i) }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] items-center gap-8 sm:gap-12 xl:gap-16">
      {/* Active service */}
      <div className="max-w-[640px] xl:max-w-[460px] order-2 xl:order-1 mx-auto xl:mx-0 text-center xl:text-left" aria-live="polite">
        {open ? (
          <div key={active} className="hc-copy">
            <span className="block w-12 h-1 mb-8 mx-auto xl:mx-0" style={{ background: s.color }} aria-hidden="true" />
            <h3 className="font-serif text-[clamp(30px,2.6vw,44px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-6">{s.title}</h3>
            <p className="text-[19px] text-[#4A4A45] leading-relaxed font-light">{s.desc}</p>
          </div>
        ) : (
          <div key="intro" className="hc-copy">
            <span className="block w-12 h-1 mb-8 mx-auto xl:mx-0 bg-[#F85707]" aria-hidden="true" />
            <h3 className="font-serif text-[clamp(30px,2.6vw,44px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-6">Five services, one integrated approach.</h3>
            <p className="text-[19px] text-[#4A4A45] leading-relaxed font-light">{canHover ? 'Hover over the Academy symbol to explore each service.' : 'Tap the Academy symbol to explore each service.'}</p>
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
          if (canHover) setOpen(false)
          e.currentTarget.style.setProperty('--px', '0')
          e.currentTarget.style.setProperty('--py', '0')
        }}
      >
        {GHOSTS.map((g, i) => (
          <span key={i} className={`hc-cell hc-ghost ${inView ? 'is-in' : ''}`} style={{ ...cellStyle(g, 300 + i * 60), ['--depth' as string]: 1.8, ['--float-delay' as string]: `${-i * 0.9}s`, ['--tint' as string]: s.color }} aria-hidden="true">
            <span className="hc-par"><span className="hc-float"><span className="hc-face" /></span></span>
          </span>
        ))}

        {/* Center flare: hover or tap to open the services */}
        <button
          type="button"
          onMouseEnter={() => { if (canHover) setOpen(true) }}
          onFocus={() => setOpen(true)}
          onClick={() => { if (!canHover) setOpen(o => !o) }}
          aria-expanded={open}
          aria-label={open ? 'Hide services' : 'Show services'}
          className={`hc-cell hc-center ${inView ? 'is-in' : ''}`}
          style={{ ...cellStyle([0, 0]), ['--glow' as string]: open ? s.color : '#F85707', ['--depth' as string]: 0.35, ['--float-delay' as string]: '-1.2s' }}
        >
          <span className="hc-par"><span className="hc-float">
            <span className="hc-face flex flex-col items-center justify-center">
              <img key={open ? active : 'idle'} src="./academy-symbol.svg" alt="" className="hc-flare w-[46%] h-auto" />
              <span className="hc-hint mt-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#000050]/70">{canHover ? 'Hover here' : 'Tap here'}</span>
            </span>
          </span></span>
        </button>

        {services.map((x, i) => {
          const on = i === active
          return (
            <button
              key={x.title}
              type="button"
              onMouseEnter={() => pick(i)}
              onFocus={() => { setOpen(true); pick(i) }}
              onClick={() => pick(i)}
              aria-pressed={on}
              tabIndex={open ? 0 : -1}
              className={`hc-cell hc-service ${on ? 'is-active' : ''} ${inView ? 'is-in' : ''}`}
              style={{ ...cellStyle(RING[i], 120 + i * 90), ['--brand' as string]: x.color, ['--depth' as string]: 1, ['--float-delay' as string]: `${-i * 1.3}s` }}
            >
              <span className="hc-par"><span className="hc-float">
              <span className="hc-face">
                <span className="hc-fill" aria-hidden="true" />
                <span className="relative flex flex-col items-center justify-center h-full px-[16%] text-center">
                  <span className="hc-dot w-5 sm:w-6 h-1 rounded-full mb-2 sm:mb-3" style={{ background: x.color }} aria-hidden="true" />
                  <span className="hc-title hidden lg:block font-serif text-[clamp(15px,1.25vw,19px)] leading-snug">{x.title}</span>
                  <span className="hc-title lg:hidden font-serif text-[13px] sm:text-[16px] leading-tight">{x.short}</span>
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

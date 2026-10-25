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
          className={`mb-8 sm:mb-10 lg:mb-12 border-b border-[#E2E0DB] pb-8 sm:pb-10 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">What We Offer</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] max-w-[760px] tracking-[-0.01em]">
              From individual skills to operational readiness.
            </h2>
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

  useEffect(() => {
    const el = combRef.current
    if (!el) return
    let scrolled = false
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
      } else if (scrolled) {
        setOpen(true)
      }
    }
    const onScroll = () => {
      // Ignore the jump back to the top when the page first opens
      if (performance.now() - mountedAt < 600) { startY = window.scrollY; return }
      if (!scrolled && Math.abs(window.scrollY - startY) > 30) scrolled = true
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
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:gap-10 xl:gap-16">
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
            <p className="font-serif text-[clamp(22px,1.9vw,30px)] text-[#000050] leading-[1.3] tracking-[-0.01em]">From tailored training to comprehensive learning strategies, we help organizations build workforce capability at every stage, from pre-opening to ongoing operations.</p>
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
          <span key={i} className={`hc-cell hc-ghost ${inView ? 'is-in' : ''}`} style={{ ...cellStyle(g, 300 + i * 60), ['--depth' as string]: 1.8, ['--float-delay' as string]: `${-i * 0.9}s`, ['--tint' as string]: s.color }} aria-hidden="true">
            <span className="hc-par"><span className="hc-float"><span className="hc-face" /></span></span>
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
              <img key={open ? active : 'idle'} src="./academy-symbol.svg" alt="" className="hc-flare w-[46%] h-auto" />
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

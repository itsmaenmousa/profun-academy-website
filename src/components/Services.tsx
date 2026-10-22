import { useEffect, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    title: 'Learning Strategy and Management',
    desc: 'Align learning with business priorities through needs analysis, planning, governance, and performance measurement.',
    color: '#000050',
  },
  {
    title: 'Workforce Capability Development',
    desc: 'Define role competencies, career pathways, and leadership development priorities to build a capable workforce.',
    color: '#3985FD',
  },
  {
    title: 'Program Design and Content Development',
    desc: 'Create customized programs, materials, and assessments shaped around your operations, culture, and workforce needs.',
    color: '#8238EB',
  },
  {
    title: 'Training Delivery and Facilitation',
    desc: 'Build practical skills through facilitated training, on-site coaching, and train-the-trainer programs tailored to your teams.',
    color: '#FC026F',
  },
  {
    title: 'Pre-Opening and Operational Readiness Training',
    desc: 'Prepare teams for opening through role-specific training, operational simulations, and readiness assessments.',
    color: '#F85707',
  },
]

export default function Services() {
  const { ref, inView } = useInView()
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-[#F9F8F6] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">What We Offer</p>
            <h2 className="font-serif text-[clamp(40px,4vw,64px)] text-[#000050] leading-tight max-w-[760px] tracking-[-0.01em]">
              From individual skills to operational readiness.
            </h2>
          </div>
          <p className="max-w-[460px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            From tailored training to comprehensive learning strategies, we help organizations build workforce capability at every stage, from pre-opening to ongoing operations.
          </p>
        </div>

        {/* Desktop: honeycomb around the Academy flare */}
        <Honeycomb inView={inView} />

        {/* Mobile and tablet: expanding rows */}
        <ol className="lg:hidden border-t border-[#E2E0DB]">
          {services.map((s, i) => {
            const on = active === i
            return (
              <li
                key={s.title}
                className={`service-row relative border-b border-[#E2E0DB] overflow-hidden reveal reveal-delay-${Math.min(i + 1, 5)} ${on ? 'is-active' : ''} ${inView ? 'visible' : ''}`}
                style={{ ['--brand' as string]: s.color }}
              >
                <span className="service-fill" aria-hidden="true" />
                <button
                  onClick={() => setActive(i)}
                  aria-expanded={on}
                  className="relative w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 px-5 sm:px-8 lg:px-10 py-7 sm:py-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707]"
                >
                  <span className="service-num block w-1 h-8 sm:h-11 rounded-full" style={{ background: on ? 'rgba(255,255,255,.7)' : s.color }} aria-hidden="true" />
                  <span className={`service-title font-serif text-[clamp(24px,2.6vw,44px)] leading-tight tracking-[-0.01em] ${on ? 'text-white' : 'text-[#000050]'}`}>
                    {s.title}
                  </span>
                  <span
                    className={`service-icon w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center flex-shrink-0 ${on ? 'border-white/60 text-white rotate-45' : 'border-[#D4D2CC] text-[#000050]'}`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </button>

                <div className={`relative grid transition-[grid-template-rows] duration-500 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 px-5 sm:px-8 lg:px-10 pb-8 sm:pb-10">
                      <span className="w-1" aria-hidden="true" />
                      <p className="text-[18px] sm:text-[20px] text-white font-normal leading-relaxed max-w-[720px]">{s.desc}</p>
                      <span className="w-10 sm:w-14" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
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
const GHOSTS: [number, number][] = [
  [-0.5, -1], [1.5, -1], [1.5, 1], [-1.5, -1], [-1.5, 1], [2, 0], [-2, 0],
]

function cellStyle([x, y]: [number, number], delay = 0): React.CSSProperties {
  return {
    left: `calc(50% + ${x} * var(--step-x) - var(--hex-w) / 2)`,
    top: `calc(50% + ${y} * var(--step-y) - var(--hex-h) / 2)`,
    transitionDelay: `${delay}ms`,
  }
}

function Honeycomb({ inView }: { inView: boolean }) {
  const [active, setActive] = useState(0)
  const [touched, setTouched] = useState(false)
  const s = services[active]

  // Gently cycle through the services until the visitor interacts
  useEffect(() => {
    if (touched || !inView) return
    const t = setTimeout(() => setActive(a => (a + 1) % services.length), 4200)
    return () => clearTimeout(t)
  }, [active, touched, inView])

  const pick = (i: number) => { setTouched(true); setActive(i) }

  return (
    <div className="hidden lg:grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] items-center gap-12 xl:gap-16">
      {/* Active service */}
      <div className="max-w-[640px] xl:max-w-[460px] order-2 xl:order-1 mx-auto xl:mx-0 text-center xl:text-left" aria-live="polite">
        <div key={active} className="hc-copy">
          <span className="block w-12 h-1 mb-8 mx-auto xl:mx-0" style={{ background: s.color }} aria-hidden="true" />
          <h3 className="font-serif text-[clamp(30px,2.6vw,44px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-6">{s.title}</h3>
          <p className="text-[19px] text-[#4A4A45] leading-relaxed font-light">{s.desc}</p>
        </div>
        <div className="flex items-center justify-center xl:justify-start gap-2 mt-10" aria-hidden="true">
          {services.map((x, i) => (
            <span key={x.title} className="h-1 rounded-full transition-all duration-500" style={{ width: i === active ? 32 : 10, background: i === active ? x.color : '#D4D2CC' }} />
          ))}
        </div>
      </div>

      {/* Honeycomb */}
      <div
        className="honeycomb relative order-1 xl:order-2 mx-auto"
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

        {/* Center flare */}
        <span className={`hc-cell hc-center ${inView ? 'is-in' : ''}`} style={{ ...cellStyle([0, 0]), ['--glow' as string]: s.color, ['--depth' as string]: 0.35, ['--float-delay' as string]: '-1.2s' }} aria-hidden="true">
          <span className="hc-par"><span className="hc-float">
            <span className="hc-face flex items-center justify-center">
              <img key={active} src="./academy-symbol.svg" alt="" className="hc-flare w-[46%] h-auto" />
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
                  <span className="hc-dot w-6 h-1 rounded-full mb-3" style={{ background: x.color }} aria-hidden="true" />
                  <span className="hc-title font-serif text-[clamp(15px,1.25vw,19px)] leading-snug">{x.title}</span>
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

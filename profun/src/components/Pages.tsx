import { useEffect, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { useDeepLink, scrollToId } from '../lib/deeplink'
import { SECTORS, SERVICES, AFFILIATIONS, ACADEMY_URL } from '../data'
import { Link } from 'react-router-dom'
import { SectionHead, Arrow, TextLink } from './ui'
import Services from './Services'
import { CASE_DETAIL, caseSlugFor } from '../content'
import Stats from './Stats'
import { AcademyBand } from './HomeSections'
import Leadership from './Leadership'

/* ── About ─────────────────────────────────────────────────────── */
const LIGHT = ['#15D2A4', '#99CA32', '#FFCA03', '#00AFDC']
const QUALITY = [
  { title: 'Internal Quality', desc: 'Accuracy, consistency and efficiency of our work processes.', color: '#3985FD' },
  { title: 'Client Work Product', desc: 'Best-in-class consulting reports and advisory services.', color: '#15D2A4' },
  { title: 'Programs and Services', desc: 'Quality of ProFun Academy and all client-facing services.', color: '#FC026F' },
  { title: 'Client Enablement', desc: 'Providing tools and knowledge for clients to achieve their own quality standards.', color: '#8238EB' },
]

export function AboutPage() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: in2 } = useInView()
  const [tapped, setTapped] = useState<number | null>(null)
  useDeepLink(go => { if (go === 'affiliations') scrollToId('affiliations') })
  return (
    <>
      <Stats />
      <section id="about" className="bg-[#F2F1EF] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-12">
        <div className="max-w-[1920px] mx-auto">
          <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className={`lg:col-span-5 reveal ${inView ? 'visible' : ''}`}>
              <p className="text-[20px] font-semibold text-[#F85707] mb-4">About ProFun</p>
              <h1 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] mb-8 tracking-[-0.01em]">
                The world leader in attractions operations.
              </h1>
              <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-6">
                ProFun is the world leader, and the only firm of its kind, dedicated exclusively to operations advisory and management for the attractions industry. Since 1980, we have advised on, trained for and managed projects on every continent, serving some of the world&rsquo;s most iconic destinations.
              </p>
              <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-6">
                Our value lies in bridging creative ambition with operational reality, applying commercial discipline, practical experience and global insight to ensure concepts thrive long after opening day.
              </p>
              <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-12">
                Our team is built for impact: seasoned international executives and regional specialists with unmatched operational expertise. From pre-concept planning and analysis to daily management, our people know what it takes to deliver guest satisfaction, financial performance and operational reliability, because they&rsquo;ve been there.
              </p>
              <TextLink to="/team">Meet our people</TextLink>
            </div>
            <div className={`lg:col-span-7 relative reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
              <div className={`aspect-[4/3] overflow-hidden bg-[#1C1C1A] img-reveal ${inView ? 'visible' : ''}`}>
                <img src="./projects/amnh-rose.jpg" alt="The Rose Center for Earth and Space, American Museum of Natural History" className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-[1.03]" />
              </div>
              <p className="mt-4 text-[15px] text-[#6B6B65] font-light">The Rose Center for Earth and Space, American Museum of Natural History, New York</p>
            </div>
          </div>

          {/* Commitment to quality */}
          <div ref={ref2 as React.RefObject<HTMLDivElement>} className="mt-24 pt-16 border-t border-[#E2E0DB]">
            <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal ${in2 ? 'visible' : ''}`}>
              <div>
                <p className="text-[20px] font-semibold text-[#F85707] mb-4">Our Commitment to Quality</p>
                <h2 className="font-serif text-[clamp(32px,3vw,48px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">Excellence through accountability.</h2>
              </div>
              <p className="max-w-[460px] text-[18px] text-[#6B6B65] leading-relaxed font-light">
                Our mission is to deliver exceptional operations advisory and management services, and professional training through ProFun Academy, that exceed clients&rsquo; expectations and drive sustainable growth, through a culture of quality, accountability and continuous improvement.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
              {QUALITY.map((v, i) => (
                <li key={v.title} className={`value-card group relative bg-white p-8 sm:p-9 min-h-[240px] flex flex-col overflow-hidden reveal reveal-delay-${i + 1} ${in2 ? 'visible' : ''}`} style={{ ['--brand' as string]: v.color, ['--ink' as string]: LIGHT.includes(v.color) ? '#000050' : '#ffffff' }}>
                  <span className="value-fill" aria-hidden="true" />
                  <span className="value-bar absolute top-0 left-0 right-0 h-1" style={{ background: v.color }} aria-hidden="true" />
                  <h3 className="value-title relative font-serif text-[23px] text-[#000050] leading-snug mt-4 mb-3">{v.title}</h3>
                  <p className="value-copy relative text-[17px] text-[#6B6B65] leading-relaxed font-light">{v.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[16px] text-[#6B6B65] font-light">Our complete Quality Policy is available upon request.</p>
          </div>
        </div>
      </section>

      <section id="affiliations" className="bg-[#F9F8F6] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1920px] mx-auto">
          <SectionHead eyebrow="Our Affiliations" title="Part of the bodies that shape the industry." />
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {AFFILIATIONS.map((p, i) => (
              <li key={p.name} className={`partner-card group relative bg-[#F2F1EF] p-4 sm:p-6 lg:p-10 flex items-center justify-center lg:min-h-[240px] overflow-hidden ${tapped === i ? 'is-on' : ''}`} style={{ ['--brand' as string]: p.color }} onClick={() => setTapped(t => (t === i ? null : i))}>
                <span className="partner-fill" aria-hidden="true" />
                <div className="partner-plate relative w-full lg:max-w-[340px] h-24 sm:h-28 lg:h-32 bg-white flex items-center justify-center px-5 sm:px-8">
                  <img src={p.logo} alt={p.name} title={p.name} loading="lazy" decoding="async" className={`${p.big ? 'max-h-[68px] sm:max-h-[80px] lg:max-h-[92px]' : 'max-h-12 sm:max-h-14 lg:max-h-16'} max-w-full w-auto object-contain`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <AcademyBand />
    </>
  )
}

/* Page opener in the same form as the ProFun Academy page headers */
function PageHead({ eyebrow, title, side, children }: { eyebrow: string; title: string; side: string; children?: React.ReactNode }) {
  const { ref, inView } = useInView()
  return (
    <section className="bg-[#F9F8F6] px-6 sm:px-12 pt-16 sm:pt-20 lg:pt-24">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}>
        <div>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">{eyebrow}</p>
          <h1 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[860px]">{title}</h1>
        </div>
        <p className="max-w-[480px] text-[19px] text-[#6B6B65] leading-relaxed font-light">{side}</p>
      </div>
      {children}
    </section>
  )
}

/* ── Sectors ───────────────────────────────────────────────────── */
export function SectorsPage() {
  const [active, setActive] = useState<string>(SECTORS[0].id)
  useDeepLink(go => { if (SECTORS.some(s => s.id === go)) { setActive(go); scrollToId(`sector-${go}`) } })
  // Track which sector is on screen for the tab bar
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.45
      let cur = SECTORS[0].id
      SECTORS.forEach(x => { const el = document.getElementById(`sector-${x.id}`); if (el && el.getBoundingClientRect().top <= line) cur = x.id })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <PageHead
        eyebrow="Our Sectors"
        title="Four sectors. One operating discipline."
        side="Theme parks, museums, brand centers and world expos each face different pressures. ProFun brings commercial and operational rigor to all of them."
      />
      <div className="sticky top-[72px] lg:top-20 z-20 bg-white/95 backdrop-blur-md border-y border-[#E2E0DB]">
        <div className="max-w-[1920px] mx-auto px-3 sm:px-12 grid grid-cols-4 sm:flex gap-0 sm:gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTORS.map(s => (
            <button key={s.id} type="button" onClick={() => scrollToId(`sector-${s.id}`, 0)} className={`relative flex-none py-4 px-1 sm:px-4 text-[14px] sm:text-[15px] font-medium whitespace-nowrap transition-colors ${active === s.id ? 'text-[#000050]' : 'text-[#6B6B65] hover:text-[#000050]'}`}>
              <span className="sm:hidden">{s.id === 'commercial' ? 'Commercial' : s.id === 'expos' ? 'Expos' : s.id === 'science' ? 'Culture' : 'Brands'}</span>
              <span className="hidden sm:inline">{s.name}</span>
              <span className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-0 h-[3px] transition-opacity" style={{ background: s.color, opacity: active === s.id ? 1 : 0 }} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      {SECTORS.map((s, i) => <SectorBlock key={s.id} s={s} alt={i % 2 === 1} />)}
    </>
  )
}

function SectorBlock({ s, alt }: { s: typeof SECTORS[number]; alt: boolean }) {
  const { ref, inView } = useInView()
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? s.projects : s.projects.slice(0, 8)
  return (
    <section id={`sector-${s.id}`} className={`${alt ? 'bg-[#F2F1EF]' : 'bg-[#F9F8F6]'} px-6 sm:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-32`}>
      <div className="max-w-[1920px] mx-auto">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10 sm:mb-14 pb-8 sm:pb-12 border-b border-[#E2E0DB] reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <p className="text-[20px] font-semibold mb-4 inline-flex items-center gap-3" style={{ color: s.color === '#FFCA03' ? '#C99A00' : s.color }}>
              <span className="w-8 h-1" style={{ background: s.color }} aria-hidden="true" />{s.name}
            </p>
            <h2 className="font-serif text-balance text-[clamp(34px,3.6vw,56px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-5">{s.title}</h2>
            <p className="text-[19px] text-[#1C1C1A] leading-relaxed font-light">{s.lead}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-[18px] sm:text-[19px] text-[#6B6B65] leading-relaxed font-light self-end">
            {s.body.map((b, k) => <p key={k}>{b}</p>)}
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {shown.map(([name, place, img]) => {
            const slug = caseSlugFor(name)
            const inner = (
              <>
                <img src={img} alt={name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                {slug && <span className="absolute top-4 right-4 text-[13px] font-medium text-white bg-black/45 px-2.5 py-1.5 inline-flex items-center gap-1.5 transition-colors group-hover:bg-[#F85707]">Case study <Arrow /></span>}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-serif text-[21px] sm:text-[23px] text-white leading-tight">{name}</h3>
                  <p className="mt-1 text-[15px] text-white/65 font-light">{place}</p>
                </div>
              </>
            )
            return (
              <li key={name} className="group relative aspect-[7/5] overflow-hidden bg-[#1C1C1A]">
                {slug ? <Link to={`/work/${slug}`} className="absolute inset-0" aria-label={`${name} case study`}>{inner}</Link> : inner}
              </li>
            )
          })}
        </ul>
        {s.projects.length > 8 && (
          <div className="mt-8 flex justify-center">
            <button type="button" onClick={() => setShowAll(v => !v)} className="inline-flex items-center gap-3 h-12 px-6 text-[15px] font-medium border border-[#000050]/25 text-[#000050] hover:border-[#000050] transition-colors">
              {showAll ? 'Show fewer' : `Show all ${s.projects.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Services page ─────────────────────────────────────────────── */
export function ServicesPage() {
  // A footer or honeycomb link opens that service's details as well as scrolling to it
  const [focus, setFocus] = useState<{ id: string; n: number } | null>(null)
  useDeepLink(go => { if (SERVICES.some(s => s.id === go)) { setFocus(f => ({ id: go, n: (f?.n ?? 0) + 1 })); scrollToId(`svc-${go}`) } })
  return (
    <>
      <Services asPage />
      <div className="bg-[#F9F8F6]">
        {SERVICES.map((s, i) => <ServiceBlock key={s.id} s={s} i={i} focus={focus?.id === s.id ? focus.n : 0} />)}
      </div>
    </>
  )
}

/* One collapsible row in a service block: what's included, related case studies */
function Fold({ label, count, color, open, onToggle, children }: { label: string; count: number; color: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-[#E2E0DB]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group w-full flex items-center gap-4 py-5 text-left"
      >
        <span className="h-1 rounded-full transition-all duration-500" style={{ background: color, width: open ? 28 : 12 }} aria-hidden="true" />
        <span className={`flex-1 text-[17px] sm:text-[18px] font-medium transition-colors ${open ? 'text-[#000050]' : 'text-[#1C1C1A] group-hover:text-[#F85707]'}`}>{label}</span>
        <span className="text-[14px] text-[#6B6B65] tabular-nums">{count}</span>
        <span className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#000050] border-[#000050] text-white rotate-180' : 'border-[#D4D2CC] text-[#000050] group-hover:border-[#000050]'}`} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden" inert={!open}>
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

function ServiceBlock({ s, i, focus }: { s: typeof SERVICES[number]; i: number; focus: number }) {
  const { ref, inView } = useInView()
  const isTraining = s.id === 'training'
  const [open, setOpen] = useState<'items' | 'cases' | null>(null)
  useEffect(() => { if (focus) setOpen(s.items ? 'items' : 'cases') }, [focus, s.items])
  const toggle = (k: 'items' | 'cases') => setOpen(o => (o === k ? null : k))
  return (
    <section id={`svc-${s.id}`} className={`px-6 sm:px-12 py-14 sm:py-20 scroll-mt-24 ${i % 2 ? 'bg-[#F9F8F6]' : 'bg-[#F2F1EF]'}`}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 reveal ${inView ? 'visible' : ''}`}>
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-serif text-[18px] text-[#6B6B65] tabular-nums">0{i + 1}</span>
            <span className="h-1 w-10" style={{ background: s.color }} aria-hidden="true" />
            <span className="text-[20px] font-semibold text-[#000050]">{s.short}</span>
          </div>
          <h2 className="font-serif text-balance text-[clamp(32px,3.2vw,50px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-5">{s.title}</h2>
          <p className="text-[19px] text-[#1C1C1A] leading-relaxed font-light">{s.lead}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-[18px] sm:text-[19px] text-[#6B6B65] leading-relaxed font-light mb-8">{s.desc}</p>
          {isTraining && (
            <a href={ACADEMY_URL} className="group relative flex items-center justify-between gap-6 mb-8 overflow-hidden bg-[#111110] hover:bg-[#000050] transition-colors">
              <span className="absolute top-0 left-0 right-0 h-1 flex" aria-hidden="true">
                {['#3985FD', '#15D2A4', '#99CA32', '#FFCA03', '#FC026F', '#8238EB', '#F85707'].map(c => <span key={c} className="flex-1" style={{ background: c }} />)}
              </span>
              <span className="flex-1 flex items-center justify-between gap-6 px-6 py-5 sm:px-8 sm:py-6">
                <span className="flex items-center gap-5">
                  <img src="./profun-academy-white.svg" alt="ProFun Academy" className="h-10 sm:h-12 w-auto" />
                  <span className="hidden sm:block text-[16px] text-white/80 font-light">Explore programs, formats and courses</span>
                </span>
                <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white group-hover:gap-4 transition-all whitespace-nowrap">Visit <Arrow /></span>
              </span>
            </a>
          )}
          <div className="border-t border-[#E2E0DB]">
            {s.items && (
              <Fold label="What’s included" count={s.items.length} color={s.color} open={open === 'items'} onToggle={() => toggle('items')}>
                <ul>
                  {open === 'items' && s.items.map((it, k) => (
                    <li key={it} className="prog-tag flex items-start gap-4 py-2.5 text-[17px] text-[#1C1C1A]" style={{ animationDelay: `${k * 40}ms`, boxShadow: "none" }}>
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-none" style={{ background: s.color }} aria-hidden="true" />{it}
                    </li>
                  ))}
                </ul>
              </Fold>
            )}
            <Fold label="Related case studies" count={s.cases.length} color={s.color} open={open === 'cases'} onToggle={() => toggle('cases')}>
              <p className="flex flex-wrap gap-2">
                {s.cases.map(c => CASE_DETAIL[c]
                  ? <Link key={c} to={`/work/${CASE_DETAIL[c].slug}`} className="inline-flex items-center gap-2 text-[14px] text-[#4A4A45] bg-white border border-[#E2E0DB] px-3 py-1.5 hover:border-[#000050] hover:text-[#000050] transition-colors">{c}</Link>
                  : <span key={c} className="text-[14px] text-[#4A4A45] bg-white border border-[#E2E0DB] px-3 py-1.5">{c}</span>)}
              </p>
            </Fold>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── People: same team, photos and layout as the ProFun Academy site ── */
export function TeamPage() {
  return <Leadership />
}

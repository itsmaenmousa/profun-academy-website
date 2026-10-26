import { useEffect, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { useDeepLink, scrollToId } from '../lib/deeplink'
import { SECTORS, SERVICES, NEWS, AFFILIATIONS, pf, ACADEMY_URL } from '../data'
import { PageIntro, SectionHead, Arrow, TextLink } from './ui'
import Stats from './Stats'
import { AcademyBand } from './HomeSections'
import Leadership from './Leadership'

/* ── About ─────────────────────────────────────────────────────── */
const QUALITY = [
  { title: 'Internal Quality', desc: 'Accuracy, consistency and efficiency in how we work.', color: '#3985FD' },
  { title: 'Client Work Product', desc: 'Best-in-class consulting reports and advisory services.', color: '#15D2A4' },
  { title: 'Programs and Services', desc: 'The quality of ProFun Academy and all client-facing services.', color: '#FC026F' },
  { title: 'Client Enablement', desc: 'Tools and knowledge that help clients achieve their own quality standards.', color: '#8238EB' },
]

export function AboutPage() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: in2 } = useInView()
  const [tapped, setTapped] = useState<number | null>(null)
  return (
    <>
      <PageIntro
        eyebrow="About ProFun"
        title="The world leader in attractions operations."
        lead="The only firm dedicated solely to operations advisory and management in the global attractions industry. Since 1980, we have advised on, trained for and managed projects on every continent."
        image={pf('2024/06/AMNH-Rose-Center-scaled.jpg')}
      />
      <Stats />
      <section className="bg-[#F2F1EF] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Our Value</p>
            <h2 className="font-serif text-balance text-[clamp(34px,3.4vw,52px)] text-[#000050] leading-[1.1] tracking-[-0.01em]">
              Bridging creative ambition with operational reality.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-[19px] sm:text-[20px] text-[#6B6B65] leading-relaxed font-light">
            <p>ProFun is the world leader, and the only firm of its kind, dedicated exclusively to operations advisory and management for the attractions industry, serving some of the world&rsquo;s most iconic destinations.</p>
            <p>Our value lies in applying commercial discipline, practical experience and global insight to ensure concepts thrive long after opening day.</p>
            <p>Our team is built for impact: seasoned international executives and regional specialists with unmatched operational expertise. From pre-concept planning and analysis to daily management, our people know what it takes to deliver guest satisfaction, financial performance and operational reliability, because they&rsquo;ve been there.</p>
            <div className="pt-4"><TextLink to="/team">Meet our people</TextLink></div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F8F6] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1920px] mx-auto">
          <SectionHead eyebrow="Our Commitment to Quality" title="Excellence through accountability." side="Our mission is to deliver exceptional operations advisory and management services, and professional training through ProFun Academy, that exceed expectations and drive sustainable growth." />
          <ul ref={ref2 as React.RefObject<HTMLUListElement>} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {QUALITY.map((v, i) => (
              <li key={v.title} className={`value-card group relative bg-white p-8 sm:p-9 min-h-[220px] flex flex-col overflow-hidden reveal reveal-delay-${i + 1} ${in2 ? 'visible' : ''}`} style={{ ['--brand' as string]: v.color, ['--ink' as string]: '#ffffff' }}>
                <span className="value-fill" aria-hidden="true" />
                <span className="value-bar absolute top-0 left-0 right-0 h-1" style={{ background: v.color }} aria-hidden="true" />
                <h3 className="value-title relative font-serif text-[23px] text-[#000050] leading-snug mt-4 mb-3">{v.title}</h3>
                <p className="value-copy relative text-[17px] text-[#6B6B65] leading-relaxed font-light">{v.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] text-[#6B6B65] font-light">Our complete Quality Policy is available upon request.</p>
        </div>
      </section>

      <section className="bg-[#F2F1EF] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1920px] mx-auto">
          <SectionHead eyebrow="Our Affiliations" title="Part of the bodies that shape the industry." />
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {AFFILIATIONS.map((p, i) => (
              <li key={p.name} className={`partner-card group relative bg-[#F9F8F6] p-4 sm:p-6 lg:p-10 flex items-center justify-center lg:min-h-[240px] overflow-hidden ${tapped === i ? 'is-on' : ''}`} style={{ ['--brand' as string]: p.color }} onClick={() => setTapped(t => (t === i ? null : i))}>
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

/* ── Sectors ───────────────────────────────────────────────────── */
export function SectorsPage() {
  const [active, setActive] = useState<string>(SECTORS[0].id)
  useDeepLink(go => { if (SECTORS.some(s => s.id === go)) { setActive(go); scrollToId(`sector-${go}`) } })
  // Track which sector is on screen for the tab bar
  useEffect(() => {
    const els = SECTORS.map(s => document.getElementById(`sector-${s.id}`)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.replace('sector-', '')) })
    }, { rootMargin: '-40% 0px -55% 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <>
      <PageIntro
        eyebrow="Our Sectors"
        title="Four sectors. One operating discipline."
        lead="Theme parks, museums, brand centers and world expos each face different pressures. ProFun brings commercial and operational rigor to all of them."
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
          {shown.map(([name, place, img]) => (
            <li key={name} className="group relative aspect-[7/5] overflow-hidden bg-[#1C1C1A]">
              <img src={pf(img)} alt={name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-serif text-[21px] sm:text-[23px] text-white leading-tight">{name}</h3>
                <p className="mt-1 text-[15px] text-white/65 font-light">{place}</p>
              </div>
            </li>
          ))}
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
  useDeepLink(go => { if (SERVICES.some(s => s.id === go)) scrollToId(`svc-${go}`) })
  return (
    <>
      <PageIntro
        eyebrow="Our Services"
        title="From first plans to daily operations."
        lead="Planning, advisory, training, implementation and management. Five services that work alone or together, at any stage of a project."
      />
      <div className="bg-[#F9F8F6]">
        {SERVICES.map((s, i) => <ServiceBlock key={s.id} s={s} i={i} />)}
      </div>
    </>
  )
}

function ServiceBlock({ s, i }: { s: typeof SERVICES[number]; i: number }) {
  const { ref, inView } = useInView()
  const isTraining = s.id === 'training'
  return (
    <section id={`svc-${s.id}`} className={`px-6 sm:px-12 py-14 sm:py-20 scroll-mt-24 ${i % 2 ? 'bg-[#F2F1EF]' : 'bg-[#F9F8F6]'}`}>
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
          {s.items && (
            <ul className="mb-8 border-t border-[#E2E0DB]">
              {s.items.map(it => (
                <li key={it} className="flex items-start gap-4 py-3.5 border-b border-[#E2E0DB] text-[17px] text-[#1C1C1A]">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-none" style={{ background: s.color }} aria-hidden="true" />{it}
                </li>
              ))}
            </ul>
          )}
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
          <p className="text-[15px] font-medium text-[#000050] mb-3">Related case studies</p>
          <p className="flex flex-wrap gap-2">
            {s.cases.map(c => <span key={c} className="text-[14px] text-[#4A4A45] bg-white border border-[#E2E0DB] px-3 py-1.5">{c}</span>)}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── People: same team, photos and layout as the ProFun Academy site ── */
export function TeamPage() {
  return <Leadership />
}

/* ── News ──────────────────────────────────────────────────────── */
export function NewsPage() {
  const { ref, inView } = useInView()
  const [lead, ...rest] = NEWS
  return (
    <>
      <PageIntro eyebrow="News" title="Latest from ProFun." lead="Company news, project milestones and the stories shaping the attractions industry." />
      <section className="bg-[#F9F8F6] px-6 sm:px-12 py-14 sm:py-20">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto reveal ${inView ? 'visible' : ''}`}>
          <a href={lead.href} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-1 lg:grid-cols-12 bg-white mb-6 sm:mb-8">
            <div className="lg:col-span-7 aspect-[16/9] overflow-hidden bg-[#1C1C1A]">
              <img src={pf(lead.image)} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-[14px] font-medium text-[#F85707] mb-3">{lead.tag} · {lead.date}</p>
              <h2 className="font-serif text-[clamp(26px,2.4vw,36px)] text-[#000050] leading-tight mb-6 group-hover:text-[#F85707] transition-colors">{lead.title}</h2>
              <span className="inline-flex items-center gap-3 text-[16px] font-medium text-[#1C1C1A] group-hover:gap-5 transition-all">Read the story <Arrow /></span>
            </div>
          </a>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {rest.map(n => (
              <li key={n.href} className="bg-white">
                <a href={n.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-[#1C1C1A]">
                    <img src={pf(n.image)} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-6">
                    <p className="text-[13px] font-medium text-[#F85707] mb-2">{n.tag} · {n.date}</p>
                    <h3 className="font-serif text-[20px] text-[#000050] leading-snug group-hover:text-[#F85707] transition-colors">{n.title}</h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <a href="https://profun.com/news/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 h-12 px-6 text-[15px] font-medium border border-[#000050]/25 text-[#000050] hover:border-[#000050] transition-colors">
              News archive <Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

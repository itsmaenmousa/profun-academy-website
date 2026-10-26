import { useEffect, useMemo, useRef, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { useDeepLink, scrollToId } from '../lib/deeplink'
import { CLIENTS, SECTORS, REGIONS, CASE_STUDIES, SERVICES, pf, type SectorId, type RegionId } from '../data'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SectionHead, Arrow } from './ui'
import { CASE_DETAIL } from '../content'
import Projects from './Projects'

type Sort = 'az' | 'za'

/* A small dropdown with checkbox or radio options */
function Dropdown({ label, count, children }: { label: string; count?: number; children: (close: () => void) => React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', close); document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc) }
  }, [open])
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className={`inline-flex items-center gap-2.5 h-12 px-5 text-[15px] font-medium border transition-colors ${open || count ? 'bg-[#000050] text-white border-[#000050]' : 'bg-white text-[#000050] border-[#D4D2CC] hover:border-[#000050]'}`}
      >
        {label}
        {!!count && <span className="min-w-5 h-5 px-1.5 rounded-full bg-[#F85707] text-white text-[12px] leading-5 text-center">{count}</span>}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}><path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-[260px] bg-white border border-[#E2E0DB] shadow-[0_20px_40px_-16px_rgba(0,0,80,0.3)] p-2">
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  )
}

function Check({ on }: { on: boolean }) {
  return (
    <span className={`w-5 h-5 flex-none border flex items-center justify-center transition-colors ${on ? 'bg-[#000050] border-[#000050]' : 'border-[#C9C7C1] bg-white'}`} aria-hidden="true">
      {on && <svg width="11" height="9" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
    </span>
  )
}

export function ClientsFilter() {
  const [sectors, setSectors] = useState<SectorId[]>([])
  const [regions, setRegions] = useState<RegionId[]>([])
  const [sort, setSort] = useState<Sort | null>(null)
  const [query, setQuery] = useState('')
  const { ref, inView } = useInView()

  useDeepLink(go => {
    if (SECTORS.some(s => s.id === go)) { setSectors([go as SectorId]); scrollToId('clients') }
    if (go === 'clients') scrollToId('clients')
  })

  const list = useMemo(() => {
    let l = CLIENTS.filter(([name, sec, reg]) =>
      (!sectors.length || sec.some(s => sectors.includes(s))) &&
      (!regions.length || regions.includes(reg)) &&
      (!query || name.toLowerCase().includes(query.toLowerCase())))
    if (sort) l = [...l].sort((a, b) => a[0].localeCompare(b[0], 'en', { numeric: true }) * (sort === 'az' ? 1 : -1))
    return l
  }, [sectors, regions, sort, query])

  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v])
  const filtered = sectors.length || regions.length || sort || query

  return (
    <section id="clients" className="bg-[#F9F8F6] px-6 sm:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <div className="max-w-[1920px] mx-auto">
        <SectionHead eyebrow="Clients & Projects" title="The names we have worked alongside." side="Filter by sector or region, or sort the list, to find the work closest to yours." />

        {/* Toolbar */}
        <div className="sticky top-[72px] lg:top-20 z-20 -mx-6 sm:-mx-12 px-6 sm:px-12 py-3 bg-[#F9F8F6]/95 backdrop-blur-md mb-8 border-b border-[#E2E0DB]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => { setSectors([]); setRegions([]); setSort(null); setQuery('') }}
              className={`h-12 px-5 text-[15px] font-medium border transition-colors ${!filtered ? 'bg-[#F85707] text-white border-[#F85707]' : 'bg-white text-[#000050] border-[#D4D2CC] hover:border-[#000050]'}`}
            >
              All clients
            </button>
            <Dropdown label="Sectors" count={sectors.length}>
              {() => SECTORS.map(s => (
                <label key={s.id} className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-[#F9F8F6] text-[15px] text-[#1C1C1A]">
                  <input type="checkbox" className="sr-only" checked={sectors.includes(s.id)} onChange={() => setSectors(x => toggle(x, s.id))} />
                  <Check on={sectors.includes(s.id)} />
                  <span className="w-2 h-2 rounded-full" style={{ background: s.color }} aria-hidden="true" />
                  {s.name}
                </label>
              ))}
            </Dropdown>
            <Dropdown label="Regions" count={regions.length}>
              {() => REGIONS.map(r => (
                <label key={r.id} className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-[#F9F8F6] text-[15px] text-[#1C1C1A]">
                  <input type="checkbox" className="sr-only" checked={regions.includes(r.id)} onChange={() => setRegions(x => toggle(x, r.id))} />
                  <Check on={regions.includes(r.id)} />
                  {r.name}
                </label>
              ))}
            </Dropdown>
            <Dropdown label={sort === 'za' ? 'Sort: Z to A' : sort === 'az' ? 'Sort: A to Z' : 'Sort by'} count={0}>
              {close => ([['az', 'Name, A to Z'], ['za', 'Name, Z to A']] as [Sort, string][]).map(([v, l]) => (
                <button key={v} type="button" onClick={() => { setSort(v); close() }} className="w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left hover:bg-[#F9F8F6] text-[15px] text-[#1C1C1A]">
                  {l}
                  {sort === v && <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#F85707" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </button>
              ))}
            </Dropdown>
            <label className="relative flex-1 min-w-[180px] sm:max-w-[300px] sm:ml-auto">
              <span className="sr-only">Search clients</span>
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B65]" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" /><path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search clients" className="w-full h-12 pl-11 pr-4 bg-white border border-[#D4D2CC] text-[15px] text-[#1C1C1A] placeholder:text-[#A8A59F] focus:outline-none focus:border-[#000050]" />
            </label>
          </div>
          <p className="mt-3 text-[14px] text-[#6B6B65]" aria-live="polite">
            Showing <b className="font-medium text-[#000050]">{list.length}</b> of {CLIENTS.length} clients
            {sectors.map(s => <span key={s} className="ml-2 inline-flex items-center gap-1.5 text-[#000050]">· {SECTORS.find(x => x.id === s)!.name}</span>)}
            {regions.map(r => <span key={r} className="ml-2 text-[#000050]">· {REGIONS.find(x => x.id === r)!.name}</span>)}
          </p>
        </div>

        {/* Logo grid */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${inView ? 'visible' : ''}`}>
          {list.length ? (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
              {list.map(([name, sec, , logo]) => (
                <li key={name} className="client-card group bg-white flex flex-col">
                  <div className="aspect-[4/3] flex items-center justify-center p-5 sm:p-6 border-b border-[#F2F1EF]">
                    <img src={pf(logo)} alt={name} loading="lazy" decoding="async" className="max-w-full max-h-full object-contain grayscale-[0.35] group-hover:grayscale-0 transition duration-300" />
                  </div>
                  <div className="px-4 py-3 flex items-start justify-between gap-3 flex-1">
                    <p className="text-[14px] sm:text-[15px] text-[#1C1C1A] leading-snug">{name}</p>
                    <span className="flex gap-1 pt-1.5 flex-none" aria-hidden="true">
                      {sec.map(s => <span key={s} className="w-2 h-2 rounded-full" style={{ background: SECTORS.find(x => x.id === s)!.color }} />)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-white border border-[#E2E0DB] p-10 text-center">
              <p className="text-[18px] text-[#6B6B65] font-light">No clients match these filters.</p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-[#6B6B65]">
          {SECTORS.map(s => <span key={s.id} className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ background: s.color }} />{s.name}</span>)}
        </div>
      </div>
    </section>
  )
}

export function CaseStudies() {
  const [svc, setSvc] = useState<string | null>(null)
  const { ref, inView } = useInView()
  useDeepLink(go => { if (go === 'case-studies') scrollToId('case-studies') })
  const list = svc ? CASE_STUDIES.filter(c => c[1].includes(svc)) : CASE_STUDIES
  const color = (s: string) => SERVICES.find(x => x.short === s)?.color ?? '#000050'

  return (
    <section id="case-studies" className="bg-[#F2F1EF] px-6 sm:px-12 py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <div className="max-w-[1920px] mx-auto">
        <SectionHead eyebrow="Case Studies" title="The only firm trusted across 500+ projects worldwide." side="From theme parks in the Middle East to museums in North America and brand centers in Europe, our case studies show one thing: ProFun delivers measurable impact." />
        <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-8" role="group" aria-label="Filter case studies by service">
          {[null, ...SERVICES.map(s => s.short)].map(s => (
            <button
              key={s ?? 'all'}
              type="button"
              aria-pressed={svc === s}
              onClick={() => setSvc(s)}
              className={`flex-none h-11 px-5 text-[15px] font-medium border transition-colors inline-flex items-center gap-2 ${svc === s ? 'bg-[#000050] text-white border-[#000050]' : 'bg-white text-[#000050] border-[#D4D2CC] hover:border-[#000050]'}`}
            >
              {s && <span className="w-2 h-2 rounded-full" style={{ background: color(s) }} aria-hidden="true" />}
              {s ?? 'All'}
              <span className={`text-[13px] ${svc === s ? 'text-white/70' : 'text-[#6B6B65]'}`}>{s ? CASE_STUDIES.filter(c => c[1].includes(s)).length : CASE_STUDIES.length}</span>
            </button>
          ))}
        </div>
        <ul ref={ref as React.RefObject<HTMLUListElement>} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 reveal ${inView ? 'visible' : ''}`}>
          {list.map(([name, services, logo]) => (
            <li key={name} className="flex">
              <Link to={`/work/${CASE_DETAIL[name].slug}`} className="group flex-1 bg-white flex items-center gap-5 p-5 min-h-[112px] border border-transparent hover:border-[#000050] transition-colors">
                <div className="w-20 h-16 flex-none flex items-center justify-center">
                  <img src={pf(logo)} alt="" loading="lazy" decoding="async" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[16px] font-medium text-[#000050] leading-snug mb-2 group-hover:text-[#F85707] transition-colors">{name}</p>
                  <p className="flex flex-wrap gap-x-3 gap-y-1">
                    {services.map(s => (
                      <span key={s} className={`inline-flex items-center gap-1.5 text-[13px] ${svc === s ? 'text-[#000050] font-medium' : 'text-[#6B6B65]'}`}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: color(s) }} aria-hidden="true" />{s}
                      </span>
                    ))}
                  </p>
                </div>
                <Arrow className="flex-none text-[#000050] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function WorkPage() {
  return (
    <>
      <Projects asPage />
      <ClientsFilter />
      <CaseStudies />
    </>
  )
}

/* ── Case study detail (/work/:slug), from the profun.com case study pages ── */

// Sharper local photography where we have it (the profun.com case images are 700px)
const LOCAL_IMG: Record<string, string> = {
  'dubai-world-expo-2020': 'expo-2020', '2012-london-olympics': 'london-2012', 'ferrari-world': 'ferrari-world', absolut: 'absolut',
  'johnnie-walker': 'johnnie-walker', 'dubai-parks-and-resorts-2': 'dubai-parks', 'ain-dubai': 'ain-dubai', 'park-at-owa': 'owa',
  'one-vanderbilt': 'one-vanderbilt', 'aop-2-6-hudson-yards': 'the-vessel', 'expo-2010': 'expo-2010', 'ushaka-marine-world-2': 'ushaka',
  'making-of-hp': 'harry-potter', 'world-of-coca-cola': 'coca-cola', 'henry-ford': 'henry-ford', quest: 'quest', '911-memorial': '911-memorial',
  'cnn-tour': 'cnn', ca_academy_of_sciences: 'cal-academy', amnh: 'amnh-rose', 'crayola-experience': 'crayola', aop: 'aquarium-pacific',
  'mahanakhon-skywalk': 'mahanakhon', 'hersheys-chocolate-world': 'hershey', 'makkah-clock-tower': 'makkah-royal',
}
const caseImage = (name: string) => {
  const d = CASE_DETAIL[name]
  return LOCAL_IMG[d.slug] ? `./projects/${LOCAL_IMG[d.slug]}.jpg` : pf(d.image)
}
const pad = (n: number) => String(n).padStart(2, '0')

export function CaseStudyPage() {
  const { slug } = useParams()
  // Keyed by slug so every case study plays its entrance from the start
  return <CaseStudy key={slug} slug={slug ?? ''} />
}

function CaseStudy({ slug }: { slug: string }) {
  const navigate = useNavigate()
  const idx = CASE_STUDIES.findIndex(c => CASE_DETAIL[c[0]].slug === slug)
  const [shown, setShown] = useState(false)
  const [progress, setProgress] = useState(0)
  const bodyRef = useRef<HTMLDivElement>(null)
  const { ref: bodyIn, inView: bodyVisible } = useInView()
  const { ref: relRef, inView: relVisible } = useInView()

  useEffect(() => { const t = requestAnimationFrame(() => setShown(true)); return () => cancelAnimationFrame(t) }, [])

  // Reading progress along the story
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const n = CASE_STUDIES.length
  const prev = idx >= 0 ? CASE_STUDIES[(idx - 1 + n) % n] : null
  const next = idx >= 0 ? CASE_STUDIES[(idx + 1) % n] : null

  // Arrow keys step through the case studies
  useEffect(() => {
    if (!prev || !next) return
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest?.('input, textarea')) return
      if (e.key === 'ArrowRight') navigate(`/work/${CASE_DETAIL[next[0]].slug}`)
      if (e.key === 'ArrowLeft') navigate(`/work/${CASE_DETAIL[prev[0]].slug}`)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, navigate])

  if (idx < 0 || !prev || !next) return (
    <section className="bg-[#F9F8F6] px-6 sm:px-12 py-24 text-center">
      <p className="text-[19px] text-[#6B6B65] font-light mb-6">This case study could not be found.</p>
      <Link to="/work?go=case-studies" className="inline-flex items-center gap-3 text-[16px] font-medium text-[#000050] hover:text-[#F85707]">All case studies <Arrow /></Link>
    </section>
  )

  const [name, services, logo] = CASE_STUDIES[idx]
  const d = CASE_DETAIL[name]
  const svcColor = (x: string) => SERVICES.find(v => v.short === x)?.color ?? '#000050'
  const accent = svcColor(services[0])
  const [lead, ...rest] = d.body
  // Related: the case studies that share the most services
  const related = CASE_STUDIES
    .filter(c => c[0] !== name && c[0] !== next[0])
    .map(c => [c, c[1].filter(x => services.includes(x)).length] as const)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3).map(r => r[0])

  return (
    <article className="cs">
      <span className="fixed left-0 top-[72px] lg:top-20 z-40 h-[3px] origin-left" style={{ width: '100%', transform: `scaleX(${progress})`, background: accent }} aria-hidden="true" />

      {/* Opening */}
      <section className="bg-[#F2F1EF] px-6 sm:px-12 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className={`flex items-center justify-between gap-6 mb-10 sm:mb-14 reveal ${shown ? 'visible' : ''}`}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[15px] text-[#6B6B65] min-w-0">
              <Link to="/work" className="hover:text-[#F85707] transition-colors">Our Work</Link>
              <span aria-hidden="true">/</span>
              <Link to="/work?go=case-studies" className="hover:text-[#F85707] transition-colors whitespace-nowrap">Case Studies</Link>
            </nav>
            <p className="text-[15px] font-medium text-[#000050] tabular-nums whitespace-nowrap">{pad(idx + 1)} <span className="text-[#A8A59F]">/ {n}</span></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className={`text-[20px] font-semibold text-[#F85707] mb-4 reveal ${shown ? 'visible' : ''}`}>Case Study</p>
              <h1 className={`font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-6 reveal reveal-delay-1 ${shown ? 'visible' : ''}`}>{name}</h1>
              <p className={`inline-flex items-center gap-2.5 text-[19px] text-[#1C1C1A] font-light mb-10 reveal reveal-delay-2 ${shown ? 'visible' : ''}`}>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true"><path d="M7 17s6-5.6 6-10A6 6 0 1 0 1 7c0 4.4 6 10 6 10Z" stroke="#F85707" strokeWidth="1.4" /><circle cx="7" cy="7" r="2.2" fill="#F85707" /></svg>
                {d.location}
              </p>

              {/* Scope of work: all five services, the ones on this project lit */}
              <div className={`reveal reveal-delay-3 ${shown ? 'visible' : ''}`}>
                <p className="text-[14px] font-medium text-[#6B6B65] mb-3">Scope of work</p>
                <ul className="grid grid-cols-5 gap-1.5">
                  {SERVICES.map((v, i) => {
                    const on = services.includes(v.short)
                    return (
                      <li key={v.id}>
                        <Link to={`/services?go=${v.id}`} title={v.short} className={`cs-scope group block ${on ? '' : 'opacity-45 hover:opacity-80'}`}>
                          <span className={`block h-1.5 ${shown && on ? 'cs-scope-on' : ''}`} style={{ background: on ? v.color : '#D4D2CC', animationDelay: `${0.5 + i * 0.09}s` }} />
                          <span className={`mt-2.5 block text-[11px] min-[400px]:text-[12px] sm:text-[14px] leading-tight break-words ${on ? 'text-[#000050] font-medium' : 'text-[#6B6B65]'}`}>{v.short.replace('Implementation', 'Implemen­tation').replace('Management', 'Manage­ment')}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className={`lg:col-span-7 order-1 lg:order-2 reveal reveal-delay-1 ${shown ? 'visible' : ''}`}>
              <div className={`relative aspect-[4/3] overflow-hidden bg-[#1C1C1A] img-reveal ${shown ? 'visible' : ''}`}>
                <img src={caseImage(name)} alt={name} className="cs-zoom w-full h-full object-cover" />
                <span className="absolute bottom-0 left-0 right-0 h-1 flex" aria-hidden="true">
                  {services.map(x => <span key={x} className="flex-1" style={{ background: svcColor(x) }} />)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F9F8F6] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
        <div ref={bodyIn as React.RefObject<HTMLDivElement>} className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className={`lg:sticky lg:top-32 reveal ${bodyVisible ? 'visible' : ''}`}>
              <div className="bg-white border border-[#E2E0DB]">
                <div className="h-36 flex items-center justify-center p-8 border-b border-[#E2E0DB]">
                  <img src={pf(logo)} alt={`${name} logo`} className="max-w-[70%] max-h-full object-contain" />
                </div>
                <dl className="p-6 sm:p-8 space-y-5">
                  <div>
                    <dt className="text-[14px] font-medium text-[#6B6B65] mb-1.5">Location</dt>
                    <dd className="text-[17px] text-[#000050]">{d.location}</dd>
                  </div>
                  <div>
                    <dt className="text-[14px] font-medium text-[#6B6B65] mb-2">Services</dt>
                    <dd className="flex flex-col gap-2">
                      {services.map(x => (
                        <Link key={x} to={`/services?go=${x.toLowerCase()}`} className="group inline-flex items-center gap-2.5 text-[17px] text-[#000050] hover:text-[#F85707] transition-colors">
                          <span className="w-2 h-2 rounded-full" style={{ background: svcColor(x) }} aria-hidden="true" />{x}
                          <Arrow className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
              <Link to="/contact" className="mt-4 flex items-center justify-between gap-4 bg-[#000050] text-white px-6 sm:px-8 py-5 hover:bg-[#F85707] transition-colors group">
                <span className="text-[16px] font-medium">Planning a similar project?</span>
                <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-[#F85707] transition-colors"><Arrow /></span>
              </Link>
            </div>
          </aside>

          <div ref={bodyRef} className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2">
            <p className={`font-serif text-[clamp(21px,1.7vw,27px)] text-[#000050] leading-[1.4] tracking-[-0.01em] mb-10 reveal ${bodyVisible ? 'visible' : ''}`}>
              <span className="block w-12 h-1 mb-8" style={{ background: accent }} aria-hidden="true" />
              {lead}
            </p>
            <div className="space-y-6 text-[18px] sm:text-[19px] text-[#4A4A45] leading-relaxed font-light">
              {rest.map((para, i) => <p key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${bodyVisible ? 'visible' : ''}`}>{para}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#F2F1EF] px-6 sm:px-12 py-16 sm:py-20">
        <div ref={relRef as React.RefObject<HTMLDivElement>} className="max-w-[1920px] mx-auto">
          <div className={`flex items-end justify-between gap-6 mb-8 sm:mb-10 reveal ${relVisible ? 'visible' : ''}`}>
            <div>
              <p className="text-[20px] font-semibold text-[#F85707] mb-3">Related Work</p>
              <h2 className="font-serif text-[clamp(28px,2.6vw,40px)] text-[#000050] leading-tight tracking-[-0.01em]">More projects like this.</h2>
            </div>
            <Link to="/work?go=case-studies" className="hidden sm:inline-flex items-center gap-3 text-[16px] font-medium text-[#1C1C1A] hover:text-[#F85707] hover:gap-5 transition-all whitespace-nowrap">All case studies <Arrow /></Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {related.map((c, i) => (
              <li key={c[0]} className={`reveal reveal-delay-${i + 1} ${relVisible ? 'visible' : ''}`}>
                <Link to={`/work/${CASE_DETAIL[c[0]].slug}`} className="group block bg-white h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1C1A]">
                    <img src={caseImage(c[0])} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                    <span className="absolute bottom-0 left-0 right-0 h-1 flex" aria-hidden="true">{c[1].map(x => <span key={x} className="flex-1" style={{ background: svcColor(x) }} />)}</span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-[14px] text-[#6B6B65] mb-2">{CASE_DETAIL[c[0]].location}</p>
                    <h3 className="font-serif text-[clamp(21px,1.6vw,25px)] text-[#000050] leading-snug group-hover:text-[#F85707] transition-colors">{c[0]}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/work?go=case-studies" className="sm:hidden mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-[#1C1C1A]">All case studies <Arrow /></Link>
        </div>
      </section>

      {/* Up next */}
      <section className="bg-[#111110] text-white">
        <Link to={`/work/${CASE_DETAIL[next[0]].slug}`} className="cs-next group relative block overflow-hidden">
          <img src={caseImage(next[0])} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-55 group-hover:scale-[1.05]" />
          <span className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/75 to-[#111110]/20" aria-hidden="true" />
          <div className="relative max-w-[1920px] mx-auto px-6 sm:px-12 py-16 sm:py-24 lg:py-28 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="max-w-[900px]">
              <p className="text-[16px] font-medium text-white/60 mb-4 tabular-nums">Up next · {pad((idx + 1) % n + 1)} / {n}</p>
              <p className="font-serif text-[clamp(36px,4.6vw,72px)] leading-[1.05] tracking-[-0.015em]">{next[0]}</p>
              <p className="mt-4 text-[18px] text-white/70 font-light">{CASE_DETAIL[next[0]].location}</p>
            </div>
            <span className="cs-go flex-none w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/50 flex items-center justify-center transition-all duration-500 group-hover:bg-[#F85707] group-hover:border-[#F85707] group-hover:translate-x-2">
              <svg width="20" height="15" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </Link>
        <div className="border-t border-white/10">
          <div className="max-w-[1920px] mx-auto px-6 sm:px-12 py-5 flex items-center justify-between gap-6 text-[15px]">
            <Link to={`/work/${CASE_DETAIL[prev[0]].slug}`} className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors min-w-0">
              <Arrow className="rotate-180 flex-none transition-transform group-hover:-translate-x-1" />
              <span className="truncate"><span className="hidden sm:inline">Previous: </span>{prev[0]}</span>
            </Link>
            <Link to="/work?go=case-studies" className="inline-flex items-center gap-2.5 text-white/70 hover:text-white transition-colors whitespace-nowrap">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><rect width="6" height="6" /><rect x="8" width="6" height="6" /><rect y="8" width="6" height="6" /><rect x="8" y="8" width="6" height="6" /></svg>
              All {n}
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

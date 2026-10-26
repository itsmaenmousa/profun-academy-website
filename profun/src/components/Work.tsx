import { useEffect, useMemo, useRef, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { useDeepLink, scrollToId } from '../lib/deeplink'
import { CLIENTS, SECTORS, REGIONS, CASE_STUDIES, SERVICES, pf, type SectorId, type RegionId } from '../data'
import { PageIntro, SectionHead } from './ui'
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
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter case studies by service">
          {[null, ...SERVICES.map(s => s.short)].map(s => (
            <button
              key={s ?? 'all'}
              type="button"
              aria-pressed={svc === s}
              onClick={() => setSvc(s)}
              className={`h-11 px-5 text-[15px] font-medium border transition-colors inline-flex items-center gap-2 ${svc === s ? 'bg-[#000050] text-white border-[#000050]' : 'bg-white text-[#000050] border-[#D4D2CC] hover:border-[#000050]'}`}
            >
              {s && <span className="w-2 h-2 rounded-full" style={{ background: color(s) }} aria-hidden="true" />}
              {s ?? 'All'}
              <span className={`text-[13px] ${svc === s ? 'text-white/70' : 'text-[#6B6B65]'}`}>{s ? CASE_STUDIES.filter(c => c[1].includes(s)).length : CASE_STUDIES.length}</span>
            </button>
          ))}
        </div>
        <ul ref={ref as React.RefObject<HTMLUListElement>} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 reveal ${inView ? 'visible' : ''}`}>
          {list.map(([name, services, logo]) => (
            <li key={name} className="bg-white flex items-center gap-5 p-5 min-h-[112px]">
              <div className="w-20 h-16 flex-none flex items-center justify-center">
                <img src={pf(logo)} alt="" loading="lazy" decoding="async" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-[16px] font-medium text-[#000050] leading-snug mb-2">{name}</p>
                <p className="flex flex-wrap gap-x-3 gap-y-1">
                  {services.map(s => (
                    <span key={s} className={`inline-flex items-center gap-1.5 text-[13px] ${svc === s ? 'text-[#000050] font-medium' : 'text-[#6B6B65]'}`}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color(s) }} aria-hidden="true" />{s}
                    </span>
                  ))}
                </p>
              </div>
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
      <PageIntro
        eyebrow="Our Work"
        title="500+ projects across 50 countries."
        lead="For more than four decades, ProFun has delivered operational excellence to the world's most iconic attractions and events. Explore our clients by sector and region, then dive into the case studies."
      />
      <Projects />
      <ClientsFilter />
      <CaseStudies />
    </>
  )
}

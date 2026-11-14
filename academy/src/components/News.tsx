import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDeepLink, scrollToId } from '../lib/deeplink'
import { useEqualize } from '../hooks/useEqualize'
import { useInView } from '../hooks/useInView'
import { COPY as P } from '../copy'
import { TAILORED, ACCREDITED, type Area, type Program } from '../data'

export default function News() {
  const { ref, inView } = useInView()
  const cardsRef = useRef<HTMLDivElement>(null)
  useEqualize(cardsRef)
  const { ref: headRef, inView: headIn } = useInView()
  // Footer links: open the matching program card and bring it into view
  const [pick, setPick] = useState<{ i: number; n: number } | null>(null)
  useDeepLink(go => {
    const i = ['tailored', 'accredited'].indexOf(go)
    if (i < 0) return
    setPick(p => ({ i, n: (p?.n ?? 0) + 1 }))
    scrollToId(`program-${go}`)
  })

  return (
    <section id="programs" className="bg-[#F2F1EF] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div ref={headRef as React.RefObject<HTMLDivElement>} className={`flex items-end justify-between gap-8 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${headIn ? 'visible' : ''}`}>
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">{P.programs.head_eyebrow}</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[900px] mb-6">
              {P.programs.head_title}
            </h2>
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light max-w-[640px]">
              {P.programs.head_text}
            </p>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[15px] font-medium text-[#6B6B65] hover:text-[#F85707] hover:gap-4 transition-all duration-200"
          >
            {P.programs.head_link}
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Program groups: one aligned row of cards */}
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {[...TAILORED, ...ACCREDITED].map((a, i) => (
              <div key={a.title} id={`program-${i === 0 ? 'tailored' : 'accredited'}`} className="flex flex-col">
                <Card a={a} i={i} inView={inView} pick={pick} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function Card({ a, i, inView, pick }: { a: Program; i: number; inView: boolean; pick: { i: number; n: number } | null }) {
  const [open, setOpen] = useState(false)
  const [area, setArea] = useState<number | null>(null)
  useEffect(() => { if (pick) { setOpen(pick.i === i); setArea(null) } }, [pick, i])
  return (
    <article className={`flex-1 bg-[#F9F8F6] group flex flex-col transition-colors duration-300 hover:bg-white reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-[#E2E0DB]">
        <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: a.color }} aria-hidden="true" />
        <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" style={{ objectPosition: a.pos ?? '50% 50%' }} />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div data-eq="meta" className="flex flex-col gap-1 mb-3">
          <span className="text-[16px] font-medium" style={{ color: a.color }}>{a.category}</span>
        </div>
        <h4 data-eq="title" className="font-serif text-[clamp(22px,1.8vw,26px)] text-[#000050] leading-tight mb-3">{a.title}</h4>
        <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light mb-6" data-eq="desc">{a.desc}</p>

        <div className="pt-1">
          <button
            type="button"
            onClick={() => { setOpen(o => !o); setArea(null) }}
            aria-expanded={open}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#000050] hover:text-[#F85707] transition-colors duration-200"
          >
            {open ? 'Show less' : a.label}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
              <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Full list, revealed on click */}
        <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <ul className="pt-5 border-b border-[#E2E0DB]" aria-label={`${a.title} list`}>
              {open && a.items.map((t, k) => (
                typeof t === 'string'
                  ? <ListRow key={t} name={t} color={a.color} k={k} />
                  : <AreaRow key={t.name} area={t} k={k} open={area === k} onToggle={() => setArea(x => (x === k ? null : k))} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

/* A simple course row (Ellis) */
function ListRow({ name, color, k }: { name: string; color: string; k: number }) {
  return (
    <li className="prog-tag flex items-center gap-3 border-t border-[#E2E0DB] py-3 text-[15px] sm:text-[16px] text-[#000050]" style={{ animationDelay: `${k * 30}ms` }}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} aria-hidden="true" />
      {name}
    </li>
  )
}

/* A program area that opens to show its programs */
function AreaRow({ area, k, open, onToggle }: { area: Area; k: number; open: boolean; onToggle: () => void }) {
  return (
    <li className="prog-tag border-t border-[#E2E0DB]" style={{ animationDelay: `${k * 30}ms` }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center gap-3 py-3 text-left text-[15px] sm:text-[16px] font-medium text-[#000050] hover:text-[#F85707] transition-colors duration-200"
      >
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: area.color }} aria-hidden="true" />
        <span className="flex-1">{area.name}</span>
        <span className="text-[13px] font-normal text-[#6B6B65] tabular-nums">{area.subs.length}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-[18px] pb-4">
            {area.subs.map(sub => (
              <li key={sub} className="flex gap-2.5 text-[14px] sm:text-[15px] text-[#4A4A45] font-light leading-snug">
                <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: area.color }} aria-hidden="true" />
                {sub}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

import type React from 'react'
import { useRef, useState } from 'react'
import { useEqualize } from '../hooks/useEqualize'
import { useInView } from '../hooks/useInView'

type Program = { category: string; date: string; title: string; desc: string; image: string; color: string; pos?: string; label: string; items: string[] }

const TAILORED: Program[] = [
  {
    category: 'Tailored Training Programs',
    date: '13 program areas',
    title: 'Thirteen program areas. Hundreds of programs.',
    desc: 'Tailored training across every part of an attraction, shaped around your people, culture and operations.',
    image: './training-programs-v2.jpg',
    pos: '50% 35%',
    color: '#8238EB',
    label: 'Explore program areas',
    items: ['Leadership & Management', 'Industry Experience', 'Safety & Security', 'Rides & Attractions', 'Frontline Colleagues', 'Human Resources', 'Guest Service Excellence', 'Sales & Marketing', 'Food & Beverage', 'Retail', 'Engineering & Technical Services', 'Information Technology', 'Housekeeping'],
  },
]

const ACCREDITED: Program[] = [
  {
    category: 'Accredited and Certified Programs',
    date: '11 programs',
    title: 'Ellis & Associates',
    desc: 'The gold standard in first aid, CPR and safety certification for attractions teams, plus lifeguard and aquatic programs.',
    image: './ellis-first-aid.jpg',
    color: '#00AFDC',
    label: 'Explore courses',
    items: ['CPR & First Aid', 'Preventing Bloodborne & Airborne Pathogens', 'Supplemental Oxygen Support', 'Active Shooter Assailant Safety', 'Attraction Operator', 'Water Slide Dispatch Operator', 'International Lifeguard Training Program', 'vanGUARD Aquatics Leadership', 'Water Safety Plus', 'Jeff Ellis Swimming', 'Train the Trainer'],
  },
]

export default function News() {
  const { ref, inView } = useInView()
  const cardsRef = useRef<HTMLDivElement>(null)
  useEqualize(cardsRef)
  const { ref: headRef, inView: headIn } = useInView()

  return (
    <section id="programs" className="bg-[#F2F1EF] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div ref={headRef as React.RefObject<HTMLDivElement>} className={`flex items-end justify-between gap-8 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${headIn ? 'visible' : ''}`}>
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Our Programs</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[900px] mb-6">
              Industry expertise. Programs shaped around you.
            </h2>
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light max-w-[640px]">
              Explore accredited and certified programs alongside tailored training designed around your people, culture, and operational priorities.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[15px] font-medium text-[#6B6B65] hover:text-[#F85707] hover:gap-4 transition-all duration-200"
          >
            Request a custom program
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Program groups: one aligned row of cards */}
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {[...TAILORED, ...ACCREDITED].map((a, i) => (
              <div key={a.title} className="flex flex-col">
                <Card a={a} i={i} inView={inView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function Card({ a, i, inView }: { a: Program; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <article className={`flex-1 bg-[#F9F8F6] group flex flex-col transition-colors duration-300 hover:bg-white reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-[#E2E0DB]">
        <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: a.color }} aria-hidden="true" />
        <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" style={{ objectPosition: a.pos ?? '50% 50%' }} />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div data-eq="meta" className="flex flex-col gap-1 mb-4">
          <span className="text-[16px] font-medium" style={{ color: a.color }}>{a.category}</span>
          <span className="text-[15px] text-[#6B6B65] font-light">{a.date}</span>
        </div>
        <h4 data-eq="title" className="font-serif text-[clamp(22px,1.8vw,26px)] text-[#000050] leading-tight mb-3">{a.title}</h4>
        <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light mb-6" data-eq="desc">{a.desc}</p>

        <div className="pt-1">
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
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
            <ul className="flex flex-wrap content-start gap-2 pt-5" aria-label={`${a.title} list`}>
              {open && a.items.map((t, k) => (
                <li
                  key={t}
                  className="prog-tag inline-flex items-center gap-2 bg-white text-[14px] sm:text-[15px] text-[#000050] px-3 py-1.5"
                  style={{ animationDelay: `${k * 30}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.color }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

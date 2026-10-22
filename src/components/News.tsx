import type React from 'react'
import { useRef, useState } from 'react'
import { useEqualize } from '../hooks/useEqualize'
import { useInView } from '../hooks/useInView'

type Program = { category: string; date: string; title: string; desc: string; image: string; color: string; pos?: string; label: string; items: string[] }

const TAILORED: Program[] = [
  {
    category: 'Training Programs',
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
    category: 'Accredited',
    date: '11 programs',
    title: 'Ellis & Associates',
    desc: 'The gold standard in first aid, CPR and safety certification for attractions teams, plus lifeguard and aquatic programs.',
    image: './ellis-first-aid.jpg',
    color: '#00AFDC',
    label: 'Explore courses',
    items: ['CPR & First Aid', 'Preventing Bloodborne & Airborne Pathogens', 'Supplemental Oxygen Support', 'Active Shooter Assailant Safety', 'Attraction Operator', 'Water Slide Dispatch Operator', 'International Lifeguard Training Program', 'vanGUARD Aquatics Leadership', 'Water Safety Plus', 'Jeff Ellis Swimming', 'Train the Trainer'],
  },
  {
    category: 'IBCCES Certified',
    date: 'Accessibility & inclusion',
    title: 'Accessibility and inclusion, built into every program.',
    desc: 'A Certified Autism Center™ recognized by IBCCES, bringing autism awareness and inclusive guest experience into every program.',
    image: './ibcces-card.jpg',
    color: '#15D2A4',
    label: 'Explore focus areas',
    items: ['Autism Awareness', 'Inclusive Guest Experience', 'Accessibility Best Practice', 'Frontline Training'],
  },
]

export default function News() {
  const { ref, inView } = useInView()
  const cardsRef = useRef<HTMLDivElement>(null)
  useEqualize(cardsRef)
  const { ref: headRef, inView: headIn } = useInView()

  return (
    <section id="programs" className="bg-[#F2F1EF] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div ref={headRef as React.RefObject<HTMLDivElement>} className={`flex items-end justify-between gap-8 mb-16 border-b border-[#E2E0DB] pb-12 reveal ${headIn ? 'visible' : ''}`}>
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Our Programs</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-tight tracking-[-0.01em] max-w-[900px] mb-6">
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
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-6">
            <GroupLabel color="#8238EB">Tailored Training Programs</GroupLabel>
            <div className="col-span-2"><GroupLabel color="#00AFDC">Accredited and Certified Programs</GroupLabel></div>
          </div>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[...TAILORED, ...ACCREDITED].map((a, i) => (
              <div key={a.title} className="flex flex-col">
                {i === 0 && <div className="lg:hidden mb-5 md:min-h-[56px] flex items-end"><GroupLabel color="#8238EB">Tailored Training Programs</GroupLabel></div>}
                {i === 1 && <div className="lg:hidden mb-5 md:min-h-[56px] flex items-end"><GroupLabel color="#00AFDC">Accredited and Certified Programs</GroupLabel></div>}
                {i === 2 && <div className="hidden md:block lg:hidden mb-5 h-[56px]" aria-hidden="true" />}
                <Card a={a} i={i} inView={inView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GroupLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-[3px]" style={{ background: color }} aria-hidden="true" />
      <h3 className="text-[19px] font-semibold text-[#000050]">{children}</h3>
    </div>
  )
}

function Card({ a, i, inView }: { a: Program; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false)
  const PREVIEW = 3
  const rest = a.items.length - PREVIEW
  return (
    <article className={`flex-1 bg-[#F9F8F6] group flex flex-col transition-colors duration-300 hover:bg-white reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-[#E2E0DB]">
        <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: a.color }} aria-hidden="true" />
        <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" style={{ objectPosition: a.pos ?? '50% 50%' }} />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div data-eq="meta" className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
          <span className="text-[16px] font-medium" style={{ color: a.color }}>{a.category}</span>
          <span className="text-[#C9C7C1]">·</span>
          <span className="text-[15px] text-[#6B6B65] font-light">{a.date}</span>
        </div>
        <h4 data-eq="title" className="font-serif text-[clamp(22px,1.8vw,26px)] text-[#000050] leading-tight mb-3">{a.title}</h4>
        <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light mb-5" data-eq="desc">{a.desc}</p>

        {/* Tags: preview, expand to see all */}
        <ul data-eq="tags" className="flex flex-wrap content-start gap-2" aria-label={`${a.title} list`}>
          {(open ? a.items : a.items.slice(0, PREVIEW)).map((t, k) => (
            <li
              key={t}
              className={`prog-tag inline-flex items-center gap-2 bg-white text-[14px] sm:text-[15px] text-[#000050] px-3 py-1.5`}
              style={{ animationDelay: k >= PREVIEW ? `${(k - PREVIEW) * 35}ms` : '0ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.color }} aria-hidden="true" />
              {t}
            </li>
          ))}
          {!open && rest > 0 && (
            <li className="inline-flex items-center text-[14px] sm:text-[15px] text-[#6B6B65] px-2 py-1.5">+{rest} more</li>
          )}
        </ul>

        <div className="mt-auto pt-6">
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
      </div>
    </article>
  )
}

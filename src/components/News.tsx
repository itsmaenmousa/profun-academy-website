import type React from 'react'
import { useRef, useState } from 'react'
import { useEqualize } from '../hooks/useEqualize'
import { useInView } from '../hooks/useInView'

type Area = { name: string; color: string; subs: string[] }
type Program = { category: string; title: string; desc: string; image: string; color: string; pos?: string; label: string; items: (string | Area)[] }

const TAILORED: Program[] = [
  {
    category: 'Tailored Training Programs',
    title: 'The ProFun Academy',
    desc: 'Tailored training across every part of an attraction, shaped around your people, culture and operations.',
    image: './training-programs-v2.jpg',
    pos: '50% 35%',
    color: '#8238EB',
    label: 'Explore program areas',
    items: [
      { name: 'Leadership & Management', color: '#3985FD', subs: ['Policy & Procedure Development Across All Departments', 'Leadership Development & Capability Building', 'Keynote Speakers', 'Revenue & Financial Management'] },
      { name: 'Industry Experience', color: '#E0A800', subs: ['Global Benchmarking', 'Facility Tours', 'Industry Networking & Association', 'International Study & Exposure Trips'] },
      { name: 'Safety & Security', color: '#15D2A4', subs: ['Facility Audits and Reviews', 'First Aid, CPR & AED Certification', 'Risk Assessment Overview', 'Emergency Action Planning', 'Incident Reporting and Follow-up', 'Regulatory Compliance Best Practices'] },
      { name: 'Rides & Attractions', color: '#00AFDC', subs: ['Ride Operator Certification', 'Lifeguard Certification', 'Ride Scripts, Spiels and Safety Announcements', 'Throughput & Queue-line Management', 'Guest Management and Accessibility'] },
      { name: 'Frontline Colleagues', color: '#F85707', subs: ['Introduction and History of Attractions', 'Effective Communication', 'Conflict Resolution & Service Recovery', 'Point of Sale Operations', 'Admission & Ticketing Operations'] },
      { name: 'Human Resources', color: '#7FB01F', subs: ['Motivation & Incentive Programs', 'Colleague Engagement Programs', 'Coaching & Mentorship', 'Train-the-Trainer Programs', 'Onboarding and Induction', 'Performance Management', 'Facilitator Guides & Assessment Tools'] },
      { name: 'Guest Service Excellence', color: '#8238EB', subs: ['Guest Interaction Scripts and Best Practices', 'Entertainment in Attractions', 'Audits and Secret Shoppers', 'KPI Recommendations', 'Role-play Simulations & Coaching', 'Guided Experiences'] },
      { name: 'Sales & Marketing', color: '#FC026F', subs: ['Current Trends and Best Practices', 'Brand Positioning', 'Industry Strategies and Tactics', 'Social Media Engagement', 'Sales Channel Management'] },
      { name: 'Food & Beverage', color: '#3985FD', subs: ['Outlet Setup & Layout', 'Upselling Techniques', 'Food Hygiene Best Practices', 'Kitchen Operation Efficiency', 'Attractions Menu Overview'] },
      { name: 'Retail', color: '#15D2A4', subs: ['Merchandising & Store Layout', 'Inventory & Stock Management', 'Sales Strategies', 'Loss Prevention & Shrinkage', 'Cashiering Overview'] },
      { name: 'Engineering & Technical Services', color: '#7FB01F', subs: ['Technical Regulations & Industry Best Practices', 'Inspection Protocols', 'Preventive & Predictive Maintenance'] },
      { name: 'Information Technology', color: '#8238EB', subs: ['Technology in Attractions', 'Applications and Digital Experience', 'Guest Analytics'] },
      { name: 'Housekeeping', color: '#F85707', subs: ['Chemical Handling Procedures', 'Inspection Protocols', 'Cleaning Standards'] },
    ],
  },
]

const ACCREDITED: Program[] = [
  {
    category: 'Accredited and Certified Programs',
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
  const [area, setArea] = useState<number | null>(null)
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

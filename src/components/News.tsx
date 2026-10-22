import type React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

type Program = { category: string; date: string; title: string; desc: string; image: string; color: string }

const TAILORED: Program[] = [
  {
    category: 'Training Programs',
    date: '13 program areas',
    title: 'Thirteen program areas. Hundreds of programs.',
    desc: 'Leadership & Management, Industry Experience, Safety & Security, Rides & Attractions, Frontline Colleagues, Human Resources, Guest Service Excellence, Sales & Marketing, Food & Beverage, Retail, Engineering & Technical Services, Information Technology and Housekeeping.',
    image: './news-2.jpg',
    color: '#8238EB',
  },
]

const ACCREDITED: Program[] = [
  {
    category: 'Accredited',
    date: '11 programs',
    title: 'Ellis & Associates',
    desc: 'The Academy delivers Ellis & Associates certification, the gold standard in first aid, CPR and safety training for attractions teams. The portfolio also covers lifeguard and aquatic programs, including the International Lifeguard Training Program and vanGUARD Aquatics Leadership.',
    image: './grand-hyatt-waterpark.jpg',
    color: '#00AFDC',
  },
  {
    category: 'IBCCES Certified',
    date: 'Accessibility & inclusion',
    title: 'Accessibility and inclusion, built into every program.',
    desc: 'Our team is certified by IBCCES, the International Board of Credentialing and Continuing Education Standards, bringing recognized accessibility and neurodiversity best practice into guest service and frontline training.',
    image: './ibcces-card.jpg',
    color: '#15D2A4',
  },
]

export default function News() {
  const { ref, inView } = useInView()
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

        {/* Program groups */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div>
            <GroupLabel color="#8238EB">Tailored Training Programs</GroupLabel>
            {TAILORED.map((a, i) => <Card key={a.title} a={a} i={i} inView={inView} />)}
          </div>
          <div className="lg:col-span-2">
            <GroupLabel color="#00AFDC">Accredited and Certified Programs</GroupLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E0DB]">
              {ACCREDITED.map((a, i) => <Card key={a.title} a={a} i={i + 1} inView={inView} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GroupLabel({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-8 h-[3px]" style={{ background: color }} aria-hidden="true" />
      <h3 className="text-[19px] font-semibold text-[#000050]">{children}</h3>
    </div>
  )
}

function Card({ a, i, inView }: { a: Program; i: number; inView: boolean }) {
  return (
    <article className={`h-full bg-[#F2F1EF] group hover:bg-[#F9F8F6] transition-colors duration-300 reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E2E0DB]">
        <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: a.color }} aria-hidden="true" />
        <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[16px] font-medium" style={{ color: a.color }}>{a.category}</span>
          <span className="text-[#E2E0DB]">·</span>
          <span className="text-[15px] text-[#6B6B65] font-light">{a.date}</span>
        </div>
        <h4 className="font-serif text-[24px] text-[#1C1C1A] leading-tight mb-4 group-hover:text-[#000050] transition-colors duration-300">{a.title}</h4>
        <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light mb-6">{a.desc}</p>
        <Link to="/contact" className="flex items-center gap-2 text-[15px] font-medium text-[#1C1C1A] group-hover:text-[#F85707] group-hover:gap-4 transition-all duration-200">
          Start a conversation
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true">
            <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  )
}

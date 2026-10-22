import { useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'

/*
  News / Press Releases.
  Drafts built from what the Academy has announced so far. Swap in the
  approved releases (title, date, body, image) as they are issued.
*/

type Release = {
  id: string
  date: string
  tag: string
  color: string
  title: string
  summary: string
  body: string[]
  image: string
  pos?: string
}

const RELEASES: Release[] = [
  {
    id: 'website',
    date: '2026',
    tag: 'Announcement',
    color: '#F85707',
    title: 'The ProFun Academy launches its new website.',
    summary: 'A new home for the Academy, bringing its programs, delivery channels, projects and team together in one place.',
    body: [
      'The ProFun Academy, the learning and capability development division of ProFun, has launched its new website, theprofunacademy.com.',
      'The site brings together the Academy’s full offer for the attractions industry: tailored learning design, accredited certification, four delivery formats with experiential learning built in, and the projects and people behind its work across the region.',
      'Operators can explore programs, meet the team and start a conversation about building capability across their own venues.',
    ],
    image: './hero-academy-v2-poster.jpg',
    pos: '50% 40%',
  },
  {
    id: 'ibcces',
    date: '2026',
    tag: 'Certification',
    color: '#15D2A4',
    title: 'Academy team achieves IBCCES certification.',
    summary: 'Accessibility and neurodiversity best practice, now built into the Academy’s guest service and frontline training.',
    body: [
      'Members of The ProFun Academy team have been certified by IBCCES, the International Board of Credentialing and Continuing Education Standards.',
      'The certification strengthens the Academy’s approach to accessibility and inclusion, helping attractions welcome every guest with confidence. IBCCES best practice is now integrated into the Academy’s guest service and frontline programs.',
    ],
    image: './ibcces-card.jpg',
  },
  {
    id: 'ellis',
    date: '2026',
    tag: 'Partnership',
    color: '#00AFDC',
    title: 'Ellis & Associates first aid and safety certification, delivered across the region.',
    summary: 'The Academy delivers Ellis & Associates first aid, CPR and safety certification, alongside lifeguard and aquatic programs.',
    body: [
      'The ProFun Academy delivers Ellis & Associates certification for attractions teams across the region, led by first aid, CPR and AED training.',
      'The portfolio also covers lifeguard and aquatic programs, including the International Lifeguard Training Program and vanGUARD Aquatics Leadership, plus Water Slide Dispatch Operator and Attraction Operator, delivered in-person, blended or fully online.',
    ],
    image: './grand-hyatt-waterpark.jpg',
  },
]

export default function Press() {
  const { ref, inView } = useInView()
  const [open, setOpen] = useState<string | null>(null)
  const [lead, ...rest] = RELEASES

  return (
    <section id="news" className="bg-[#F9F8F6] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">Press Releases</p>
            <h1 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-tight tracking-[-0.01em]">
              News from the Academy.
            </h1>
          </div>
          <p className="max-w-[420px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            Announcements, certifications and partnerships from The ProFun Academy.
          </p>
        </div>

        {/* Lead release */}
        <ReleaseCard r={lead} open={open === lead.id} onToggle={() => setOpen(open === lead.id ? null : lead.id)} lead />

        {/* Others */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E0DB] border border-[#E2E0DB] border-t-0">
          {rest.map(r => (
            <ReleaseCard key={r.id} r={r} open={open === r.id} onToggle={() => setOpen(open === r.id ? null : r.id)} />
          ))}
        </div>

        {/* Media inquiries */}
        <div className="mt-16 bg-[#000050] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[20px] font-semibold text-[#FFCA03] mb-2">Media Inquiries</p>
            <p className="text-[19px] text-white/70 font-light">For interviews, images and press information, contact the Academy team.</p>
          </div>
          <a
            href="mailto:info@theprofunacademy.com"
            className="text-[16px] font-medium text-white bg-[#F85707] px-6 py-3.5 hover:bg-white hover:text-[#000050] transition-colors duration-300 whitespace-nowrap self-start md:self-auto"
          >
            info@theprofunacademy.com
          </a>
        </div>
      </div>
    </section>
  )
}

function ReleaseCard({ r, open, onToggle, lead }: { r: Release; open: boolean; onToggle: () => void; lead?: boolean }) {
  return (
    <article className={`group bg-white ${lead ? 'grid grid-cols-1 lg:grid-cols-2 border border-[#E2E0DB]' : 'flex flex-col'}`}>
      <div className={`relative overflow-hidden bg-[#E2E0DB] ${lead ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[16/9]'}`}>
        <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: r.color }} aria-hidden="true" />
        <img
          src={r.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: r.pos ?? '50% 50%' }}
        />
      </div>
      <div className={`p-8 ${lead ? 'sm:p-12 flex flex-col justify-center' : 'flex-1 flex flex-col'}`}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[16px] font-medium" style={{ color: r.color }}>{r.tag}</span>
          <span className="text-[#E2E0DB]">·</span>
          <span className="text-[15px] text-[#6B6B65] font-light">{r.date}</span>
        </div>
        <h2 className={`font-serif text-[#000050] leading-snug tracking-[-0.01em] mb-4 ${lead ? 'text-[clamp(28px,2.6vw,42px)]' : 'text-[clamp(24px,1.9vw,30px)]'}`}>
          {r.title}
        </h2>
        <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed mb-6">{r.summary}</p>

        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <div className="space-y-4 pb-6 text-[17px] text-[#1C1C1A] font-light leading-relaxed">
              {r.body.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>

        <button
          onClick={onToggle}
          aria-expanded={open}
          className={`${lead ? '' : 'mt-auto'} self-start inline-flex items-center gap-2 text-[15px] font-medium text-[#000050] hover:text-[#F85707] transition-colors duration-200`}
        >
          {open ? 'Close' : 'Read the release'}
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className={`transition-transform duration-300 ${open ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true">
            <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}

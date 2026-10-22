import { useState } from 'react'
import type React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useEqualize } from '../hooks/useEqualize'
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
  cta?: { label: string; to: string }
}

const RELEASES: Release[] = [
  {
    id: 'website',
    date: 'November 2026',
    tag: 'Announcement',
    color: '#F85707',
    title: 'Introducing the new home of The ProFun Academy.',
    summary: 'A new website bringing our programs, learning formats, projects and people together in one place.',
    body: [
      'The ProFun Academy has launched its new website, theprofunacademy.com, a single destination for operators, project teams and professionals across the attractions industry.',
      'Visitors can explore our tailored and accredited programs, see how we deliver learning in person, virtually, online and blended, browse selected work from landmark destinations, and meet the team behind it.',
      'It is also where we will share Academy news, certifications, events and featured courses, so the industry can follow our work as it grows across Saudi Arabia and the wider region.',
    ],
    image: './news-website-v3.jpg',
    cta: { label: 'Start a conversation', to: '/contact' },
  },
  {
    id: 'iaapa-provider',
    date: 'October 2026',
    tag: 'Industry Recognition',
    color: '#3985FD',
    title: 'The ProFun Academy recognized by IAAPA.',
    summary: 'The ProFun Academy is an IAAPA Education Pre-Approved Provider.',
    body: [
      'The ProFun Academy is an IAAPA Education Pre-Approved Provider.',
      'This recognition reflects our commitment to delivering training programs tailored to the attractions industry, with a focus on operational standards, guest experience and the skills teams need on the job.',
    ],
    image: './news-iaapa-provider.jpg',
  },
  {
    id: 'ibcces-cac',
    date: 'October 2026',
    tag: 'Inclusion & Accessibility',
    color: '#15D2A4',
    title: 'Advancing autism awareness with IBCCES.',
    summary: 'The ProFun Academy has achieved Certified Autism Center™ (CAC) recognition with IBCCES.',
    body: [
      'The ProFun Academy has partnered with the International Board of Credentialing and Continuing Education Standards (IBCCES) to achieve Certified Autism Center™ (CAC) recognition.',
      'This partnership supports our work to build autism awareness, understanding and more inclusive guest experiences across the attractions industry.',
    ],
    image: './news-ibcces-cac.jpg',
  },
  {
    id: 'iaapa-events',
    date: 'Oct – Nov 2026',
    tag: 'Industry Events',
    color: '#FC026F',
    title: 'Meet the ProFun team at IAAPA Dubai and Orlando.',
    summary: 'IAAPA Presents Dubai on 29 October, then IAAPA Expo Orlando on 16–20 November.',
    body: [
      'IAAPA Presents Dubai, 29 October 2026. The ProFun team will join attractions professionals at Deep Dive Dubai and Atlantis The Palm for education, behind-the-scenes access and networking.',
      'IAAPA Expo 2026, Orlando, Florida, 16–20 November 2026. The team will be attending alongside visitor attractions professionals from around the world.',
      'If you’re attending either event, we’d welcome the opportunity to connect and exchange insights on the industry’s latest developments.',
    ],
    image: './news-iaapa-dubai.jpg',
    cta: { label: 'Connect with our team', to: '/contact' },
  },
  {
    id: 'first-aid',
    date: 'October 2026',
    tag: 'Featured Course',
    color: '#00AFDC',
    title: 'First Aid, CPR & AED Training.',
    summary: 'Essential skills when every second counts, delivered with Ellis & Associates.',
    body: [
      'Through our partnership with Ellis & Associates, The ProFun Academy offers First Aid, CPR (Cardiopulmonary Resuscitation) and AED (Automated External Defibrillator) training built for the attractions industry.',
      'The course helps professionals develop practical emergency response skills, supporting safer environments for guests and employees.',
    ],
    image: './news-first-aid.jpg',
    cta: { label: 'Explore programs', to: '/programs' },
  },
  {
    id: 'merdeka',
    date: 'October 2026',
    tag: 'Project Spotlight',
    color: '#8238EB',
    title: 'Merdeka 118: training for a landmark destination.',
    summary: 'Over 130 hours of training content for The View at 118, across three phases.',
    body: [
      'ProFun has developed a comprehensive training program for The View at 118, comprising over 130 hours of training content across three phases: Induction, Core Skills Development, and Role-Based On-the-Job Training.',
      'The program covers workplace standards, guest experience excellence, operational procedures, safety awareness and practical simulations. Supported by dedicated training presentation decks and facilitator guides, it provides a structured approach to developing a competent, confident and service-focused workforce, ensuring operational readiness and consistent guest experience standards.',
    ],
    image: './news-merdeka.jpg',
    pos: '50% 40%',
  },
  {
    id: 'ellis-sst',
    date: 'June 2026',
    tag: 'Partnership',
    color: '#00AFDC',
    title: 'A new partnership for the region with SST and Ellis & Associates.',
    summary: 'The ProFun Academy becomes an authorized delivery partner for the Ellis portfolio of internationally recognized training and certification programs.',
    body: [
      'The ProFun Academy has announced a strategic partnership with Safety Skills Training (SST) and Ellis & Associates (E&A), global leaders in aquatic safety, lifeguard training and attractions operations.',
      'Through this partnership, the Academy becomes an authorized delivery partner for the Ellis portfolio of internationally recognized training and certification programs, helping make world-class learning opportunities more accessible across Saudi Arabia and the wider region.',
      'At the heart of the partnership is a shared belief that well-trained professionals create safer environments, stronger operations and better guest experiences.',
      '“As the attractions industry continues to grow across the region, investing in people has never been more important. We’re excited to work alongside SST and Ellis & Associates to help make world-class learning opportunities more accessible.” Ryan Phillips, General Manager, The ProFun Academy.',
    ],
    image: './news-partnership.jpg',
  },
  {
    id: 'ryan',
    date: 'June 2026',
    tag: 'Leadership',
    color: '#8238EB',
    title: 'Ryan Phillips joins The ProFun Academy as General Manager.',
    summary: 'Nearly two decades of international experience across waterparks, resorts and visitor attractions.',
    body: [
      'The ProFun Academy has appointed Ryan Phillips as General Manager. Ryan brings nearly two decades of international experience across waterparks, resorts and visitor attractions in the Americas, Asia and the Middle East.',
      'His background spans operational leadership, pre-opening, safety and large-scale workforce development, alongside extensive work in training and certification across the global attractions industry. He has supported projects and operators in more than 40 countries and contributed to the certification of thousands of professionals each year.',
      'Ryan’s appointment further strengthens ProFun’s ability to support visitor attractions through training, readiness and long-term operational excellence across Saudi Arabia and international markets.',
    ],
    image: './news-ryan-wide.jpg',
    pos: '50% 50%',
  },
  {
    id: 'graduates',
    date: 'June 2026',
    tag: 'Training Highlight',
    color: '#F85707',
    title: '56 graduates complete the Visitor Attractions Operator Course.',
    summary: 'Delivered for SEVEN in Madinah, another step toward the skilled workforce behind Saudi Arabia’s visitor experiences.',
    body: [
      'Congratulations to the 56 graduates who successfully completed the Visitor Attractions Operator Course delivered by The ProFun Academy for SEVEN in Madinah.',
      'Every graduate represents another step toward building the skilled workforce that powers exceptional visitor experiences across Saudi Arabia. We wish all graduates continued success in their careers.',
    ],
    image: './news-graduates.jpg',
    pos: '50% 30%',
  },
  {
    id: 'spoc',
    date: 'June 2026',
    tag: 'ProFun News',
    color: '#3985FD',
    title: 'Seder Group and ProFun launch SPOC.',
    summary: 'A Saudi-born turnkey operator for entertainment, culture, tourism and sports destinations.',
    body: [
      'Established through a strategic joint venture between ProFun and SEDER GROUP, SPOC is a Saudi-born turnkey operating company for entertainment, culture, tourism and sports destinations.',
      'SPOC combines ProFun’s global attractions operations expertise with SEDER GROUP’s operational, facilities management and workforce capabilities.',
    ],
    image: './news-spoc.jpg',
    pos: '50% 45%',
  },
]

const EQ_KEYS = ['meta', 'title', 'desc']

export default function Press() {
  const { ref, inView } = useInView()
  const [open, setOpen] = useState<string | null>(null)
  const [lead, ...rest] = RELEASES
  const gridRef = useRef<HTMLDivElement>(null)
  useEqualize(gridRef, EQ_KEYS)

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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E0DB] border border-[#E2E0DB] border-t-0">
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
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[16px] font-medium text-white bg-[#F85707] px-6 py-3.5 hover:bg-white hover:text-[#000050] transition-colors duration-300 whitespace-nowrap self-start md:self-auto"
          >
            Contact the team
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
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
          alt={r.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: r.pos ?? '50% 50%' }}
        />
      </div>
      <div className={`p-8 ${lead ? 'sm:p-12 flex flex-col justify-center' : 'flex-1 flex flex-col'}`}>
        <div data-eq="meta" className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5">
          <span className="text-[16px] font-medium whitespace-nowrap" style={{ color: r.color }}>{r.tag}</span>
          <span className="text-[#C9C7C1]" aria-hidden="true">·</span>
          <span className="text-[15px] text-[#6B6B65] font-light whitespace-nowrap">{r.date}</span>
        </div>
        <h2 data-eq="title" className={`font-serif text-[#000050] leading-snug tracking-[-0.01em] mb-4 ${lead ? 'text-[clamp(26px,2.6vw,42px)]' : 'text-[clamp(22px,1.7vw,28px)]'}`}>
          {r.title}
        </h2>
        <p data-eq="desc" className="text-[17px] text-[#6B6B65] font-light leading-relaxed mb-6">{r.summary}</p>

        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <div className="space-y-4 pb-6 text-[17px] text-[#1C1C1A] font-light leading-relaxed">
              {r.body.map((para, i) => <p key={i}>{para}</p>)}
              {r.cta && (
                <Link to={r.cta.to} tabIndex={open ? 0 : -1} className="inline-flex items-center gap-2 text-[15px] font-medium text-[#F85707] hover:gap-3 transition-all duration-200">
                  {r.cta.label}
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true"><path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={onToggle}
          aria-expanded={open}
          className={`${lead ? '' : 'mt-auto'} self-start inline-flex items-center gap-2 text-[15px] font-medium text-[#000050] hover:text-[#F85707] transition-colors duration-200`}
        >
          {open ? 'Close' : 'Read more'}
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className={`transition-transform duration-300 ${open ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true">
            <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}

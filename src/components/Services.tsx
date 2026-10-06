import type React from 'react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    number: '01',
    title: 'Bespoke Learning Experiences Design & Delivery',
    desc: 'Custom-built programs developed from scratch around your organisation\'s specific roles, culture and strategic objectives.',
  },
  {
    number: '02',
    title: 'In-Person Learning',
    desc: 'Facilitated workshops, seminars and hands-on sessions delivered on-site, at your venue or at partner facilities.',
  },
  {
    number: '03',
    title: 'Blended or Online Learning',
    desc: 'Hybrid programs combining structured digital content with live touchpoints to suit distributed or part-time workforces.',
  },
  {
    number: '04',
    title: 'Accredited & Certified Learning Experiences',
    desc: 'Industry-recognised certification pathways through our partners Jeff Ellis & Associates and TVTC-accredited programs.',
  },
  {
    number: '05',
    title: 'Human Capital & Capability Development',
    desc: 'Strategic frameworks for building lasting organisational capability, from workforce planning to leadership pipelines.',
  },
  {
    number: '06',
    title: 'Learning Strategy Formulation & Management',
    desc: 'End-to-end learning strategy design: needs analysis, program architecture, governance, measurement and continuous improvement.',
  },
]

const ACCENTS = ['#3985FD', '#15D2A4', '#99CA32', '#FFCA03', '#FC026F', '#8238EB']

export default function Services() {
  const { ref, inView } = useInView()
  return (
    <section id="services" className="bg-[#F9F8F6] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex items-end justify-between mb-20 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65] mb-5">What we offer</p>
            <h2 className="font-serif text-[clamp(40px,4vw,64px)] text-[#1C1C1A] leading-tight max-w-[520px] tracking-[-0.01em]">
              Six ways we work with you.
            </h2>
          </div>
          <div className="hidden lg:block max-w-[400px] text-[18px] text-[#6B6B65] leading-relaxed font-light">
            From bespoke learning design to full capability strategy, the Academy partners with organisations at every stage of their learning journey.
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E0DB]">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`relative bg-[#F9F8F6] p-10 group hover:bg-white transition-all duration-500 cursor-pointer reveal reveal-delay-${Math.min(i + 1, 5)} ${inView ? 'visible' : ''}`}
              style={{ ['--accent' as string]: ACCENTS[i] }}
            >
              <span className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: ACCENTS[i] }} aria-hidden="true" />
              <div className="text-[14px] mb-8 font-medium tracking-wide" style={{ color: ACCENTS[i] }}>{s.number}</div>
              <h3 className="font-serif text-[28px] text-[#000050] mb-4 transition-colors duration-300 leading-tight">
                {s.title}
              </h3>
              <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light">{s.desc}</p>
              <a href="#contact" className="mt-8 flex items-center gap-2 text-[14px] font-medium text-[#F85707] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Start a conversation
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

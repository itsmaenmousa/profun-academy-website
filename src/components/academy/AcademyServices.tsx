import type React from 'react'
import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

const services = [
  {
    n: '01',
    title: 'Bespoke Learning Experience Design & Delivery',
    desc: 'We design and deliver learning experiences built entirely from the ground up for your organisation, your roles and your operational context. No off-the-shelf content. Every program reflects your brand, your standards and your workforce.',
    context: 'From individual modules to multi-month capability programs. Suitable for pre-opening, post-acquisition or performance improvement contexts.',
  },
  {
    n: '02',
    title: 'In-Person Learning',
    desc: 'Facilitated learning delivered on-site or at designated training facilities. Our facilitators are experienced attractions professionals who bring operational credibility to every session.',
    context: 'Ideal for leadership development, technical operations training and cultural alignment programs requiring direct facilitation.',
  },
  {
    n: '03',
    title: 'Blended or Online Learning',
    desc: 'Learning pathways that combine structured digital content with live facilitation, coaching or assessment. Built for distributed workforces, shift-pattern environments and multi-site organisations.',
    context: 'Effective for onboarding, compliance training and knowledge-building at scale across multiple locations.',
  },
  {
    n: '04',
    title: 'Accredited & Certified Learning Experiences',
    desc: 'Accredited and certified programs delivered with Jeff Ellis & Associates and TVTC (Technical and Vocational Training Corporation), carrying real-world weight with employers and industry regulators.',
    context: 'Lifeguard training, ride operator certification, aquatics management, vocational qualifications and attraction operations programs.',
  },
  {
    n: '05',
    title: 'Human Capital & Capability Development',
    desc: 'Strategic consultancy and program design to build organisation-wide capability. Includes competency framework development, succession planning support, talent identification and structured development pathways.',
    context: 'Typically engaged as part of a wider workforce transformation or pre-opening capability build for large-scale attractions.',
  },
  {
    n: '06',
    title: 'Learning Strategy Formulation & Management',
    desc: 'We work with senior leadership to define, sequence and manage a learning strategy aligned with operational objectives. Includes learning needs analysis, annual planning, budget modelling and ongoing program governance.',
    context: 'Best suited to operators with multiple venues, high workforce volumes or significant annual training investment.',
  },
]

export default function AcademyServices() {
  const [open, setOpen] = useState<string | null>('01')
  const { ref, inView } = useInView()

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="services-heading"
      className="bg-[#F2F1EF] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">05</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Services</span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="services-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              Six service lines. One consistent standard.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
              Each service is designed to address a specific operational learning need. They can be engaged independently or combined as part of an integrated capability program.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className={`divide-y divide-[#DDDBD6] reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
          {services.map((s) => {
            const isOpen = open === s.n
            return (
              <div key={s.n}>
                <button
                  className="w-full flex items-center gap-6 py-7 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] focus-visible:ring-offset-2"
                  onClick={() => setOpen(isOpen ? null : s.n)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${s.n}`}
                >
                  <span className={`text-[12px] font-medium tracking-[0.12em] w-6 flex-shrink-0 transition-colors duration-200 ${isOpen ? 'text-[#F85707]' : 'text-[#6B6B65]'}`}>
                    {s.n}
                  </span>
                  <span className={`flex-1 text-[19px] font-medium transition-colors duration-200 ${isOpen ? 'text-[#1C1C1A]' : 'text-[#1C1C1A] group-hover:text-[#F85707]'}`}>
                    {s.title}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke={isOpen ? '#F85707' : '#6B6B65'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>

                <div
                  id={`service-panel-${s.n}`}
                  role="region"
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-8 pl-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">{s.desc}</p>
                    <div className="bg-[#F9F8F6] p-5 border-l-2 border-[#F85707]">
                      <p className="text-[12px] tracking-[0.12em] uppercase text-[#F85707] font-medium mb-2">Typical use</p>
                      <p className="text-[14px] text-[#6B6B65] font-light leading-relaxed">{s.context}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

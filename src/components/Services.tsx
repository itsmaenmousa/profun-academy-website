import { useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    title: 'Learning Strategy and Management',
    desc: 'Align learning with business priorities through needs analysis, planning, governance, and performance measurement.',
    color: '#3985FD',
  },
  {
    title: 'Workforce Capability Development',
    desc: 'Define role competencies, career pathways, and leadership development priorities to build a capable workforce.',
    color: '#15D2A4',
  },
  {
    title: 'Program Design and Content Development',
    desc: 'Create customized programs, materials, and assessments shaped around your operations, culture, and workforce needs.',
    color: '#8238EB',
  },
  {
    title: 'Training Delivery and Facilitation',
    desc: 'Build practical skills through facilitated training, on-site coaching, and train-the-trainer programs tailored to your teams.',
    color: '#FC026F',
  },
  {
    title: 'Pre-Opening and Operational Readiness Training',
    desc: 'Prepare teams for opening through role-specific training, operational simulations, and readiness assessments.',
    color: '#F85707',
  },
]

export default function Services() {
  const { ref, inView } = useInView()
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-[#F9F8F6] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">What We Offer</p>
            <h2 className="font-serif text-[clamp(40px,4vw,64px)] text-[#000050] leading-tight max-w-[760px] tracking-[-0.01em]">
              From individual skills to operational readiness.
            </h2>
          </div>
          <p className="max-w-[460px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            From tailored training to comprehensive learning strategies, we help organizations build workforce capability at every stage, from pre-opening to ongoing operations.
          </p>
        </div>

        {/* Service rows */}
        <ol className="border-t border-[#E2E0DB]">
          {services.map((s, i) => {
            const on = active === i
            return (
              <li
                key={s.title}
                className={`service-row relative border-b border-[#E2E0DB] overflow-hidden reveal reveal-delay-${Math.min(i + 1, 5)} ${on ? 'is-active' : ''} ${inView ? 'visible' : ''}`}
                style={{ ['--brand' as string]: s.color }}
              >
                <span className="service-fill" aria-hidden="true" />
                <button
                  onClick={() => setActive(i)}
                  aria-expanded={on}
                  className="relative w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-10 px-5 sm:px-8 lg:px-10 py-7 sm:py-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707]"
                >
                  <span className="service-num text-[16px] sm:text-[18px] font-medium w-7 sm:w-12" style={{ color: on ? '#fff' : s.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`service-title font-serif text-[clamp(24px,2.6vw,44px)] leading-tight tracking-[-0.01em] ${on ? 'text-white' : 'text-[#000050]'}`}>
                    {s.title}
                  </span>
                  <span
                    className={`service-icon w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center flex-shrink-0 ${on ? 'border-white/60 text-white rotate-45' : 'border-[#D4D2CC] text-[#000050]'}`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </button>

                <div className={`relative grid transition-[grid-template-rows] duration-500 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-10 px-5 sm:px-8 lg:px-10 pb-8 sm:pb-10">
                      <span className="w-7 sm:w-12" aria-hidden="true" />
                      <p className="text-[18px] sm:text-[20px] text-white/90 font-light leading-relaxed max-w-[720px]">{s.desc}</p>
                      <span className="w-10 sm:w-14" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

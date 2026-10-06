import type React from 'react'
import { useInView } from '../../hooks/useInView'

const capabilities = [
  { n: '01', title: 'Innovative, Experiential Delivery', desc: 'Innovative delivery methods that embed learning in real operational contexts, not classroom simulations.' },
  { n: '02', title: 'Tailored, Role-Based Learning', desc: 'Learning solutions tailored to each role: frontline, supervisory, managerial and leadership tracks.' },
  { n: '03', title: 'Interactive & Engaging Experiences', desc: 'Scenario-based exercises, role-play simulations and peer learning replace passive content delivery.' },
  { n: '04', title: 'Talent at Every Level', desc: 'Developing talent at every level, from frontline staff to senior leadership, in one coherent pathway.' },
  { n: '05', title: 'Culturally Aware Approach', desc: 'Facilitation and content adapted to local cultural and operational contexts across the region.' },
  { n: '06', title: 'Multilingual Learning Options', desc: 'Programs delivered in English and Arabic, with further languages available across our facilitation team.' },
  { n: '07', title: 'On-Site Coaching', desc: 'Embedded coaching alongside live operations, not separate from the work environment.' },
  { n: '08', title: 'Train-the-Trainer Development', desc: 'Building internal capability so organisations sustain learning momentum independently.' },
  { n: '09', title: 'Industry-Specific Content', desc: 'Every module is written for the attractions industry, not adapted from generic HR frameworks.' },
]

export default function AcademyCapability() {
  const { ref, inView } = useInView()

  return (
    <section
      id="capability"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="capability-heading"
      className="bg-[#F9F8F6] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">04</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Capability Model</span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="capability-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              Nine differentiators. One integrated system.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
              Built differently, by design. Each element is intentional and grounded in what the attractions industry actually requires from its people, at every level of the organisation.
            </p>
          </div>
        </div>

        {/* Framework grid — 3 × 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DDDBD6]">
          {capabilities.map((c, i) => (
            <div
              key={c.n}
              className={`bg-[#F9F8F6] p-8 hover:bg-[#F2F1EF] transition-colors duration-300 reveal reveal-delay-${Math.min(i % 3 + 1, 5)} ${inView ? 'visible' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[#F85707] text-[12px] font-medium tracking-[0.12em] mt-0.5">{c.n}</span>
                <h3 className="text-[17px] font-semibold text-[#1C1C1A] leading-snug">{c.title}</h3>
              </div>
              <p className="text-[14px] text-[#6B6B65] font-light leading-relaxed pl-8">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

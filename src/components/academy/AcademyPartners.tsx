import type React from 'react'
import { useInView } from '../../hooks/useInView'

const partners = [
  {
    name: 'IAAPA',
    full: 'International Association of Amusement Parks and Attractions',
    role: 'Global trade association for the attractions industry',
  },
  {
    name: 'AAM',
    full: 'American Alliance of Museums',
    role: 'Professional standards and advocacy for museums worldwide',
  },
  {
    name: 'WWA',
    full: 'World Waterpark Association',
    role: 'Industry body for waterpark operators and suppliers',
  },
  {
    name: 'IRT',
    full: 'International Ride Training',
    role: 'Specialist ride operations training and certification',
  },
  {
    name: 'Ellis & Associates',
    full: 'Jeff Ellis & Associates',
    role: 'Aquatics safety management and certification programmes',
  },
  {
    name: 'TEA',
    full: 'Themed Entertainment Association',
    role: 'Global network for experience design and themed entertainment',
  },
  {
    name: 'AIMS International',
    full: 'AIMS International',
    role: 'Amusement industry safety standards and education',
  },
]

export default function AcademyPartners() {
  const { ref, inView } = useInView()

  return (
    <section
      id="partners"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="partners-heading"
      className="bg-[#F9F8F6] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">10</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Global Ecosystem</span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="partners-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              Connected to the institutions that set the standard.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
              ProFun Academy's partnerships and affiliations reflect our commitment to industry standards, accreditation integrity and the global professional community for attractions.
            </p>
          </div>
        </div>

        {/* Partners typographic grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDDBD6] reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`bg-[#F9F8F6] p-8 flex flex-col justify-between min-h-[180px] hover:bg-[#F2F1EF] transition-colors duration-200 reveal reveal-delay-${Math.min(i + 1, 5)} ${inView ? 'visible' : ''}`}
            >
              <div>
                <div className="text-[24px] font-semibold text-[#1C1C1A] tracking-[-0.01em] mb-2 leading-tight">
                  {p.name}
                </div>
                <p className="text-[14px] text-[#6B6B65] font-light leading-snug">
                  {p.full}
                </p>
              </div>
              <p className="text-[14px] text-[#6B6B65] font-light leading-snug mt-4 pt-4 border-t border-[#DDDBD6]">
                {p.role}
              </p>
            </div>
          ))}

          {/* Spacer cell to complete visual row */}
          <div className="bg-[#F9F8F6] p-8 flex items-center justify-center">
            <p className="text-[14px] text-[#DDDBD6] font-light text-center">
              Additional partnerships<br />available on request
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

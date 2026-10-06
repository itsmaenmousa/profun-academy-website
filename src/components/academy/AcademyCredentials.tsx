import type React from 'react'
import { useInView } from '../../hooks/useInView'

const jeffEllis = [
  'International Lifeguard Training Program (ILTP2)',
  'Water Safety Plus',
  'Jeff Ellis Swimming (JES)',
  'Preventing Bloodborne & Airborne Pathogens',
  'Supplemental Oxygen Support',
  'CPR & First Aid (layperson and healthcare provider levels)',
  'Active Shooter Assailant Safety',
  'vanGUARD Aquatics Leadership Training',
  'Water Slide Dispatch Operator',
  'Attraction Operator',
  'Train the Trainer',
]

const tvtc = [
  'Visitor Attractions Operator Program',
  'Entertainment Center Operator Maintenance Program',
  'Destination Management Program',
]

export default function AcademyCredentials() {
  const { ref, inView } = useInView()

  return (
    <section
      id="credentials"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="credentials-heading"
      className="bg-[#F2F1EF] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">08</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Standards & Accreditation</span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="credentials-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              Internationally recognised. Operationally relevant.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
              ProFun Academy programmes carry accreditation from globally recognised bodies, ensuring credentials that hold weight with employers, regulators and industry peers worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#DDDBD6]">
          {/* Jeff Ellis */}
          <div className={`bg-[#F2F1EF] p-10 reveal ${inView ? 'visible' : ''}`}>
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#F85707] font-medium mb-2">Accreditor</p>
                <h3 className="text-[20px] font-semibold text-[#1C1C1A]">Jeff Ellis & Associates</h3>
                <p className="text-[14px] text-[#6B6B65] font-light mt-1">International aquatics safety & attraction operations</p>
              </div>
              <span className="text-[#6B6B65] text-[14px] font-light border border-[#DDDBD6] px-3 py-1">{jeffEllis.length} programs</span>
            </div>
            <ol className="space-y-3" aria-label="Jeff Ellis & Associates programs">
              {jeffEllis.map((p, i) => (
                <li key={p} className="flex items-start gap-4">
                  <span className="text-[12px] text-[#F85707] font-medium w-5 flex-shrink-0 mt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[16px] text-[#1C1C1A] font-light leading-snug">{p}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* TVTC */}
          <div className={`bg-[#F9F8F6] p-10 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#F85707] font-medium mb-2">Accreditor</p>
                <h3 className="text-[20px] font-semibold text-[#1C1C1A]">TVTC</h3>
                <p className="text-[14px] text-[#6B6B65] font-light mt-1">Technical and Vocational Training Corporation, Kingdom of Saudi Arabia</p>
              </div>
              <span className="text-[#6B6B65] text-[14px] font-light border border-[#DDDBD6] px-3 py-1">{tvtc.length} programs</span>
            </div>
            <ol className="space-y-3 mb-10" aria-label="TVTC accredited programs">
              {tvtc.map((p, i) => (
                <li key={p} className="flex items-start gap-4">
                  <span className="text-[12px] text-[#F85707] font-medium w-5 flex-shrink-0 mt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[16px] text-[#1C1C1A] font-light leading-snug">{p}</span>
                </li>
              ))}
            </ol>

            <div className="border-t border-[#DDDBD6] pt-8">
              <p className="text-[14px] text-[#6B6B65] font-light leading-relaxed">
                TVTC accreditation ensures ProFun Academy vocational programmes meet national standards for workforce qualification in the Kingdom of Saudi Arabia, supporting Saudisation and national capability development objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

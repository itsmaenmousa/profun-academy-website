import type React from 'react'
import { useInView } from '../../hooks/useInView'

export default function AcademyAuthority() {
  const { ref, inView } = useInView()

  return (
    <section
      id="authority"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="authority-heading"
      className="bg-[#F9F8F6] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">02</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Authority</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
          {/* Section heading label */}
          <div className={`lg:col-span-3 reveal ${inView ? 'visible' : ''}`}>
            <h2 id="authority-heading" className="text-[14px] font-medium text-[#6B6B65] tracking-[0.04em] uppercase leading-relaxed">
              Context &<br />Foundation
            </h2>
          </div>

          {/* Primary statement */}
          <div className={`lg:col-span-7 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
            <p className="font-serif text-[clamp(30px,3vw,46px)] text-[#1C1C1A] leading-[1.25] tracking-[-0.01em] mb-10">
              The ProFun Academy is a division of ProFun, the world leader and the only firm of its kind dedicated exclusively to operations advisory, training and management for the attractions industry.
            </p>
            <div className="space-y-5 text-[18px] text-[#6B6B65] font-light leading-relaxed">
              <p>
                Since 1980, we have advised on, trained for and managed projects on every continent. Our work spans more than 500 projects across 50 countries, a record unmatched in the attractions industry, from theme parks and water parks to museums, brand centers and world expos.
              </p>
              <p>
                Our team combines seasoned international executives with regional specialists. From our offices in Los Angeles, USA, and Riyadh, KSA, we pair global experience with local know-how to give clients a “best of both worlds” service, and to make sure concepts thrive long after opening day.
              </p>
            </div>
          </div>

          {/* "Built Differently" callout */}
          <div className={`lg:col-span-12 reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
            <div className="mt-8 border-t border-[#DDDBD6] pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <h3 className="font-serif text-[clamp(24px,2.7vw,38px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
                  Built Differently, By Design.
                </h3>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
                  Our value lies in bridging creative ambition with operational reality. Every program applies commercial discipline, practical experience and global insight, and is built by people who know what it takes to deliver guest satisfaction, financial performance and operational reliability, because they've been there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

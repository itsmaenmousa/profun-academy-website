import { useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'

const partners = [
  { name: 'Ellis & Associates', logo: './partner-ellis-sst.png', color: '#00AFDC' },
  { name: 'IAAPA', logo: './partner-iaapa-v2.png', color: '#3985FD' },
  { name: 'IBCCES', logo: './partner-ibcces-v2.png', color: '#15D2A4' },
  { name: 'American Alliance of Museums', logo: './partner-aam-v2.png', color: '#000050' },
  { name: 'World Waterpark Association', logo: './partner-wwa-hd.png', color: '#F85707', big: true },
  { name: 'Themed Entertainment Association', logo: './partner-tea-v2.png', color: '#8238EB', big: true },
]

export default function Partners() {
  const { ref, inView } = useInView()
  const [tapped, setTapped] = useState<number | null>(null)

  return (
    <section id="partners" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Header */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-[1920px] mx-auto px-6 sm:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}
      >
        <div>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">Partners & Affiliations</p>
          <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[920px]">
            Connected to the institutions<br className="hidden md:block" /> that set the standard.
          </h2>
        </div>
        <p className="max-w-[420px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
          Accreditation partners, delivery partners and industry bodies that keep every Academy program aligned with global best practice.
        </p>
      </div>

      {/* Logo grid */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 lg:gap-4">
          {partners.map((p, i) => (
            <li
              key={p.name}
              className={`partner-card group relative bg-[#F9F8F6] p-3 sm:p-5 lg:p-10 flex items-center justify-center lg:min-h-[260px] overflow-hidden reveal reveal-delay-${(i % 3) + 1} ${inView ? 'visible' : ''} ${tapped === i ? 'is-on' : ''}`}
              style={{ ['--brand' as string]: p.color }}
              onClick={() => setTapped(t => (t === i ? null : i))}
            >
              <span className="partner-fill" aria-hidden="true" />
              <div className="partner-plate relative w-full lg:max-w-[340px] h-[124px] sm:h-36 lg:h-32 bg-white flex items-center justify-center px-4 sm:px-8 transition-shadow duration-500">
                <img src={p.logo} alt={p.name} title={p.name} loading="lazy" decoding="async" className={`${p.big ? 'max-h-[84px] sm:max-h-[100px] lg:max-h-[92px]' : 'max-h-[64px] sm:max-h-[72px] lg:max-h-16'} max-w-full w-auto object-contain`} />
              </div>
            </li>
          ))}
        </ul>

        {/* IAAPA Education Pre-Approved Provider */}
        <div className={`mt-10 sm:mt-16 bg-white border border-[#E2E0DB] grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] items-center gap-8 md:gap-14 p-8 sm:p-12 reveal ${inView ? 'visible' : ''}`}>
          <img src="./iaapa-pre-approved.png" alt="IAAPA Education Pre-Approved Provider" loading="lazy" decoding="async" className="w-full max-w-[280px] h-auto" />
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-3">IAAPA Education Pre-Approved Provider</p>
            <h3 className="font-serif text-[clamp(26px,2.4vw,38px)] text-[#000050] leading-tight tracking-[-0.01em] mb-4">
              Recognized by IAAPA for industry education.
            </h3>
            <p className="text-[18px] text-[#6B6B65] leading-relaxed font-light max-w-[720px]">
              The ProFun Academy is an IAAPA Education Pre-Approved Provider, recognized by the International Association of Amusement Parks and Attractions for delivering quality education to the global attractions industry.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

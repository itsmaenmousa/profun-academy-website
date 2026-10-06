import type React from 'react'
import { useInView } from '../hooks/useInView'

const partners = [
  { short: 'IAAPA', logo: './partner-iaapa.png', full: 'International Association of Amusement Parks and Attractions', role: 'The global association for the attractions industry', color: '#3985FD' },
  { short: 'Ellis & Associates', logo: './partner-ellis.png', full: 'Jeff Ellis & Associates', role: 'World leader in aquatic safety, lifeguard training and attraction operations', color: '#00AFDC' },
  { short: 'SST', logo: './partner-sst.png', full: 'Safety Skills Training DMCC', role: 'International training division of Ellis & Associates and our delivery partner for the full Ellis portfolio', color: '#15D2A4' },
  { short: 'TVTC', logo: '', full: 'Technical and Vocational Training Corporation', role: 'National accreditation for vocational attractions programs in Saudi Arabia', color: '#99CA32' },
  { short: 'AAM', logo: './partner-aam.png', full: 'American Alliance of Museums', role: 'Professional standards and advocacy for museums worldwide', color: '#FFCA03' },
  { short: 'WWA', logo: './partner-wwa.png', full: 'World Waterpark Association', role: 'The industry body for waterpark operators and suppliers', color: '#F85707' },
  { short: 'IRT', logo: './partner-irt.png', full: 'International Ride Training', role: 'Specialist ride operations training and certification', color: '#FC026F' },
  { short: 'TEA', logo: './partner-tea.png', full: 'Themed Entertainment Association', role: 'Global network for experience design and themed entertainment', color: '#8238EB' },
  { short: 'AIMS', logo: './partner-aims.png', full: 'AIMS International', role: 'Amusement industry safety standards and education', color: '#000050' },
]

export default function Partners() {
  const { ref, inView } = useInView()

  return (
    <section id="partners" className="bg-[#F9F8F6] py-28 sm:py-32 overflow-hidden">
      {/* Header */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-[1920px] mx-auto px-6 sm:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
      >
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-[3px] bg-[#FFCA03]" />
            <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65]">Partners & affiliations</p>
          </div>
          <h2 className="font-serif text-[clamp(40px,4vw,60px)] text-[#000050] leading-tight tracking-[-0.01em] max-w-[920px]">
            Connected to the institutions<br className="hidden md:block" /> that set the standard.
          </h2>
        </div>
        <p className="max-w-[420px] text-[18px] text-[#6B6B65] leading-relaxed font-light">
          Accreditation partners, delivery partners and industry bodies that keep every Academy program aligned with global best practice.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E0DB] border border-[#E2E0DB]">
          {partners.map((p, i) => (
            <div
              key={p.short}
              className={`partner-card group relative bg-[#F9F8F6] p-8 sm:p-10 min-h-[300px] flex flex-col overflow-hidden reveal reveal-delay-${(i % 3) + 1} ${inView ? 'visible' : ''}`}
              style={{ ['--brand' as string]: p.color }}
            >
              <span className="partner-fill" aria-hidden="true" />
              <div className="partner-plate relative h-24 mb-8 bg-white flex items-center justify-center px-6 transition-shadow duration-500">
                {p.logo ? (
                  <img src={p.logo} alt={`${p.full} logo`} loading="lazy" decoding="async" className="max-h-14 max-w-full w-auto object-contain" />
                ) : (
                  <span className="font-serif text-[30px] font-semibold tracking-[0.08em]" style={{ color: '#007A3D' }}>{p.short}</span>
                )}
              </div>
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="partner-name font-serif text-[clamp(24px,2vw,32px)] leading-none tracking-[-0.01em] text-[#000050] transition-colors duration-500">
                    {p.short}
                  </h3>
                  <span className="partner-dot mt-2 w-3 h-3 rounded-full flex-shrink-0 transition-transform duration-500" style={{ background: p.color }} aria-hidden="true" />
                </div>
                <p className="partner-sub text-[14px] text-[#6B6B65] font-medium transition-colors duration-500">{p.full}</p>
              </div>
              <p className="partner-sub relative text-[15px] text-[#6B6B65] font-light leading-relaxed mt-auto pt-6 max-w-[360px] transition-colors duration-500">
                {p.role}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

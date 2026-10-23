import type React from 'react'
import { useInView } from '../../hooks/useInView'

const projects = [
  { name: 'SEVEN', location: 'Saudi Arabia', category: 'Full learning journey: 66 modules for all Fungineers' },
  { name: 'Qiddiya', location: 'Saudi Arabia', category: 'Accredited Playmakers programs & diploma units' },
  { name: 'TAKAMOL', location: 'Saudi Arabia', category: 'Leadership and entry/mid-level programs' },
  { name: 'Doha Quest', location: 'Qatar', category: 'Full pre-opening program development & delivery' },
  { name: 'Desert Falls Water & Adventure Park', location: 'Qatar', category: 'Pre-opening programs incl. lifeguard training' },
  { name: 'Farah Experiences', location: 'UAE', category: 'Full pre-opening programs for Ferrari World & Yas WaterWorld' },
  { name: 'Grand Hyatt Dubai Waterpark', location: 'UAE', category: 'Park-wide training & operational readiness' },
  { name: 'Makkah Royal Clock Tower', location: 'Saudi Arabia', category: 'Tailored training programs' },
  { name: 'Mahanakhon SkyWalk', location: 'Bangkok, Thailand', category: 'Attraction-wide training & opening readiness' },
  { name: 'Guggenheim Abu Dhabi', location: 'UAE', category: 'Pre-opening & HR support, 200+ job descriptions' },
  { name: 'Stratosphere', location: 'Las Vegas, USA', category: 'Pre-opening support & staff training design' },
  { name: 'IAAPA Institute for Attractions Managers', location: 'Hong Kong, Singapore, Beijing, Shanghai', category: 'Revenue Ops & Financial Management, 2012 to 2018' },
]

export default function AcademyProjects() {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="projects-heading"
      className="bg-[#1C1C1A] py-16 sm:py-20 lg:py-24 px-6 sm:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[20px] font-semibold text-[#F85707] whitespace-nowrap">Applied Experience</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="projects-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-white leading-tight tracking-[-0.01em]">
              Tested against real operations.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[18px] text-white/45 font-light leading-relaxed">
              Select past and present L&D projects where The ProFun Academy has designed and delivered training, pre-opening programs and capability development.
            </p>
          </div>
        </div>

        {/* Projects list */}
        <div className={`divide-y divide-white/8 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
          {/* Header row */}
          <div className="grid grid-cols-12 gap-4 pb-4">
            <span className="col-span-1 text-[16px] text-white/60 font-medium">#</span>
            <span className="col-span-4 text-[16px] text-white/60 font-medium">Project</span>
            <span className="col-span-4 text-[16px] text-white/60 font-medium">Location</span>
            <span className="col-span-3 text-[16px] text-white/60 font-medium">Focus area</span>
          </div>

          {projects.map((p, i) => (
            <div
              key={p.name}
              className="grid grid-cols-[auto_1fr] sm:grid-cols-12 gap-x-4 gap-y-1 sm:gap-4 py-5 group hover:bg-white/3 transition-colors duration-200"
            >
              <span className="row-span-3 sm:row-span-1 sm:col-span-1 text-[15px] text-[#F85707] font-medium tabular-nums self-start sm:self-center pt-1 sm:pt-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="sm:col-span-4 text-[19px] font-medium text-white self-center group-hover:text-white transition-colors">
                {p.name}
              </span>
              <span className="sm:col-span-4 text-[17px] text-white/45 font-light self-center">
                {p.location}
              </span>
              <span className="sm:col-span-3 text-[15px] text-white/30 font-light self-center leading-snug">
                {p.category}
              </span>
            </div>
          ))}
        </div>

        {/* Hero image strip */}
        <div className={`mt-16 aspect-[21/6] overflow-hidden bg-[#111110] reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
          <img
            src="./ferrari-world-abu-dhabi.jpg"
            alt="World-class attraction operations"
            className="w-full h-full object-cover opacity-50 transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  )
}

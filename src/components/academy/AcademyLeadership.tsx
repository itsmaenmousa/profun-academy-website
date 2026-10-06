import type React from 'react'
import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

const leadership = [
  {
    name: 'Salah Elatrash',
    photo: './team-salah-elatrash.jpg',
    title: 'Partner',
    expertise: ['Qiddiya', 'SEVEN', 'At The Top, Burj Khalifa', 'Shindagha Museum', 'Languages: Arabic, English'],
  },
  {
    name: 'Michael Oswald',
    photo: './team-michael-oswald.jpg',
    title: 'Partner',
    expertise: ['Ferrari World Abu Dhabi', 'Yas Waterworld', 'Doha QUEST', 'Mahanakhon Skywalk', 'Sony Wonderverse'],
  },
  {
    name: 'Ryan Phillips',
    photo: './team-ryan-phillips.jpg',
    title: 'General Manager',
    expertise: ['Yas Waterworld, Abu Dhabi', 'Aquarabia, Qiddiya City', 'Atlantis Aquaventure Dubai', 'Grand Hyatt Dubai Waterpark', 'IAAPA MENA Regional Advisory Board'],
  },
  {
    name: 'Ludwig Louw',
    photo: './team-ludwig-louw.jpg',
    title: 'Director',
    expertise: ['Qiddiya Capability Program', 'SEVEN', 'Leadership & Capability Frameworks', 'Languages: English, Afrikaans'],
  },
]

const streams = [
  {
    id: 'sme',
    label: 'Subject Matter Experts',
    desc: 'Senior industry practitioners whose careers span Universal Studios, DreamWorks, the Walt Disney Company and ProFun\'s own MENA and China operations, with project experience including Qiddiya, Doha QUEST, Ferrari World Abu Dhabi, Shanghai World Expo and Ocean Park Hong Kong.',
  },
  {
    id: 'ddd',
    label: 'Design, Development & Delivery',
    desc: 'Learning designers and advisors drawn from Expo 2020 Dubai, COP28 UAE, Miral, Disney Institute, Universal Orlando and IAAPA, turning operational expertise into structured, multilingual learning experiences.',
  },
  {
    id: 'fac',
    label: 'Facilitation Team',
    desc: 'Arabic- and English-speaking facilitators with backgrounds across Qiddiya, SEVEN, Etihad, EMAAR Entertainment and major regional events, selected for operational credibility and cultural awareness.',
  },
]

export default function AcademyLeadership() {
  const [activeStream, setActiveStream] = useState<string | null>(null)
  const { ref, inView } = useInView()

  return (
    <section
      id="team"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="team-heading"
      className="bg-[#F2F1EF] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">11</span>
          <span className="flex-1 h-px bg-[#DDDBD6]" />
          <span className="text-[#6B6B65] text-[12px] font-medium tracking-[0.15em] uppercase">Leadership & Delivery</span>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <div className="lg:col-span-5">
            <h2 id="team-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              Expertise at every level of the organisation.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[17px] text-[#6B6B65] font-light leading-relaxed">
              Our partners and leadership are supported by subject matter experts, learning designers and a multilingual facilitation team, all drawn from active attractions and hospitality careers.
            </p>
          </div>
        </div>

        {/* Leadership grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DDDBD6] mb-2 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
          {leadership.map((l, i) => (
            <div
              key={l.name}
              className={`bg-[#F2F1EF] group reveal reveal-delay-${Math.min(i + 1, 4)} ${inView ? 'visible' : ''}`}
            >
              {/* Portrait — empty */}
              <div className="aspect-[3/4] bg-white overflow-hidden">
                <img
                  src={l.photo}
                  alt={`${l.name}, ${l.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Info */}
              <div className="p-7 bg-[#F9F8F6] border-t border-[#DDDBD6]">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#1C1C1A] leading-tight">{l.name}</h3>
                    <p className="text-[14px] text-[#F85707] font-medium mt-0.5 tracking-[0.02em]">{l.title}</p>
                  </div>
                </div>

                {/* Expertise list — visible on hover/focus-within */}
                <ul
                  className="space-y-1.5 overflow-hidden transition-all duration-400 max-h-0 group-hover:max-h-48 opacity-0 group-hover:opacity-100"
                  aria-label={`${l.name} areas of expertise`}
                >
                  {l.expertise.map(e => (
                    <li key={e} className="flex items-center gap-2.5 text-[14px] text-[#6B6B65] font-light">
                      <span className="w-1 h-1 bg-[#F85707] flex-shrink-0 rounded-full" aria-hidden="true" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery streams */}
        <div className={`mt-16 reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
          <p className="text-[12px] tracking-[0.15em] uppercase text-[#6B6B65] font-medium mb-6">
            Delivery infrastructure
          </p>
          <div
            className="divide-y divide-[#DDDBD6]"
            role="list"
            aria-label="Delivery team streams"
          >
            {streams.map(s => (
              <div key={s.id} role="listitem">
                <button
                  onClick={() => setActiveStream(activeStream === s.id ? null : s.id)}
                  className="w-full flex items-center gap-6 py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] focus-visible:ring-offset-2"
                  aria-expanded={activeStream === s.id}
                  aria-controls={`stream-${s.id}`}
                >
                  <span
                    className="w-4 h-4 border border-current flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ color: activeStream === s.id ? '#F85707' : '#DDDBD6' }}
                    aria-hidden="true"
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d={activeStream === s.id ? 'M1 4H7' : 'M4 1V7M1 4H7'}
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className={`text-[18px] font-medium transition-colors duration-200 ${activeStream === s.id ? 'text-[#F85707]' : 'text-[#1C1C1A] group-hover:text-[#F85707]'}`}>
                    {s.label}
                  </span>
                  <span className="text-[14px] text-[#6B6B65] font-light ml-auto pr-4 hidden lg:inline">
                    {activeStream === s.id ? 'Close' : 'Learn more'}
                  </span>
                </button>
                <div
                  id={`stream-${s.id}`}
                  role="region"
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: activeStream === s.id ? '120px' : '0',
                    opacity: activeStream === s.id ? 1 : 0,
                  }}
                >
                  <p className="pb-7 pl-10 text-[17px] text-[#6B6B65] font-light leading-relaxed max-w-[640px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

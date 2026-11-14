import { useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { TEAM_LIST as team } from '../team'
import { COPY as P } from '../copy'

const initials = (name: string) => name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('')

export default function Leadership() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="team" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">{P.team.head_eyebrow}</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em]">
              {P.team.head_title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light">
              {P.team.head_text}
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-px"
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`team-card bg-[#F9F8F6] group reveal reveal-delay-${(i % 4) + 1} ${inView2 ? 'visible' : ''} ${openIdx === i ? 'is-open' : ''}`}
              onClick={() => setOpenIdx(o => (o === i ? null : i))}
            >
              {/* Portrait — empty */}
              <div className="aspect-[3/4] bg-white overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ background: '#EEEDEA' }}
                    aria-hidden="true"
                  >
                    <span
                      className="font-serif text-[clamp(56px,6vw,88px)] leading-none tracking-[-0.02em]"
                      style={{ color: '#000050' }}
                    >
                      {initials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="pt-4 pb-2 sm:p-8">
                <span className="team-more lg:hidden float-right mt-1 ml-2 w-6 h-6 rounded-full border border-[#D4D2CC] text-[#000050] flex items-center justify-center" aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
                <h3 className="font-serif text-[19px] sm:text-[24px] text-[#1C1C1A] leading-tight mb-1">{member.name}</h3>
                <p className="text-[14px] sm:text-[15px] text-[#F85707] font-medium leading-snug sm:mb-4">{member.role}</p>
                <p className="team-bio text-[15px] sm:text-[17px] text-[#4A4A45] leading-snug sm:leading-relaxed font-light overflow-hidden">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

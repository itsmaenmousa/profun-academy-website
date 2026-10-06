import type React from 'react'
import { useInView } from '../hooks/useInView'

const team = [
  {
    name: 'Salah Elatrash',
    photo: './team-salah-elatrash.jpg',
    role: 'Partner',
    bio: 'Salah leads ProFun\'s operations advisory practice across the Middle East and Africa, with deep expertise in workforce capability development and senior leadership programme design.',
  },
  {
    name: 'Michael Oswald',
    photo: './team-michael-oswald.jpg',
    role: 'Partner',
    bio: 'Michael brings extensive experience in global attractions operations, safety management systems and training architecture, underpinning ProFun\'s accreditation standards worldwide.',
  },
  {
    name: 'Ryan Phillips',
    photo: './team-ryan-phillips.jpg',
    role: 'General Manager',
    bio: 'Ryan oversees programme management and client delivery, with a focus on learning systems design and regional business development across ProFun\'s international portfolio.',
  },
  {
    name: 'Ludwig Louw',
    photo: './team-ludwig-louw.jpg',
    role: 'Director',
    bio: 'Ludwig leads curriculum development and facilitation excellence, bringing a rigorous approach to experiential learning design and subject matter expert networks.',
  },
]

export default function Leadership() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  return (
    <section id="team" className="bg-[#F9F8F6] py-32 px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div className="lg:col-span-4">
            <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65] mb-5">Leadership</p>
            <h2 className="font-serif text-[clamp(40px,4vw,60px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              The people who lead our practice
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[18px] text-[#6B6B65] leading-relaxed font-light">
              ProFun's senior team combines academic rigour with extensive hands-on experience across every discipline relevant to the leisure and attractions industry.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E0DB]"
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`bg-[#F9F8F6] group reveal reveal-delay-${i + 1} ${inView2 ? 'visible' : ''}`}
            >
              {/* Portrait — empty */}
              <div className="aspect-[3/4] bg-white overflow-hidden">
                <img
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              {/* Info */}
              <div className="p-8">
                <h3 className="font-serif text-[24px] text-[#1C1C1A] leading-tight mb-1">{member.name}</h3>
                <p className="text-[14px] text-[#F85707] font-medium mb-4">{member.role}</p>
                <p className="text-[16px] text-[#6B6B65] leading-relaxed font-light max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
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

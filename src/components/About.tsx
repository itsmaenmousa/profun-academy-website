import type React from 'react'
import { useInView } from '../hooks/useInView'

// Light palette colors take Midnight Blue text on hover; darker ones take white
const LIGHT = ['#15D2A4', '#99CA32', '#FFCA03', '#00AFDC']

const VALUES = [
  { title: 'Shaped by operational experience', desc: 'Learning shaped by attractions professionals who understand the realities of opening, operating, and leading visitor experiences.', color: '#3985FD' },
  { title: 'Practical learning, real-world application', desc: 'Scenarios, simulations, and practical activities connect learning to the workplace, with on-site delivery where the brief requires it.', color: '#15D2A4' },
  { title: 'Built around each role', desc: 'Programs tailored to specific responsibilities and career stages, from frontline operations to management and leadership.', color: '#99CA32' },
  { title: 'Culturally grounded, in design and delivery', desc: 'Learning shaped around local cultures, values, and workplace expectations, with delivery that connects with diverse teams across regions.', color: '#FFCA03' },
  { title: 'Learning that speaks your team\u2019s language', desc: 'Programs delivered in Arabic, English, and other languages to suit your workforce, helping participants understand, engage, and apply their learning.', color: '#FC026F' },
  { title: 'From frontline to senior leadership', desc: 'Development that supports capability at every level, helping organizations prepare teams, strengthen managers, and develop leaders.', color: '#8238EB' },
  { title: 'Capability that stays with your team', desc: 'On-site coaching and train-the-trainer options help your people reinforce learning and sustain standards over time.', color: '#00AFDC' },
  { title: 'Recognized training and specialist partnerships', desc: 'Programs supported by recognized accreditations, certifications, and specialist partnerships, with the applicable recognition specified for each program.', color: '#F85707' },
]

export default function About() {
  const { ref, inView } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  return (
    <section id="about" className="bg-[#F2F1EF] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Text column */}
          <div className={`lg:col-span-5 reveal ${inView ? 'visible' : ''}`}>
            <p className="text-[20px] font-semibold text-[#F85707] mb-6">About the Academy</p>
            <h2 className="font-serif text-[clamp(40px,4vw,60px)] text-[#1C1C1A] leading-tight mb-8 tracking-[-0.01em]">
              The people behind{' '}<br className="hidden lg:block" />great experiences.
            </h2>
            <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-6">
              The ProFun Academy is a division of ProFun, a company dedicated exclusively to operations advisory, training and management for the visitor attractions industry. Since 1980, ProFun has advised on, trained for and managed projects globally, working alongside theme parks, waterparks, museums, cultural institutions, brand centers and world-class events.
            </p>
            <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-12">
              The Academy brings that operational depth directly into the learning room. Every program is built from real industry experience and delivered by people who have worked at the highest levels of the attractions world.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[17px] font-medium text-[#1C1C1A] hover:text-[#F85707] hover:gap-5 transition-all duration-300"
            >
              Explore our services
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Image column */}
          <div className={`lg:col-span-7 relative reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
            <div className={`aspect-[4/3] overflow-hidden bg-[#1C1C1A] img-reveal ${inView ? 'visible' : ''}`}>
              <img
                src="./academy-in-person.jpg"
                alt="A ProFun Academy facilitator leading an in-person session"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <p className="text-[15px] text-[#6B6B65] font-light">In-person learning, facilitated by industry practitioners</p>
            </div>
          </div>
        </div>

        {/* Values row */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className="mt-24 pt-16 border-t border-[#E2E0DB]"
        >
          <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal ${inView2 ? 'visible' : ''}`}>
            <div>
              <p className="text-[20px] font-semibold text-[#F85707] mb-4">What Sets Us Apart</p>
              <h3 className="font-serif text-[clamp(32px,3vw,48px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">Built Differently, By Design.</h3>
            </div>
            <p className="max-w-[460px] text-[18px] text-[#6B6B65] leading-relaxed font-light">
              We help operators and project teams build the capability to open, operate and lead exceptional visitor attractions, with learning shaped around their people, operational priorities and regional context.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {VALUES.map((v, i) => (
              <li
                key={v.title}
                className={`value-card group relative bg-white p-8 sm:p-9 min-h-[240px] flex flex-col overflow-hidden reveal reveal-delay-${(i % 4) + 1} ${inView2 ? 'visible' : ''}`}
                style={{ ['--brand' as string]: v.color, ['--ink' as string]: LIGHT.includes(v.color) ? '#000050' : '#ffffff' }}
              >
                <span className="value-fill" aria-hidden="true" />
                <span className="value-bar absolute top-0 left-0 right-0 h-1" style={{ background: v.color }} aria-hidden="true" />
                <h4 className="value-title relative font-serif text-[23px] text-[#000050] leading-snug mt-4 mb-3">{v.title}</h4>
                <p className="value-copy relative text-[17px] text-[#6B6B65] leading-relaxed font-light">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

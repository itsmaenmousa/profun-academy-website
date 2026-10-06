import type React from 'react'
import { useInView } from '../hooks/useInView'

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
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[3px] bg-[#3985FD]" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65]">About the Academy</span>
            </div>
            <h2 className="font-serif text-[clamp(40px,4vw,60px)] text-[#1C1C1A] leading-tight mb-8 tracking-[-0.01em]">
              The people behind{' '}<br className="hidden lg:block" />great experiences.
            </h2>
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light mb-6">
              The ProFun Academy is a division of ProFun, a company dedicated exclusively to operations advisory, training and management for the visitor attractions industry. Since 1980, ProFun has advised on, trained for and managed projects globally, working alongside theme parks, waterparks, museums, cultural institutions, brand centres and world-class events.
            </p>
            <p className="text-[19px] text-[#6B6B65] leading-relaxed font-light mb-12">
              The Academy brings that operational depth directly into the learning room. Every programme is built from real industry experience and delivered by people who have worked at the highest levels of the attractions world.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[16px] font-medium text-[#1C1C1A] hover:text-[#F85707] hover:gap-5 transition-all duration-300"
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
              <p className="text-[14px] text-[#6B6B65] font-light">In-person learning, facilitated by industry practitioners</p>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F85707]" />
                <p className="text-[14px] text-[#6B6B65] font-light">Est. 1980</p>
              </div>
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
              <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65] mb-5">What sets us apart</p>
              <h3 className="font-serif text-[clamp(32px,3vw,48px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">Built Differently, By Design.</h3>
            </div>
            <p className="max-w-[460px] text-[17px] text-[#6B6B65] leading-relaxed font-light">
              Every aspect of the ProFun Academy experience is shaped by the realities of working in visitor attractions, not adapted from another sector.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">
          {[
            { title: 'Innovative experiential delivery', desc: 'We design learning experiences that are active, immersive and memorable, grounded in how adults actually learn in operational environments.' },
            { title: 'Tailored role-based learning', desc: 'Programmes are built around specific roles, responsibilities and career stages, never one-size-fits-all content.' },
            { title: 'From frontline to senior leadership', desc: 'We support development at every level of an organisation, from first-day colleagues to C-suite executives.' },
            { title: 'Culturally aware delivery', desc: 'Our facilitators work across diverse cultural contexts with sensitivity, respect and genuine international experience.' },
            { title: 'Multilingual options', desc: 'Key programmes are available in multiple languages to ensure learning reaches every team member effectively.' },
            { title: 'On-site coaching and train-the-trainer', desc: 'We embed capability within your organisation, equipping your own people to sustain and scale learning over time.' },
            { title: 'Interactive and engaging', desc: 'Role-play simulations, scenario-based challenges and reflective practice keep participants engaged and accelerate skill transfer.' },
            { title: 'Industry-specific content', desc: 'Every case study, scenario and example comes from the attractions world, so learning lands with immediate relevance.' },
          ].map((v, i) => (
            <div
              key={v.title}
              className={`flex flex-col gap-4 reveal reveal-delay-${(i % 4) + 1} ${inView2 ? 'visible' : ''}`}
            >
              <div className="w-8 h-[3px]" style={{ background: ['#3985FD', '#15D2A4', '#99CA32', '#FFCA03', '#FC026F', '#8238EB', '#00AFDC', '#F85707'][i] }} />
              <h4 className="font-serif text-[23px] text-[#000050] leading-tight">{v.title}</h4>
              <p className="text-[17px] text-[#6B6B65] leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

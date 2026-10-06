import type React from 'react'
import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

const modes = [
  {
    id: 'in-person',
    label: 'In-Person',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="5" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 16c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    headline: 'On-site. Immersive. Practitioner-led.',
    desc: 'In-person delivery brings our facilitators, experienced attractions operators, directly into your environment. Sessions are run in context: on the ride platform, in the control room, in the briefing space. Learning is calibrated to your specific team, guest mix and operating procedures.',
    features: ['On-site or designated facility', 'Facilitated by industry practitioners', 'Customised to your operational context', 'Integrated with live operations', 'Suitable for all levels'],
    image: './academy-in-person.jpg',
  },
  {
    id: 'virtual',
    label: 'Virtual',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 16h6M9 13v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    headline: 'Live facilitation. Global reach.',
    desc: 'Virtual live sessions preserve the interaction, challenge and accountability of in-person delivery while enabling access across time zones and multi-site organisations. Our virtual design standards ensure engagement remains high and passive observation is minimised.',
    features: ['Live facilitated sessions', 'Breakout group work', 'Multi-time-zone compatible', 'Recorded for asynchronous review', 'Suitable for supervisory and leadership levels'],
    image: './academy-virtual.jpg',
  },
  {
    id: 'elearning',
    label: 'eLearning',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    headline: 'Self-directed. Accessible. Scalable.',
    desc: 'Purpose-built digital learning experiences for self-directed consumption. Designed for compliance programmes, knowledge foundations and wide-reach onboarding. Our eLearning standards mandate industry-relevant scenarios, not generic content dropped into a player.',
    features: ['Available 24/7 on any device', 'SCORM-compatible for LMS integration', 'Branching scenario-based design', 'Progress tracking and reporting', 'Supports onboarding at scale'],
    image: './academy-elearning.jpg',
  },
  {
    id: 'experiential',
    label: 'Experiential',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 3L11.5 8H16.5L12.5 11L14 16L9 13L4 16L5.5 11L1.5 8H6.5L9 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Learning through doing. In the real environment.',
    desc: 'The highest-impact learning occurs within the operational environment itself. Experiential programmes place learners in live or simulated conditions, requiring them to make real decisions, manage real consequences and reflect on real outcomes with skilled facilitation support.',
    features: ['Live operational exercises', 'Emergency scenario simulations', 'Guest interaction role-plays', 'Ride and safety practicals', 'Debrief and structured reflection'],
    image: './academy-experiential.jpg',
  },
  {
    id: 'blended',
    label: 'Blended',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 9h4M12 9h4M9 2v4M9 12v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
    headline: 'The most effective programmes use all modes.',
    desc: 'Blended pathways sequence digital pre-learning, live facilitation, on-site practicals and post-programme coaching into a coherent experience. They are the standard for our flagship capability programmes where depth, retention and behaviour change are the measurable outcomes.',
    features: ['Structured multi-modal pathways', 'Pre-work, live sessions, practicals', 'Coaching and follow-up', 'Competency-based assessment', 'Recommended for all leadership programmes'],
    image: './academy-blended.jpg',
  },
]

export default function AcademyDelivery() {
  const [active, setActive] = useState('in-person')
  const { ref, inView } = useInView()
  const mode = modes.find(m => m.id === active)!

  return (
    <section
      id="delivery"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="delivery-heading"
      className="bg-[#111110] py-28 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter rule */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? 'visible' : ''}`}>
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">06</span>
          <span className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-[12px] font-medium tracking-[0.15em] uppercase">Delivery Model</span>
        </div>

        <div className={`mb-14 reveal ${inView ? 'visible' : ''}`}>
          <h2 id="delivery-heading" className="font-serif text-[clamp(32px,3.4vw,52px)] text-white leading-tight tracking-[-0.01em] max-w-[560px]">
            Five modes of delivery. One quality standard.
          </h2>
        </div>

        {/* Mode tabs */}
        <div
          className={`flex flex-wrap gap-1 mb-12 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}
          role="tablist"
          aria-label="Delivery modes"
        >
          {modes.map(m => (
            <button
              key={m.id}
              role="tab"
              aria-selected={active === m.id}
              aria-controls={`mode-panel-${m.id}`}
              id={`mode-tab-${m.id}`}
              onClick={() => setActive(m.id)}
              className={`flex items-center gap-2.5 px-5 py-3 text-[14px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
                active === m.id
                  ? 'bg-[#F85707] text-white'
                  : 'text-white/40 border border-white/10 hover:text-white/70 hover:border-white/25'
              }`}
            >
              <span className={active === m.id ? 'text-white' : 'text-white/30'}>
                {m.icon}
              </span>
              {m.label}
            </button>
          ))}
        </div>

        {/* Mode panel */}
        <div
          id={`mode-panel-${mode.id}`}
          role="tabpanel"
          aria-labelledby={`mode-tab-${mode.id}`}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 reveal reveal-delay-2 ${inView ? 'visible' : ''}`}
          key={mode.id}
        >
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-[#1C1C1A]">
              <img
                src={mode.image}
                alt={mode.label}
                className="w-full h-full object-cover opacity-75 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <p className="text-[12px] tracking-[0.15em] uppercase text-[#F85707] font-medium mb-4">{mode.label}</p>
            <h3 className="font-serif text-[clamp(24px,2.4vw,36px)] text-white leading-tight mb-5">
              {mode.headline}
            </h3>
            <p className="text-[17px] text-white/55 font-light leading-relaxed mb-8">
              {mode.desc}
            </p>
            <ul className="space-y-2.5" aria-label={`${mode.label} features`}>
              {mode.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[14px] text-white/55 font-light">
                  <span className="w-1 h-1 rounded-full bg-[#F85707] flex-shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

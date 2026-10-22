import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const channels = [
  {
    id: 'in-person',
    color: '#3985FD',
    label: 'In-Person',
    title: 'In-Person Learning.',
    desc: 'Practical sessions led by experienced facilitators at your workplace or a dedicated venue, using discussion, activities, and realistic scenarios to build skills and confidence.',
    tags: ['Workshops', 'Seminars', 'Site Visits', 'Role-Play Simulations', 'Train-the-Trainer'],
    image: './academy-in-person.jpg',
    pos: '55% 24%',
  },
  {
    id: 'virtual',
    color: '#FC026F',
    label: 'Virtual',
    title: 'Virtual Learning.',
    desc: 'Live, facilitator-led online sessions that bring teams together through interactive discussions, group activities, and guided practice.',
    tags: ['Live Webinars', 'Virtual Cohorts', 'Remote Coaching', 'Group Breakouts'],
    image: './academy-virtual.jpg',
    pos: '50% 38%',
  },
  {
    id: 'elearning',
    color: '#00AFDC',
    label: 'eLearning',
    title: 'eLearning.',
    desc: 'Self-paced digital learning that helps employees build knowledge and reinforce skills, with language options and progress tracking based on program requirements.',
    tags: ['SCORM Modules', 'Microlearning', 'Video-Based Learning', 'Knowledge Assessments'],
    image: './academy-elearning.jpg',
    pos: '50% 45%',
  },
  {
    id: 'blended',
    color: '#15D2A4',
    label: 'Blended',
    title: 'Blended Learning.',
    desc: 'A tailored combination of in-person, virtual, and self-paced learning, supported by workplace practice to reinforce application over time.',
    tags: ['Pre-Work', 'Live Session', 'Sustained Follow-Through', 'Spaced Learning Design'],
    image: './academy-blended.jpg',
    pos: '50% 42%',
  },
]

const SLIDE_MS = 6000

export default function VideoReel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (!inView || paused) return
    const t = setTimeout(() => setActive(a => (a + 1) % channels.length), SLIDE_MS)
    return () => clearTimeout(t)
  }, [active, inView, paused])

  const c = channels[active]

  return (
    <section
      id="delivery"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1C1C1A] relative overflow-hidden"
    >
      {/* Top label */}
      <div
        className={`max-w-[1920px] mx-auto px-6 sm:px-12 pt-16 sm:pt-20 lg:pt-14 pb-10 sm:pb-12 lg:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 reveal ${inView ? 'visible' : ''}`}
      >
        <div>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">How We Deliver</p>
          <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-white leading-[1.08] tracking-[-0.01em] max-w-[720px] mb-6">
            Learning that fits your teams and operations.
          </h2>
          <p className="text-[18px] sm:text-[19px] text-white/65 font-light leading-relaxed max-w-[640px]">
            We combine delivery formats to suit your workforce, operational priorities, and learning goals; with experienced facilitators, practical activities, and content tailored to your cultural context.
          </p>
        </div>
        {/* Channel tabs */}
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Learning delivery channels">
          {channels.map((ch, i) => (
            <button
              key={ch.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => { setActive(i); setPaused(true) }}
              className={`relative overflow-hidden px-5 py-3 text-[15px] font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
                i === active ? 'text-white bg-white/10' : 'text-white/40 hover:text-white/80'
              }`}
            >
              {ch.label}
              {i === active && !paused && inView && (
                <span
                  key={`bar-${active}`}
                  className="absolute left-0 bottom-0 h-[2px] reel-progress"
                  style={{ animationDuration: `${SLIDE_MS}ms`, background: ch.color }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stage: copy beside the image so both are visible together */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-5 min-h-[260px] flex flex-col justify-center">
            <div key={c.id} className="reel-copy">
              <span className="block w-10 h-1 mb-6" style={{ background: c.color }} aria-hidden="true" />
              <h3 className="font-serif text-[clamp(28px,2.8vw,46px)] text-white leading-[1.08] tracking-[-0.01em] mb-5">
                {c.title}
              </h3>
              <p className="text-[17px] sm:text-[19px] text-white/80 font-light leading-relaxed max-w-[520px] mb-6">
                {c.desc}
              </p>
              <ul className="flex flex-wrap gap-2 max-w-[560px]">
                {c.tags.map(t => (
                  <li key={t} className="text-[14px] sm:text-[15px] text-white/75 border border-white/15 px-3 py-1.5">{t}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-[clamp(340px,calc(100svh-400px),560px)]">
            {channels.map((ch, i) => (
              <img
                key={ch.id}
                src={ch.image}
                alt={ch.title}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover reel-slide ${i === active ? 'is-active' : ''}`}
                style={{ objectPosition: ch.pos }}
              />
            ))}
            <span className="absolute bottom-0 left-0 right-0 h-1 z-10 transition-colors duration-700" style={{ background: c.color }} aria-hidden="true" />
          </div>
        </div>

        {/* Experiential learning: same layout, built into every format */}
        <div id="experiential" className="mt-16 sm:mt-24 pt-16 sm:pt-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-[20px] font-semibold text-[#B48CF5] mb-4">Experiential Learning</p>
            <h3 className="font-serif text-[clamp(28px,2.8vw,46px)] text-white leading-[1.08] tracking-[-0.01em] mb-5">
              Practical experience.<br /> Lasting application.
            </h3>
            <p className="text-[17px] sm:text-[19px] text-white/80 font-light leading-relaxed max-w-[520px] mb-6">
              Learning through realistic scenarios, simulations, and workplace practice helps your teams connect knowledge to their roles and apply skills with confidence.
            </p>
            <p className="text-[15px] text-white/55">Built into every delivery format.</p>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-[clamp(320px,44vh,480px)]">
            <img
              src="./academy-experiential.jpg"
              alt="Participants in a hands-on experiential learning session"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              style={{ objectPosition: '50% 40%' }}
            />
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#8238EB]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-24" aria-hidden="true" />

      {/* Bottom strip */}
      <div className="overflow-hidden py-6 border-t border-white/8">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12" aria-hidden={i === 1}>
              {[
                'Theme Parks', '·', 'Waterparks', '·', 'Museums', '·',
                'Cultural Institutions', '·', 'Brand Centers', '·', 'World Expos', '·',
                'Zoos & Aquariums', '·', 'Family Entertainment Centers', '·', 'Stadiums & Arenas', '·',
              ].map((item, j) => (
                item === '·' ? (
                  <span key={j} className="w-2.5 h-2.5 rounded-full bg-[#F85707] flex-shrink-0" aria-hidden="true" />
                ) : (
                  <span key={j} className="text-[18px] font-normal text-white/85">
                    {item}
                  </span>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

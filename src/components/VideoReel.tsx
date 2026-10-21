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
        className={`max-w-[1920px] mx-auto px-6 sm:px-12 pt-20 pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal ${inView ? 'visible' : ''}`}
      >
        <div>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">How We Deliver</p>
          <h2 className="font-serif text-[clamp(36px,3.4vw,56px)] text-white leading-tight tracking-[-0.01em] max-w-[680px] mb-6">
            Learning that fits your teams and operations.
          </h2>
          <p className="text-[19px] text-white/65 font-light leading-relaxed max-w-[640px]">
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

      {/* Stage */}
      <div
        className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[16/7] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1A]/90 via-[#1C1C1A]/45 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div key={c.id} className="max-w-[1920px] w-full mx-auto px-6 sm:px-12 pb-12 sm:pb-16 reel-copy">
            <h3 className="font-serif text-[clamp(32px,3.6vw,60px)] text-white leading-[1.05] tracking-[-0.01em] mb-5 max-w-[640px]">
              {c.title}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-white/70 font-light leading-relaxed max-w-[560px] mb-6">
              {c.desc}
            </p>
            <p className="text-[16px] text-white/60 max-w-[640px] leading-relaxed">
              {c.tags.join(' · ')}
            </p>
          </div>
        </div>
      </div>

      {/* Experiential learning, built into every format: a featured full-bleed band */}
      <div id="experiential" className="relative overflow-hidden bg-[#000050]">
        <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[#8238EB]/35 blur-[140px] quote-glow" aria-hidden="true" />
        <div className="absolute -bottom-48 left-1/3 w-[520px] h-[520px] rounded-full bg-[#FC026F]/15 blur-[140px] quote-glow quote-glow-2" aria-hidden="true" />

        {/* Image: top on mobile, right half bleeding off the edge on desktop */}
        <div className="exp-image relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[56%] aspect-[16/10] lg:aspect-auto overflow-hidden">
          <img
            src="./academy-experiential.jpg"
            alt="Participants in a hands-on experiential learning session"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000050] via-[#000050]/20 to-transparent lg:hidden" aria-hidden="true" />
        </div>

        <div className="relative max-w-[1920px] mx-auto px-6 sm:px-12 py-16 sm:py-20 lg:py-32">
          <div className="lg:w-[46%] lg:pr-8">
            <p className="text-[20px] font-semibold text-[#FFCA03] mb-4">Experiential Learning</p>
            <h3 className="font-serif text-[clamp(34px,3.6vw,60px)] text-white leading-[1.06] tracking-[-0.01em] mb-6">
              Practical experience.<br /> Lasting application.
            </h3>
            <p className="text-[18px] sm:text-[20px] text-white/80 font-light leading-relaxed max-w-[560px] mb-12">
              Learning through realistic scenarios, simulations, and workplace practice helps your teams connect knowledge to their roles and apply skills with confidence.
            </p>
            <div className="inline-flex flex-col gap-4 bg-white/[0.06] border border-white/10 backdrop-blur-sm px-6 py-5">
              <p className="text-[15px] font-medium text-white/60">Built into every format</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {channels.map(ch => (
                  <li key={ch.id} className="inline-flex items-center gap-2 text-[16px] text-white">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: ch.color }} aria-hidden="true" />
                    {ch.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

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

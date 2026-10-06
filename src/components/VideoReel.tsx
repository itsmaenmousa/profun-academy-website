import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const channels = [
  {
    id: 'in-person',
    color: '#3985FD',
    label: 'In-Person',
    title: 'In-Person Learning.',
    desc: 'Facilitated by industry practitioners in your workplace or a dedicated venue. High-energy, hands-on sessions that build cohesion and embed learning fast.',
    tags: ['Workshops', 'Seminars', 'Site Visits', 'Role-Play Simulations', 'Train-the-Trainer'],
    image: './academy-in-person.jpg',
    pos: '55% 24%',
  },
  {
    id: 'virtual',
    color: '#FC026F',
    label: 'Virtual',
    title: 'Virtual Learning.',
    desc: 'Live instructor-led sessions over video. Structured, participatory and designed for distributed teams across time zones.',
    tags: ['Live Webinars', 'Virtual Cohorts', 'Remote Coaching', 'Group Breakouts'],
    image: './academy-virtual.jpg',
    pos: '50% 38%',
  },
  {
    id: 'elearning',
    color: '#00AFDC',
    label: 'eLearning',
    title: 'eLearning.',
    desc: 'Self-paced digital modules built for attractions professionals. Accessible on any device, trackable via LMS and available in multiple languages.',
    tags: ['SCORM Modules', 'Microlearning', 'Video-Based Learning', 'Knowledge Assessments'],
    image: './academy-elearning.jpg',
    pos: '50% 45%',
  },
  {
    id: 'experiential',
    color: '#8238EB',
    label: 'Experiential',
    title: 'Experiential Learning.',
    desc: 'Learning through doing. On-ride, on-floor and on-site immersive experiences that embed skills in real operational environments.',
    tags: ['On-Site Coaching', 'Live Scenario Training', 'Job Shadowing', 'Operational Immersion'],
    image: './academy-experiential.jpg',
    pos: '50% 40%',
  },
  {
    id: 'blended',
    color: '#15D2A4',
    label: 'Blended',
    title: 'Blended Learning.',
    desc: 'The most effective approach for lasting behavioural change, combining digital, live and on-the-job components into a single coherent program.',
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
          <p className="text-[12px] tracking-[0.18em] uppercase text-white/30 mb-4">How we deliver</p>
          <h2 className="font-serif text-[clamp(36px,3.4vw,56px)] text-white leading-tight tracking-[-0.01em] max-w-[620px]">
            Five learning channels.<br /> One seamless experience.
          </h2>
        </div>
        {/* Channel tabs */}
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Learning delivery channels">
          {channels.map((ch, i) => (
            <button
              key={ch.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => { setActive(i); setPaused(true) }}
              className={`relative overflow-hidden px-5 py-3 text-[14px] font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
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
            <p className="text-[12px] tracking-[0.18em] uppercase mb-4" style={{ color: c.color }}>
              {String(active + 1).padStart(2, '0')} / {String(channels.length).padStart(2, '0')}
            </p>
            <h3 className="font-serif text-[clamp(32px,3.6vw,60px)] text-white leading-[1.05] tracking-[-0.01em] mb-5 max-w-[640px]">
              {c.title}
            </h3>
            <p className="text-[17px] sm:text-[19px] text-white/70 font-light leading-relaxed max-w-[560px] mb-6">
              {c.desc}
            </p>
            <p className="text-[12px] tracking-[0.14em] uppercase text-white/45 max-w-[640px] leading-relaxed">
              {c.tags.join(' · ')}
            </p>
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
                'Cultural Institutions', '·', 'Brand Centres', '·', 'World Expos', '·',
                'Zoos & Aquariums', '·', 'Family Entertainment Centres', '·', 'Stadiums & Arenas', '·',
              ].map((item, j) => (
                <span
                  key={j}
                  className={`text-[14px] font-light ${item === '·' ? 'text-[#F85707]' : 'text-white/25'} tracking-wide`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

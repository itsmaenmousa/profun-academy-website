import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useDeepLink, scrollToId } from '../lib/deeplink'

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

  // Footer links: jump to Experiential, or open the matching delivery format tab
  useDeepLink(go => {
    if (go === 'experiential') return scrollToId('experiential-learning')
    const i = channels.findIndex(ch => ch.id === go)
    if (i < 0) return
    setActive(i); setPaused(true)
    scrollToId('delivery')
  })

  useEffect(() => {
    if (!inView || paused) return
    const t = setTimeout(() => setActive(a => (a + 1) % channels.length), SLIDE_MS)
    return () => clearTimeout(t)
  }, [active, inView, paused])

  const c = channels[active]

  return (
    <>
    {/* How We Deliver intro + Experiential Learning (light) */}
    <section id="experiential" className="relative bg-[#F9F8F6] pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-16 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        {/* How We Deliver */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16 border-b border-[#E2E0DB] pb-8 sm:pb-12">
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">How We Deliver</p>
            <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[760px]">
              Learning that fits your teams and operations.
            </h2>
          </div>
          <p className="max-w-[520px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            We shape learning around your workforce, operational priorities, and learning goals, combining experienced facilitators, practical activities, and content tailored to your cultural context.
          </p>
        </div>

        {/* Experiential Learning */}
        <div id="experiential-learning" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <p className="text-[20px] font-semibold text-[#8238EB] mb-4">Experiential Learning</p>
            <h3 className="font-serif text-balance text-[clamp(30px,3vw,46px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-6">
              Practical experience.<br className="hidden sm:block" /> Lasting application.
            </h3>
            <p className="text-[18px] sm:text-[19px] text-[#6B6B65] font-light leading-relaxed max-w-[560px] mb-8">
              Through realistic scenarios, simulations, and workplace practice, your teams connect knowledge to their roles and build the confidence to apply it.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {[
                ['Realistic scenarios', 'Explore situations your teams encounter on the job.', '#8238EB'],
                ['Simulations', 'Practice decisions and responses in a supported environment.', '#FC026F'],
                ['Workplace practice', 'Apply skills within day-to-day operations.', '#00AFDC'],
              ].map(([t, d, col]) => (
                <li key={t} className="exp-chip bg-white px-5 py-4 lg:flex lg:items-start lg:gap-5" style={{ ['--brand' as string]: col }}>
                  <span className="block w-6 h-1 mb-3 lg:mt-3 lg:mb-0 flex-shrink-0" style={{ background: col }} aria-hidden="true" />
                  <span className="block">
                    <span className="block text-[16px] font-medium text-[#000050]">{t}</span>
                    <span className="block mt-1 text-[15px] text-[#6B6B65] font-light leading-snug">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 w-2/3 h-2/3 bg-[#8238EB]" aria-hidden="true" />
            <div className="relative aspect-[16/11] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,80,0.45)]">
              <img
                src="./academy-experiential.jpg"
                alt="Participants in a hands-on experiential learning session"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="delivery"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#F9F8F6] relative overflow-hidden pb-16 sm:pb-20 lg:pb-24"
    >
      {/* Top label */}
      <div
        className={`max-w-[1920px] mx-auto px-6 sm:px-12 reveal ${inView ? 'visible' : ''}`}
      >
        <div className="border-t border-[#E2E0DB] pt-10 sm:pt-16 pb-8 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">Delivery Formats</p>
          <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[720px] mb-6">
            The right format for your team.
          </h2>
          <p className="text-[18px] sm:text-[19px] text-[#6B6B65] font-light leading-relaxed max-w-[640px]">
            We bring this practical approach into in-person, virtual, eLearning, and blended programs, choosing the right mix for your people and operations.
          </p>
        </div>
        {/* Channel tabs */}
        <div className="grid grid-cols-4 gap-1 w-full lg:flex lg:w-auto" role="tablist" aria-label="Learning delivery channels">
          {channels.map((ch, i) => (
            <button
              key={ch.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => { setActive(i); setPaused(true) }}
              className={`relative overflow-hidden px-1 sm:px-5 py-3 text-[13px] min-[380px]:text-[14px] sm:text-[15px] text-center whitespace-nowrap font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707] ${
                i === active ? 'text-white bg-[#000050]' : 'text-[#000050]/55 bg-white hover:text-[#000050]'
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
      </div>

      {/* Stage */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12">
      <div
        className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-[clamp(360px,calc(100svh-300px),620px)] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,80,0.45)]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/85 via-[#1C1C1A]/30 to-transparent lg:hidden" aria-hidden="true" />

        <div className="absolute inset-0 flex items-end lg:items-start">
          <div key={c.id} className="w-full px-6 sm:px-10 lg:px-12 pb-10 sm:pb-12 lg:pb-0 lg:pt-[clamp(28px,6vh,64px)] reel-copy">
            <h3 className="font-serif text-[clamp(28px,2.8vw,48px)] text-white leading-[1.06] tracking-[-0.01em] mb-4 max-w-[640px]">
              {c.title}
            </h3>
            <p className="text-[17px] sm:text-[19px] text-white/80 font-light leading-relaxed max-w-[540px] mb-5">
              {c.desc}
            </p>
            <p className="text-[15px] sm:text-[16px] text-white/60 max-w-[600px] leading-relaxed">
              {c.tags.join(' · ')}
            </p>
          </div>
        </div>
      </div>

      </div>

      {/* Bottom strip */}
      <div className="overflow-hidden py-6 mt-10 sm:mt-12 border-y border-[#E2E0DB]">
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
                  <span key={j} className="text-[18px] font-normal text-[#000050]/80">
                    {item}
                  </span>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

import { useEffect, useState } from 'react'

export default function AcademyHero() {
  const [ready, setReady] = useState(false)
  useEffect(() => { setTimeout(() => setReady(true), 150) }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#111110] flex flex-col justify-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./academy-hero.jpg"
          alt=""
          aria-hidden="true"
          className={`w-full h-full object-cover transition-opacity duration-1500 ${ready ? 'opacity-30' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/60 to-[#111110]/20" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10 pb-24 pt-32">
        {/* Chapter marker */}
        <div
          className="flex items-center gap-4 mb-16 transition-all duration-700"
          style={{ opacity: ready ? 1 : 0, transitionDelay: '0.2s' }}
        >
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">01</span>
          <span className="w-8 h-px bg-[#F85707]" />
          <span className="text-white/40 text-[12px] font-medium tracking-[0.15em] uppercase">Academy</span>
        </div>

        {/* Grid: headline + meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-serif text-[clamp(44px,6vw,88px)] text-white leading-[1.06] tracking-[-0.015em] mb-8 transition-all duration-1000"
              style={{ opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '0.35s' }}
            >
              Training the people behind the world's greatest experiences.
            </h1>

            <p
              className="text-[19px] text-white/55 font-light leading-relaxed max-w-[580px] mb-12 transition-all duration-700"
              style={{ opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(16px)', transitionDelay: '0.6s' }}
            >
              Industry-specific learning, capability development and accredited programs for the attractions industry, from frontline staff to senior leadership.
            </p>

            <div
              className="flex flex-wrap items-center gap-5 transition-all duration-700"
              style={{ opacity: ready ? 1 : 0, transitionDelay: '0.8s' }}
            >
              <a
                href="#capability"
                className="inline-flex items-center gap-3 text-[14px] font-medium text-white border border-white/25 px-7 py-3.5 hover:border-white/60 hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111110]"
              >
                Explore capabilities
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-[14px] font-medium text-white bg-[#F85707] px-7 py-3.5 hover:bg-[#D94A05] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F85707] focus:ring-offset-2 focus:ring-offset-[#111110]"
              >
                Discuss your learning strategy
              </a>
            </div>
          </div>

          {/* Right: meta block */}
          <div
            className="lg:col-span-4 lg:col-start-10 self-end transition-all duration-700"
            style={{ opacity: ready ? 1 : 0, transitionDelay: '1s' }}
          >
            <div className="border-l border-white/15 pl-8 space-y-5">
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-white/30 mb-1.5">Division of</p>
                <p className="text-[16px] text-white/75 font-light">ProFun</p>
              </div>
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-white/30 mb-1.5">Est.</p>
                <p className="text-[16px] text-white/75 font-light">1980</p>
              </div>
              <div>
                <p className="text-[12px] tracking-[0.15em] uppercase text-white/30 mb-1.5">Specialisation</p>
                <p className="text-[16px] text-white/75 font-light">Attraction operations training</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-10 flex items-center gap-3 transition-all duration-700"
        style={{ opacity: ready ? 0.4 : 0, transitionDelay: '1.2s' }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-white h-[40%]" style={{ animation: 'scrollLine 2.2s ease-in-out infinite' }} />
        </div>
        <span className="text-[12px] tracking-[0.2em] uppercase text-white/50 font-light">Scroll</span>
      </div>
    </section>
  )
}

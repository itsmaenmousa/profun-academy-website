import { useEffect, useState } from 'react'

const LINES = [
  'Training the people',
  'behind the world\'s',
  'greatest experiences.',
]

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end overflow-hidden bg-[#1C1C1A]">
      {/* Video background with fallback image */}
      <div className="absolute inset-0">
        <video
          className={`w-full h-full object-cover ken-burns ${ready ? 'opacity-60' : 'opacity-0'} transition-opacity duration-1000`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="./hero-academy-poster.jpg"
        >
          <source src="./hero-academy.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/85 via-[#1C1C1A]/30 to-[#1C1C1A]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12 pb-20 sm:pb-24 w-full">
        <div className="max-w-[900px]">
          {/* Accent line + eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex gap-1" aria-hidden="true">
              {['#3985FD', '#15D2A4', '#99CA32', '#FC026F', '#8238EB', '#F85707'].map((c, i) => (
                <span
                  key={c}
                  className="h-[3px] transition-all duration-500"
                  style={{ background: c, width: ready ? 14 : 0, transitionDelay: `${0.3 + i * 0.06}s` }}
                />
              ))}
            </div>
            <span
              className="text-[12px] tracking-[0.18em] uppercase text-white/60 transition-opacity duration-700"
              style={{ opacity: ready ? 1 : 0, transitionDelay: '0.35s' }}
            >
              The ProFun Academy · Attractions Industry Training
            </span>
          </div>

          {/* Staggered headline */}
          <h1 className="font-serif text-[clamp(40px,6vw,96px)] leading-[1.04] text-white mb-8 tracking-[-0.01em]">
            {LINES.map((line, i) => (
              <span key={i} className="hero-line block">
                <span
                  className={`hero-line-inner ${ready ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.4 + i * 0.14}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="text-[20px] leading-relaxed text-white/65 mb-12 max-w-[520px] font-light transition-all duration-700"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '0.9s',
            }}
          >
            Tailored learning and capability development for the attractions industry.
          </p>

          <div
            className="flex items-center gap-6 flex-wrap transition-all duration-700"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '1.05s',
            }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[16px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#FC026F] hover:gap-5"
            >
              Explore our services
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[16px] font-medium text-white border border-white/30 px-8 py-4 transition-all duration-300 hover:border-white/70 hover:bg-white/8"
            >
              Start a conversation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-24 right-12 flex flex-col items-center gap-3 transition-all duration-700"
          style={{ opacity: ready ? 1 : 0, transitionDelay: '1.4s' }}
        >
          <span
            className="text-[12px] tracking-[0.2em] uppercase text-white/40 font-light"
            style={{ writingMode: 'vertical-lr' }}
          >
            Scroll
          </span>
          <div className="w-px h-16 bg-white/15 relative overflow-hidden mt-2">
            <div
              className="absolute top-0 left-0 w-full bg-white/60"
              style={{ height: '40%', animation: 'scrollLine 2.2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

const LINES = [
  'Training the people',
  'behind the world\'s',
  'greatest experiences.',
]

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [fade, setFade] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200)
    return () => clearTimeout(t)
  }, [])

  // Logo fades away as soon as the visitor starts scrolling
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setFade(Math.min(1, window.scrollY / 160)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll) }
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
          poster="./hero-academy-v2-poster.jpg"
        >
          <source src="./hero-academy-v2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/85 via-[#1C1C1A]/30 to-[#1C1C1A]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12 pb-20 sm:pb-24 w-full">
        <div className="max-w-[1400px]">
          {/* Mobile: logo above the headline */}
          <div
            className="sm:hidden mb-6 transition-opacity duration-700"
            style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '0.35s' : '0s' }}
          >
            <img src="./academy-logo-white.svg" alt="The ProFun Academy" className="h-12 w-auto" />
          </div>

          {/* Headline + logo lockup: the logo matches the three lines in height */}
          <div className="flex items-stretch gap-8 lg:gap-12 mb-8">
            <h1 className="font-serif text-[clamp(28px,4.2vw,62px)] leading-[1.06] text-white tracking-[-0.01em]">
              {LINES.map((line, i) => (
                <span key={i} className="hero-line block whitespace-nowrap">
                  <span
                    className={`hero-line-inner ${ready ? 'visible' : ''}`}
                    style={{ transitionDelay: `${0.4 + i * 0.14}s` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <div
              className="hidden sm:flex items-stretch gap-8 lg:gap-12 flex-shrink-0 py-[0.4%] transition-opacity duration-700"
              style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '0.7s' : '0s' }}
            >
              <span className="block w-px flex-none self-stretch bg-white/35" aria-hidden="true" />
              <img src="./academy-logo-white.svg" alt="The ProFun Academy" className="h-full w-auto max-w-none self-center object-contain" style={{ height: '100%' }} />
            </div>
          </div>

          <p
            className="text-[18px] sm:text-[clamp(17px,1.6vw,22px)] leading-relaxed text-white/70 mb-12 max-w-[520px] md:max-w-none md:whitespace-nowrap font-light transition-all duration-700"
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
              className="inline-flex items-center gap-3 text-[17px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#FC026F] hover:gap-5"
            >
              Explore our services
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[17px] font-medium text-white border border-white/30 px-8 py-4 transition-all duration-300 hover:border-white/70 hover:bg-white/8"
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

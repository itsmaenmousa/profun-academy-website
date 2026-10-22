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
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center overflow-hidden bg-[#1C1C1A]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-[#1C1C1A]/30 to-[#1C1C1A]/40" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 52%, rgba(28,28,26,0.55), transparent 70%)' }} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12 pt-20 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Mobile: logo above the headline */}
          <div
            className="sm:hidden mb-7 transition-opacity duration-700"
            style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '0.35s' : '0s' }}
          >
            <img src="./academy-logo-white.svg" alt="The ProFun Academy" className="h-14 w-auto mx-auto" />
          </div>

          {/* Headline + logo lockup: the logo matches the three lines in height */}
          <div className="inline-flex items-stretch gap-8 lg:gap-12 mb-7 sm:mb-9">
            <h1 className="font-serif text-[clamp(30px,4.2vw,62px)] leading-[1.06] text-white tracking-[-0.01em] text-center sm:text-left">
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
              className="hidden sm:flex items-stretch gap-8 lg:gap-12 flex-shrink-0 transition-opacity duration-700"
              style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '0.7s' : '0s' }}
            >
              <span className="block w-px flex-none self-stretch bg-white/35" aria-hidden="true" />
              <img src="./academy-logo-white.svg" alt="The ProFun Academy" width={807} height={422} className="block self-center text-[clamp(30px,4.2vw,62px)] h-[3.1em] w-auto max-w-none" />
            </div>
          </div>

          <p
            className="text-[17px] sm:text-[clamp(17px,1.5vw,21px)] leading-relaxed text-white/85 mb-9 sm:mb-10 max-w-[340px] sm:max-w-[560px] lg:max-w-none lg:whitespace-nowrap font-light transition-all duration-700 mx-auto"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '0.9s',
            }}
          >
            Tailored learning and capability development for the attractions industry.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto transition-all duration-700"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '1.05s',
            }}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 w-full max-w-[300px] sm:w-auto text-[17px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#FC026F] hover:gap-5"
            >
              Explore our services
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 w-full max-w-[300px] sm:w-auto text-[17px] font-medium text-white border border-white/40 px-8 py-4 transition-all duration-300 hover:border-white/70 hover:bg-white/8"
            >
              Start a conversation
            </a>
          </div>
        </div>

      </div>

      {/* Scroll cue, pinned to the bottom of the screen */}
      <a
        href="#projects"
        onClick={e => { e.preventDefault(); window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' }) }}
        aria-label="Scroll down"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 [@media(max-height:700px)]:hidden flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-700"
        style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '1.4s' : '0s' }}
      >
        <span className="text-[12px] tracking-[0.2em] font-medium">SCROLL</span>
        <span className="w-px h-10 sm:h-12 bg-white/20 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full bg-white/80" style={{ height: '40%', animation: 'scrollLine 2.2s ease-in-out infinite' }} />
        </span>
      </a>
    </section>
  )
}

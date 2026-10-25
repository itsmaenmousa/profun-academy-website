import { useEffect, useRef, useState } from 'react'

const LINES = [
  'Training the people',
  'behind the world\'s',
  'greatest experiences.',
]

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [fade, setFade] = useState(0)
  // Only show the scroll cue when there is clear room under the buttons
  const ctaRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const cueRef = useRef<HTMLAnchorElement>(null)
  const [cueRoom, setCueRoom] = useState(false)
  useEffect(() => {
    const check = () => {
      const cta = ctaRef.current?.getBoundingClientRect()
      const cue = cueRef.current?.getBoundingClientRect()
      if (!cta || !cue) return
      setCueRoom(cue.top - cta.bottom >= 56)
    }
    check()
    // Re-check once the buttons have finished sliding in
    const t = setTimeout(check, 2600)
    const t2 = setTimeout(check, 4000)
    document.fonts?.ready.then(check).catch(() => {})
    const ro = new ResizeObserver(check)
    if (ctaRef.current?.parentElement) ro.observe(ctaRef.current.parentElement)
    window.addEventListener('resize', check)
    return () => { clearTimeout(t); clearTimeout(t2); ro.disconnect(); window.removeEventListener('resize', check) }
  }, [])
  // Lighter video and poster for phones and small tablets
  const [small] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200)
    return () => clearTimeout(t)
  }, [])

  // Logo fades away as soon as the visitor starts scrolling
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setFade(Math.round(Math.min(1, window.scrollY / 160) * 20) / 20))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full h-[100svh] min-h-[640px] flex items-center overflow-hidden bg-[#1C1C1A]">
      {/* Video background with fallback image */}
      <div className="absolute inset-0">
        <video
          className={`w-full h-full object-cover ken-burns ${ready ? 'opacity-[0.71]' : 'opacity-0'} transition-opacity duration-1000`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={small ? './hero-academy-v2-poster-720.jpg' : './hero-academy-v2-poster.jpg'}
        >
          <source src={small ? './hero-academy-v2-720.mp4' : './hero-academy-v2.mp4'} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/51 via-[#1C1C1A]/21 to-[#1C1C1A]/29" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 52%, rgba(28,28,26,0.40), transparent 70%)' }} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12 pt-[72px] pb-[clamp(0px,calc(100svh_-_660px),16svh)] lg:landscape:pt-20 lg:landscape:pb-0 w-full">
        <div className="flex justify-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Mobile: logo above the headline */}
          <div
            className="lg:hidden mb-7 sm:mb-9 transition-opacity duration-700"
            style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '0.35s' : '0s' }}
          >
            <img src="./academy-logo-white.svg" alt="The ProFun Academy" className="h-14 sm:h-[72px] w-auto mx-auto" />
          </div>

          {/* Headline + logo lockup: the logo matches the three lines in height */}
          <div className="inline-flex items-stretch gap-8 lg:gap-12 mb-7 sm:mb-8 lg:mb-9">
            <h1 className="font-serif text-[clamp(30px,5.6vw,52px)] lg:text-[clamp(30px,4.2vw,62px)] leading-[1.06] text-white tracking-[-0.01em] text-center lg:text-left">
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
              className="hidden lg:flex items-stretch gap-8 lg:gap-12 flex-shrink-0 transition-opacity duration-700"
              style={{ opacity: ready ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '0.7s' : '0s' }}
            >
              <span className="block w-px flex-none self-stretch bg-white/35" aria-hidden="true" />
              <img src="./academy-logo-white.svg" alt="The ProFun Academy" width={807} height={422} className="block self-center text-[clamp(30px,4.2vw,62px)] h-[3.1em] w-auto max-w-none" />
            </div>
          </div>

          <p
            className="text-[17px] sm:text-[clamp(17px,1.5vw,21px)] leading-relaxed text-white/85 mb-9 sm:mb-10 max-w-[340px] sm:max-w-[520px] lg:max-w-none lg:whitespace-nowrap font-light transition-all duration-700 mx-auto lg:mx-0 text-balance"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '0.9s',
            }}
          >
            Tailored learning and capability development for the attractions industry.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-700"
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
      </div>

      {/* Scroll cue, pinned to the bottom of the screen */}
      <a
        ref={cueRef}
        href="#projects"
        onClick={e => { e.preventDefault(); window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' }) }}
        aria-label="Scroll down"
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-700 ${cueRoom ? '' : 'invisible'}`}
        style={{ opacity: ready && cueRoom ? 1 - fade : 0, transitionDelay: ready && fade === 0 ? '1.4s' : '0s' }}
      >
        <span className="hidden sm:block text-[12px] tracking-[0.2em] font-medium">SCROLL</span>
        <span className="w-px h-9 sm:h-12 bg-white/20 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full bg-white/80" style={{ height: '40%', animation: 'scrollLine 2.2s ease-in-out infinite' }} />
        </span>
      </a>
    </section>
  )
}

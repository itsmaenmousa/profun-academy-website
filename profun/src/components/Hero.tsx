import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { pf } from '../data'

// Landmark ProFun projects, cross-fading behind the headline
const SLIDES = [
  { src: './hero-ferrari.jpg', small: './hero-ferrari-720.jpg', name: 'Ferrari World', place: 'Yas Island, Abu Dhabi' },
  { src: pf('2024/06/The-Edge-scaled.jpg'), name: 'Edge', place: 'New York, USA' },
  { src: pf('2023/12/20210630-DohaQuest2.jpg'), name: 'QUEST', place: 'Doha, Qatar' },
  { src: pf('2024/06/AMNH-Rose-Center-scaled.jpg'), name: 'American Museum of Natural History', place: 'New York, USA' },
  { src: pf('2024/06/Makkah-Royal-Clock-Tower-scaled.jpg'), name: 'Makkah Royal Clock Tower', place: 'Makkah, Saudi Arabia' },
  { src: pf('2024/06/Mahanakhon-Skywalk-1-scaled.jpg'), name: 'King Power Mahanakhon Skywalk', place: 'Bangkok, Thailand' },
]
const SLIDE_MS = 6500

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [i, setI] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({ 0: true })
  const [small] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches)

  useEffect(() => { const t = setTimeout(() => setReady(true), 200); return () => clearTimeout(t) }, [])

  // Preload the next slide, then advance once it is ready
  useEffect(() => {
    const next = (i + 1) % SLIDES.length
    if (!loaded[next]) {
      const img = new Image()
      img.onload = () => setLoaded(l => ({ ...l, [next]: true }))
      img.src = SLIDES[next].src
    }
    const t = setTimeout(() => setI(c => (loaded[(c + 1) % SLIDES.length] ? (c + 1) % SLIDES.length : c)), SLIDE_MS)
    return () => clearTimeout(t)
  }, [i, loaded])

  const s = SLIDES[i]

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center overflow-hidden bg-[#1C1C1A]">
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((sl, k) => (
          (loaded[k] || k === 0) && (
            <img
              key={k}
              src={k === 0 && small ? sl.small : sl.src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ${k === i ? 'opacity-[0.85] hero-zoom' : 'opacity-0'}`}
            />
          )
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-[#1C1C1A]/25 to-[#1C1C1A]/35" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 55%, rgba(28,28,26,0.4), transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 sm:px-12 pt-[72px] lg:pt-20 w-full">
        <div className="max-w-[1180px] text-center lg:text-left mx-auto lg:mx-0">
          <p
            className="text-[12px] sm:text-[15px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/75 font-medium mb-5 transition-all duration-700"
            style={{ opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(12px)', transitionDelay: '0.3s' }}
          >
            Attraction operations, since 1980
          </p>
          <h1 className="[text-shadow:0_2px_18px_rgba(0,0,0,0.35)] font-serif text-[clamp(34px,5.2vw,74px)] leading-[1.05] text-white tracking-[-0.015em] mb-7 text-balance">
            {['The world’s trusted partner', 'in attraction operations.'].map((line, k) => (
              <span key={k} className="hero-line block lg:whitespace-nowrap">
                <span className={`hero-line-inner ${ready ? 'visible' : ''}`} style={{ transitionDelay: `${0.45 + k * 0.14}s` }}>{line}</span>
              </span>
            ))}
          </h1>
          <p
            className="[text-shadow:0_1px_12px_rgba(0,0,0,0.4)] text-[17px] sm:text-[clamp(17px,1.5vw,21px)] leading-relaxed text-white/90 font-light max-w-[640px] mx-auto lg:mx-0 mb-9 sm:mb-10 transition-all duration-700 text-balance"
            style={{ opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(16px)', transitionDelay: '0.9s' }}
          >
            From planning to management, we ensure attractions perform: commercially, operationally, globally.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-700"
            style={{ opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(16px)', transitionDelay: '1.05s' }}
          >
            <Link to="/work" className="inline-flex items-center justify-center gap-3 w-full max-w-[300px] sm:w-auto text-[17px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#FC026F] hover:gap-5">
              Explore our work
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 w-full max-w-[300px] sm:w-auto text-[17px] font-medium text-white border border-white/40 px-8 py-4 transition-all duration-300 hover:border-white/70 hover:bg-white/10">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Current project + slide progress */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 sm:left-12 sm:right-12 z-10 max-w-[1920px] mx-auto flex items-end justify-center lg:justify-between gap-6">
        <div key={i} className="hidden lg:block hero-caption text-white">
          <p className="text-[16px] font-medium">{s.name}</p>
          <p className="text-[14px] text-white/65 font-light">{s.place}</p>
        </div>
        <div className="flex items-center gap-2" role="tablist" aria-label="Featured projects">
          {SLIDES.map((sl, k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === i}
              aria-label={sl.name}
              onClick={() => { if (loaded[k]) setI(k); else { const im = new Image(); im.onload = () => { setLoaded(l => ({ ...l, [k]: true })); setI(k) }; im.src = sl.src } }}
              className="py-3 group"
            >
              <span className={`block h-[3px] rounded-full transition-all duration-500 ${k === i ? 'w-10 bg-white' : 'w-5 bg-white/35 group-hover:bg-white/70'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

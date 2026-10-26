import type React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { SECTORS, CLIENTS, pf, ACADEMY_URL } from '../data'
import { SectionHead, TextLink, Arrow } from './ui'

/* ── Intro ─────────────────────────────────────────────────────── */
export function Intro() {
  const { ref, inView } = useInView()
  return (
    <section className="bg-[#F2F1EF] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className={`lg:col-span-6 reveal ${inView ? 'visible' : ''}`}>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">Who We Are</p>
          <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] mb-8">
            Concepts inspire. Design excites. Success is decided on the ground.
          </h2>
          <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-6">
            For more than 45 years, ProFun has been the world&rsquo;s trusted partner in transforming bold ideas into operationally sound, financially sustainable attractions.
          </p>
          <p className="text-[20px] text-[#6B6B65] leading-relaxed font-light mb-10">
            From theme parks to museums, brand centers to world expos, we ensure that every project is commercially viable, operationally resilient and built to last.
          </p>
          <TextLink to="/about">More about ProFun</TextLink>
        </div>
        <div className={`lg:col-span-6 reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="aspect-[3/4] overflow-hidden bg-[#1C1C1A]">
              <img src={pf('2024/04/World-of-Coca-Cola.jpg')} alt="World of Coca-Cola, Atlanta" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-[#1C1C1A] mt-10 sm:mt-16">
              <img src={pf('2024/04/Expo-2020-Dubai-1.jpg')} alt="Expo 2020, Dubai" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Sectors ───────────────────────────────────────────────────── */
export function SectorsGrid() {
  const { ref, inView } = useInView()
  return (
    <section id="sectors" className="bg-[#F9F8F6] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto">
        <SectionHead eyebrow="Our Sectors" title="Every kind of attraction, one operating discipline." side="Theme parks, museums, brand centers and world expos each face different pressures. We bring the same rigor to all of them." />
        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {SECTORS.map((s, i) => (
            <Link
              key={s.id}
              to={`/sectors?go=${s.id}`}
              className={`group relative block aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#1C1C1A] reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}
            >
              <img src={s.cover} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.06]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <span className="absolute top-0 left-0 right-0 h-1" style={{ background: s.color }} aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[14px] font-medium text-white/70 mb-2">{s.projects.length} featured projects</p>
                <h3 className="font-serif text-[clamp(24px,2vw,30px)] text-white leading-tight mb-3">{s.name}</h3>
                <p className="text-[16px] text-white/80 font-light leading-snug mb-5">{s.lead}</p>
                <span className="inline-flex items-center gap-3 text-[15px] font-medium text-white group-hover:gap-5 transition-all duration-300">
                  Explore <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── ProFun Academy band (highlighted) ─────────────────────────── */
export function AcademyBand() {
  const { ref, inView } = useInView()
  return (
    <section className="bg-[#F9F8F6] px-6 sm:px-12 py-16 sm:py-20 lg:py-24">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto reveal ${inView ? 'visible' : ''}`}>
        <div className="relative">
          <span className="absolute top-0 left-0 right-0 h-1 flex z-10" aria-hidden="true">
            {['#3985FD', '#15D2A4', '#99CA32', '#FFCA03', '#FC026F', '#8238EB', '#F85707'].map(c => <span key={c} className="flex-1" style={{ background: c }} />)}
          </span>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-[#111110] overflow-hidden">
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] order-1 lg:order-2">
              <img src="./academy-hero.jpg" alt="ProFun Academy participants in a training session" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/20 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110] to-transparent lg:hidden" />
            </div>
            <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 bg-white text-[#000050] text-[13px] font-medium px-3 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F85707] academy-pulse" aria-hidden="true" />
                Our training arm
              </span>
              <img src="./profun-academy-white.svg" alt="ProFun Academy" className="h-16 sm:h-20 w-auto mb-8" />
              <h2 className="font-serif text-balance text-[clamp(30px,3vw,46px)] text-white leading-[1.12] tracking-[-0.01em] mb-6">
                Training the people behind the world&rsquo;s greatest experiences.
              </h2>
              <p className="text-[18px] sm:text-[19px] text-white/75 leading-relaxed font-light mb-10 max-w-[560px]">
                Award-winning training for over 30 years, designed by operators, for operators. Tailored and accredited programs for frontline teams through to senior leaders, delivered across the region.
              </p>
              <a href={ACADEMY_URL} className="inline-flex items-center justify-center gap-3 text-[17px] font-medium text-white bg-[#F85707] px-8 py-4 transition-all duration-300 hover:bg-[#D94A05] hover:gap-5">
                Visit ProFun Academy <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Clients marquee ───────────────────────────────────────────── */
export function ClientsStrip() {
  const { ref, inView } = useInView()
  // A short, well-known selection; the full list lives on Our Work
  const pick = ['Universal', 'LEGO', 'Warner Bros.', 'Paramount', 'HBO', 'Cartoon Network', 'NBA', 'Ford', 'Metro Goldwyn Mayer', 'Everland Resort', 'Exploratorium', 'Doha Quest', 'World of Coca-Cola', 'American Museum of Natural History', 'Georgia Aquarium', 'Hershey’s Chocolate World']
  const logos = pick.map(n => CLIENTS.find(c => c[0] === n)).filter(Boolean) as typeof CLIENTS
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-y border-[#E2E0DB]">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14 reveal ${inView ? 'visible' : ''}`}>
        <div>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">Clients & Partners</p>
          <h2 className="font-serif text-balance text-[clamp(32px,3.2vw,48px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[760px]">
            500+ projects. 50 countries. One trusted partner.
          </h2>
        </div>
        <TextLink to="/work">See all clients</TextLink>
      </div>
      <div className="marquee relative" aria-label="Selected clients">
        <div className="marquee-track flex items-center gap-4 sm:gap-6 w-max">
          {[...logos, ...logos].map(([name, , , logo], i) => (
            <div key={i} className="w-[150px] sm:w-[180px] h-[100px] sm:h-[120px] flex items-center justify-center bg-white flex-none" aria-hidden={i >= logos.length}>
              <img src={pf(logo)} alt={i < logos.length ? name : ''} loading="lazy" decoding="async" className="max-w-[78%] max-h-[70%] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

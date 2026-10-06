import type React from 'react'
import { useInView } from '../hooks/useInView'

export default function Testimonial() {
  const { ref, inView } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#000050] py-28 sm:py-32 px-6 sm:px-12 overflow-hidden"
    >
      {/* Soft brand glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#3985FD]/20 blur-[120px] quote-glow" aria-hidden="true" />
      <div className="absolute -bottom-48 -right-40 w-[560px] h-[560px] rounded-full bg-[#FC026F]/15 blur-[140px] quote-glow quote-glow-2" aria-hidden="true" />

      <div className="relative max-w-[1920px] mx-auto">
        <div className={`max-w-[1180px] mx-auto text-center reveal ${inView ? 'visible' : ''}`}>
          <div className="w-px h-16 mx-auto mb-12 bg-gradient-to-b from-transparent to-[#15D2A4]" />
          <svg className="mx-auto mb-8" width="44" height="34" viewBox="0 0 44 34" fill="none" aria-hidden="true">
            <path d="M0 34V20.4C0 8.9 6.1 2.1 18.2 0l1.7 4.3C13.4 6.2 10.3 9.8 10 15.2h8.3V34H0Zm24.1 0V20.4C24.1 8.9 30.2 2.1 42.3 0L44 4.3c-6.5 1.9-9.6 5.5-9.9 10.9h8.3V34H24.1Z" fill="#FFCA03" />
          </svg>
          <blockquote className="font-serif text-[clamp(22px,2.6vw,42px)] text-white leading-[1.32] mb-12 tracking-[-0.005em] text-balance">
            Every programme is built from real industry experience and delivered by people who have worked at the highest levels of the attractions world.
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[17px] font-medium text-white">The ProFun Academy</p>
            <p className="text-[14px] text-white/55 font-light">A division of ProFun, operating since 1980</p>
          </div>
          <div className="w-px h-16 mx-auto mt-12 bg-gradient-to-b from-[#FC026F] to-transparent" />
        </div>
      </div>
    </section>
  )
}

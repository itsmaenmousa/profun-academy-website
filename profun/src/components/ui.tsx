import type React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

/** Section header used across the site: eyebrow, headline, optional side copy. */
export function SectionHead({ eyebrow, title, side, children, className = '' }: { eyebrow: string; title: React.ReactNode; side?: React.ReactNode; children?: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''} ${className}`}
    >
      <div>
        <p className="text-[20px] font-semibold text-[#F85707] mb-4">{eyebrow}</p>
        <h2 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em] max-w-[860px]">{title}</h2>
      </div>
      {side && <div className="max-w-[480px] text-[19px] text-[#6B6B65] leading-relaxed font-light">{side}</div>}
      {children}
    </div>
  )
}

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true" className={className}>
      <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center gap-3 text-[17px] font-medium text-[#1C1C1A] hover:text-[#F85707] hover:gap-5 transition-all duration-300">
      {children}
      <Arrow />
    </Link>
  )
}

export const BRAND_GRADIENT = 'conic-gradient(from 0deg, #3985FD, #15D2A4, #99CA32, #FFCA03, #F85707, #FC026F, #8238EB, #3985FD)'

/** Page intro band for inner pages. */
export function PageIntro({ eyebrow, title, lead, image }: { eyebrow: string; title: React.ReactNode; lead: React.ReactNode; image?: string }) {
  const { ref, inView } = useInView()
  return (
    <section className="bg-[#F2F1EF] px-6 sm:px-12 pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-16">
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end reveal ${inView ? 'visible' : ''}`}>
        <div className={image ? 'lg:col-span-7' : 'lg:col-span-9'}>
          <p className="text-[20px] font-semibold text-[#F85707] mb-4">{eyebrow}</p>
          <h1 className="font-serif text-balance text-[clamp(40px,4.8vw,72px)] text-[#000050] leading-[1.06] tracking-[-0.015em] mb-6">{title}</h1>
          <p className="text-[19px] sm:text-[20px] text-[#6B6B65] leading-relaxed font-light max-w-[760px]">{lead}</p>
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-[#1C1C1A]">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

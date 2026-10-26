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


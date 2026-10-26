import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { numeric: 45, suffix: '+', label: 'Years in the industry, since 1980', color: '#3985FD', ink: '#2F6FE0' },
  { numeric: 500, suffix: '+', label: 'Clients & projects on every continent', color: '#15D2A4', ink: '#0E9F7C' },
  { numeric: 50, suffix: '', label: 'Countries, a record unmatched in the industry', color: '#FFCA03', ink: '#C99A00' },
  { numeric: 5, suffix: '', label: 'Services, from planning to daily management', color: '#FC026F', ink: '#E0025F' },
]

function StatItem({ s, active, i }: { s: typeof stats[0]; active: boolean; i: number }) {
  const [replay, setReplay] = useState(0)
  const [hover, setHover] = useState(false)
  const count = useCounter(s.numeric, replay ? 1000 : 1800, active, replay)
  return (
    <div
      onMouseEnter={() => { setHover(true); setReplay(r => r + 1) }}
      onMouseLeave={() => setHover(false)}
      className={`bg-[#F2F1EF] ${i % 2 === 0 ? 'pl-0' : 'pl-5 sm:pl-8'} ${i === 0 ? 'lg:pl-0' : 'lg:pl-10'} pr-4 sm:pr-8 py-6 sm:py-7 flex flex-col gap-3 cursor-default`}
    >
      <span className="relative block h-1 mb-2 w-full" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-8 rounded-full" style={{ background: s.color }} />
        <span
          className="absolute inset-y-0 left-0 right-0 rounded-full origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ background: s.color, transform: `scaleX(${hover ? 1 : 0})`, opacity: 0.9 }}
        />
      </span>
      <div
        className="font-serif font-medium text-[clamp(38px,3.4vw,54px)] leading-none tracking-[-0.02em] tabular-nums transition-colors duration-500"
        style={{ color: hover ? s.ink : '#000050' }}
      >
        {count}{s.suffix}
      </div>
      <div className="text-[16px] sm:text-[17px] leading-snug text-[#3F3F3A] font-normal max-w-[260px] text-balance">
        {s.label}
      </div>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#F2F1EF] pt-16 sm:pt-20 lg:pt-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto border-y border-[#E2E0DB]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E0DB]">
          {stats.map((s, i) => (
            <StatItem key={s.label} s={s} i={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

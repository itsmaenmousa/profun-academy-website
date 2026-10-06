import type React from 'react'
import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'

const metrics = [
  { value: 45, suffix: '+', label: 'Years in business', sub: 'Founded in 1980' },
  { value: 500, suffix: '+', label: 'Clients & projects', sub: 'Some of the world\'s most iconic destinations' },
  { value: 50, suffix: '+', label: 'Countries served', sub: 'Operating across every continent' },
  { value: 10000, suffix: '+', label: 'Trainees', sub: 'Across all programme levels', format: (n: number) => n >= 1000 ? `${(n/1000).toFixed(0)}K` : String(n) },
]

function Metric({ m, active }: { m: typeof metrics[0]; active: boolean }) {
  const count = useCounter(m.value, 1600, active)
  const display = m.format ? m.format(count) : `${count}`
  return (
    <div className="py-10 px-8 border-r border-[#DDDBD6] last:border-r-0 flex flex-col justify-between min-h-[160px]">
      <div>
        <span className="font-serif text-[clamp(48px,4.5vw,72px)] text-[#1C1C1A] leading-none tabular-nums">
          {display}{m.suffix}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-[16px] font-medium text-[#1C1C1A] mb-0.5">{m.label}</p>
        <p className="text-[14px] text-[#6B6B65] font-light">{m.sub}</p>
      </div>
    </div>
  )
}

export default function AcademyMetrics() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      aria-label="Key metrics"
      className="bg-[#1C1C1A] py-0 px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Chapter strip */}
        <div className="flex items-center gap-4 py-8 border-b border-white/10">
          <span className="text-[#F85707] text-[12px] font-medium tracking-[0.15em] uppercase">03</span>
          <span className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-[12px] font-medium tracking-[0.15em] uppercase">Proven Scale</span>
        </div>

        {/* Metrics integrated bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#DDDBD6]/10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="py-12 px-8 flex flex-col justify-between"
            >
              <span className="font-serif text-[clamp(44px,4.4vw,68px)] text-white leading-none tabular-nums">
                <CounterDisplay m={m} active={inView} />
              </span>
              <div className="mt-6">
                <p className="text-[16px] font-medium text-white/80 mb-1">{m.label}</p>
                <p className="text-[14px] text-white/35 font-light">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterDisplay({ m, active }: { m: typeof metrics[0]; active: boolean }) {
  const count = useCounter(m.value, 1600, active)
  const display = m.format ? m.format(count) : String(count)
  return <>{display}{m.suffix}</>
}

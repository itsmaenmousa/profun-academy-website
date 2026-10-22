import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { numeric: 45, suffix: '+', label: 'Years in the industry, since 1980', color: '#3985FD' },
  { numeric: 500, suffix: '+', label: 'Clients & projects across six continents', color: '#15D2A4' },
  { numeric: 50, suffix: '+', label: 'Countries served globally', color: '#FFCA03' },
  { numeric: 10, suffix: 'K+', label: 'Trainees developed, and growing', color: '#FC026F' },
]

function StatItem({ s, active, i }: { s: typeof stats[0]; active: boolean; i: number }) {
  const count = useCounter(s.numeric, 1800, active)
  return (
    <div className={`bg-[#F2F1EF] ${i % 2 === 0 ? 'pl-0' : 'pl-5 sm:pl-8'} ${i === 0 ? 'lg:pl-0' : 'lg:pl-10'} pr-4 sm:pr-8 py-6 sm:py-7 flex flex-col gap-3 cursor-default group`}>
      <span className="block w-8 h-1 rounded-full mb-2 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16" style={{ background: s.color }} aria-hidden="true" />
      <div className="font-serif font-medium text-[clamp(38px,3.4vw,54px)] leading-none tracking-[-0.02em] tabular-nums text-[#000050] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 motion-reduce:transform-none">
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
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#F2F1EF] pt-16 sm:pt-20 px-6 sm:px-12">
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

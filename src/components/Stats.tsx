import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { numeric: 45, suffix: '+', label: 'Years in the industry, since 1980', color: '#3985FD' },
  { numeric: 500, suffix: '+', label: 'Clients & projects across six continents', color: '#15D2A4' },
  { numeric: 50, suffix: '+', label: 'Countries served globally', color: '#FFCA03' },
  { numeric: 10, suffix: 'K+', label: 'Trainees developed, and growing', color: '#FC026F' },
]

function StatItem({ s, active }: { s: typeof stats[0]; active: boolean }) {
  const count = useCounter(s.numeric, 1800, active)
  return (
    <div className="bg-[#000050] px-4 sm:px-10 py-7 sm:py-8 flex flex-col gap-3 group hover:bg-[#00006a] transition-colors duration-300 cursor-default">
      <div className="font-serif font-medium text-[clamp(40px,3.8vw,60px)] leading-none tracking-[-0.02em] tabular-nums" style={{ color: s.color }}>
        {count}{s.suffix}
      </div>
      <div className="text-[16px] sm:text-[17px] leading-snug text-white/90 font-normal max-w-[260px] text-balance">
        {s.label}
      </div>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[#F2F1EF] pt-16 sm:pt-20 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto bg-[#000050] py-6 sm:py-8 px-0 sm:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {stats.map((s) => (
            <StatItem key={s.label} s={s} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

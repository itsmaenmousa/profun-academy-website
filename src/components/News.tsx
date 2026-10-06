import type React from 'react'
import { useInView } from '../hooks/useInView'

const articles = [
  {
    category: 'Accredited',
    date: '11 programs',
    title: 'Jeff Ellis & Associates',
    desc: 'ProFun Academy is an authorised provider of Jeff Ellis & Associates programs, the gold standard in aquatics safety and attractions operations certification. From the International Lifeguard Training Program and vanGUARD Aquatics Leadership to Water Slide Dispatch Operator and Attraction Operator.',
    image: './grand-hyatt-waterpark.jpg',
  },
  {
    category: 'TVTC Accredited',
    date: '3 programs',
    title: 'Nationally recognised qualifications for Saudi Arabia',
    desc: 'Visitor Attractions Operator, Entertainment Center Maintenance and Destination Management programs, designed for the Saudi attractions and tourism sector and aligned with Vision 2030 workforce development objectives.',
    image: './news-1.jpg',
  },
  {
    category: 'Training Topics',
    date: '13 topic areas',
    title: 'Thirteen topic areas. Hundreds of programs.',
    desc: 'Leadership & Management, Industry Experience, Safety & Security, Rides & Attractions, Frontline Colleagues, Human Resources, Guest Service Excellence, Sales & Marketing, Food & Beverage, Retail, Engineering & Technical Services, Information Technology and Housekeeping.',
    image: './news-2.jpg',
  },
]

export default function News() {
  const { ref, inView } = useInView()

  return (
    <section id="programs" className="bg-[#F2F1EF] py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className={`flex items-end justify-between mb-16 border-b border-[#E2E0DB] pb-12 reveal ${inView ? 'visible' : ''}`}>
          <div>
            <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6B65] mb-5">Accredited & certified</p>
            <h2 className="font-serif text-[clamp(40px,4vw,60px)] text-[#1C1C1A] leading-tight tracking-[-0.01em]">
              Industry-recognised certification, built in.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[14px] font-medium text-[#6B6B65] hover:text-[#F85707] hover:gap-4 transition-all duration-200"
          >
            Request a custom program
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Articles */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#E2E0DB]"
        >
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`bg-[#F2F1EF] group cursor-pointer hover:bg-[#F9F8F6] transition-colors duration-300 reveal reveal-delay-${i + 1} ${inView ? 'visible' : ''}`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E2E0DB]">
                <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: ['#00AFDC', '#15D2A4', '#8238EB'][i] }} aria-hidden="true" />
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[12px] tracking-[0.12em] uppercase font-medium" style={{ color: ['#00AFDC', '#15D2A4', '#8238EB'][i] }}>{a.category}</span>
                  <span className="text-[#E2E0DB]">·</span>
                  <span className="text-[14px] text-[#6B6B65] font-light">{a.date}</span>
                </div>
                <h3 className="font-serif text-[24px] text-[#1C1C1A] leading-tight mb-4 group-hover:text-[#000050] transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-[16px] text-[#6B6B65] leading-relaxed font-light mb-6">{a.desc}</p>
                <a href="#contact" className="flex items-center gap-2 text-[14px] font-medium text-[#1C1C1A] group-hover:text-[#F85707] group-hover:gap-4 transition-all duration-200">
                  Start a conversation
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

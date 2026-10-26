import { useMemo, useRef, useState } from 'react'
import type React from 'react'
import { Link } from 'react-router-dom'
import { useEqualize } from '../hooks/useEqualize'
import { useInView } from '../hooks/useInView'
import { NEWS_ALL, NEWS_TAG_COLOR, type NewsItem } from '../content'
import { pf } from '../data'

/*
  News, in the same layout as the ProFun Academy press page:
  a lead story, a ruled grid of cards, "Read more" opens the story in place.
  ProFun's own announcements are shown in full; industry stories open at the source.
*/

const EQ_KEYS = ['meta', 'title', 'desc']
const PAGE = 9
const TAGS = ['ProFun News', 'ProFun Academy', 'Project News', 'Client News', 'Industry', 'Insight'] as const
// Logos and wordmarks sit on white instead of being cropped like photos
const isLogo = (img: string) => /logo|PROFUN-COLORED|MPF-logo|2024\/05\/5\.png/i.test(img)

export default function News() {
  const { ref, inView } = useInView()
  const [open, setOpen] = useState<string | null>(null)
  const [tag, setTag] = useState<NewsItem['tag'] | null>(null)
  const [shown, setShown] = useState(PAGE + 1)
  const list = useMemo(() => (tag ? NEWS_ALL.filter(n => n.tag === tag) : NEWS_ALL), [tag])
  const [lead, ...rest] = list
  const gridRef = useRef<HTMLDivElement>(null)
  useEqualize(gridRef, EQ_KEYS)

  return (
    <section id="news" className="bg-[#F9F8F6] py-16 sm:py-20 lg:py-24 px-6 sm:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 border-b border-[#E2E0DB] pb-8 sm:pb-12 reveal ${inView ? 'visible' : ''}`}
        >
          <div>
            <p className="text-[20px] font-semibold text-[#F85707] mb-4">News</p>
            <h1 className="font-serif text-balance text-[clamp(38px,4vw,60px)] text-[#000050] leading-[1.1] tracking-[-0.01em]">
              News from ProFun.
            </h1>
          </div>
          <p className="max-w-[420px] text-[19px] text-[#6B6B65] leading-relaxed font-light">
            Company announcements, project milestones and the stories shaping the attractions industry.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-8 sm:mb-10" role="group" aria-label="Filter news">
          {[null, ...TAGS].map(t => {
            const n = t ? NEWS_ALL.filter(x => x.tag === t).length : NEWS_ALL.length
            const on = tag === t
            return (
              <button
                key={t ?? 'all'}
                type="button"
                aria-pressed={on}
                onClick={() => { setTag(t); setShown(PAGE + 1); setOpen(null) }}
                className={`flex-none h-11 px-5 text-[15px] font-medium border transition-colors inline-flex items-center gap-2 ${on ? 'bg-[#000050] text-white border-[#000050]' : 'bg-white text-[#000050] border-[#D4D2CC] hover:border-[#000050]'}`}
              >
                {t && <span className="w-2 h-2 rounded-full" style={{ background: NEWS_TAG_COLOR[t] }} aria-hidden="true" />}
                {t ?? 'All'}
                <span className={`text-[13px] ${on ? 'text-white/70' : 'text-[#6B6B65]'}`}>{n}</span>
              </button>
            )
          })}
        </div>

        {/* Lead story */}
        {lead && <StoryCard r={lead} open={open === lead.id} onToggle={() => setOpen(open === lead.id ? null : lead.id)} lead />}

        {/* Others */}
        {rest.length > 0 && (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E0DB] border border-[#E2E0DB] border-t-0">
            {rest.slice(0, shown - 1).map(r => (
              <StoryCard key={r.id} r={r} open={open === r.id} onToggle={() => setOpen(open === r.id ? null : r.id)} />
            ))}
          </div>
        )}

        {list.length > shown && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setShown(s => s + PAGE)}
              className="inline-flex items-center gap-3 h-12 px-6 text-[15px] font-medium border border-[#000050]/25 text-[#000050] bg-white hover:border-[#000050] transition-colors"
            >
              Show more stories
            </button>
            <p className="text-[14px] text-[#6B6B65]">Showing {shown} of {list.length}</p>
          </div>
        )}

        {/* Media inquiries */}
        <div className="mt-10 sm:mt-16 bg-[#000050] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[20px] font-semibold text-[#FFCA03] mb-2">Media Inquiries</p>
            <p className="text-[19px] text-white/70 font-light">For interviews, images and press information, contact the ProFun team.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[16px] font-medium text-white bg-[#F85707] px-6 py-3.5 hover:bg-white hover:text-[#000050] transition-colors duration-300 whitespace-nowrap self-start md:self-auto"
          >
            Contact the team
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M8.5 1L13 5M13 5L8.5 9M13 5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

const ArrowSm = ({ className = '' }: { className?: string }) => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true" className={className}><path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

function StoryCard({ r, open, onToggle, lead }: { r: NewsItem; open: boolean; onToggle: () => void; lead?: boolean }) {
  const color = NEWS_TAG_COLOR[r.tag]
  const logo = isLogo(r.image)
  return (
    <article className={`group bg-white ${lead ? 'grid grid-cols-1 lg:grid-cols-2 border border-[#E2E0DB]' : 'flex flex-col'}`}>
      <div className={`relative overflow-hidden ${logo ? 'bg-white' : 'bg-[#E2E0DB]'} ${lead ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[16/9]'}`}>
        <span className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: color }} aria-hidden="true" />
        <img
          src={pf(r.image)}
          alt={r.title}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.04] ${logo ? 'object-contain p-[18%] border-b border-[#F2F1EF]' : 'object-cover'}`}
        />
      </div>
      <div className={`p-8 ${lead ? 'sm:p-12 flex flex-col justify-center' : 'flex-1 flex flex-col'}`}>
        <div data-eq="meta" className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5">
          <span className="text-[16px] font-medium whitespace-nowrap" style={{ color }}>{r.tag}</span>
          <span className="text-[#C9C7C1]" aria-hidden="true">·</span>
          <span className="text-[15px] text-[#6B6B65] font-light whitespace-nowrap">{r.date}</span>
        </div>
        <h2 data-eq="title" className={`font-serif text-[#000050] leading-snug tracking-[-0.01em] mb-4 ${lead ? 'text-[clamp(26px,2.6vw,42px)]' : 'text-[clamp(22px,1.7vw,28px)]'}`}>
          {r.title}
        </h2>
        <p data-eq="desc" className="text-[17px] text-[#6B6B65] font-light leading-relaxed mb-6">{r.summary}</p>

        {r.body ? (
          <>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="space-y-4 pb-6 text-[17px] text-[#1C1C1A] font-light leading-relaxed">
                  {r.body.map((para, i) => <p key={i}>{para}</p>)}
                  {r.link && (
                    <a href={r.link.href} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="inline-flex items-center gap-2 text-[15px] font-medium text-[#F85707] hover:gap-3 transition-all duration-200">
                      {r.link.label} <ArrowSm className="-rotate-45" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onToggle}
              aria-expanded={open}
              className={`${lead ? '' : 'mt-auto'} self-start inline-flex items-center gap-2 text-[15px] font-medium text-[#000050] hover:text-[#F85707] transition-colors duration-200`}
            >
              {open ? 'Close' : 'Read more'}
              <ArrowSm className={`transition-transform duration-300 ${open ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </>
        ) : r.link && (
          <a
            href={r.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${lead ? '' : 'mt-auto'} self-start inline-flex items-center gap-2 text-[15px] font-medium text-[#000050] hover:text-[#F85707] transition-colors duration-200`}
          >
            {r.link.label}
            <ArrowSm className="-rotate-45" />
          </a>
        )}
      </div>
    </article>
  )
}

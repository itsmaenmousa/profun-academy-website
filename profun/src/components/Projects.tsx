import { useEffect, useRef, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'
import { FEATURED, sectorById } from '../data'

const projects = FEATURED.map(p => ({ ...p, category: sectorById(p.sector).tag }))

const revealDelays = [
  'delay-100',
  'delay-200',
  'delay-300',
  'delay-[400ms]',
  'delay-[500ms]',
  'delay-[600ms]',
  'delay-[700ms]',
  'delay-[800ms]',
  'delay-[900ms]',
  'delay-[1000ms]',
]

export default function Projects() {
  const [openCard, setOpenCard] = useState<number | null>(null)
  const { ref, inView } = useInView()

  // Close an open summary when tapping anywhere outside the cards
  useEffect(() => {
    if (openCard === null) return
    const close = (e: PointerEvent) => {
      if (!(e.target as Element).closest?.('.proj-card')) setOpenCard(null)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [openCard])
  const railRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [progress, setProgress] = useState(0)

  const updateProgress = () => {
    const rail = railRef.current
    if (!rail) return

    const scrollableWidth = rail.scrollWidth - rail.clientWidth
    const nextProgress = scrollableWidth > 0 ? (rail.scrollLeft / scrollableWidth) * 100 : 0
    setProgress(Math.min(100, Math.max(0, nextProgress)))
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rail = railRef.current
      if (!rail || !dragRef.current.active) return

      event.preventDefault()
      const distance = (event.clientX - dragRef.current.startX) * 1.15
      rail.scrollLeft = dragRef.current.scrollLeft - distance
    }

    const stopDragging = () => {
      dragRef.current.active = false
      setIsDragging(false)
    }

    const handleResize = () => updateProgress()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', stopDragging)
    window.addEventListener('blur', stopDragging)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', stopDragging)
      window.removeEventListener('blur', stopDragging)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const startDragging = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !railRef.current) return

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: railRef.current.scrollLeft,
    }
    setIsDragging(true)
  }

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="projects-heading"
      className="overflow-hidden bg-[#1C1C1C] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1920px] px-6 sm:px-12">
        <div
          className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="mb-4 text-[20px] font-semibold text-[#F85707]">Featured Projects</p>

          <div className="flex items-end justify-between gap-8">
            <h2
              id="projects-heading"
              className="max-w-[900px] font-serif text-balance text-[clamp(38px,4vw,60px)] leading-[1.1] tracking-[-0.01em] text-white"
            >
              Iconic destinations, operating at their best.
            </h2>
            <p className="hidden shrink-0 pb-2 text-[16px] font-medium text-white/50 lg:block">
              Drag to explore
            </p>
          </div>

          <div className="relative mt-10 h-px overflow-hidden bg-white/10">
            <div
              className="absolute inset-y-0 left-0 bg-[#F85707] transition-[width] duration-100 ease-out motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        role="region"
        aria-label="Selected projects"
        tabIndex={0}
        onMouseDown={startDragging}
        onScroll={updateProgress}
        className={`mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pl-6 pr-6 sm:pl-12 sm:pr-12 min-[1920px]:pl-[calc((100vw-1920px)/2+48px)] scroll-pl-6 sm:scroll-pl-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            data-open={openCard === index}
            onPointerLeave={e => { if (e.pointerType === 'mouse') setOpenCard(o => (o === index ? null : o)) }}
            className={`group proj-card relative aspect-[3/4] w-[clamp(240px,22vw,300px)] shrink-0 snap-start overflow-hidden bg-[#111110] transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none lg:hover:-translate-y-1.5 ${revealDelays[index]} ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              draggable={false}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent" />

            {/* Category, pinned top-left on every card */}
            <p className="proj-tag absolute left-5 top-5 max-w-[calc(100%-5.75rem)] text-[13px] font-medium text-white bg-black/45 px-2.5 py-[7px] leading-tight text-balance">
              {project.category.replace(/-/g, '\u2011')}
            </p>

            {/* Info toggle (tap on touch screens) */}
            <button
              type="button"
              onMouseDown={e => e.stopPropagation()}
              onClick={e => {
                setOpenCard(o => (o === index ? null : index))
                // Drop focus after a mouse or touch click so the card never stays stuck open
                if (e.detail > 0) e.currentTarget.blur()
              }}
              aria-expanded={openCard === index}
              aria-label={`About ${project.title}`}
              className="proj-info absolute right-5 top-5 z-10 w-9 h-9 rounded-full border border-white/40 bg-black/40 text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#000050] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85707]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="proj-title font-serif text-[clamp(24px,2.4vw,32px)] leading-[1.08] text-white">
                {project.title}
              </h3>
              {'location' in project && (
                <div className="proj-loc grid">
                  <div className="overflow-hidden">
                    <p className="pt-3 text-[15px] font-light text-white/60">{project.location}</p>
                  </div>
                </div>
              )}
              {/* About: revealed on hover, focus or tap */}
              <div className="proj-about grid">
                <div className="overflow-hidden">
                  <p className="pt-4 mt-4 border-t border-white/20 text-[14px] leading-normal lg:text-[15px] lg:leading-relaxed text-white/90">{project.about}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onMouseDown={e => e.stopPropagation()} className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#F85707] transition-colors">
                      {project.linkLabel ?? 'Visit website'}
                      <svg width="11" height="8" viewBox="0 0 12 9" fill="none" aria-hidden="true" className="-rotate-45"><path d="M7 1L11 4.5M11 4.5L7 8M11 4.5H1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

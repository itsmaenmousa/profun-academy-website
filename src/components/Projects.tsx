import { useEffect, useRef, useState } from 'react'
import type React from 'react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: 'Grand Hyatt',
    category: 'WATERPARKS',
    location: 'Dubai, UAE',
    image: './grand-hyatt-waterpark.jpg',
  },
  {
    title: 'Qiddiya Entertainment City',
    category: 'Masterplanning',
    location: 'Riyadh, Saudi Arabia',
    image: './qiddiya-entertainment-city.jpg',
  },
  {
    title: 'Ferrari World Abu Dhabi',
    category: 'Theme Park',
    location: 'Abu Dhabi, UAE',
    image: './ferrari-world-abu-dhabi.jpg',
  },
  {
    title: 'Doha Quest',
    category: 'INDOOR THEME PARK',
    location: 'Doha, Qatar',
    image: './doha-quest.jpg',
  },
  {
    title: 'Merdeka 118',
    category: 'MIXED-USE DESTINATION',
    location: 'Kuala Lumpur, Malaysia',
    image: './merdeka-118.jpg',
  },
  {
    title: 'Expo 2020',
    category: 'Expos',
    location: 'Dubai, UAE',
    image: './expo-2020-dubai.jpg',
  },
  {
    title: 'Makkah Clock Royal Tower',
    category: 'HOSPITALITY DESTINATION',
    location: 'Makkah, Kingdom of Saudi Arabia',
    image: './makkah-clock-royal-tower.jpg',
  },
  {
    title: 'Natural History Museum',
    category: 'Cultural Destination',
    location: 'Los Angeles, USA',
    image: './natural-history-museum-los-angeles.jpg',
  },
  {
    title: 'Dubai Parks & Resorts',
    category: 'Leisure Destination',
    location: 'Dubai, UAE',
    image: './dubai-parks-resorts.jpg',
  },
]

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
]

export default function Projects() {
  const { ref, inView } = useInView()
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
      className="overflow-hidden bg-[#1C1C1C] py-28 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-14">
        <div
          className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-8 w-px bg-[#F85707]" aria-hidden="true" />
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/45">
              Selected Work
            </p>
          </div>

          <div className="flex items-end justify-between gap-8">
            <h2
              id="projects-heading"
              className="max-w-[900px] font-serif text-[clamp(40px,4vw,64px)] leading-[1.04] tracking-[-0.01em] text-white"
            >
              Projects that define categories
            </h2>
            <p className="hidden shrink-0 pb-2 text-[12px] font-medium uppercase tracking-[0.15em] text-white/30 lg:block">
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
        className={`mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pl-6 pr-6 md:mt-20 md:pl-14 md:pr-14 min-[1440px]:pl-[calc((100vw-1440px)/2+56px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group relative aspect-[3/4] w-[clamp(240px,22vw,300px)] shrink-0 snap-start overflow-hidden bg-[#111110] transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none lg:hover:-translate-y-1.5 ${revealDelays[index]} ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

            <span className="absolute right-5 top-5 text-[12px] font-medium tabular-nums tracking-[0.12em] text-white/55 drop-shadow-sm">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
                {project.category}
              </p>
              <h3 className="font-serif text-[clamp(24px,2.4vw,32px)] leading-[1.08] text-white">
                {project.title}
              </h3>
              {'location' in project && (
                <p className="mt-3 text-[14px] font-light text-white/45">{project.location}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

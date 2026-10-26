import { useEffect, lazy, Suspense, type ReactNode } from 'react'
import Lenis from 'lenis'
import { setLenis, getLenis, resetScroll } from './lib/smooth'
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Services from './components/Services'
import { Intro, SectorsGrid, AcademyBand, ClientsStrip } from './components/HomeSections'
import Footer from './components/Footer'

// Pages other than Home load on demand, then quietly prefetch once the browser is idle
const loaders = {
  Pages: () => import('./components/Pages'),
  Work: () => import('./components/Work'),
  Contact: () => import('./components/Contact'),
  News: () => import('./components/News'),
}
const AboutPage = lazy(() => loaders.Pages().then(m => ({ default: m.AboutPage })))
const SectorsPage = lazy(() => loaders.Pages().then(m => ({ default: m.SectorsPage })))
const ServicesPage = lazy(() => loaders.Pages().then(m => ({ default: m.ServicesPage })))
const TeamPage = lazy(() => loaders.Pages().then(m => ({ default: m.TeamPage })))
const NewsPage = lazy(loaders.News)
const WorkPage = lazy(loaders.Work)
const CaseStudyPage = lazy(() => loaders.Work().then(m => ({ default: m.CaseStudyPage })))
const Contact = lazy(loaders.Contact)

function usePrefetchPages() {
  useEffect(() => {
    const run = () => Object.values(loaders).forEach(load => { load().catch(() => {}) })
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
    const t = window.setTimeout(() => (w.requestIdleCallback ? w.requestIdleCallback(run, { timeout: 4000 }) : run()), 2500)
    return () => window.clearTimeout(t)
  }, [])
}

// "#section" links: scroll if that section is on the current page, otherwise open its page.
const SECTION_ALIASES: Record<string, string[]> = {}
const SECTION_ROUTES: Record<string, string> = {
  about: '/about', services: '/services', sectors: '/sectors', work: '/work', projects: '/work',
  team: '/team', news: '/news', contact: '/contact',
}

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, easing: t => 1 - Math.pow(1 - t, 4), smoothWheel: true })
    setLenis(lenis)
    let raf = 0
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); setLenis(null) }
  }, [])
}

function LinkRouter() {
  const navigate = useNavigate()
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement)?.closest?.('a') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (!href.startsWith('#') || href.startsWith('#/')) return
      e.preventDefault()
      const lenis = getLenis()
      const key = href.slice(1)
      if (!key) { lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }); return }
      const ids = SECTION_ALIASES[key] ?? [key]
      const el = ids.map(id => document.getElementById(id)).find(Boolean) as HTMLElement | undefined
      if (el) {
        if (lenis) lenis.scrollTo(el)
        else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (SECTION_ROUTES[key]) {
        navigate(SECTION_ROUTES[key])
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])
  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { resetScroll() }, [pathname])
  return null
}

function Layout({ children, inner = true }: { children: ReactNode; inner?: boolean }) {
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Nav />
      <main id="main-content" className={inner ? 'pt-[72px] lg:pt-20 page-enter' : 'page-enter'}>
        <Suspense fallback={<div className="min-h-[100svh]" />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  )
}

function Home() {
  return (
    <Layout inner={false}>
      <Hero />
      <Stats />
      <Intro />
      <SectorsGrid />
      <Services />
      <Projects />
      <AcademyBand />
      <ClientsStrip />
    </Layout>
  )
}

export default function App() {
  useSmoothScroll()
  usePrefetchPages()
  return (
    <HashRouter>
      <LinkRouter />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/sectors" element={<Layout><SectorsPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/work" element={<Layout><WorkPage /></Layout>} />
        <Route path="/work/:slug" element={<Layout><CaseStudyPage /></Layout>} />
        <Route path="/team" element={<Layout><TeamPage /></Layout>} />
        <Route path="/news" element={<Layout><NewsPage /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

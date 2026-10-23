import { useEffect, lazy, Suspense, type ReactNode } from 'react'
import Lenis from 'lenis'
import { setLenis, getLenis, resetScroll } from './lib/smooth'
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Partners from './components/Partners'
import Footer from './components/Footer'

// Pages other than Home load on demand, then quietly prefetch once the browser is idle
const loaders = {
  Stats: () => import('./components/Stats'),
  Services: () => import('./components/Services'),
  VideoReel: () => import('./components/VideoReel'),
  About: () => import('./components/About'),
  Leadership: () => import('./components/Leadership'),
  News: () => import('./components/News'),
  Contact: () => import('./components/Contact'),
  Courses: () => import('./components/Courses'),
  Press: () => import('./components/Press'),
  Academy: () => import('./pages/Academy'),
}
const Stats = lazy(loaders.Stats)
const Services = lazy(loaders.Services)
const VideoReel = lazy(loaders.VideoReel)
const About = lazy(loaders.About)
const Leadership = lazy(loaders.Leadership)
const News = lazy(loaders.News)
const Contact = lazy(loaders.Contact)
const Courses = lazy(loaders.Courses)
const Press = lazy(loaders.Press)
const Academy = lazy(loaders.Academy)

function usePrefetchPages() {
  useEffect(() => {
    const run = () => Object.values(loaders).forEach(load => { load().catch(() => {}) })
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
    const t = window.setTimeout(() => (w.requestIdleCallback ? w.requestIdleCallback(run, { timeout: 4000 }) : run()), 2500)
    return () => window.clearTimeout(t)
  }, [])
}

// "#section" links: scroll if that section is on the current page, otherwise open its page.
const SECTION_ALIASES: Record<string, string[]> = {
  about: ['about', 'authority'],
  programs: ['programs', 'credentials', 'library'],
}
const SECTION_ROUTES: Record<string, string> = {
  about: '/about', services: '/services', delivery: '/learning', learning: '/learning',
  programs: '/programs', projects: '/projects', team: '/team', news: '/news', contact: '/contact', partners: '/',
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
      <Projects />
      <Testimonial />
      <Partners />
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
        <Route path="/about" element={<Layout><Stats /><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/learning" element={<Layout><VideoReel /></Layout>} />
        <Route path="/programs" element={<Layout><News /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/team" element={<Layout><Leadership /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/academy" element={<Suspense fallback={<div className="min-h-[100svh] bg-[#F9F8F6]" />}><Academy /></Suspense>} />
        <Route path="/news" element={<Layout><Press /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

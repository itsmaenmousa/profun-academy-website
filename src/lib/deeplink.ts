import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from './smooth'

/** Run `handler` with the `?go=` value whenever a link carrying one is followed. */
export function useDeepLink(handler: (go: string) => void) {
  const { search, key } = useLocation()
  const fn = useRef(handler)
  fn.current = handler
  useEffect(() => {
    const go = new URLSearchParams(search).get('go')
    if (go) fn.current(go)
  }, [search, key])
}

/** Smoothly bring an element just below the fixed nav, after the page has settled. */
export function scrollToId(id: string, delay = 260) {
  window.setTimeout(() => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = window.innerWidth >= 1024 ? 80 : 72
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navH - 24)
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(top, { duration: 1.1 })
    else window.scrollTo({ top, behavior: 'smooth' })
  }, delay)
}

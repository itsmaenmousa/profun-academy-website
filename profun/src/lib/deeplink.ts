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

/** Smoothly bring an element just below the fixed nav, after the page has settled.
    Re-aims once if the layout above it was still growing when the scroll started. */
export function scrollToId(id: string, delay = 260) {
  const target = () => {
    const el = document.getElementById(id)
    if (!el) return null
    const navH = window.innerWidth >= 1024 ? 80 : 72
    return Math.max(0, el.getBoundingClientRect().top + window.scrollY - navH - 24)
  }
  const go = (immediate = false) => {
    const top = target()
    if (top === null) return
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(top, immediate ? { immediate: true } : { duration: 1.1 })
    else window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' })
  }
  window.setTimeout(() => go(), delay)
  window.setTimeout(() => {
    const top = target()
    if (top !== null && Math.abs(top - window.scrollY) > 24) go()
  }, delay + 1300)
}

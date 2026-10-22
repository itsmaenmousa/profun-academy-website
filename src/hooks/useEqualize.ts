import { useEffect } from 'react'
import type React from 'react'

/* Keep card rows aligned: equalize matching parts across cards that share a row */
export function useEqualize(root: React.RefObject<HTMLElement | null>, keys: string[] = ['meta', 'title', 'desc', 'tags']) {
  useEffect(() => {
    const el = root.current
    if (!el) return
    let raf = 0
    const run = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const cards = [...el.querySelectorAll('article')] as HTMLElement[]
        keys.forEach(k => cards.forEach(c => { const n = c.querySelector(`[data-eq="${k}"]`) as HTMLElement | null; if (n) n.style.minHeight = '' }))
        const rows = new Map<number, HTMLElement[]>()
        cards.forEach(c => { const top = c.getBoundingClientRect().top; const key = [...rows.keys()].find(t => Math.abs(t - top) < 40) ?? top; rows.set(key, [...(rows.get(key) ?? []), c]) })
        const anyOpen = !!el.querySelector('button[aria-expanded="true"]')
        rows.forEach(row => {
          if (row.length < 2) return
          keys.filter(k => !(anyOpen && k === 'tags')).forEach(k => {
            const ns = row.map(c => c.querySelector(`[data-eq="${k}"]`) as HTMLElement | null).filter(Boolean) as HTMLElement[]
            const h = Math.max(...ns.map(n => n.getBoundingClientRect().height))
            ns.forEach(n => { n.style.minHeight = `${h}px` })
          })
        })
      })
    }
    run()
    const ro = new ResizeObserver(run)
    ro.observe(el)
    document.fonts?.ready.then(run)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [root, keys])
}


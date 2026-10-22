import { useEffect, useState } from 'react'

export function useCounter(target: number, duration = 1800, active = false, replay = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, replay])

  return count
}

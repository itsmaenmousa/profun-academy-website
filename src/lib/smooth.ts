import type Lenis from 'lenis'

let instance: Lenis | null = null
export const setLenis = (l: Lenis | null) => { instance = l }
export const getLenis = () => instance

/** Jump to the top instantly (used on route changes). */
export function resetScroll() {
  if (instance) instance.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

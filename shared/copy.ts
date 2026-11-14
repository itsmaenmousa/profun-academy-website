/*
  Page text and photos edited in the dashboard.
  Each site keeps a COPY object: { page: { section_field: default } }.
  The dashboard has one document per page (type "<site>_<page>"), built from COPY,
  and the site overwrites a default only when the dashboard field is filled in.
  Keys ending in "_image" are photos; everything else is text ("\n" = new line).
*/

export type Copy = Record<string, Record<string, string>>

const PROJECT = 'hxe3wh04'
/* "image-<hash>-<w>x<h>-<ext>" -> CDN URL */
export const assetUrl = (ref: string, width = 1600) => {
  const m = /^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/.exec(ref)
  return m ? `https://cdn.sanity.io/images/${PROJECT}/production/${m[1]}-${m[2]}.${m[3]}?w=${width}&auto=format` : ''
}

export const isImageKey = (k: string) => /_image\d*$/.test(k)
export const docType = (site: string, page: string) => `${site}_${page}`
export const pageTypes = (site: string, copy: Copy) => Object.keys(copy).map(p => docType(site, p))

/* Copy dashboard values over the defaults (in place, before the first render) */
export function applyCopy(site: string, copy: Copy, docs: Record<string, any>[] | undefined) {
  if (!docs) return
  for (const d of docs) {
    const page = String(d._type).slice(site.length + 1)
    const target = copy[page]
    if (!target) continue
    for (const k of Object.keys(target)) {
      const v = d[k]
      if (isImageKey(k)) {
        const ref = v?.asset?._ref
        if (ref) target[k] = assetUrl(ref)
      } else if (typeof v === 'string' && v.trim()) {
        target[k] = v
      }
    }
  }
}

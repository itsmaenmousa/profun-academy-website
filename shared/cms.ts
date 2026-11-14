/*
  Content from the dashboard (Sanity Studio at /studio).
  Both sites call loadCms() once before they render, then copy the lists they
  get into their built-in arrays. If the dashboard is slow or down, the built-in
  copies are used, so the site never shows empty.
*/

const ENDPOINT = 'https://hxe3wh04.apicdn.sanity.io/v2025-01-01/data/query/production'

/* Every list document has: image (upload) + legacyImage (path from the original site) */
const LIST = (type: string) =>
  `"${type}": *[_type == "${type}" && !(_id in path("drafts.**"))] | order(orderRank asc) { ..., "imageUrl": image.asset->url, "imageHs": image.hotspot }`

export const LIST_TYPES = [
  'pfTeam', 'pfFeatured', 'pfClient', 'pfAffiliation', 'pfStat', 'pfSector', 'pfService', 'pfCaseStudy', 'pfOffice',
  'acTeam', 'acProject', 'acPartner', 'acStat', 'acValue', 'acService', 'acFormat', 'acProgram',
] as const
export type ListType = (typeof LIST_TYPES)[number]

export type Row = Record<string, any> & { imageUrl?: string; imageHs?: { x: number; y: number }; legacyImage?: string }
export type Cms = Partial<Record<ListType, Row[]>> & { pages?: Record<string, any>[] }

/* Photo URL for a row: the uploaded photo (resized by Sanity), else the original one */
export const rowImage = (r: Row, width = 1200) =>
  r.imageUrl ? `${r.imageUrl}?w=${width}&auto=format` : (r.legacyImage ?? '')

/* Focus point set in the dashboard, as CSS object-position */
export const rowFocus = (r: Row) => (r.imageUrl && r.imageHs ? `${Math.round(r.imageHs.x * 100)}% ${Math.round(r.imageHs.y * 100)}%` : undefined)

export async function loadCms(timeoutMs = 1500, pageTypes: string[] = []): Promise<Cms | null> {
  const pages = `"pages": *[_type in ${JSON.stringify(pageTypes)} && !(_id in path("drafts.**"))]`
  const query = `{ ${[...LIST_TYPES.map(LIST), pages].join(',\n')} }`
  const timer = new Promise<null>(res => setTimeout(() => res(null), timeoutMs))
  const req = fetch(`${ENDPOINT}?query=${encodeURIComponent(query)}`)
    .then(r => (r.ok ? r.json() : null))
    .then(j => (j?.result as Cms) ?? null)
    .catch(() => null)
  return Promise.race([req, timer])
}

/* Image inside a nested item (e.g. a sector's project): uploaded photo, else the original path */
export const nestedImage = (img: any, legacy?: string, width = 1200) => {
  const ref = img?.asset?._ref as string | undefined
  const m = ref && /^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/.exec(ref)
  return m ? `https://cdn.sanity.io/images/hxe3wh04/production/${m[1]}-${m[2]}.${m[3]}?w=${width}&auto=format` : (legacy ?? '')
}

/* Replace the contents of a built-in list with the dashboard rows (only if the dashboard has any) */
export function fill<T>(target: T[], rows: Row[] | undefined, map: (r: Row) => T) {
  if (!rows || !rows.length) return
  target.splice(0, target.length, ...rows.map(map))
}

/* Brand colors offered in the dashboard, with the darker "ink" used for numbers */
export const BRAND_COLORS: { title: string; value: string; ink: string }[] = [
  { title: 'Blue', value: '#3985FD', ink: '#2F6FE0' },
  { title: 'Teal', value: '#15D2A4', ink: '#0E9F7C' },
  { title: 'Lime', value: '#99CA32', ink: '#7DA621' },
  { title: 'Yellow', value: '#FFCA03', ink: '#C99A00' },
  { title: 'Pink', value: '#FC026F', ink: '#E0025F' },
  { title: 'Purple', value: '#8238EB', ink: '#6B2AC9' },
  { title: 'Orange', value: '#F85707', ink: '#D94A05' },
  { title: 'Cyan', value: '#00AFDC', ink: '#0090B8' },
  { title: 'Navy', value: '#000050', ink: '#000050' },
  { title: 'Gold', value: '#E0A800', ink: '#B88A00' },
  { title: 'Green', value: '#7FB01F', ink: '#65901A' },
]
export const inkFor = (color: string) => BRAND_COLORS.find(c => c.value.toLowerCase() === color?.toLowerCase())?.ink ?? color

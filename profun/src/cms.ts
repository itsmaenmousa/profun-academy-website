import { loadCms, fill, rowImage, inkFor, nestedImage, type Cms } from '../../shared/cms'
import { applyCopy, pageTypes } from '../../shared/copy'
import { HERO_SLIDES, FEATURED, CLIENTS, HOME_CLIENTS, AFFILIATIONS, STATS, SECTORS, SERVICES, CASE_STUDIES, type SectorId, type RegionId } from './data'
import { CASE_DETAIL } from './content'
import { TEAM_LIST } from './team'
import { COPY } from './copy'

/* Replace items whose id matches a dashboard row's code; order follows the dashboard */
function mergeBy<T extends { id: string }>(target: T[], rows: Record<string, any>[] | undefined, map: (r: Record<string, any>) => T) {
  if (!rows?.length) return
  const byId = new Map(rows.filter(r => r.code).map(r => [r.code as string, map(r)]))
  const ordered = [...rows.map(r => byId.get(r.code)).filter(Boolean) as T[], ...target.filter(t => !byId.has(t.id))]
  target.splice(0, target.length, ...ordered)
}

const paras = (t?: string) => (t ? t.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean) : [])

/* Copies the dashboard content into the site's built-in content. Runs once, before the first render. */
export function applyCms(c: Cms | null) {
  if (!c) return
  applyCopy('pf', COPY, c.pages)
  const slides = c.pages?.find(d => d._type === 'pf_home')?.hero_slides as any[] | undefined
  if (slides?.length) {
    const ok = slides.map(i => ({ desktop: nestedImage(i, '', 2400), mobile: nestedImage(i, '', 1000), hs: i?.hotspot })).filter(x => x.desktop)
    if (ok.length) HERO_SLIDES.splice(0, HERO_SLIDES.length, ...ok.map(x => ({ desktop: x.desktop, mobile: x.mobile, ...(x.hs ? { pos: `${Math.round(x.hs.x * 100)}% ${Math.round(x.hs.y * 100)}%` } : {}) })))
  }
  fill(TEAM_LIST, c.pfTeam, r => ({ name: r.name, role: r.role ?? '', bio: r.bio ?? '', photo: rowImage(r, 800) }))
  fill(FEATURED, c.pfFeatured, r => ({
    title: r.title, location: r.location ?? '', sector: r.sector as SectorId, image: rowImage(r, 1600), about: r.about ?? '',
    ...(r.link ? { link: r.link, linkLabel: r.linkLabel || undefined } : {}),
  }))
  fill(CLIENTS, c.pfClient, r => [r.name, (r.sectors ?? []) as SectorId[], r.region as RegionId, rowImage(r, 400)] as [string, SectorId[], RegionId, string])
  if (c.pfClient?.some(r => r.home)) HOME_CLIENTS.splice(0, HOME_CLIENTS.length, ...c.pfClient.filter(r => r.home).map(r => r.name))
  fill(AFFILIATIONS, c.pfAffiliation, r => ({ name: r.name, logo: rowImage(r, 600), color: r.color ?? '#000050', ...(r.big ? { big: true } : {}) }))
  fill(STATS, c.pfStat, r => ({ numeric: r.numeric ?? 0, suffix: r.suffix ?? '', label: r.label ?? '', color: r.color ?? '#3985FD', ink: inkFor(r.color) }))
  // Sectors and services are fixed sets (links point at them): update each by its code, keep any missing one
  mergeBy(SECTORS, c.pfSector, r => ({
    id: r.code as SectorId, tag: r.tag ?? '', name: r.name ?? '', color: r.color ?? '#F85707', title: r.title ?? '', lead: r.lead ?? '',
    body: paras(r.body), cover: rowImage(r, 1600),
    projects: (r.projects ?? []).map((p: any) => [p.name ?? '', p.location ?? '', nestedImage(p.image, p.legacyImage, 1000)] as [string, string, string]),
  }))
  mergeBy(SERVICES, c.pfService, r => ({
    id: r.code, short: r.short ?? '', title: r.title ?? '', lead: r.lead ?? '', desc: r.desc ?? '', color: r.color ?? '#3985FD',
    ...(r.items?.length ? { items: r.items as string[] } : {}), cases: (r.cases ?? []) as string[],
  }))
  if (c.pfCaseStudy?.length) {
    fill(CASE_STUDIES, c.pfCaseStudy, r => [r.name, (r.services ?? []) as string[], nestedImage(r.logo, r.legacyLogo, 600)] as [string, string[], string])
    for (const k of Object.keys(CASE_DETAIL)) delete CASE_DETAIL[k]
    for (const r of c.pfCaseStudy) {
      if (!r.slug) continue
      CASE_DETAIL[r.name] = { slug: r.slug, location: r.location ?? '', image: rowImage(r, 1800), body: paras(r.body) }
    }
  }
}

export const loadAndApplyCms = () => loadCms(1500, pageTypes('pf', COPY)).then(applyCms)

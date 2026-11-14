import { loadCms, fill, rowImage, type Cms } from '../../shared/cms'
import { inkFor } from '../../shared/cms'
import { FEATURED, CLIENTS, AFFILIATIONS, STATS, type SectorId, type RegionId } from './data'
import { TEAM_LIST } from './team'

/* Copies the dashboard lists into the site's built-in lists. Runs once, before the first render. */
export function applyCms(c: Cms | null) {
  if (!c) return
  fill(TEAM_LIST, c.pfTeam, r => ({ name: r.name, role: r.role ?? '', bio: r.bio ?? '', photo: rowImage(r, 800) }))
  fill(FEATURED, c.pfFeatured, r => ({
    title: r.title, location: r.location ?? '', sector: r.sector as SectorId, image: rowImage(r, 1600), about: r.about ?? '',
    ...(r.link ? { link: r.link, linkLabel: r.linkLabel || undefined } : {}),
  }))
  fill(CLIENTS, c.pfClient, r => [r.name, (r.sectors ?? []) as SectorId[], r.region as RegionId, rowImage(r, 400)] as [string, SectorId[], RegionId, string])
  fill(AFFILIATIONS, c.pfAffiliation, r => ({ name: r.name, logo: rowImage(r, 600), color: r.color ?? '#000050', ...(r.big ? { big: true } : {}) }))
  fill(STATS, c.pfStat, r => ({ numeric: r.numeric ?? 0, suffix: r.suffix ?? '', label: r.label ?? '', color: r.color ?? '#3985FD', ink: inkFor(r.color) }))
}

export const loadAndApplyCms = () => loadCms().then(applyCms)

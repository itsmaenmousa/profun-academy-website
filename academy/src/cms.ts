import { loadCms, fill, rowImage, rowFocus, inkFor, type Cms } from '../../shared/cms'
import { applyCopy, pageTypes } from '../../shared/copy'
import { COPY } from './copy'
import { TEAM, PROJECTS, PARTNERS, STATS, VALUES, SERVICES, FORMATS, TAILORED, ACCREDITED, type Program } from './data'

/* Copies the dashboard lists into the site's built-in lists. Runs once, before the first render. */
export function applyCms(c: Cms | null) {
  if (!c) return
  applyCopy('ac', COPY, c.pages)
  fill(TEAM, c.acTeam, r => ({ name: r.name, role: r.role ?? '', bio: r.bio ?? '', photo: rowImage(r, 800) }))
  fill(PROJECTS, c.acProject, r => ({ title: r.title, about: r.about ?? '', category: r.category ?? '', location: r.location ?? '', image: rowImage(r, 1200) }))
  fill(PARTNERS, c.acPartner, r => ({ name: r.name, logo: rowImage(r, 600), color: r.color ?? '#000050', ...(r.big ? { big: true } : {}) }))
  fill(STATS, c.acStat, r => ({ numeric: r.numeric ?? 0, suffix: r.suffix ?? '', label: r.label ?? '', color: r.color ?? '#3985FD', ink: inkFor(r.color) }))

  fill(VALUES, c.acValue, r => ({ title: r.title ?? '', desc: r.desc ?? '', color: r.color ?? '#3985FD' }))
  fill(SERVICES, c.acService, r => ({ short: r.short ?? '', title: r.title ?? '', desc: r.desc ?? '', color: r.color ?? '#000050' }))
  fill(FORMATS, c.acFormat, r => ({
    id: r.code || r._id, color: r.color ?? '#3985FD', label: r.label ?? '', title: r.title ?? '', desc: r.desc ?? '',
    tags: (r.tags ?? []) as string[], image: rowImage(r, 1800), pos: rowFocus(r) ?? r.pos ?? '50% 50%',
  }))
  const program = (r: Record<string, any>): Program => ({
    category: r.category ?? '', title: r.title ?? '', desc: r.desc ?? '', image: rowImage(r, 1400), color: r.color ?? '#8238EB',
    ...(rowFocus(r) ?? r.pos ? { pos: rowFocus(r) ?? r.pos } : {}), label: r.label ?? 'Explore',
    items: (r.items ?? []).map((it: any) => (it.subs?.length ? { name: it.name ?? '', color: it.color ?? '#3985FD', subs: it.subs } : it.name ?? '')),
  })
  fill(TAILORED, c.acProgram?.filter(r => r.group !== 'accredited'), program)
  fill(ACCREDITED, c.acProgram?.filter(r => r.group === 'accredited'), program)
}

export const loadAndApplyCms = () => loadCms(1500, pageTypes('ac', COPY)).then(applyCms)

import { loadCms, fill, rowImage, inkFor, type Cms } from '../../shared/cms'
import { TEAM, PROJECTS, PARTNERS, STATS, COURSES, SELF_PACED, type Format } from './data'

/* Copies the dashboard lists into the site's built-in lists. Runs once, before the first render. */
export function applyCms(c: Cms | null) {
  if (!c) return
  fill(TEAM, c.acTeam, r => ({ name: r.name, role: r.role ?? '', bio: r.bio ?? '', photo: rowImage(r, 800) }))
  fill(PROJECTS, c.acProject, r => ({ title: r.title, about: r.about ?? '', category: r.category ?? '', location: r.location ?? '', image: rowImage(r, 1200) }))
  fill(PARTNERS, c.acPartner, r => ({ name: r.name, logo: rowImage(r, 600), color: r.color ?? '#000050', ...(r.big ? { big: true } : {}) }))
  fill(STATS, c.acStat, r => ({ numeric: r.numeric ?? 0, suffix: r.suffix ?? '', label: r.label ?? '', color: r.color ?? '#3985FD', ink: inkFor(r.color) }))
  fill(COURSES, c.acCourse, r => ({
    id: r.code || r._id, title: r.title, category: r.category ?? '', format: (r.format ?? 'In-Person') as Format,
    duration: r.duration ?? '', price: r.price ?? 0, ...(r.accredited ? { accredited: r.accredited } : {}),
    desc: r.desc ?? '', dates: r.selfPaced ? SELF_PACED : (r.dates ?? []),
  }))
}

export const loadAndApplyCms = () => loadCms().then(applyCms)

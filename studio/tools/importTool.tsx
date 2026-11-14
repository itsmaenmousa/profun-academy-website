import { useState } from 'react'
import { useClient, type Tool } from 'sanity'
import { Box, Button, Card, Stack, Text, Heading } from '@sanity/ui'
import { LexoRank } from 'lexorank'
import { NEWS_ALL, isoDate, hasDay, isLogoImage } from '../../shared/news'
import { OFFICES, FEATURED, CLIENTS, HOME_CLIENTS, AFFILIATIONS, STATS as PF_STATS, SECTORS, SERVICES, CASE_STUDIES, pf } from '../../profun/src/data'
import { CASE_DETAIL, LOCAL_IMG } from '../../profun/src/content'
import { COPY as PF_COPY } from '../../profun/src/copy'
import { isImageKey, docType } from '../../shared/copy'
import { TEAM_LIST } from '../../profun/src/team'
import { TEAM as AC_TEAM, PROJECTS, PARTNERS, STATS as AC_STATS, VALUES, SERVICES as AC_SERVICES, FORMATS, TAILORED, ACCREDITED } from '../../academy/src/data'
import { COPY as AC_COPY } from '../../academy/src/copy'

/*
  One-click import of the content that is built into the website today.
  Safe to click again: anything that already exists in the dashboard is left untouched.
*/
const slug = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)

type Doc = Record<string, unknown> & { _id: string; _type: string; _patch?: Record<string, unknown> }

const key = (i: number) => `k${i}`
const pages = (site: string, copy: Record<string, Record<string, string>>): Doc[] =>
  Object.entries(copy).map(([page, f]) => {
    // Text fields only; new fields added to an existing page are filled in without touching edits
    const text = Object.fromEntries(Object.entries(f).filter(([k, v]) => !isImageKey(k) && v !== ''))
    return { _id: docType(site, page), _type: docType(site, page), ...text, _patch: text }
  })

/* Gives each list item a position, in the order it shows on the site today */
const ranked = (docs: Doc[]) => {
  let r = LexoRank.min()
  return docs.map(d => { r = r.genNext().genNext(); return { ...d, orderRank: r.toString() } })
}

const SETS: { title: string; docs: () => Doc[] }[] = [
  {
    title: 'News (both sites)',
    docs: () => NEWS_ALL.map(n => ({
      _id: `news-${n.id}`, _type: 'news', title: n.title, date: isoDate(n.date),
      ...(hasDay(n.date) ? {} : { dateLabel: n.date }), tag: n.tag, ...(n.label ? { label: n.label } : {}),
      logo: isLogoImage(n.image), legacyImage: n.image, ...(n.pos ? { pos: n.pos } : {}), summary: n.summary,
      ...(n.body ? { body: n.body.join('\n\n') } : {}),
      ...(n.link ? { link: { _type: 'object', label: n.link.label, href: n.link.href } } : {}),
      ...(n.cta ? { cta: { _type: 'object', label: n.cta.label, to: n.cta.to } } : {}),
    })),
  },
  { title: 'ProFun: Pages', docs: () => pages('pf', PF_COPY) },
  { title: 'ProFun: Sectors', docs: () => ranked(SECTORS.map(x => ({ _id: `pfSector-${x.id}`, _type: 'pfSector', code: x.id, name: x.name, tag: x.tag, color: x.color, title: x.title, lead: x.lead, body: x.body.join('\n\n'), legacyImage: x.cover,
      projects: x.projects.map(([name, location, img], i) => ({ _key: key(i), _type: 'sectorProject', name, location, legacyImage: img })) }))) },
  { title: 'ProFun: Services', docs: () => ranked(SERVICES.map(x => ({ _id: `pfService-${x.id}`, _type: 'pfService', code: x.id, short: x.short, title: x.title, color: x.color, lead: x.lead, desc: x.desc, ...(x.items ? { items: x.items } : {}), cases: x.cases }))) },
  { title: 'ProFun: Case studies', docs: () => ranked(CASE_STUDIES.map(([name, services, logo]) => {
      const d = CASE_DETAIL[name]
      const photo = d ? (LOCAL_IMG[d.slug] ? `./projects/${LOCAL_IMG[d.slug]}.jpg` : pf(d.image)) : undefined
      return { _id: `pfCaseStudy-${slug(name)}`, _type: 'pfCaseStudy', name, services, legacyLogo: pf(logo), ...(d ? { slug: d.slug, location: d.location, legacyImage: photo, body: d.body.join('\n\n') } : {}) }
    })) },
  { title: 'ProFun: Offices', docs: () => ranked(OFFICES.map(o => ({ _id: `pfOffice-${slug(o.name)}`, _type: 'pfOffice', name: o.name, address: o.lines.join('\n'), phone: o.phone, email: o.email }))) },
  { title: 'ProFun: Team', docs: () => ranked(TEAM_LIST.map(t => ({ _id: `pfTeam-${slug(t.name)}`, _type: 'pfTeam', name: t.name, role: t.role, bio: t.bio, legacyImage: t.photo }))) },
  { title: 'ProFun: Featured projects', docs: () => ranked(FEATURED.map(p => ({ _id: `pfFeatured-${slug(p.title)}`, _type: 'pfFeatured', title: p.title, location: p.location, sector: p.sector, about: p.about, legacyImage: p.image, ...(p.link ? { link: p.link } : {}), ...(p.linkLabel ? { linkLabel: p.linkLabel } : {}) }))) },
  { title: 'ProFun: Clients', docs: () => ranked(CLIENTS.map(([name, sectors, region, logo]) => ({ _id: `pfClient-${slug(name)}`, _type: 'pfClient', name, sectors, region, legacyImage: pf(logo), home: HOME_CLIENTS.includes(name), _patch: { home: HOME_CLIENTS.includes(name) } }))) },
  { title: 'ProFun: Affiliations', docs: () => ranked(AFFILIATIONS.map(a => ({ _id: `pfAffiliation-${slug(a.name)}`, _type: 'pfAffiliation', name: a.name, color: a.color, big: !!(a as { big?: boolean }).big, legacyImage: a.logo }))) },
  { title: 'ProFun: Key numbers', docs: () => ranked(PF_STATS.map((s, i) => ({ _id: `pfStat-${i + 1}`, _type: 'pfStat', numeric: s.numeric, suffix: s.suffix, label: s.label, color: s.color }))) },
  { title: 'Academy: Pages', docs: () => pages('ac', AC_COPY) },
  { title: 'Academy: Services', docs: () => ranked(AC_SERVICES.map(x => ({ _id: `acService-${slug(x.short)}`, _type: 'acService', short: x.short, title: x.title, desc: x.desc, color: x.color }))) },
  { title: 'Academy: Delivery formats', docs: () => ranked(FORMATS.map(x => ({ _id: `acFormat-${x.id}`, _type: 'acFormat', code: x.id, label: x.label, title: x.title, desc: x.desc, tags: x.tags, color: x.color, legacyImage: x.image, pos: x.pos }))) },
  { title: 'Academy: Programs', docs: () => ranked([...TAILORED.map(x => ({ ...x, group: 'tailored' })), ...ACCREDITED.map(x => ({ ...x, group: 'accredited' }))].map(x => ({
      _id: `acProgram-${slug(x.title)}`, _type: 'acProgram', group: x.group, category: x.category, title: x.title, desc: x.desc, color: x.color, label: x.label, legacyImage: x.image, ...(x.pos ? { pos: x.pos } : {}),
      items: x.items.map((it, i) => (typeof it === 'string' ? { _key: key(i), _type: 'programItem', name: it } : { _key: key(i), _type: 'programItem', name: it.name, color: it.color, subs: it.subs })),
    }))) },
  { title: 'Academy: What sets us apart', docs: () => ranked(VALUES.map(x => ({ _id: `acValue-${slug(x.title)}`, _type: 'acValue', title: x.title, desc: x.desc, color: x.color }))) },
  { title: 'Academy: Team', docs: () => ranked(AC_TEAM.map(t => ({ _id: `acTeam-${slug(t.name)}`, _type: 'acTeam', name: t.name, role: t.role, bio: t.bio, legacyImage: t.photo }))) },
  { title: 'Academy: Projects', docs: () => ranked(PROJECTS.map(p => ({ _id: `acProject-${slug(p.title)}`, _type: 'acProject', title: p.title, category: p.category, location: p.location, about: p.about, legacyImage: p.image }))) },
  { title: 'Academy: Partners', docs: () => ranked(PARTNERS.map(p => ({ _id: `acPartner-${slug(p.name)}`, _type: 'acPartner', name: p.name, color: p.color, big: !!p.big, legacyImage: p.logo }))) },
  { title: 'Academy: Key numbers', docs: () => ranked(AC_STATS.map((s, i) => ({ _id: `acStat-${i + 1}`, _type: 'acStat', numeric: s.numeric, suffix: s.suffix, label: s.label, color: s.color }))) },
]

function ImportPage() {
  const client = useClient({ apiVersion: '2025-01-01' })
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  const total = SETS.reduce((n, s) => n + s.docs().length, 0)

  const run = async () => {
    setState('busy')
    try {
      for (const set of SETS) {
        const tx = client.transaction()
        set.docs().forEach(({ _patch, ...d }) => {
          tx.createIfNotExists(d)
          if (_patch) tx.patch(d._id, p => p.setIfMissing(_patch))
        })
        await tx.commit()
      }
      setState('done')
      setMsg(`Done. ${total} items checked; anything missing has been added. Open "Structure" to see them.`)
    } catch (e) {
      setState('error')
      setMsg(e instanceof Error ? e.message : String(e))
    }
  }

  return (
    <Box padding={5} style={{ maxWidth: 680 }}>
      <Stack gap={5}>
        <Heading size={3}>Import website content</Heading>
        <Text muted>
          Copies the content that is on the website today into this dashboard. Items you have already
          added or edited here are never overwritten, so it is safe to click again after an update.
        </Text>
        <Card padding={4} radius={2} tone="transparent" border>
          <Stack gap={3}>
            {SETS.map(s => <Text key={s.title} size={1}>{s.title}: {s.docs().length}</Text>)}
          </Stack>
        </Card>
        <Box>
          <Button text={state === 'busy' ? 'Importing…' : 'Import everything'} tone="primary" disabled={state === 'busy'} onClick={run} />
        </Box>
        {msg && (
          <Card padding={4} radius={2} tone={state === 'error' ? 'critical' : 'positive'}>
            <Text>{msg}</Text>
          </Card>
        )}
      </Stack>
    </Box>
  )
}

export const importTool: Tool = { name: 'import', title: 'Import', component: ImportPage }

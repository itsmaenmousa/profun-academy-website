import { defineField, defineType } from 'sanity'
import { isImageKey, docType, type Copy } from '../../shared/copy'
import { COPY as PF_COPY } from '../../profun/src/copy'

/*
  One document per page, generated from the site's COPY defaults.
  Fields are grouped by section (the part of the key before the first "_").
*/
const human = (s: string) => s.replace(/_/g, ' ').replace(/(\d+)/g, ' $1').replace(/\s+/g, ' ').trim().replace(/^./, c => c.toUpperCase())
const SECTION: Record<string, string> = {
  hero: 'Top of page (hero)', intro: 'Introduction', head: 'Page heading', projects: 'Featured projects', sectors: 'Sectors',
  academy: 'ProFun Academy', clients: 'Clients', quality: 'Commitment to quality', affiliations: 'Affiliations', cases: 'Case studies',
  sent: 'After sending the form', form: 'Contact form', careers: 'Careers', training: 'Training', services: 'Services',
}
const FIELD: Record<string, string> = { eyebrow: 'Small heading above the title', title: 'Title', text: 'Text', link: 'Link text', button: 'Button text', caption: 'Photo caption', note: 'Small print' }

export const PAGE_TITLES: Record<string, string> = {
  home: 'Home', services: 'Services (header and intro)', about: 'About', sectors: 'Sectors page', work: 'Our Work page',
  team: 'People page', contact: 'Contact', footer: 'Footer',
}

function pageDoc(site: string, page: string, defaults: Record<string, string>, title: string) {
  const sections = [...new Set(Object.keys(defaults).map(k => k.split('_')[0]))]
  return defineType({
    name: docType(site, page),
    title,
    type: 'document',
    fieldsets: sections.map(s => ({ name: s, title: SECTION[s] ?? human(s), options: { collapsible: true, collapsed: sections.length > 3 } })),
    fields: Object.entries(defaults).map(([key, def]) => {
      const [section, ...rest] = key.split('_')
      const tail = rest.join('_')
      const base = tail.replace(/\d+$/, '')
      const label = (FIELD[base] ? FIELD[base] + (tail.match(/\d+$/)?.[0] ? ` ${tail.match(/\d+$/)![0]}` : '') : human(tail)) || human(key)
      if (isImageKey(key)) {
        return defineField({ name: key, title: label.replace(/^Image/, 'Photo'), type: 'image', fieldset: section, options: { hotspot: true }, description: 'Leave empty to keep the current photo.' })
      }
      const long = def.length > 80 || def.includes('\n')
      return defineField({
        name: key, title: label, type: long ? 'text' : 'string', fieldset: section,
        ...(long ? { rows: def.includes('\n') ? Math.min(4, def.split('\n').length + 1) : 4 } : {}),
        description: def.includes('\n') ? 'Each line starts on a new row. Leave empty to keep the current text.' : 'Leave empty to keep the current text.',
      })
    }),
    preview: { prepare: () => ({ title }) },
  })
}

const build = (site: string, copy: Copy) => Object.entries(copy).map(([page, defaults]) => pageDoc(site, page, defaults, PAGE_TITLES[page] ?? human(page)))
export const pfPages = build('pf', PF_COPY)
export const pageTypes = [...pfPages]

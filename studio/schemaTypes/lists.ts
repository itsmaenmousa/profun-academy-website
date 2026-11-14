import { defineField, defineType, type FieldDefinition } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
import { BRAND_COLORS } from '../../shared/cms'
import { SECTORS, REGIONS } from '../../profun/src/data'

/* Shared field helpers */
const photo = (title = 'Photo', description = 'Click the crop icon to set the focus point.') =>
  defineField({ name: 'image', title, type: 'image', options: { hotspot: true }, description })
const legacy = defineField({
  name: 'legacyImage', title: 'Current image (from the original site)', type: 'string', readOnly: true,
  hidden: ({ document }) => !document?.legacyImage,
  description: 'Upload a new image above to replace it.',
})
const color = defineField({ name: 'color', title: 'Accent color', type: 'string', options: { list: BRAND_COLORS.map(c => ({ title: c.title, value: c.value })) }, initialValue: '#3985FD' })
const sectorList = SECTORS.map(s => ({ title: s.name, value: s.id }))
const regionList = REGIONS.map(r => ({ title: r.name, value: r.id }))

const list = (name: string, title: string, fields: FieldDefinition[], preview: { title: string; subtitle?: string; media?: string }) =>
  defineType({
    name, title, type: 'document',
    fields: [...fields, orderRankField({ type: name, hidden: true })],
    orderings: [orderRankOrdering],
    preview: { select: { title: preview.title, subtitle: preview.subtitle ?? '', media: preview.media ?? 'image' } },
  })

const req = (r: any) => r.required()
const person = [
  defineField({ name: 'name', title: 'Name', type: 'string', validation: req }),
  defineField({ name: 'role', title: 'Role / title', type: 'string' }),
  photo('Headshot', 'Square photo works best. Click the crop icon to center the face.'),
  legacy,
  defineField({ name: 'bio', title: 'Short bio', type: 'text', rows: 5 }),
]
const stat = [
  defineField({ name: 'numeric', title: 'Number', type: 'number', description: 'The number that counts up, e.g. 45', validation: req }),
  defineField({ name: 'suffix', title: 'After the number', type: 'string', description: 'e.g. "+" or "K+". Leave empty for none.' }),
  defineField({ name: 'label', title: 'Label', type: 'string', validation: req }),
  color,
]
const logoRow = [
  defineField({ name: 'name', title: 'Name', type: 'string', validation: req }),
  photo('Logo', 'PNG or SVG with a transparent background works best.'),
  legacy,
  color,
  defineField({ name: 'big', title: 'Show logo larger', type: 'boolean', description: 'For wide or detailed logos that look small.', initialValue: false }),
]

/* ── ProFun ── */
export const pfTeam = list('pfTeam', 'ProFun team member', person, { title: 'name', subtitle: 'role' })
export const pfFeatured = list('pfFeatured', 'ProFun featured project', [
  defineField({ name: 'title', title: 'Project name', type: 'string', validation: req }),
  defineField({ name: 'location', title: 'Location', type: 'string' }),
  defineField({ name: 'sector', title: 'Sector', type: 'string', options: { list: sectorList, layout: 'radio' }, validation: req }),
  photo(), legacy,
  defineField({ name: 'about', title: 'Short description', type: 'text', rows: 3 }),
  defineField({ name: 'link', title: 'Website link (optional)', type: 'url' }),
  defineField({ name: 'linkLabel', title: 'Link text (optional)', type: 'string' }),
], { title: 'title', subtitle: 'location' })
export const pfClient = list('pfClient', 'ProFun client', [
  defineField({ name: 'name', title: 'Client name', type: 'string', validation: req }),
  defineField({ name: 'sectors', title: 'Sectors', type: 'array', of: [{ type: 'string' }], options: { list: sectorList } }),
  defineField({ name: 'region', title: 'Region', type: 'string', options: { list: regionList, layout: 'radio' } }),
  photo('Logo', 'PNG with a transparent background works best.'), legacy,
], { title: 'name' })
export const pfAffiliation = list('pfAffiliation', 'ProFun affiliation', logoRow, { title: 'name' })
export const pfStat = list('pfStat', 'ProFun key number', stat, { title: 'label', subtitle: 'suffix' })

/* ── Academy ── */
export const acTeam = list('acTeam', 'Academy team member', person, { title: 'name', subtitle: 'role' })
export const acProject = list('acProject', 'Academy project', [
  defineField({ name: 'title', title: 'Project name', type: 'string', validation: req }),
  defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Commercial Attraction', 'Science & Culture', 'Brand Experience', 'Expositions & Mega-Events'] } }),
  defineField({ name: 'location', title: 'Location', type: 'string' }),
  photo(), legacy,
  defineField({ name: 'about', title: 'Short description', type: 'text', rows: 3 }),
], { title: 'title', subtitle: 'location' })
export const acPartner = list('acPartner', 'Academy partner', logoRow, { title: 'name' })
export const acStat = list('acStat', 'Academy key number', stat, { title: 'label', subtitle: 'suffix' })
export const acCourse = list('acCourse', 'Academy course', [
  defineField({ name: 'title', title: 'Course name', type: 'string', validation: req }),
  defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Safety & Certification', 'Guest Experience', 'Operations', 'Leadership', 'Industry Experience'] }, validation: req }),
  defineField({ name: 'format', title: 'Format', type: 'string', options: { list: ['In-Person', 'Virtual', 'eLearning', 'Blended'], layout: 'radio' }, validation: req }),
  defineField({ name: 'duration', title: 'Duration', type: 'string', placeholder: '2 days' }),
  defineField({ name: 'price', title: 'Price (USD)', type: 'number' }),
  defineField({ name: 'accredited', title: 'Accredited by (optional)', type: 'string' }),
  defineField({ name: 'desc', title: 'Description', type: 'text', rows: 4 }),
  defineField({ name: 'selfPaced', title: 'Self-paced (start anytime)', type: 'boolean', initialValue: false }),
  defineField({ name: 'dates', title: 'Upcoming dates', type: 'array', of: [{ type: 'string' }], description: 'e.g. "9 Nov 2026 · Riyadh"', hidden: ({ document }) => !!document?.selfPaced }),
  defineField({ name: 'code', title: 'Course code', type: 'string', hidden: true }),
], { title: 'title', subtitle: 'category' })

export const listTypes = [pfTeam, pfFeatured, pfClient, pfAffiliation, pfStat, acTeam, acProject, acPartner, acStat, acCourse]

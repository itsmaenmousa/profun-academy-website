import { defineField, defineType } from 'sanity'
import { NEWS_TAGS } from '../../shared/news'

/* One story. Shows on BOTH the ProFun and the Academy News pages. */
export const news = defineType({
  name: 'news',
  title: 'News story',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Headline', type: 'string', validation: r => r.required().max(120) }),
    defineField({ name: 'date', title: 'Date', type: 'date', description: 'Stories are listed newest first.', validation: r => r.required() }),
    defineField({ name: 'dateLabel', title: 'Date shown on the site (optional)', type: 'string', description: 'Use when the exact day does not matter, e.g. "Nov 2026" or "Oct – Nov 2026". Leave empty to show the date above.' }),
    defineField({ name: 'tag', title: 'Category', type: 'string', description: 'Used by the filter buttons on the News page.', options: { list: NEWS_TAGS, layout: 'radio' }, initialValue: 'ProFun News', validation: r => r.required() }),
    defineField({ name: 'label', title: 'Label (optional)', type: 'string', description: 'Small text above the headline, e.g. "Training Highlight". Leave empty to show the category.' }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true }, description: 'Click the crop icon to set the focus point so faces are not cut off.' }),
    defineField({ name: 'logo', title: 'This photo is a logo', type: 'boolean', description: 'Shows the whole image on white instead of filling the card.', initialValue: false }),
    defineField({ name: 'summary', title: 'Short summary', type: 'text', rows: 3, description: 'One or two sentences shown on the card.', validation: r => r.required().max(300) }),
    defineField({ name: 'body', title: 'Full story (optional)', type: 'text', rows: 12, description: 'Shown when someone clicks "Read more". Leave an empty line between paragraphs. Leave empty for stories that only link to another site.' }),
    defineField({
      name: 'link', title: 'External link (optional)', type: 'object', description: 'e.g. a press release PDF or an article on another site.',
      fields: [
        defineField({ name: 'label', title: 'Button text', type: 'string', placeholder: 'Read on Blooloop' }),
        defineField({ name: 'href', title: 'Link', type: 'url' }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'cta', title: 'Academy page button (optional)', type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Button text', type: 'string', placeholder: 'Start a conversation' }),
        defineField({ name: 'to', title: 'Academy page', type: 'string', options: { list: [
          { title: 'Contact', value: '/contact' }, { title: 'Programs', value: '/programs' }, { title: 'Services', value: '/services' },
          { title: 'Projects', value: '/projects' }, { title: 'Team', value: '/team' }, { title: 'About', value: '/about' },
        ] } }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
    defineField({ name: 'legacyImage', title: 'Imported photo', type: 'string', readOnly: true, hidden: ({ document }) => !document?.legacyImage, description: 'Photo carried over from the old site. Upload a new Photo above to replace it.' }),
    defineField({ name: 'pos', title: 'Imported photo focus', type: 'string', hidden: true }),
  ],
  orderings: [{ title: 'Newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', date: 'date', dateLabel: 'dateLabel', tag: 'tag', media: 'image' },
    prepare: ({ title, date, dateLabel, tag, media }) => ({ title, subtitle: `${tag ?? ''} · ${dateLabel || date || ''}`, media }),
  },
})

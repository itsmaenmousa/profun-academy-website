import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './schemaTypes'
import { importTool } from './tools/importTool'
import { pfPages, acPages } from './schemaTypes/pages'

const SINGLETONS = [...pfPages, ...acPages].map(t => t.name).concat('site_picker')

export default defineConfig({
  name: 'default',
  title: 'ProFun Website',
  projectId: 'hxe3wh04',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) => {
        // Drag-and-drop lists: the order here is the order on the site
        const ordered = (type: string, title: string) => orderableDocumentListDeskItem({ type, title, S, context })
        return S.list()
          .title('Content')
          .items([
            S.listItem().title('Landing page').id('site_picker').child(S.document().schemaType('site_picker').documentId('site_picker').title('Landing page')),
            S.divider(),
            S.listItem().title('ProFun').child(
              S.list().title('ProFun').items([
                S.listItem().title('Pages').child(
                  S.list().title('ProFun pages').items(
                    pfPages.map(t => S.listItem().title(t.title ?? t.name).id(t.name).child(S.document().schemaType(t.name).documentId(t.name).title(t.title ?? t.name))),
                  ),
                ),
                S.divider(),
                ordered('pfSector', 'Sectors'),
                ordered('pfService', 'Services'),
                ordered('pfCaseStudy', 'Case studies'),
                ordered('pfFeatured', 'Featured projects (Home)'),
                ordered('pfClient', 'Clients'),
                ordered('pfTeam', 'Team (People page)'),
                ordered('pfStat', 'Key numbers'),
                ordered('pfAffiliation', 'Affiliations'),
              ]),
            ),
            S.listItem().title('ProFun Academy').child(
              S.list().title('ProFun Academy').items([
                S.listItem().title('Pages').child(
                  S.list().title('Academy pages').items(
                    acPages.map(t => S.listItem().title(t.title ?? t.name).id(t.name).child(S.document().schemaType(t.name).documentId(t.name).title(t.title ?? t.name))),
                  ),
                ),
                S.divider(),
                ordered('acService', 'Services'),
                ordered('acFormat', 'Delivery formats'),
                ordered('acProgram', 'Programs'),
                ordered('acValue', 'What sets us apart'),
                ordered('acProject', 'Projects'),
                ordered('acCourse', 'Courses'),
                ordered('acTeam', 'Team'),
                ordered('acStat', 'Key numbers'),
                ordered('acPartner', 'Partners'),
              ]),
            ),
            S.divider(),
            S.listItem()
              .title('News (both sites)')
              .schemaType('news')
              .child(S.documentTypeList('news').title('News').defaultOrdering([{ field: 'date', direction: 'desc' }])),
          ])
      },
    }),
  ],
  tools: prev => [...prev, importTool],
  schema: {
    types: schemaTypes,
    // Pages exist once each: hide them from "Create new"
    templates: prev => prev.filter(t => !SINGLETONS.includes(t.schemaType)),
  },
  document: {
    actions: (prev, { schemaType }) => (SINGLETONS.includes(schemaType) ? prev.filter(a => !['delete', 'duplicate', 'unpublish'].includes(a.action ?? '')) : prev),
  },
})

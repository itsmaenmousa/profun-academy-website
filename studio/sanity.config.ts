import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './schemaTypes'
import { importTool } from './tools/importTool'

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
            S.listItem().title('ProFun').child(
              S.list().title('ProFun').items([
                ordered('pfFeatured', 'Featured projects (Home)'),
                ordered('pfClient', 'Clients'),
                ordered('pfTeam', 'Team (People page)'),
                ordered('pfStat', 'Key numbers'),
                ordered('pfAffiliation', 'Affiliations'),
              ]),
            ),
            S.listItem().title('ProFun Academy').child(
              S.list().title('ProFun Academy').items([
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
  schema: { types: schemaTypes },
})

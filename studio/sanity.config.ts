import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { importTool } from './tools/importTool'

export default defineConfig({
  name: 'default',
  title: 'ProFun Website',
  projectId: 'hxe3wh04',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('News')
              .schemaType('news')
              .child(S.documentTypeList('news').title('News').defaultOrdering([{ field: 'date', direction: 'desc' }])),
          ]),
    }),
  ],
  tools: prev => [...prev, importTool],
  schema: { types: schemaTypes },
})

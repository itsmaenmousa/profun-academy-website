import { defineCliConfig } from 'sanity/cli'
export default defineCliConfig({
  api: { projectId: 'hxe3wh04', dataset: 'production' },
  // Served from the website at /studio
  project: { basePath: '/studio' },
  autoUpdates: false,
})

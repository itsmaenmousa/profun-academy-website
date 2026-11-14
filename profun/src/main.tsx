import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { loadAndApplyCms } from './cms'

/* Load the dashboard content first (max 1.5s), then start the site with it */
loadAndApplyCms()
  .catch(() => {})
  .finally(() =>
    import('./App').then(({ default: App }) =>
      ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      ),
    ),
  )

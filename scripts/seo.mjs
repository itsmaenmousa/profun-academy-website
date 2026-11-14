/*
  Runs at the end of build.sh. Writes the link-preview tags (title, description, share image)
  into the three index.html files, using the dashboard values when set.
  Social apps (WhatsApp, LinkedIn) read these from the HTML, so they update on the next deploy.
*/
import fs from 'node:fs'

const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || 'profun-main-website.vercel.app'
const base = `https://${host}`
const Q = '{"pf": *[_id == "pf_home"][0]{seo_title, seo_description, seo_image}, "ac": *[_id == "ac_home"][0]{seo_title, seo_description, seo_image}, "picker": *[_id == "site_picker"][0]{seo_title, seo_description, seo_image}}'

const imgUrl = img => {
  const m = /^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/.exec(img?.asset?._ref ?? '')
  return m ? `https://cdn.sanity.io/images/hxe3wh04/production/${m[1]}-${m[2]}.${m[3]}?w=1200&h=630&fit=crop&auto=format` : null
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

let cms = {}
try {
  const res = await fetch(`https://hxe3wh04.apicdn.sanity.io/v2025-01-01/data/query/production?query=${encodeURIComponent(Q)}`, { signal: AbortSignal.timeout(8000) })
  cms = (await res.json()).result ?? {}
} catch (e) {
  console.log('seo: dashboard not reachable, using built-in values')
}

const SITES = [
  { file: 'dist/index.html', key: 'picker', title: 'ProFun | Choose your experience', desc: "ProFun, the world's trusted partner in attraction operations, and ProFun Academy, its training arm.", image: '/profun-bg.jpg' },
  { file: 'dist/profun/index.html', key: 'pf', image: '/profun/projects/ferrari-world-hero.jpg' },
  { file: 'dist/academy/index.html', key: 'ac', image: '/academy/hero-academy-v3-poster.jpg' },
]

const setTag = (html, attr, name, content) => {
  const re = new RegExp(`<meta[^>]*${attr}="${name}"[^>]*>`, 'i')
  const tag = `<meta ${attr}="${name}" content="${esc(content)}">`
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n  </head>`)
}

for (const s of SITES) {
  if (!fs.existsSync(s.file)) continue
  let html = fs.readFileSync(s.file, 'utf8')
  const d = cms[s.key] ?? {}
  const unesc = t => t.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&amp;/g, '&')
  const cur = (re, fb) => unesc(html.match(re)?.[1] ?? fb)
  const title = d.seo_title?.trim() || s.title || cur(/<title>([^<]*)<\/title>/, '')
  const desc = d.seo_description?.trim() || s.desc || cur(/<meta name="description" content="([^"]*)"/, '')
  const image = imgUrl(d.seo_image) || base + s.image
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  html = setTag(html, 'name', 'description', desc)
  html = setTag(html, 'property', 'og:title', title)
  html = setTag(html, 'property', 'og:description', desc)
  html = setTag(html, 'property', 'og:image', image)
  html = setTag(html, 'property', 'og:type', 'website')
  html = setTag(html, 'name', 'twitter:card', 'summary_large_image')
  fs.writeFileSync(s.file, html)
  console.log(`seo: ${s.file} -> ${title}`)
}

/* Per-page browser title and description (edited in the dashboard under each page's "Google and link previews") */
export function setMeta(title?: string, description?: string) {
  if (title) document.title = title
  if (description) {
    let m = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = description
  }
}

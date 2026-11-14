/*
  Contact form sending.
  If a form address (e.g. a Formspree endpoint) is set in the dashboard, the message is
  posted there and lands in the inbox. Otherwise the visitor's email app opens with the
  message ready, as before.
*/
export type FormData = { name: string; organization: string; email: string; message: string; website?: string }
export type SendResult = 'sent' | 'mail' | 'error'

export async function sendMessage(f: FormData, endpoint: string, fallbackEmail: string, site: string): Promise<SendResult> {
  if (f.website) return 'sent' // honeypot: bots fill the hidden field
  const subject = `Website enquiry from ${f.name}${f.organization ? `, ${f.organization}` : ''}`
  if (endpoint && /^https:\/\//.test(endpoint.trim())) {
    try {
      const res = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: f.name, organization: f.organization, email: f.email, message: f.message, _subject: `${subject} (${site})`, _replyto: f.email }),
      })
      if (res.ok) return 'sent'
    } catch { /* fall through to the email app */ }
  }
  const body = `${f.message}\n\n${f.name}${f.organization ? `\n${f.organization}` : ''}\n${f.email}`
  window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mail'
}

import { useState } from 'react'
import { useClient, type Tool } from 'sanity'
import { Box, Button, Card, Stack, Text, Heading } from '@sanity/ui'
import { NEWS_ALL, isoDate, hasDay, isLogoImage } from '../../shared/news'

/*
  One-click import of the stories that were built into the website.
  Safe to click again: stories that already exist in the dashboard are left untouched.
*/
function ImportPage() {
  const client = useClient({ apiVersion: '2025-01-01' })
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const run = async () => {
    setState('busy')
    try {
      const tx = client.transaction()
      NEWS_ALL.forEach(n => {
        tx.createIfNotExists({
          _id: `news-${n.id}`,
          _type: 'news',
          title: n.title,
          date: isoDate(n.date),
          ...(hasDay(n.date) ? {} : { dateLabel: n.date }),
          tag: n.tag,
          ...(n.label ? { label: n.label } : {}),
          logo: isLogoImage(n.image),
          legacyImage: n.image,
          ...(n.pos ? { pos: n.pos } : {}),
          summary: n.summary,
          ...(n.body ? { body: n.body.join('\n\n') } : {}),
          ...(n.link ? { link: { _type: 'object', label: n.link.label, href: n.link.href } } : {}),
          ...(n.cta ? { cta: { _type: 'object', label: n.cta.label, to: n.cta.to } } : {}),
        })
      })
      await tx.commit()
      setState('done')
      setMsg(`${NEWS_ALL.length} stories checked. Any that were missing have been added. Open "Content" to see them.`)
    } catch (e) {
      setState('error')
      setMsg(e instanceof Error ? e.message : String(e))
    }
  }

  return (
    <Box padding={5} style={{ maxWidth: 640 }}>
      <Stack gap={5}>
        <Heading size={3}>Import website content</Heading>
        <Text muted>
          Copies the {NEWS_ALL.length} news stories that are on the website today into this dashboard. You only need to do this once.
          Stories you have already edited here are never overwritten.
        </Text>
        <Box>
          <Button text={state === 'busy' ? 'Importing…' : 'Import news stories'} tone="primary" disabled={state === 'busy'} onClick={run} />
        </Box>
        {msg && (
          <Card padding={4} radius={2} tone={state === 'error' ? 'critical' : 'positive'}>
            <Text>{msg}</Text>
          </Card>
        )}
      </Stack>
    </Box>
  )
}

export const importTool: Tool = {
  name: 'import',
  title: 'Import',
  component: ImportPage,
}

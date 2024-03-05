'use client'

import { useState, useEffect } from 'react'
import { markdownToHtml } from '@/lib/markdown-to-html'
import { type Release } from '@/types'

export function useContent({ releases }: { releases: Release[] }) {
  const [htmlContent, setHtmlContent] = useState<string[]>([])

  useEffect(() => {
    async function convertMarkdown() {
      try {
        const html = await Promise.all(
          releases.map(async (release) => await markdownToHtml(release.body))
        )
        setHtmlContent(html)
      } catch (error) {
        console.error('Error converting markdown to HTML:', error)
      }
    }

    convertMarkdown()
  }, [releases])

  return { htmlContent }
}
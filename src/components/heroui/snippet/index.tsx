import React, { forwardRef } from 'react'
import { Snippet as SnippetHeroUI, SnippetProps as SnippetPropsHeroUI } from '@heroui/react'

export type SnippetProps = SnippetPropsHeroUI

export const Snippet = forwardRef<HTMLDivElement, SnippetProps>((props, ref) => {
  return <SnippetHeroUI ref={ref} {...props} />
})

Snippet.displayName = 'Snippet'

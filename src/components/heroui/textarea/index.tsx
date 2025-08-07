import React, { forwardRef } from 'react'
import { Textarea as TextareaHeroUI, TextAreaProps as TextareaPropsHeroUI } from '@heroui/react'

export type TextareaProps = TextareaPropsHeroUI

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <TextareaHeroUI ref={ref} {...props} />
})

Textarea.displayName = 'Textarea'

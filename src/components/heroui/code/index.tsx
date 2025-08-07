import React, { forwardRef } from 'react'
import { Code as CodeHeroUI, CodeProps as CodePropsHeroUI } from '@heroui/react'

export type CodeProps = CodePropsHeroUI

export const Code = forwardRef<HTMLElement, CodeProps>((props, ref) => {
  return <CodeHeroUI ref={ref} {...props} />
})

Code.displayName = 'Code'

import React, { forwardRef } from 'react'
import { ScrollShadow as ScrollShadowHeroUI, ScrollShadowProps as ScrollShadowPropsHeroUI } from '@heroui/react'

export type ScrollShadowProps = ScrollShadowPropsHeroUI

export const ScrollShadow = forwardRef<HTMLDivElement, ScrollShadowProps>((props, ref) => {
  return <ScrollShadowHeroUI ref={ref} {...props} />
})

ScrollShadow.displayName = 'ScrollShadow'

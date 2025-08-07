import React, { forwardRef } from 'react'
import { Spacer as SpacerHeroUI, SpacerProps as SpacerPropsHeroUI } from '@heroui/react'

export type SpacerProps = SpacerPropsHeroUI

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>((props, ref) => {
  return <SpacerHeroUI ref={ref} {...props} />
})

Spacer.displayName = 'Spacer'

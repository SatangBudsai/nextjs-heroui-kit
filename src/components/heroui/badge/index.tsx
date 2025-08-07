import React, { forwardRef } from 'react'
import { Badge as BadgeHeroUI, BadgeProps as BadgePropsHeroUI } from '@heroui/react'

export type BadgeProps = BadgePropsHeroUI

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <BadgeHeroUI ref={ref} {...props} />
})

Badge.displayName = 'Badge'

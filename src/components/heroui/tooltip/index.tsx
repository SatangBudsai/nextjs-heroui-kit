import React, { forwardRef } from 'react'
import { Tooltip as TooltipHeroUI, TooltipProps as TooltipPropsHeroUI } from '@heroui/react'

export type TooltipProps = TooltipPropsHeroUI

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  return <TooltipHeroUI ref={ref} {...props} />
})

Tooltip.displayName = 'Tooltip'

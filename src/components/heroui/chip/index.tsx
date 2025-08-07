import React, { forwardRef } from 'react'
import { Chip as ChipHeroUI, ChipProps as ChipPropsHeroUI } from '@heroui/react'

export type ChipProps = ChipPropsHeroUI

export const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  return <ChipHeroUI ref={ref} {...props} />
})

Chip.displayName = 'Chip'

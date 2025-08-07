import React, { forwardRef } from 'react'
import {
  Popover as PopoverHeroUI,
  PopoverTrigger as PopoverTriggerHeroUI,
  PopoverContent as PopoverContentHeroUI,
  PopoverProps as PopoverPropsHeroUI,
  PopoverTriggerProps as PopoverTriggerPropsHeroUI,
  PopoverContentProps as PopoverContentPropsHeroUI
} from '@heroui/react'

export type PopoverProps = PopoverPropsHeroUI

export const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  return <PopoverHeroUI ref={ref} {...props} />
})

Popover.displayName = 'Popover'

export type PopoverTriggerProps = PopoverTriggerPropsHeroUI

export const PopoverTrigger: React.FC<PopoverTriggerProps> = props => {
  return <PopoverTriggerHeroUI {...props} />
}

PopoverTrigger.displayName = 'PopoverTrigger'

export type PopoverContentProps = PopoverContentPropsHeroUI

export const PopoverContent: React.FC<PopoverContentProps> = props => {
  return <PopoverContentHeroUI {...props} />
}

PopoverContent.displayName = 'PopoverContent'

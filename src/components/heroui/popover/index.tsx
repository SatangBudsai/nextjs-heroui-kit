import React from 'react'
import {
  Popover as PopoverHeroUI,
  PopoverTrigger as PopoverTriggerHeroUI,
  PopoverContent as PopoverContentHeroUI
} from '@heroui/react'

type PopoverProps = React.ComponentProps<typeof PopoverHeroUI> & {}

const Popover = ({ ...props }: PopoverProps) => {
  return <PopoverHeroUI {...props} />
}

type PopoverTriggerProps = React.ComponentProps<typeof PopoverTriggerHeroUI> & {}

const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  return <PopoverTriggerHeroUI {...props} />
}

type PopoverContentProps = React.ComponentProps<typeof PopoverContentHeroUI> & {}

const PopoverContent = ({ ...props }: PopoverContentProps) => {
  return <PopoverContentHeroUI {...props} />
}

export default Popover
export { PopoverTrigger, PopoverContent }

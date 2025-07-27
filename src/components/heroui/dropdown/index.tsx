import { forwardRef } from 'react'
import {
  Dropdown as DropdownHeroUI,
  DropdownTrigger as DropdownTriggerHeroUI,
  DropdownMenu as DropdownMenuHeroUI,
  DropdownItem as DropdownItemHeroUI,
  DropdownSection as DropdownSectionHeroUI
} from '@heroui/react'

type DropdownProps = React.ComponentProps<typeof DropdownHeroUI> & {}

const Dropdown = ({ ...props }: DropdownProps) => {
  return <DropdownHeroUI {...props} />
}

type DropdownTriggerProps = React.ComponentProps<typeof DropdownTriggerHeroUI> & {}

const DropdownTrigger = ({ ...props }: DropdownTriggerProps) => {
  return <DropdownTriggerHeroUI {...props} />
}

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuHeroUI> & {}

const DropdownMenu = forwardRef<React.ElementRef<typeof DropdownMenuHeroUI>, DropdownMenuProps>((props, ref) => {
  return <DropdownMenuHeroUI ref={ref} {...props} />
})
DropdownMenu.displayName = 'DropdownMenu'

type DropdownItemProps = React.ComponentProps<typeof DropdownItemHeroUI> & {}

const DropdownItem = ({ ...props }: DropdownItemProps) => {
  return <DropdownItemHeroUI {...props} />
}

type DropdownSectionProps = React.ComponentProps<typeof DropdownSectionHeroUI> & {}

const DropdownSection = ({ ...props }: DropdownSectionProps) => {
  return <DropdownSectionHeroUI {...props} />
}

export default Dropdown
export { DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection }

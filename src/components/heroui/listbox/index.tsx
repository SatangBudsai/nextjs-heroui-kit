import { forwardRef } from 'react'
import {
  Listbox as ListboxHeroUI,
  ListboxItem as ListboxItemHeroUI,
  ListboxSection as ListboxSectionHeroUI
} from '@heroui/react'

type ListboxProps = React.ComponentProps<typeof ListboxHeroUI> & {}

const Listbox = forwardRef<React.ElementRef<typeof ListboxHeroUI>, ListboxProps>((props, ref) => {
  return <ListboxHeroUI ref={ref} {...props} />
})
Listbox.displayName = 'Listbox'

type ListboxItemProps = React.ComponentProps<typeof ListboxItemHeroUI> & {}

const ListboxItem = ({ ...props }: ListboxItemProps) => {
  return <ListboxItemHeroUI {...props} />
}

type ListboxSectionProps = React.ComponentProps<typeof ListboxSectionHeroUI> & {}

const ListboxSection = ({ ...props }: ListboxSectionProps) => {
  return <ListboxSectionHeroUI {...props} />
}

export default Listbox
export { ListboxItem, ListboxSection }

import { forwardRef } from 'react'
import {
  Select as SelectHeroUI,
  SelectItem as SelectItemHeroUI,
  SelectSection as SelectSectionHeroUI
} from '@heroui/react'

type SelectProps = React.ComponentProps<typeof SelectHeroUI> & {}

const Select = forwardRef<React.ElementRef<typeof SelectHeroUI>, SelectProps>((props, ref) => {
  return <SelectHeroUI ref={ref} {...props} />
})
Select.displayName = 'Select'

type SelectItemProps = React.ComponentProps<typeof SelectItemHeroUI> & {}

const SelectItem = ({ ...props }: SelectItemProps) => {
  return <SelectItemHeroUI {...props} />
}

type SelectSectionProps = React.ComponentProps<typeof SelectSectionHeroUI> & {}

const SelectSection = ({ ...props }: SelectSectionProps) => {
  return <SelectSectionHeroUI {...props} />
}

export default Select
export { SelectItem, SelectSection }

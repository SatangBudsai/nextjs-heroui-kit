import { Fragment } from 'react'
import { Select as SelectHeroUI, SelectItem as SelectItemHeroUI, SelectSection as SelectSectionHeroUI } from '@heroui/react'

type SelectProps = React.ComponentProps<typeof SelectHeroUI> & {}

const Select = ({ ...props }: SelectProps) => {
  return (
    <Fragment>
      <SelectHeroUI {...props} />
    </Fragment>
  )
}

type SelectItemProps = React.ComponentProps<typeof SelectItemHeroUI> & {}

const SelectItem = ({ ...props }: SelectItemProps) => {
  return (
    <Fragment>
      <SelectItemHeroUI {...props} />
    </Fragment>
  )
}

type SelectSectionProps = React.ComponentProps<typeof SelectSectionHeroUI> & {}

const SelectSection = ({ ...props }: SelectSectionProps) => {
  return (
    <Fragment>
      <SelectSectionHeroUI {...props} />
    </Fragment>
  )
}

export default Select
export { SelectItem, SelectSection }

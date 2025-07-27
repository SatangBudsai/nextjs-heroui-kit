import React from 'react'
import {
  Autocomplete as AutocompleteHeroUI,
  AutocompleteItem as AutocompleteItemHeroUI,
  AutocompleteSection as AutocompleteSectionHeroUI
} from '@heroui/react'

type AutocompleteProps = React.ComponentProps<typeof AutocompleteHeroUI> & {}

const Autocomplete = ({ ...props }: AutocompleteProps) => {
  return <AutocompleteHeroUI {...props} />
}

type AutocompleteItemProps = React.ComponentProps<typeof AutocompleteItemHeroUI> & {}

const AutocompleteItem = ({ ...props }: AutocompleteItemProps) => {
  return <AutocompleteItemHeroUI {...props} />
}

type AutocompleteSectionProps = React.ComponentProps<typeof AutocompleteSectionHeroUI> & {}

const AutocompleteSection = ({ ...props }: AutocompleteSectionProps) => {
  return <AutocompleteSectionHeroUI {...props} />
}

export default Autocomplete
export { AutocompleteItem, AutocompleteSection }

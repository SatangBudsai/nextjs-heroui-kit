import React, { forwardRef } from 'react'
import {
  Autocomplete as AutocompleteHeroUI,
  AutocompleteItem as AutocompleteItemHeroUI,
  AutocompleteSection as AutocompleteSectionHeroUI,
  AutocompleteProps as AutocompletePropsHeroUI,
  AutocompleteItemProps as AutocompleteItemPropsHeroUI,
  AutocompleteSectionProps as AutocompleteSectionPropsHeroUI
} from '@heroui/react'

export type AutocompleteProps = AutocompletePropsHeroUI

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(({ children, ...props }, ref) => {
  const processChildren = (childrenToProcess: React.ReactNode): React.ReactNode => {
    return React.Children.map(childrenToProcess, child => {
      if (React.isValidElement(child)) {
        if (child.type === AutocompleteItem) {
          return <AutocompleteItemHeroUI {...child.props} />
        }
        if (child.type === AutocompleteSection) {
          return (
            <AutocompleteSectionHeroUI {...child.props}>
              {processChildren(child.props.children)}
            </AutocompleteSectionHeroUI>
          )
        }
      }
      return child
    })
  }

  return (
    <AutocompleteHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processChildren(children)}
    </AutocompleteHeroUI>
  )
})

Autocomplete.displayName = 'Autocomplete'

export type AutocompleteItemProps = AutocompleteItemPropsHeroUI

export const AutocompleteItem: React.FC<AutocompleteItemProps> = props => {
  return null // This component won't render directly
}

AutocompleteItem.displayName = 'AutocompleteItem'

export type AutocompleteSectionProps = AutocompleteSectionPropsHeroUI

export const AutocompleteSection: React.FC<AutocompleteSectionProps> = props => {
  return null // This component won't render directly
}

AutocompleteSection.displayName = 'AutocompleteSection'

export default Autocomplete

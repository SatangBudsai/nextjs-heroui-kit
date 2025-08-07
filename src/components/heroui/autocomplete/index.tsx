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
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === AutocompleteItem) {
      return <AutocompleteItemHeroUI key={child.key} {...(child.props as AutocompleteItemPropsHeroUI)} />
    }
    if (React.isValidElement(child) && child.type === AutocompleteSection) {
      return <AutocompleteSectionHeroUI key={child.key} {...(child.props as AutocompleteSectionPropsHeroUI)} />
    }
    return child
  })

  return (
    <AutocompleteHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
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

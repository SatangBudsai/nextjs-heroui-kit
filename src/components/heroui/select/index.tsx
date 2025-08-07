import React, { forwardRef } from 'react'
import {
  Select as SelectHeroUI,
  SelectItem as SelectItemHeroUI,
  SelectProps as SelectPropsHeroUI,
  SelectItemProps as SelectItemPropsHeroUI,
  SelectSection as SelectSectionHeroUI,
  SelectSectionProps as SelectSectionPropsHeroUI
} from '@heroui/react'

export type SelectProps = SelectPropsHeroUI

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === SelectItem) {
      return <SelectItemHeroUI key={child.key} {...(child.props as SelectItemPropsHeroUI)} />
    }
    return child
  })

  return (
    <SelectHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </SelectHeroUI>
  )
})

Select.displayName = 'Select'

export type SelectItemProps = SelectItemPropsHeroUI

export const SelectItem: React.FC<SelectItemProps> = props => {
  return null // This component won't render directly
}

SelectItem.displayName = 'SelectItem'

export type SelectSectionProps = SelectSectionPropsHeroUI

export const SelectSection: React.FC<SelectSectionProps> = props => {
  return null // This component won't render directly
}

SelectSection.displayName = 'SelectSection'

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
  const processChildren = (childrenToProcess: React.ReactNode): React.ReactNode => {
    return React.Children.map(childrenToProcess, child => {
      if (React.isValidElement(child)) {
        if (child.type === SelectItem) {
          return <SelectItemHeroUI key={child.key} {...child.props} />
        }
        if (child.type === SelectSection) {
          return (
            <SelectSectionHeroUI key={child.key} {...child.props}>
              {processChildren(child.props.children)}
            </SelectSectionHeroUI>
          )
        }
      }
      return child
    })
  }

  return (
    <SelectHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processChildren(children)}
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

export default Select

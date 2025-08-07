import React, { forwardRef } from 'react'
import {
  Listbox as ListboxHeroUI,
  ListboxItem as ListboxItemHeroUI,
  ListboxSection as ListboxSectionHeroUI,
  ListboxProps as ListboxPropsHeroUI,
  ListboxItemProps as ListboxItemPropsHeroUI,
  ListboxSectionProps as ListboxSectionPropsHeroUI
} from '@heroui/react'

export type ListboxProps = ListboxPropsHeroUI

export const Listbox = forwardRef<HTMLUListElement, ListboxProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === ListboxItem) {
      // @ts-ignore
      return <ListboxItemHeroUI key={child.key} {...(child.props as ListboxItemPropsHeroUI)} />
    }
    if (React.isValidElement(child) && child.type === ListboxSection) {
      // @ts-ignore
      return <ListboxSectionHeroUI key={child.key} {...(child.props as ListboxSectionPropsHeroUI)} />
    }
    return child
  })

  return (
    <ListboxHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </ListboxHeroUI>
  )
})

Listbox.displayName = 'Listbox'

export type ListboxItemProps = ListboxItemPropsHeroUI

export const ListboxItem: React.FC<ListboxItemProps> = props => {
  return null // This component won't render directly
}

ListboxItem.displayName = 'ListboxItem'

export type ListboxSectionProps = ListboxSectionPropsHeroUI

export const ListboxSection: React.FC<ListboxSectionProps> = props => {
  return null // This component won't render directly
}

ListboxSection.displayName = 'ListboxSection'

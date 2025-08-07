import React, { forwardRef } from 'react'
import {
  Dropdown as DropdownHeroUI,
  DropdownTrigger as DropdownTriggerHeroUI,
  DropdownMenu as DropdownMenuHeroUI,
  DropdownItem as DropdownItemHeroUI,
  DropdownSection as DropdownSectionHeroUI,
  DropdownProps as DropdownPropsHeroUI,
  DropdownTriggerProps as DropdownTriggerPropsHeroUI,
  DropdownMenuProps as DropdownMenuPropsHeroUI,
  DropdownItemProps as DropdownItemPropsHeroUI,
  DropdownSectionProps as DropdownSectionPropsHeroUI
} from '@heroui/react'

export type DropdownProps = DropdownPropsHeroUI

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  return <DropdownHeroUI ref={ref} {...props} />
})

Dropdown.displayName = 'Dropdown'

export type DropdownTriggerProps = DropdownTriggerPropsHeroUI

export const DropdownTrigger: React.FC<DropdownTriggerProps> = props => {
  return <DropdownTriggerHeroUI {...props} />
}

DropdownTrigger.displayName = 'DropdownTrigger'

export type DropdownMenuProps = DropdownMenuPropsHeroUI

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === DropdownItem) {
      // @ts-ignore
      return <DropdownItemHeroUI key={child.key} {...(child.props as DropdownItemPropsHeroUI)} />
    }
    if (React.isValidElement(child) && child.type === DropdownSection) {
      // @ts-ignore
      return <DropdownSectionHeroUI key={child.key} {...(child.props as DropdownSectionPropsHeroUI)} />
    }
    return child
  })

  return (
    <DropdownMenuHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </DropdownMenuHeroUI>
  )
})

DropdownMenu.displayName = 'DropdownMenu'

export type DropdownItemProps = DropdownItemPropsHeroUI

export const DropdownItem: React.FC<DropdownItemProps> = props => {
  return null // This component won't render directly
}

DropdownItem.displayName = 'DropdownItem'

export type DropdownSectionProps = DropdownSectionPropsHeroUI

export const DropdownSection: React.FC<DropdownSectionProps> = props => {
  return null // This component won't render directly
}

DropdownSection.displayName = 'DropdownSection'

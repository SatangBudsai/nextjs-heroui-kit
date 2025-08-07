import React, { forwardRef } from 'react'
import {
  Menu as MenuHeroUI,
  MenuItem as MenuItemHeroUI,
  MenuSection as MenuSectionHeroUI,
  MenuProps as MenuPropsHeroUI,
  MenuItemProps as MenuItemPropsHeroUI,
  MenuSectionProps as MenuSectionPropsHeroUI
} from '@heroui/react'

export type MenuProps = MenuPropsHeroUI

export const Menu = forwardRef<HTMLUListElement, MenuProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === MenuItem) {
      // @ts-ignore
      return <MenuItemHeroUI key={child.key} {...(child.props as MenuItemPropsHeroUI)} />
    }
    if (React.isValidElement(child) && child.type === MenuSection) {
      // @ts-ignore
      return <MenuSectionHeroUI key={child.key} {...(child.props as MenuSectionPropsHeroUI)} />
    }
    return child
  })

  return (
    <MenuHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </MenuHeroUI>
  )
})

Menu.displayName = 'Menu'

export type MenuItemProps = MenuItemPropsHeroUI

export const MenuItem: React.FC<MenuItemProps> = props => {
  return null // This component won't render directly
}

MenuItem.displayName = 'MenuItem'

export type MenuSectionProps = MenuSectionPropsHeroUI

export const MenuSection: React.FC<MenuSectionProps> = props => {
  return null // This component won't render directly
}

MenuSection.displayName = 'MenuSection'

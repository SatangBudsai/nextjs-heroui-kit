import React, { forwardRef } from 'react'
import {
  Navbar as NavbarHeroUI,
  NavbarBrand as NavbarBrandHeroUI,
  NavbarContent as NavbarContentHeroUI,
  NavbarItem as NavbarItemHeroUI,
  NavbarMenuToggle as NavbarMenuToggleHeroUI,
  NavbarMenu as NavbarMenuHeroUI,
  NavbarMenuItem as NavbarMenuItemHeroUI,
  NavbarProps as NavbarPropsHeroUI
} from '@heroui/react'

export type NavbarProps = NavbarPropsHeroUI

export const Navbar = forwardRef<HTMLElement, NavbarProps>((props, ref) => {
  return <NavbarHeroUI ref={ref} {...props} />
})

Navbar.displayName = 'Navbar'

export type NavbarBrandProps = React.ComponentProps<typeof NavbarBrandHeroUI>

export const NavbarBrand: React.FC<NavbarBrandProps> = props => {
  return <NavbarBrandHeroUI {...props} />
}

NavbarBrand.displayName = 'NavbarBrand'

export type NavbarContentProps = React.ComponentProps<typeof NavbarContentHeroUI>

export const NavbarContent: React.FC<NavbarContentProps> = props => {
  return <NavbarContentHeroUI {...props} />
}

NavbarContent.displayName = 'NavbarContent'

export type NavbarItemProps = React.ComponentProps<typeof NavbarItemHeroUI>

export const NavbarItem: React.FC<NavbarItemProps> = props => {
  return <NavbarItemHeroUI {...props} />
}

NavbarItem.displayName = 'NavbarItem'

export type NavbarMenuToggleProps = React.ComponentProps<typeof NavbarMenuToggleHeroUI>

export const NavbarMenuToggle: React.FC<NavbarMenuToggleProps> = props => {
  return <NavbarMenuToggleHeroUI {...props} />
}

NavbarMenuToggle.displayName = 'NavbarMenuToggle'

export type NavbarMenuProps = React.ComponentProps<typeof NavbarMenuHeroUI>

export const NavbarMenu: React.FC<NavbarMenuProps> = props => {
  return <NavbarMenuHeroUI {...props} />
}

NavbarMenu.displayName = 'NavbarMenu'

export type NavbarMenuItemProps = React.ComponentProps<typeof NavbarMenuItemHeroUI>

export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = props => {
  return <NavbarMenuItemHeroUI {...props} />
}

NavbarMenuItem.displayName = 'NavbarMenuItem'

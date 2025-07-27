import { forwardRef } from 'react'
import {
  Navbar as NavbarHeroUI,
  NavbarBrand as NavbarBrandHeroUI,
  NavbarContent as NavbarContentHeroUI,
  NavbarItem as NavbarItemHeroUI,
  NavbarMenuToggle as NavbarMenuToggleHeroUI,
  NavbarMenu as NavbarMenuHeroUI,
  NavbarMenuItem as NavbarMenuItemHeroUI
} from '@heroui/react'

type NavbarProps = React.ComponentProps<typeof NavbarHeroUI> & {}

const Navbar = forwardRef<React.ElementRef<typeof NavbarHeroUI>, NavbarProps>((props, ref) => {
  return <NavbarHeroUI ref={ref} {...props} />
})
Navbar.displayName = 'Navbar'

type NavbarBrandProps = React.ComponentProps<typeof NavbarBrandHeroUI> & {}

const NavbarBrand = ({ ...props }: NavbarBrandProps) => {
  return <NavbarBrandHeroUI {...props} />
}

type NavbarContentProps = React.ComponentProps<typeof NavbarContentHeroUI> & {}

const NavbarContent = ({ ...props }: NavbarContentProps) => {
  return <NavbarContentHeroUI {...props} />
}

type NavbarItemProps = React.ComponentProps<typeof NavbarItemHeroUI> & {}

const NavbarItem = ({ ...props }: NavbarItemProps) => {
  return <NavbarItemHeroUI {...props} />
}

type NavbarMenuToggleProps = React.ComponentProps<typeof NavbarMenuToggleHeroUI> & {}

const NavbarMenuToggle = ({ ...props }: NavbarMenuToggleProps) => {
  return <NavbarMenuToggleHeroUI {...props} />
}

type NavbarMenuProps = React.ComponentProps<typeof NavbarMenuHeroUI> & {}

const NavbarMenu = ({ ...props }: NavbarMenuProps) => {
  return <NavbarMenuHeroUI {...props} />
}

type NavbarMenuItemProps = React.ComponentProps<typeof NavbarMenuItemHeroUI> & {}

const NavbarMenuItem = ({ ...props }: NavbarMenuItemProps) => {
  return <NavbarMenuItemHeroUI {...props} />
}

export default Navbar
export { NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem }

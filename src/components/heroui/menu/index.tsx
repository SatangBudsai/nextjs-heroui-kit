import { forwardRef } from 'react'
import { Menu as MenuHeroUI, MenuItem as MenuItemHeroUI, MenuSection as MenuSectionHeroUI } from '@heroui/react'

type MenuProps = React.ComponentProps<typeof MenuHeroUI> & {}

const Menu = forwardRef<React.ElementRef<typeof MenuHeroUI>, MenuProps>((props, ref) => {
  return <MenuHeroUI ref={ref} {...props} />
})
Menu.displayName = 'Menu'

type MenuItemProps = React.ComponentProps<typeof MenuItemHeroUI> & {}

const MenuItem = ({ ...props }: MenuItemProps) => {
  return <MenuItemHeroUI {...props} />
}

type MenuSectionProps = React.ComponentProps<typeof MenuSectionHeroUI> & {}

const MenuSection = ({ ...props }: MenuSectionProps) => {
  return <MenuSectionHeroUI {...props} />
}

export default Menu
export { MenuItem, MenuSection }

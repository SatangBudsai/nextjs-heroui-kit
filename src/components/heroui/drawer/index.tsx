import React from 'react'
import {
  Drawer as DrawerHeroUI,
  DrawerContent as DrawerContentHeroUI,
  DrawerHeader as DrawerHeaderHeroUI,
  DrawerBody as DrawerBodyHeroUI,
  DrawerFooter as DrawerFooterHeroUI
} from '@heroui/react'

type DrawerProps = React.ComponentProps<typeof DrawerHeroUI> & {}

const Drawer = ({ ...props }: DrawerProps) => {
  return <DrawerHeroUI {...props} />
}

type DrawerContentProps = React.ComponentProps<typeof DrawerContentHeroUI> & {}

const DrawerContent = ({ ...props }: DrawerContentProps) => {
  return <DrawerContentHeroUI {...props} />
}

type DrawerHeaderProps = React.ComponentProps<typeof DrawerHeaderHeroUI> & {}

const DrawerHeader = ({ ...props }: DrawerHeaderProps) => {
  return <DrawerHeaderHeroUI {...props} />
}

type DrawerBodyProps = React.ComponentProps<typeof DrawerBodyHeroUI> & {}

const DrawerBody = ({ ...props }: DrawerBodyProps) => {
  return <DrawerBodyHeroUI {...props} />
}

type DrawerFooterProps = React.ComponentProps<typeof DrawerFooterHeroUI> & {}

const DrawerFooter = ({ ...props }: DrawerFooterProps) => {
  return <DrawerFooterHeroUI {...props} />
}

export default Drawer
export { DrawerContent, DrawerHeader, DrawerBody, DrawerFooter }

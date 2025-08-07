import React, { forwardRef } from 'react'
import {
  Drawer as DrawerHeroUI,
  DrawerContent as DrawerContentHeroUI,
  DrawerHeader as DrawerHeaderHeroUI,
  DrawerBody as DrawerBodyHeroUI,
  DrawerFooter as DrawerFooterHeroUI,
  DrawerProps as DrawerPropsHeroUI
} from '@heroui/react'

export type DrawerProps = DrawerPropsHeroUI

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  return <DrawerHeroUI ref={ref} {...props} />
})

Drawer.displayName = 'Drawer'

export type DrawerContentProps = React.ComponentProps<typeof DrawerContentHeroUI>

export const DrawerContent: React.FC<DrawerContentProps> = props => {
  return <DrawerContentHeroUI {...props} />
}

DrawerContent.displayName = 'DrawerContent'

export type DrawerHeaderProps = React.ComponentProps<typeof DrawerHeaderHeroUI>

export const DrawerHeader: React.FC<DrawerHeaderProps> = props => {
  return <DrawerHeaderHeroUI {...props} />
}

DrawerHeader.displayName = 'DrawerHeader'

export type DrawerBodyProps = React.ComponentProps<typeof DrawerBodyHeroUI>

export const DrawerBody: React.FC<DrawerBodyProps> = props => {
  return <DrawerBodyHeroUI {...props} />
}

DrawerBody.displayName = 'DrawerBody'

export type DrawerFooterProps = React.ComponentProps<typeof DrawerFooterHeroUI>

export const DrawerFooter: React.FC<DrawerFooterProps> = props => {
  return <DrawerFooterHeroUI {...props} />
}

DrawerFooter.displayName = 'DrawerFooter'

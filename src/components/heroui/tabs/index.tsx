import React, { forwardRef } from 'react'
import { Tabs as TabsHeroUI, Tab as TabHeroUI, TabsProps as TabsPropsHeroUI } from '@heroui/react'

export type TabsProps = TabsPropsHeroUI

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  return <TabsHeroUI ref={ref} {...props} />
})

Tabs.displayName = 'Tabs'

export type TabProps = React.ComponentProps<typeof TabHeroUI>

export const Tab: React.FC<TabProps> = props => {
  return <TabHeroUI {...props} />
}

Tab.displayName = 'Tab'

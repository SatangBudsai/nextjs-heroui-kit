import React, { forwardRef } from 'react'
import { Tabs as TabsHeroUI, Tab as TabHeroUI, TabsProps as TabsPropsHeroUI } from '@heroui/react'

export type TabsProps = TabsPropsHeroUI

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  return <TabsHeroUI ref={ref} {...props} />
})

Tabs.displayName = 'Tabs'

export const Tab = TabHeroUI

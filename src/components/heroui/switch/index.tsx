import React, { forwardRef } from 'react'
import { Switch as SwitchHeroUI, SwitchProps as SwitchPropsHeroUI } from '@heroui/react'

export type SwitchProps = SwitchPropsHeroUI

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  return <SwitchHeroUI ref={ref} {...props} />
})

Switch.displayName = 'Switch'

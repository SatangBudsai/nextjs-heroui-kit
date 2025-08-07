import React, { forwardRef } from 'react'
import { Divider as DividerHeroUI, DividerProps as DividerPropsHeroUI } from '@heroui/react'

export type DividerProps = DividerPropsHeroUI

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  return <DividerHeroUI ref={ref} {...props} />
})

Divider.displayName = 'Divider'

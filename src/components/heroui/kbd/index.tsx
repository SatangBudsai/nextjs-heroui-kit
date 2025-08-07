import React, { forwardRef } from 'react'
import { Kbd as KbdHeroUI, KbdProps as KbdPropsHeroUI } from '@heroui/react'

export type KbdProps = KbdPropsHeroUI

export const Kbd = forwardRef<HTMLElement, KbdProps>((props, ref) => {
  return <KbdHeroUI ref={ref} {...props} />
})

Kbd.displayName = 'Kbd'

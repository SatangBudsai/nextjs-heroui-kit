import React, { forwardRef } from 'react'
import { Spinner as SpinnerHeroUI, SpinnerProps as SpinnerPropsHeroUI } from '@heroui/react'

export type SpinnerProps = SpinnerPropsHeroUI

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  return <SpinnerHeroUI ref={ref} {...props} />
})

Spinner.displayName = 'Spinner'

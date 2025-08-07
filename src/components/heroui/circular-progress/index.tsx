import React, { forwardRef } from 'react'
import {
  CircularProgress as CircularProgressHeroUI,
  CircularProgressProps as CircularProgressPropsHeroUI
} from '@heroui/react'

export type CircularProgressProps = CircularProgressPropsHeroUI

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>((props, ref) => {
  return <CircularProgressHeroUI ref={ref} {...props} />
})

CircularProgress.displayName = 'CircularProgress'

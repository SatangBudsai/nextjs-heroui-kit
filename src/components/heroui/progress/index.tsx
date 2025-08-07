import React, { forwardRef } from 'react'
import { Progress as ProgressHeroUI, ProgressProps as ProgressPropsHeroUI } from '@heroui/react'

export type ProgressProps = ProgressPropsHeroUI

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  return <ProgressHeroUI ref={ref} {...props} />
})

Progress.displayName = 'Progress'

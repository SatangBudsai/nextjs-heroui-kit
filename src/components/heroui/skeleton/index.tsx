import React, { forwardRef } from 'react'
import { Skeleton as SkeletonHeroUI, SkeletonProps as SkeletonPropsHeroUI } from '@heroui/react'

export type SkeletonProps = SkeletonPropsHeroUI

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  return <SkeletonHeroUI ref={ref} {...props} />
})

Skeleton.displayName = 'Skeleton'

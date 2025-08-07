import React, { forwardRef } from 'react'
import {
  Avatar as AvatarHeroUI,
  AvatarGroup as AvatarGroupHeroUI,
  AvatarProps as AvatarPropsHeroUI,
  AvatarGroupProps as AvatarGroupPropsHeroUI
} from '@heroui/react'

export type AvatarProps = AvatarPropsHeroUI

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  return <AvatarHeroUI ref={ref} {...props} />
})

Avatar.displayName = 'Avatar'

export type AvatarGroupProps = AvatarGroupPropsHeroUI

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === Avatar) {
      return <AvatarHeroUI key={child.key} {...(child.props as AvatarPropsHeroUI)} />
    }
    return child
  })

  return (
    <AvatarGroupHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </AvatarGroupHeroUI>
  )
})

AvatarGroup.displayName = 'AvatarGroup'

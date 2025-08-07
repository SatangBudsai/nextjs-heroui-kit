import React, { forwardRef } from 'react'
import { Link as LinkHeroUI, LinkProps as LinkPropsHeroUI } from '@heroui/react'

export type LinkProps = LinkPropsHeroUI

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <LinkHeroUI ref={ref} {...props} />
})

Link.displayName = 'Link'

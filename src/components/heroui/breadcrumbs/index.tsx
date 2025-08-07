import React, { forwardRef } from 'react'
import {
  Breadcrumbs as BreadcrumbsHeroUI,
  BreadcrumbItem as BreadcrumbItemHeroUI,
  BreadcrumbsProps as BreadcrumbsPropsHeroUI,
  BreadcrumbItemProps as BreadcrumbItemPropsHeroUI
} from '@heroui/react'

export type BreadcrumbsProps = BreadcrumbsPropsHeroUI

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === BreadcrumbItem) {
      return <BreadcrumbItemHeroUI key={child.key} {...(child.props as BreadcrumbItemPropsHeroUI)} />
    }
    return child
  })

  return (
    <BreadcrumbsHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </BreadcrumbsHeroUI>
  )
})

Breadcrumbs.displayName = 'Breadcrumbs'

export type BreadcrumbItemProps = BreadcrumbItemPropsHeroUI

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = props => {
  return null // This component won't render directly
}

BreadcrumbItem.displayName = 'BreadcrumbItem'

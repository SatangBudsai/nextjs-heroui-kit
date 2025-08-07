import React, { forwardRef } from 'react'
import { Pagination as PaginationHeroUI, PaginationProps as PaginationPropsHeroUI } from '@heroui/react'

export type PaginationProps = PaginationPropsHeroUI

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  return <PaginationHeroUI ref={ref} {...props} />
})

Pagination.displayName = 'Pagination'

import { forwardRef } from 'react'
import { Pagination as PaginationHeroUI } from '@heroui/react'

type PaginationProps = React.ComponentProps<typeof PaginationHeroUI> & {}

const Pagination = forwardRef<React.ElementRef<typeof PaginationHeroUI>, PaginationProps>(
  (props, ref) => {
    return <PaginationHeroUI ref={ref} {...props} />
  }
)
Pagination.displayName = 'Pagination'

export default Pagination

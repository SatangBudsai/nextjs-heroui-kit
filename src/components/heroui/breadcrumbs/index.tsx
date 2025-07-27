import { forwardRef } from 'react'
import { Breadcrumbs as BreadcrumbsHeroUI, BreadcrumbItem as BreadcrumbItemHeroUI } from '@heroui/react'

type BreadcrumbsProps = React.ComponentProps<typeof BreadcrumbsHeroUI> & {}

const Breadcrumbs = forwardRef<React.ElementRef<typeof BreadcrumbsHeroUI>, BreadcrumbsProps>((props, ref) => {
  return <BreadcrumbsHeroUI ref={ref} {...props} />
})
Breadcrumbs.displayName = 'Breadcrumbs'

type BreadcrumbItemProps = React.ComponentProps<typeof BreadcrumbItemHeroUI> & {}

const BreadcrumbItem = ({ ...props }: BreadcrumbItemProps) => {
  return <BreadcrumbItemHeroUI {...props} />
}

export default Breadcrumbs
export { BreadcrumbItem }

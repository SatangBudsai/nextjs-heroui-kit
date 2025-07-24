import { Fragment } from 'react'
import { Breadcrumbs as BreadcrumbsHeroUI, BreadcrumbItem as BreadcrumbItemHeroUI } from '@heroui/react'

type BreadcrumbsProps = React.ComponentProps<typeof BreadcrumbsHeroUI> & {}

const Breadcrumbs = ({ ...props }: BreadcrumbsProps) => {
  return (
    <Fragment>
      <BreadcrumbsHeroUI {...props} />
    </Fragment>
  )
}

type BreadcrumbItemProps = React.ComponentProps<typeof BreadcrumbItemHeroUI> & {}

const BreadcrumbItem = ({ ...props }: BreadcrumbItemProps) => {
  return (
    <Fragment>
      <BreadcrumbItemHeroUI {...props} />
    </Fragment>
  )
}

export default Breadcrumbs
export { BreadcrumbItem }

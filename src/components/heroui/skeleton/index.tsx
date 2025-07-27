import { forwardRef } from 'react'
import { Skeleton as SkeletonHeroUI } from '@heroui/react'

type SkeletonProps = React.ComponentProps<typeof SkeletonHeroUI> & {}

const Skeleton = forwardRef<React.ElementRef<typeof SkeletonHeroUI>, SkeletonProps>(
  (props, ref) => {
    return <SkeletonHeroUI ref={ref} {...props} />
  }
)
Skeleton.displayName = 'Skeleton'

export default Skeleton

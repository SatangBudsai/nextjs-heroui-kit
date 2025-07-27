import { forwardRef } from 'react'
import { Progress as ProgressHeroUI } from '@heroui/react'

type ProgressProps = React.ComponentProps<typeof ProgressHeroUI> & {}

const Progress = forwardRef<React.ElementRef<typeof ProgressHeroUI>, ProgressProps>(
  (props, ref) => {
    return <ProgressHeroUI ref={ref} {...props} />
  }
)
Progress.displayName = 'Progress'

export default Progress

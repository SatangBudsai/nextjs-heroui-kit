import { forwardRef } from 'react'
import { CircularProgress as CircularProgressHeroUI } from '@heroui/react'

type CircularProgressProps = React.ComponentProps<typeof CircularProgressHeroUI> & {}

const CircularProgress = forwardRef<React.ElementRef<typeof CircularProgressHeroUI>, CircularProgressProps>(
  (props, ref) => {
    return <CircularProgressHeroUI ref={ref} {...props} />
  }
)
CircularProgress.displayName = 'CircularProgress'

export default CircularProgress

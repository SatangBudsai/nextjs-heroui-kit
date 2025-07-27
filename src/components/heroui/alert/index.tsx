import { forwardRef } from 'react'
import { Alert as AlertHeroUI } from '@heroui/react'

type AlertProps = React.ComponentProps<typeof AlertHeroUI> & {}

const Alert = forwardRef<React.ElementRef<typeof AlertHeroUI>, AlertProps>(
  (props, ref) => {
    return <AlertHeroUI ref={ref} {...props} />
  }
)
Alert.displayName = 'Alert'

export default Alert

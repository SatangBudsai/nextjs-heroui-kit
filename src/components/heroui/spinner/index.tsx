import { forwardRef } from 'react'
import { Spinner as SpinnerHeroUI } from '@heroui/react'

type SpinnerProps = React.ComponentProps<typeof SpinnerHeroUI> & {}

const Spinner = forwardRef<React.ElementRef<typeof SpinnerHeroUI>, SpinnerProps>(
  (props, ref) => {
    return <SpinnerHeroUI ref={ref} {...props} />
  }
)
Spinner.displayName = 'Spinner'

export default Spinner

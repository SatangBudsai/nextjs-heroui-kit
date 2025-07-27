import { forwardRef } from 'react'
import { Spacer as SpacerHeroUI } from '@heroui/react'

type SpacerProps = React.ComponentProps<typeof SpacerHeroUI> & {}

const Spacer = forwardRef<React.ElementRef<typeof SpacerHeroUI>, SpacerProps>(
  (props, ref) => {
    return <SpacerHeroUI ref={ref} {...props} />
  }
)
Spacer.displayName = 'Spacer'

export default Spacer

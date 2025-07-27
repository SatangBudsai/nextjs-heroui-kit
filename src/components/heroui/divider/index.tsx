import { forwardRef } from 'react'
import { Divider as DividerHeroUI } from '@heroui/react'

type DividerProps = React.ComponentProps<typeof DividerHeroUI> & {}

const Divider = forwardRef<React.ElementRef<typeof DividerHeroUI>, DividerProps>(
  (props, ref) => {
    return <DividerHeroUI ref={ref} {...props} />
  }
)
Divider.displayName = 'Divider'

export default Divider

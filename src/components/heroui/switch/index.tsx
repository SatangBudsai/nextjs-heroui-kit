import { forwardRef } from 'react'
import { Switch as SwitchHeroUI } from '@heroui/react'

type SwitchProps = React.ComponentProps<typeof SwitchHeroUI> & {}

const Switch = forwardRef<React.ElementRef<typeof SwitchHeroUI>, SwitchProps>(
  (props, ref) => {
    return <SwitchHeroUI ref={ref} {...props} />
  }
)
Switch.displayName = 'Switch'

export default Switch

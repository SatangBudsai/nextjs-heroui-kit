import { forwardRef } from 'react'
import { Kbd as KbdHeroUI } from '@heroui/react'

type KbdProps = React.ComponentProps<typeof KbdHeroUI> & {}

const Kbd = forwardRef<React.ElementRef<typeof KbdHeroUI>, KbdProps>(
  (props, ref) => {
    return <KbdHeroUI ref={ref} {...props} />
  }
)
Kbd.displayName = 'Kbd'

export default Kbd

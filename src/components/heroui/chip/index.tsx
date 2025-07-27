import { forwardRef } from 'react'
import { Chip as ChipHeroUI } from '@heroui/react'

type ChipProps = React.ComponentProps<typeof ChipHeroUI> & {}

const Chip = forwardRef<React.ElementRef<typeof ChipHeroUI>, ChipProps>(
  (props, ref) => {
    return <ChipHeroUI ref={ref} {...props} />
  }
)
Chip.displayName = 'Chip'

export default Chip

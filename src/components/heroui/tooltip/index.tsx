import { forwardRef } from 'react'
import { Tooltip as TooltipHeroUI } from '@heroui/react'

type TooltipProps = React.ComponentProps<typeof TooltipHeroUI> & {}

const Tooltip = forwardRef<React.ElementRef<typeof TooltipHeroUI>, TooltipProps>(
  (props, ref) => {
    return <TooltipHeroUI ref={ref} {...props} />
  }
)
Tooltip.displayName = 'Tooltip'

export default Tooltip

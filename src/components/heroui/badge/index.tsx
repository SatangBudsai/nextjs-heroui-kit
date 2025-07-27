import { forwardRef } from 'react'
import { Badge as BadgeHeroUI } from '@heroui/react'

type BadgeProps = React.ComponentProps<typeof BadgeHeroUI> & {}

const Badge = forwardRef<React.ElementRef<typeof BadgeHeroUI>, BadgeProps>(
  (props, ref) => {
    return <BadgeHeroUI ref={ref} {...props} />
  }
)
Badge.displayName = 'Badge'

export default Badge

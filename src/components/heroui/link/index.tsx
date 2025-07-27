import { forwardRef } from 'react'
import { Link as LinkHeroUI } from '@heroui/react'

type LinkProps = React.ComponentProps<typeof LinkHeroUI> & {}

const Link = forwardRef<React.ElementRef<typeof LinkHeroUI>, LinkProps>(
  (props, ref) => {
    return <LinkHeroUI ref={ref} {...props} />
  }
)
Link.displayName = 'Link'

export default Link

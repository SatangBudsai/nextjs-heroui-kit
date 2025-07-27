import { forwardRef } from 'react'
import { ScrollShadow as ScrollShadowHeroUI } from '@heroui/react'

type ScrollShadowProps = React.ComponentProps<typeof ScrollShadowHeroUI> & {}

const ScrollShadow = forwardRef<React.ElementRef<typeof ScrollShadowHeroUI>, ScrollShadowProps>((props, ref) => {
  return <ScrollShadowHeroUI ref={ref} {...props} />
})
ScrollShadow.displayName = 'ScrollShadow'

export default ScrollShadow

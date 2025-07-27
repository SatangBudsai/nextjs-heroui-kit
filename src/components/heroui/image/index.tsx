import { forwardRef } from 'react'
import { Image as ImageHeroUI } from '@heroui/react'

type ImageProps = React.ComponentProps<typeof ImageHeroUI> & {}

const Image = forwardRef<React.ElementRef<typeof ImageHeroUI>, ImageProps>(
  (props, ref) => {
    return <ImageHeroUI ref={ref} {...props} />
  }
)
Image.displayName = 'Image'

export default Image

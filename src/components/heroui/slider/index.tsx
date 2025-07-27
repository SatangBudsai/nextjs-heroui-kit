import { forwardRef } from 'react'
import { Slider as SliderHeroUI } from '@heroui/react'

type SliderProps = React.ComponentProps<typeof SliderHeroUI> & {}

const Slider = forwardRef<React.ElementRef<typeof SliderHeroUI>, SliderProps>(
  (props, ref) => {
    return <SliderHeroUI ref={ref} {...props} />
  }
)
Slider.displayName = 'Slider'

export default Slider

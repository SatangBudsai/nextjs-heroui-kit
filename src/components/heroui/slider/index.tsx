import React, { forwardRef } from 'react'
import { Slider as SliderHeroUI, SliderProps as SliderPropsHeroUI } from '@heroui/react'

export type SliderProps = SliderPropsHeroUI

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  return <SliderHeroUI ref={ref} {...props} />
})

Slider.displayName = 'Slider'

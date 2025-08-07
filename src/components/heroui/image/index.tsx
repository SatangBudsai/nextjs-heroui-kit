import React, { forwardRef } from 'react'
import { Image as ImageHeroUI, ImageProps as ImagePropsHeroUI } from '@heroui/react'

export type ImageProps = ImagePropsHeroUI

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <ImageHeroUI ref={ref} {...props} />
})

Image.displayName = 'Image'

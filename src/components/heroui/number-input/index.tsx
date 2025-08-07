// Note: NumberInput component may not be available in current @heroui/react version
// This is a placeholder wrapper for when it becomes available

import React, { forwardRef } from 'react'
// import { NumberInput as NumberInputHeroUI, NumberInputProps as NumberInputPropsHeroUI } from '@heroui/react'

// Placeholder component - uncomment when NumberInput is available
// export type NumberInputProps = NumberInputPropsHeroUI
// export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
//   return <NumberInputHeroUI ref={ref} {...props} />
// })

// Temporary fallback to regular Input
import { Input } from '@heroui/react'

export type NumberInputProps = React.ComponentProps<typeof Input>

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  return <Input ref={ref} type='number' {...props} />
})

NumberInput.displayName = 'NumberInput'

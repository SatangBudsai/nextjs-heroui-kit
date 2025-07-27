// Note: NumberInput component may not be available in current @heroui/react version
// This is a placeholder wrapper for when it becomes available

import { forwardRef } from 'react'
// import { NumberInput as NumberInputHeroUI } from '@heroui/react'

// Placeholder component - uncomment when NumberInput is available
// type NumberInputProps = React.ComponentProps<typeof NumberInputHeroUI> & {}

// const NumberInput = ({ ...props }: NumberInputProps) => {
//   return <NumberInputHeroUI {...props} />
// }

// Temporary fallback to regular Input
import { Input } from '@heroui/react'

type NumberInputProps = React.ComponentProps<typeof Input> & {}

const NumberInput = forwardRef<React.ElementRef<typeof Input>, NumberInputProps>((props, ref) => {
  return <Input ref={ref} type='number' {...props} />
})
NumberInput.displayName = 'NumberInput'

export default NumberInput

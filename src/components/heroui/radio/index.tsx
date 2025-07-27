import React from 'react'
import { Radio as RadioHeroUI, RadioGroup as RadioGroupHeroUI } from '@heroui/react'

type RadioProps = React.ComponentProps<typeof RadioHeroUI> & {}

const Radio = ({ ...props }: RadioProps) => {
  return <RadioHeroUI {...props} />
}

type RadioGroupProps = React.ComponentProps<typeof RadioGroupHeroUI> & {}

const RadioGroup = ({ ...props }: RadioGroupProps) => {
  return <RadioGroupHeroUI {...props} />
}

export default Radio
export { RadioGroup }

import React from 'react'
import { InputOtp as InputOtpHeroUI } from '@heroui/react'

type InputOtpProps = React.ComponentProps<typeof InputOtpHeroUI> & {}

const InputOtp = ({ ...props }: InputOtpProps) => {
  return (
    
      <InputOtpHeroUI {...props} />
    
  )
}

export default InputOtp

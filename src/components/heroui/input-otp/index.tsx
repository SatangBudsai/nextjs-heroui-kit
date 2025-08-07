import React, { forwardRef } from 'react'
import { InputOtp as InputOtpHeroUI, InputOtpProps as InputOtpPropsHeroUI } from '@heroui/react'

export type InputOtpProps = InputOtpPropsHeroUI

export const InputOtp = forwardRef<HTMLInputElement, InputOtpProps>((props, ref) => {
  return <InputOtpHeroUI ref={ref} {...props} />
})

InputOtp.displayName = 'InputOtp'

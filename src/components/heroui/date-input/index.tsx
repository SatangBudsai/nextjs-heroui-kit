import React, { forwardRef } from 'react'
import { DateInput as DateInputHeroUI, DateInputProps as DateInputPropsHeroUI } from '@heroui/react'

export type DateInputProps = DateInputPropsHeroUI

export const DateInput = forwardRef<HTMLDivElement, DateInputProps>((props, ref) => {
  return <DateInputHeroUI ref={ref} {...props} />
})

DateInput.displayName = 'DateInput'

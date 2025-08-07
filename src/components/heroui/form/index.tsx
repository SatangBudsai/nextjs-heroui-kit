import React, { forwardRef } from 'react'
import { Form as FormHeroUI, FormProps as FormPropsHeroUI } from '@heroui/react'

export type FormProps = FormPropsHeroUI

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return <FormHeroUI ref={ref} {...props} />
})

Form.displayName = 'Form'

import React from 'react'
import { Form as FormHeroUI } from '@heroui/react'

type FormProps = React.ComponentProps<typeof FormHeroUI> & {}

const Form = ({ ...props }: FormProps) => {
  return (
    
      <FormHeroUI {...props} />
    
  )
}

export default Form

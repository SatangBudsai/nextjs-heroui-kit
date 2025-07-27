import { forwardRef } from 'react'
import { Checkbox as CheckboxHeroUI, CheckboxGroup as CheckboxGroupHeroUI } from '@heroui/react'

type CheckboxProps = React.ComponentProps<typeof CheckboxHeroUI> & {}

const Checkbox = forwardRef<React.ElementRef<typeof CheckboxHeroUI>, CheckboxProps>(
  (props, ref) => {
    return <CheckboxHeroUI ref={ref} {...props} />
  }
)
Checkbox.displayName = 'Checkbox'

type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroupHeroUI> & {}

const CheckboxGroup = ({ ...props }: CheckboxGroupProps) => {
  return (
    
      <CheckboxGroupHeroUI {...props} />
    
  )
}

export default Checkbox
export { CheckboxGroup }

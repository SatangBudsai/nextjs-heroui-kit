import { forwardRef } from 'react'
import { Button as ButtonHeroUI, ButtonGroup as ButtonGroupHeroUI } from '@heroui/react'

type ButtonProps = React.ComponentProps<typeof ButtonHeroUI> & {}

const Button = forwardRef<React.ElementRef<typeof ButtonHeroUI>, ButtonProps>(
  (props, ref) => {
    return <ButtonHeroUI ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

type ButtonGroupProps = React.ComponentProps<typeof ButtonGroupHeroUI> & {}

const ButtonGroup = ({ ...props }: ButtonGroupProps) => {
  return (
    
      <ButtonGroupHeroUI {...props} />
    
  )
}

export default Button
export { ButtonGroup }

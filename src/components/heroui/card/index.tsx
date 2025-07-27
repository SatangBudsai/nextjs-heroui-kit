import { forwardRef } from 'react'
import { Card as CardHeroUI, CardHeader as CardHeaderHeroUI, CardBody as CardBodyHeroUI, CardFooter as CardFooterHeroUI } from '@heroui/react'

type CardProps = React.ComponentProps<typeof CardHeroUI> & {}

const Card = forwardRef<React.ElementRef<typeof CardHeroUI>, CardProps>(
  (props, ref) => {
    return <CardHeroUI ref={ref} {...props} />
  }
)
Card.displayName = 'Card'

type CardHeaderProps = React.ComponentProps<typeof CardHeaderHeroUI> & {}

const CardHeader = ({ ...props }: CardHeaderProps) => {
  return (
    
      <CardHeaderHeroUI {...props} />
    
  )
}

type CardBodyProps = React.ComponentProps<typeof CardBodyHeroUI> & {}

const CardBody = ({ ...props }: CardBodyProps) => {
  return (
    
      <CardBodyHeroUI {...props} />
    
  )
}

type CardFooterProps = React.ComponentProps<typeof CardFooterHeroUI> & {}

const CardFooter = ({ ...props }: CardFooterProps) => {
  return (
    
      <CardFooterHeroUI {...props} />
    
  )
}

export default Card
export { CardHeader, CardBody, CardFooter }

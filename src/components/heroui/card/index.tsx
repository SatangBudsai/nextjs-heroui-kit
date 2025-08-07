import React, { forwardRef } from 'react'
import {
  Card as CardHeroUI,
  CardHeader as CardHeaderHeroUI,
  CardBody as CardBodyHeroUI,
  CardFooter as CardFooterHeroUI,
  CardProps as CardPropsHeroUI
} from '@heroui/react'

export type CardProps = CardPropsHeroUI

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return <CardHeroUI ref={ref} {...props} />
})

Card.displayName = 'Card'

export type CardHeaderProps = React.ComponentProps<typeof CardHeaderHeroUI>

export const CardHeader: React.FC<CardHeaderProps> = props => {
  return <CardHeaderHeroUI {...props} />
}

CardHeader.displayName = 'CardHeader'

export type CardBodyProps = React.ComponentProps<typeof CardBodyHeroUI>

export const CardBody: React.FC<CardBodyProps> = props => {
  return <CardBodyHeroUI {...props} />
}

CardBody.displayName = 'CardBody'

export type CardFooterProps = React.ComponentProps<typeof CardFooterHeroUI>

export const CardFooter: React.FC<CardFooterProps> = props => {
  return <CardFooterHeroUI {...props} />
}

CardFooter.displayName = 'CardFooter'

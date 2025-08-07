import React, { forwardRef } from 'react'
import {
  Button as ButtonHeroUI,
  ButtonGroup as ButtonGroupHeroUI,
  ButtonProps as ButtonPropsHeroUI,
  ButtonGroupProps as ButtonGroupPropsHeroUI
} from '@heroui/react'

export type ButtonProps = ButtonPropsHeroUI

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <ButtonHeroUI ref={ref} {...props} />
})

Button.displayName = 'Button'

export type ButtonGroupProps = ButtonGroupPropsHeroUI

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === Button) {
      return <ButtonHeroUI key={child.key} {...(child.props as ButtonPropsHeroUI)} />
    }
    return child
  })

  return (
    <ButtonGroupHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </ButtonGroupHeroUI>
  )
})

ButtonGroup.displayName = 'ButtonGroup'

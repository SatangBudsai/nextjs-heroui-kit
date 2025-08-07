import React, { forwardRef } from 'react'
import {
  Checkbox as CheckboxHeroUI,
  CheckboxGroup as CheckboxGroupHeroUI,
  CheckboxProps as CheckboxPropsHeroUI,
  CheckboxGroupProps as CheckboxGroupPropsHeroUI
} from '@heroui/react'

export type CheckboxProps = CheckboxPropsHeroUI

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return <CheckboxHeroUI ref={ref} {...props} />
})

Checkbox.displayName = 'Checkbox'

export type CheckboxGroupProps = CheckboxGroupPropsHeroUI

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === Checkbox) {
      return <CheckboxHeroUI key={child.key} {...(child.props as CheckboxPropsHeroUI)} />
    }
    return child
  })

  return (
    <CheckboxGroupHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </CheckboxGroupHeroUI>
  )
})

CheckboxGroup.displayName = 'CheckboxGroup'

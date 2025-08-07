import React, { forwardRef } from 'react'
import {
  Radio as RadioHeroUI,
  RadioGroup as RadioGroupHeroUI,
  RadioProps as RadioPropsHeroUI,
  RadioGroupProps as RadioGroupPropsHeroUI
} from '@heroui/react'

export type RadioProps = RadioPropsHeroUI

export const Radio: React.FC<RadioProps> = props => {
  return <RadioHeroUI {...props} />
}

Radio.displayName = 'Radio'

export type RadioGroupProps = RadioGroupPropsHeroUI

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === Radio) {
      // @ts-ignore
      return <RadioHeroUI key={child.key} {...(child.props as RadioPropsHeroUI)} />
    }
    return child
  })

  return (
    <RadioGroupHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </RadioGroupHeroUI>
  )
})

RadioGroup.displayName = 'RadioGroup'

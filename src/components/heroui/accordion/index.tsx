import React, { forwardRef } from 'react'
import {
  Accordion as AccordionHeroUI,
  AccordionItem as AccordionItemHeroUI,
  AccordionProps as AccordionPropsHeroUI,
  AccordionItemProps as AccordionItemPropsHeroUI
} from '@heroui/react'

export type AccordionProps = AccordionPropsHeroUI

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ children, ...props }, ref) => {
  const processedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === AccordionItem) {
      return <AccordionItemHeroUI key={child.key} {...(child.props as AccordionItemPropsHeroUI)} />
    }
    return child
  })

  return (
    <AccordionHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processedChildren}
    </AccordionHeroUI>
  )
})

Accordion.displayName = 'Accordion'

export type AccordionItemProps = AccordionItemPropsHeroUI

export const AccordionItem: React.FC<AccordionItemProps> = props => {
  return null // This component won't render directly
}

AccordionItem.displayName = 'AccordionItem'

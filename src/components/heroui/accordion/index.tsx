import React, { forwardRef } from 'react'
import {
  Accordion as AccordionHeroUI,
  AccordionItem as AccordionItemHeroUI,
  AccordionProps as AccordionPropsHeroUI,
  AccordionItemProps as AccordionItemPropsHeroUI
} from '@heroui/react'

export type AccordionProps = AccordionPropsHeroUI

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ children, ...props }, ref) => {
  const processChildren = (childrenToProcess: React.ReactNode): React.ReactNode => {
    return React.Children.map(childrenToProcess, child => {
      if (React.isValidElement(child) && child.type === AccordionItem) {
        return <AccordionItemHeroUI key={child.key} {...child.props} />
      }
      return child
    })
  }

  return (
    <AccordionHeroUI ref={ref} {...props}>
      {/* @ts-ignore */}
      {processChildren(children)}
    </AccordionHeroUI>
  )
})

Accordion.displayName = 'Accordion'

export type AccordionItemProps = AccordionItemPropsHeroUI

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, ...props }) => {
  return <AccordionItemHeroUI {...props}>{children}</AccordionItemHeroUI>
}

AccordionItem.displayName = 'AccordionItem'

export default Accordion

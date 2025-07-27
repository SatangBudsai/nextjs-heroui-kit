import React from 'react'
import { Accordion as AccordionHeroUI, AccordionItem as AccordionItemHeroUI } from '@heroui/react'

type AccordionProps = React.ComponentProps<typeof AccordionHeroUI> & {}

const Accordion = ({ ...props }: AccordionProps) => {
  return <AccordionHeroUI {...props} />
}

type AccordionItemProps = React.ComponentProps<typeof AccordionItemHeroUI> & {}

const AccordionItem = ({ ...props }: AccordionItemProps) => {
  return <AccordionItemHeroUI {...props} />
}

export default Accordion
export { AccordionItem }

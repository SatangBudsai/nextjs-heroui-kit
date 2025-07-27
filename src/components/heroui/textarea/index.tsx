import { forwardRef } from 'react'
import { Textarea as TextareaHeroUI } from '@heroui/react'

type TextareaProps = React.ComponentProps<typeof TextareaHeroUI> & {}

const Textarea = forwardRef<React.ElementRef<typeof TextareaHeroUI>, TextareaProps>(
  (props, ref) => {
    return <TextareaHeroUI ref={ref} {...props} />
  }
)
Textarea.displayName = 'Textarea'

export default Textarea

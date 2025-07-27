import { forwardRef } from 'react'
import { DateInput as DateInputHeroUI } from '@heroui/react'

type DateInputProps = React.ComponentProps<typeof DateInputHeroUI> & {}

const DateInput = forwardRef<React.ElementRef<typeof DateInputHeroUI>, DateInputProps>(
  (props, ref) => {
    return <DateInputHeroUI ref={ref} {...props} />
  }
)
DateInput.displayName = 'DateInput'

export default DateInput

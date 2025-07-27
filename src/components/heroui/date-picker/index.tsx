import { forwardRef } from 'react'
import { DatePicker as DatePickerHeroUI, DateRangePicker as DateRangePickerHeroUI } from '@heroui/react'

type DatePickerProps = React.ComponentProps<typeof DatePickerHeroUI> & {}

const DatePicker = forwardRef<React.ElementRef<typeof DatePickerHeroUI>, DatePickerProps>(
  (props, ref) => {
    return <DatePickerHeroUI ref={ref} {...props} />
  }
)
DatePicker.displayName = 'DatePicker'

type DateRangePickerProps = React.ComponentProps<typeof DateRangePickerHeroUI> & {}

const DateRangePicker = ({ ...props }: DateRangePickerProps) => {
  return (
    
      <DateRangePickerHeroUI {...props} />
    
  )
}

export default DatePicker
export { DateRangePicker }

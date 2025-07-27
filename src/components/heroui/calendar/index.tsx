import React from 'react'
import { Calendar as CalendarHeroUI, RangeCalendar as RangeCalendarHeroUI } from '@heroui/react'

type CalendarProps = React.ComponentProps<typeof CalendarHeroUI> & {}

const Calendar = ({ ...props }: CalendarProps) => {
  return (
    
      <CalendarHeroUI {...props} />
    
  )
}

type RangeCalendarProps = React.ComponentProps<typeof RangeCalendarHeroUI> & {}

const RangeCalendar = ({ ...props }: RangeCalendarProps) => {
  return (
    
      <RangeCalendarHeroUI {...props} />
    
  )
}

export default Calendar
export { RangeCalendar }

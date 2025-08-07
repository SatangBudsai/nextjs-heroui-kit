import React, { forwardRef } from 'react'
import {
  Calendar as CalendarHeroUI,
  RangeCalendar as RangeCalendarHeroUI,
  CalendarProps as CalendarPropsHeroUI,
  RangeCalendarProps as RangeCalendarPropsHeroUI
} from '@heroui/react'

export type CalendarProps = CalendarPropsHeroUI

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  return <CalendarHeroUI ref={ref} {...props} />
})

Calendar.displayName = 'Calendar'

export type RangeCalendarProps = RangeCalendarPropsHeroUI

export const RangeCalendar = forwardRef<HTMLDivElement, RangeCalendarProps>((props, ref) => {
  return <RangeCalendarHeroUI ref={ref} {...props} />
})

RangeCalendar.displayName = 'RangeCalendar'

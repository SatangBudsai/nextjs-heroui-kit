import React, { forwardRef } from 'react'
import {
  DatePicker as DatePickerHeroUI,
  DateRangePicker as DateRangePickerHeroUI,
  DatePickerProps as DatePickerPropsHeroUI,
  DateRangePickerProps as DateRangePickerPropsHeroUI
} from '@heroui/react'

export type DatePickerProps = DatePickerPropsHeroUI

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  return <DatePickerHeroUI ref={ref} {...props} />
})

DatePicker.displayName = 'DatePicker'

export type DateRangePickerProps = DateRangePickerPropsHeroUI

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>((props, ref) => {
  return <DateRangePickerHeroUI ref={ref} {...props} />
})

DateRangePicker.displayName = 'DateRangePicker'

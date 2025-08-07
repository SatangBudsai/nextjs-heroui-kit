import React, { forwardRef } from 'react'
import { Alert as AlertHeroUI, AlertProps as AlertPropsHeroUI } from '@heroui/react'

export type AlertProps = AlertPropsHeroUI

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <AlertHeroUI ref={ref} {...props} />
})

Alert.displayName = 'Alert'

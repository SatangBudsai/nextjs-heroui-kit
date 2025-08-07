// Note: Toast component may not be available in current @heroui/react version
// This is a placeholder wrapper for when it becomes available

import React, { forwardRef } from 'react'
// import { Toast as ToastHeroUI, ToastProps as ToastPropsHeroUI } from '@heroui/react'

// Placeholder component - uncomment when Toast is available
// export type ToastProps = ToastPropsHeroUI
// export const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
//   return <ToastHeroUI ref={ref} {...props} />
// })

// Temporary placeholder
export type ToastProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Toast = forwardRef<HTMLDivElement, ToastProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
})

Toast.displayName = 'Toast'

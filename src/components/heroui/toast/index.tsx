// Note: Toast component may not be available in current @heroui/react version
// This is a placeholder wrapper for when it becomes available

import React from 'react'
// import { Toast as ToastHeroUI } from '@heroui/react'

// Placeholder component - uncomment when Toast is available
// type ToastProps = React.ComponentProps<typeof ToastHeroUI> & {}

// const Toast = ({ ...props }: ToastProps) => {
//   return <ToastHeroUI {...props} />
// }

// Temporary placeholder
type ToastProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const Toast = ({ children, ...props }: ToastProps) => {
  return <div {...props}>{children}</div>
}

export default Toast

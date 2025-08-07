import React, { forwardRef } from 'react'
import { User as UserHeroUI, UserProps as UserPropsHeroUI } from '@heroui/react'

export type UserProps = UserPropsHeroUI

export const User = forwardRef<HTMLDivElement, UserProps>((props, ref) => {
  return <UserHeroUI ref={ref} {...props} />
})

User.displayName = 'User'

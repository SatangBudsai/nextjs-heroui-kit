import { forwardRef } from 'react'
import { User as UserHeroUI } from '@heroui/react'

type UserProps = React.ComponentProps<typeof UserHeroUI> & {}

const User = forwardRef<React.ElementRef<typeof UserHeroUI>, UserProps>(
  (props, ref) => {
    return <UserHeroUI ref={ref} {...props} />
  }
)
User.displayName = 'User'

export default User

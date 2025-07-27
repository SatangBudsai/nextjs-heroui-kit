import { forwardRef } from 'react'
import { Avatar as AvatarHeroUI, AvatarGroup as AvatarGroupHeroUI } from '@heroui/react'

type AvatarProps = React.ComponentProps<typeof AvatarHeroUI> & {}

const Avatar = forwardRef<React.ElementRef<typeof AvatarHeroUI>, AvatarProps>((props, ref) => {
  return <AvatarHeroUI ref={ref} {...props} />
})
Avatar.displayName = 'Avatar'

type AvatarGroupProps = React.ComponentProps<typeof AvatarGroupHeroUI> & {}

const AvatarGroup = forwardRef<React.ElementRef<typeof AvatarGroupHeroUI>, AvatarGroupProps>((props, ref) => {
  return <AvatarGroupHeroUI ref={ref} {...props} />
})
AvatarGroup.displayName = 'AvatarGroup'

export default Avatar
export { AvatarGroup }

import { forwardRef } from 'react'
import { Code as CodeHeroUI } from '@heroui/react'

type CodeProps = React.ComponentProps<typeof CodeHeroUI> & {}

const Code = forwardRef<React.ElementRef<typeof CodeHeroUI>, CodeProps>(
  (props, ref) => {
    return <CodeHeroUI ref={ref} {...props} />
  }
)
Code.displayName = 'Code'

export default Code

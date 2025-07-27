import { forwardRef } from 'react'
import { Snippet as SnippetHeroUI } from '@heroui/react'

type SnippetProps = React.ComponentProps<typeof SnippetHeroUI> & {}

const Snippet = forwardRef<React.ElementRef<typeof SnippetHeroUI>, SnippetProps>(
  (props, ref) => {
    return <SnippetHeroUI ref={ref} {...props} />
  }
)
Snippet.displayName = 'Snippet'

export default Snippet

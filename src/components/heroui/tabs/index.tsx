import { forwardRef } from 'react'
import { Tabs as TabsHeroUI, Tab as TabHeroUI } from '@heroui/react'

type TabsProps = React.ComponentProps<typeof TabsHeroUI> & {}

const Tabs = forwardRef<React.ElementRef<typeof TabsHeroUI>, TabsProps>((props, ref) => {
  return <TabsHeroUI ref={ref} {...props} />
})
Tabs.displayName = 'Tabs'

type TabProps = React.ComponentProps<typeof TabHeroUI> & {}

const Tab = ({ ...props }: TabProps) => {
  return <TabHeroUI {...props} />
}

export default Tabs
export { Tab }

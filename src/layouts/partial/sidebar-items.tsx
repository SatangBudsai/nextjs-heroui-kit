import { type SidebarItem } from './sidebar-menu'
import TeamAvatar from './team-avatar'
import { Chip } from '@heroui/react'

const useSectionItems = () => {
  const data = () => {
    const items: SidebarItem[] = [
      {
        key: 'main-menu',
        title: '',
        items: [
          {
            key: 'home',
            href: '/',
            icon: 'solar:home-2-linear',
            title: 'หน้าหลัก'
          },
          {
            key: 'upload-file',
            href: '/upload-file',
            icon: 'solar:upload-square-linear',
            title: 'อัปโหลดไฟล์'
          },
          {
            key: 'dashboard',
            href: '/dashboard',
            icon: 'solar:widget-2-outline',
            title: 'สรุปผลข้อมูล'
          },
          {
            key: 'my-port',
            href: '#',
            icon: 'solar:pie-chart-2-outline',
            title: 'แบ่งสัดส่วน'
          }
        ]
      },
      {
        key: 'demo',
        title: 'โปรแกรมคำนวณ',
        items: [
          {
            key: 'demo-page',
            href: '#',
            icon: 'solar:calculator-linear',
            title: 'เครื่องคิดเลข',
            startContent: <TeamAvatar name='Demo' />,
            endContent: (
              <Chip size='sm' variant='flat'>
                Coming Soon
              </Chip>
            )
          }
        ]
      },
      {
        key: 'components',
        title: 'HeroUI Components',
        items: [
          {
            key: 'select',
            href: '/components/select',
            icon: 'solar:list-down-minimalistic-linear',
            title: 'Select'
          },
          {
            key: 'button',
            href: '/components/button',
            icon: 'solar:cursor-linear',
            title: 'Button'
          },
          {
            key: 'input',
            href: '/components/input',
            icon: 'solar:text-field-focus-linear',
            title: 'Input'
          },
          {
            key: 'autocomplete',
            href: '/components/autocomplete',
            icon: 'solar:magnifer-linear',
            title: 'Autocomplete'
          },
          {
            key: 'accordion',
            href: '/components/accordion',
            icon: 'solar:list-linear',
            title: 'Accordion'
          },
          {
            key: 'card',
            href: '/components/card',
            icon: 'solar:card-linear',
            title: 'Card'
          },
          {
            key: 'modal',
            href: '/components/modal',
            icon: 'solar:window-frame-linear',
            title: 'Modal'
          },
          {
            key: 'table',
            href: '/components/table',
            icon: 'solar:table-linear',
            title: 'Table'
          },
          {
            key: 'tabs',
            href: '/components/tabs',
            icon: 'solar:tab-linear',
            title: 'Tabs'
          },
          {
            key: 'checkbox',
            href: '/components/checkbox',
            icon: 'solar:check-square-linear',
            title: 'Checkbox'
          },
          {
            key: 'radio',
            href: '/components/radio',
            icon: 'solar:record-circle-linear',
            title: 'Radio'
          },
          {
            key: 'chip',
            href: '/components/chip',
            icon: 'solar:tag-linear',
            title: 'Chip'
          },
          {
            key: 'avatar',
            href: '/components/avatar',
            icon: 'solar:user-circle-linear',
            title: 'Avatar'
          },
          {
            key: 'badge',
            href: '/components/badge',
            icon: 'solar:medal-ribbon-star-linear',
            title: 'Badge'
          },
          {
            key: 'progress',
            href: '/components/progress',
            icon: 'solar:progress-up-linear',
            title: 'Progress'
          },
          {
            key: 'spinner',
            href: '/components/spinner',
            icon: 'solar:refresh-circle-linear',
            title: 'Spinner'
          },
          {
            key: 'dropdown',
            href: '/components/dropdown',
            icon: 'solar:menu-dots-linear',
            title: 'Dropdown'
          },
          {
            key: 'listbox',
            href: '/components/listbox',
            icon: 'solar:list-check-linear',
            title: 'Listbox'
          },
          {
            key: 'divider',
            href: '/components/divider',
            icon: 'solar:line-duotone',
            title: 'Divider'
          },
          {
            key: 'image',
            href: '/components/image',
            icon: 'solar:gallery-linear',
            title: 'Image'
          },
          {
            key: 'breadcrumbs',
            href: '/components/breadcrumbs',
            icon: 'solar:path-linear',
            title: 'Breadcrumbs'
          },
          {
            key: 'code',
            href: '/components/code',
            icon: 'solar:code-linear',
            title: 'Code'
          }
        ]
      }
    ]
    return items
  }

  return { data }
}

export default useSectionItems

import React, { Fragment, ReactElement, useState } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
  Avatar
} from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const DropdownTest = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['text']))

  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '), [selectedKeys])

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Dropdown Component Test</h1>

        {/* Basic Dropdown */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Dropdown</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered'>Open Menu</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Static Actions'>
                <DropdownItem key='new'>New file</DropdownItem>
                <DropdownItem key='copy'>Copy link</DropdownItem>
                <DropdownItem key='edit'>Edit file</DropdownItem>
                <DropdownItem key='delete' className='text-danger' color='danger'>
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Dropdown with Icons */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Dropdown with Icons</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered'>Actions</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Actions with icons'>
                <DropdownItem key='new' startContent='📄'>
                  New file
                </DropdownItem>
                <DropdownItem key='copy' startContent='📋'>
                  Copy link
                </DropdownItem>
                <DropdownItem key='edit' startContent='✏️'>
                  Edit file
                </DropdownItem>
                <DropdownItem key='delete' startContent='🗑️' className='text-danger' color='danger'>
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Dropdown with Sections */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Dropdown with Sections</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered'>Options</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Menu with sections'>
                <DropdownSection title='Actions' showDivider>
                  <DropdownItem key='new' startContent='📄'>
                    New file
                  </DropdownItem>
                  <DropdownItem key='copy' startContent='📋'>
                    Copy link
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title='Danger zone'>
                  <DropdownItem key='delete' startContent='🗑️' className='text-danger' color='danger'>
                    Delete file
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Single Selection */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Single Selection</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered' className='capitalize'>
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Single selection'
                variant='flat'
                disallowEmptySelection
                selectionMode='single'
                selectedKeys={selectedKeys}
                onSelectionChange={keys => setSelectedKeys(new Set(Array.from(keys).map(String)))}>
                <DropdownItem key='text'>Text</DropdownItem>
                <DropdownItem key='number'>Number</DropdownItem>
                <DropdownItem key='date'>Date</DropdownItem>
                <DropdownItem key='single_date'>Single Date</DropdownItem>
                <DropdownItem key='iteration'>Iteration</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Multiple Selection */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Multiple Selection</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown closeOnSelect={false}>
              <DropdownTrigger>
                <Button variant='bordered'>Select Options</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Multiple selection'
                variant='flat'
                closeOnSelect={false}
                disallowEmptySelection={false}
                selectionMode='multiple'>
                <DropdownItem key='option1'>Option 1</DropdownItem>
                <DropdownItem key='option2'>Option 2</DropdownItem>
                <DropdownItem key='option3'>Option 3</DropdownItem>
                <DropdownItem key='option4'>Option 4</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Disabled Items */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Items</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered'>Mixed States</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Menu with disabled items'>
                <DropdownItem key='enabled1'>Enabled item 1</DropdownItem>
                <DropdownItem key='disabled1' isDisabled>
                  Disabled item
                </DropdownItem>
                <DropdownItem key='enabled2'>Enabled item 2</DropdownItem>
                <DropdownItem key='disabled2' isDisabled>
                  Another disabled
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Dropdown Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Dropdown Variants</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='solid'>Solid Variant</Button>
              </DropdownTrigger>
              <DropdownMenu variant='solid'>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
                <DropdownItem key='item3'>Item 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered'>Bordered Variant</Button>
              </DropdownTrigger>
              <DropdownMenu variant='bordered'>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
                <DropdownItem key='item3'>Item 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button variant='light'>Light Variant</Button>
              </DropdownTrigger>
              <DropdownMenu variant='light'>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
                <DropdownItem key='item3'>Item 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button variant='flat'>Flat Variant</Button>
              </DropdownTrigger>
              <DropdownMenu variant='flat'>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
                <DropdownItem key='item3'>Item 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* User Dropdown */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>User Profile Dropdown</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  className='transition-transform'
                  color='secondary'
                  name='Jason Hughes'
                  size='sm'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Signed in as</p>
                  <p className='font-semibold'>zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                <DropdownItem key='analytics'>Analytics</DropdownItem>
                <DropdownItem key='system'>System</DropdownItem>
                <DropdownItem key='configurations'>Configurations</DropdownItem>
                <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
                <DropdownItem key='logout' color='danger'>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Different Placements */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different Placements</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown placement='top'>
              <DropdownTrigger>
                <Button variant='bordered'>Top</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown placement='bottom'>
              <DropdownTrigger>
                <Button variant='bordered'>Bottom</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown placement='left'>
              <DropdownTrigger>
                <Button variant='bordered'>Left</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown placement='right'>
              <DropdownTrigger>
                <Button variant='bordered'>Right</Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key='item1'>Item 1</DropdownItem>
                <DropdownItem key='item2'>Item 2</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Custom Styled Dropdown */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Dropdown</h2>
          <div className='flex flex-wrap gap-4'>
            <Dropdown
              classNames={{
                base: 'before:bg-default-200',
                content:
                  'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black'
              }}>
              <DropdownTrigger>
                <Button className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' variant='solid'>
                  Custom Style
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='Custom style menu'
                className='p-3'
                itemClasses={{
                  base: [
                    'rounded-md',
                    'text-default-500',
                    'transition-opacity',
                    'data-[hover=true]:text-foreground',
                    'data-[hover=true]:bg-default-100',
                    'dark:data-[hover=true]:bg-default-50',
                    'data-[selectable=true]:focus:bg-default-50',
                    'data-[pressed=true]:opacity-70',
                    'data-[focus-visible=true]:ring-default-500'
                  ]
                }}>
                <DropdownItem key='new'>New file</DropdownItem>
                <DropdownItem key='copy'>Copy link</DropdownItem>
                <DropdownItem key='edit'>Edit file</DropdownItem>
                <DropdownItem key='delete' className='text-danger' color='danger'>
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownTest

DropdownTest.auth = false

DropdownTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

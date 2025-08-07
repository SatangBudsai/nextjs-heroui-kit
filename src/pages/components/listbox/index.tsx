import React, { Fragment, ReactElement, useState } from 'react'
import { Listbox, ListboxItem, ListboxSection, Avatar, Chip } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const ListboxTest = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['text']))
  const [values, setValues] = useState(new Set(['argentina']))

  const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '), [selectedKeys])

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Listbox Component Test</h1>

        {/* Basic Listbox */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Listbox</h2>
          <div className='w-full max-w-xs rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='Actions'>
              <ListboxItem key='new'>New file</ListboxItem>
              <ListboxItem key='copy'>Copy link</ListboxItem>
              <ListboxItem key='edit'>Edit file</ListboxItem>
              <ListboxItem key='delete' className='text-danger' color='danger'>
                Delete file
              </ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Single Selection */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Single Selection</h2>
          <p className='text-small text-default-500'>Selected: {selectedValue}</p>
          <div className='w-full max-w-xs rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox
              aria-label='Single selection example'
              variant='flat'
              disallowEmptySelection
              selectionMode='single'
              selectedKeys={selectedKeys}
              onSelectionChange={keys => setSelectedKeys(new Set(Array.from(keys).map(String)))}>
              <ListboxItem key='text'>Text</ListboxItem>
              <ListboxItem key='number'>Number</ListboxItem>
              <ListboxItem key='date'>Date</ListboxItem>
              <ListboxItem key='single_date'>Single Date</ListboxItem>
              <ListboxItem key='iteration'>Iteration</ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Multiple Selection */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Multiple Selection</h2>
          <div className='w-full max-w-xs rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox
              aria-label='Multiple selection example'
              variant='flat'
              selectionMode='multiple'
              selectedKeys={values}
              onSelectionChange={keys => setValues(new Set(Array.from(keys).map(String)))}>
              <ListboxItem key='argentina'>Argentina</ListboxItem>
              <ListboxItem key='venezuela'>Venezuela</ListboxItem>
              <ListboxItem key='brazil'>Brazil</ListboxItem>
              <ListboxItem key='switzerland'>Switzerland</ListboxItem>
              <ListboxItem key='germany'>Germany</ListboxItem>
              <ListboxItem key='italy'>Italy</ListboxItem>
              <ListboxItem key='spain'>Spain</ListboxItem>
            </Listbox>
          </div>
          <p className='text-small text-default-500'>Selected: {Array.from(values).join(', ')}</p>
        </div>

        {/* Listbox with Icons */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Listbox with Icons</h2>
          <div className='w-full max-w-xs rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='Listbox with icons'>
              <ListboxItem key='new' startContent='📄'>
                New file
              </ListboxItem>
              <ListboxItem key='copy' startContent='📋'>
                Copy link
              </ListboxItem>
              <ListboxItem key='edit' startContent='✏️'>
                Edit file
              </ListboxItem>
              <ListboxItem key='delete' startContent='🗑️' className='text-danger' color='danger'>
                Delete file
              </ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Listbox with Sections */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Listbox with Sections</h2>
          <div className='w-full max-w-xs rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='Listbox with sections'>
              <ListboxSection title='Actions' showDivider>
                <ListboxItem key='new' startContent='📄'>
                  New file
                </ListboxItem>
                <ListboxItem key='copy' startContent='📋'>
                  Copy link
                </ListboxItem>
                <ListboxItem key='edit' startContent='✏️'>
                  Edit file
                </ListboxItem>
              </ListboxSection>
              <ListboxSection title='Danger zone'>
                <ListboxItem key='delete' startContent='🗑️' className='text-danger' color='danger'>
                  Delete file
                </ListboxItem>
              </ListboxSection>
            </Listbox>
          </div>
        </div>

        {/* Listbox with Descriptions */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Listbox with Descriptions</h2>
          <div className='w-full max-w-md rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='Listbox with descriptions'>
              <ListboxItem key='new' description='Create a new file' startContent='📄'>
                New file
              </ListboxItem>
              <ListboxItem key='copy' description='Copy the file link' startContent='📋'>
                Copy link
              </ListboxItem>
              <ListboxItem key='edit' description='Allows you to edit the file' startContent='✏️'>
                Edit file
              </ListboxItem>
              <ListboxItem
                key='delete'
                className='text-danger'
                color='danger'
                description='Permanently delete the file'
                startContent='🗑️'>
                Delete file
              </ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Listbox with Avatars */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Listbox with Avatars</h2>
          <div className='w-full max-w-md rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='User Actions' onAction={key => alert(key)}>
              <ListboxItem
                key='profile'
                startContent={
                  <Avatar
                    alt='Tony Reichert'
                    className='flex-shrink-0'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                  />
                }>
                Tony Reichert
              </ListboxItem>
              <ListboxItem
                key='settings'
                startContent={
                  <Avatar
                    alt='Junior Garcia'
                    className='flex-shrink-0'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                }>
                Junior Garcia
              </ListboxItem>
              <ListboxItem
                key='team'
                startContent={
                  <Avatar
                    alt='Jane Fisher'
                    className='flex-shrink-0'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a04258114e29026302d'
                  />
                }>
                Jane Fisher
              </ListboxItem>
              <ListboxItem
                key='system'
                startContent={
                  <Avatar
                    alt='William Howard'
                    className='flex-shrink-0'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a048581f4e29026701d'
                  />
                }>
                William Howard
              </ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Listbox with End Content */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Listbox with End Content</h2>
          <div className='w-full max-w-md rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='Listbox with end content'>
              <ListboxItem
                key='new'
                endContent={
                  <Chip size='sm' variant='flat'>
                    New
                  </Chip>
                }
                startContent='📄'>
                New feature
              </ListboxItem>
              <ListboxItem
                key='popular'
                endContent={
                  <Chip size='sm' variant='flat' color='success'>
                    Popular
                  </Chip>
                }
                startContent='🔥'>
                Trending item
              </ListboxItem>
              <ListboxItem
                key='premium'
                endContent={
                  <Chip size='sm' variant='flat' color='warning'>
                    Premium
                  </Chip>
                }
                startContent='⭐'>
                Premium feature
              </ListboxItem>
              <ListboxItem
                key='deprecated'
                endContent={
                  <Chip size='sm' variant='flat' color='danger'>
                    Deprecated
                  </Chip>
                }
                startContent='⚠️'>
                Old feature
              </ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Disabled Items */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Items</h2>
          <div className='w-full max-w-xs rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100'>
            <Listbox aria-label='Listbox with disabled items'>
              <ListboxItem key='enabled1'>Enabled item 1</ListboxItem>
              <ListboxItem key='disabled1' isDisabled>
                Disabled item
              </ListboxItem>
              <ListboxItem key='enabled2'>Enabled item 2</ListboxItem>
              <ListboxItem key='disabled2' isDisabled>
                Another disabled
              </ListboxItem>
              <ListboxItem key='enabled3'>Enabled item 3</ListboxItem>
            </Listbox>
          </div>
        </div>

        {/* Listbox Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Listbox Variants</h2>
          <div className='flex gap-4'>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Solid</h3>
              <div className='w-48 rounded-small border-small border-default-200 px-1 py-2'>
                <Listbox variant='solid' aria-label='Solid variant'>
                  <ListboxItem key='item1'>Item 1</ListboxItem>
                  <ListboxItem key='item2'>Item 2</ListboxItem>
                  <ListboxItem key='item3'>Item 3</ListboxItem>
                </Listbox>
              </div>
            </div>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Bordered</h3>
              <div className='w-48 rounded-small border-small border-default-200 px-1 py-2'>
                <Listbox variant='bordered' aria-label='Bordered variant'>
                  <ListboxItem key='item1'>Item 1</ListboxItem>
                  <ListboxItem key='item2'>Item 2</ListboxItem>
                  <ListboxItem key='item3'>Item 3</ListboxItem>
                </Listbox>
              </div>
            </div>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Light</h3>
              <div className='w-48 rounded-small border-small border-default-200 px-1 py-2'>
                <Listbox variant='light' aria-label='Light variant'>
                  <ListboxItem key='item1'>Item 1</ListboxItem>
                  <ListboxItem key='item2'>Item 2</ListboxItem>
                  <ListboxItem key='item3'>Item 3</ListboxItem>
                </Listbox>
              </div>
            </div>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Flat</h3>
              <div className='w-48 rounded-small border-small border-default-200 px-1 py-2'>
                <Listbox variant='flat' aria-label='Flat variant'>
                  <ListboxItem key='item1'>Item 1</ListboxItem>
                  <ListboxItem key='item2'>Item 2</ListboxItem>
                  <ListboxItem key='item3'>Item 3</ListboxItem>
                </Listbox>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styled Listbox */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Listbox</h2>
          <div className='w-full max-w-md'>
            <Listbox
              aria-label='Custom styled listbox'
              className='rounded-small border-small border-divider p-1'
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
              <ListboxItem
                key='dashboard'
                startContent='📊'
                endContent={<Chip size='sm' variant='dot' color='success' />}>
                Dashboard
              </ListboxItem>
              <ListboxItem
                key='analytics'
                startContent='📈'
                endContent={<Chip size='sm' variant='dot' color='primary' />}>
                Analytics
              </ListboxItem>
              <ListboxItem
                key='reports'
                startContent='📋'
                endContent={<Chip size='sm' variant='dot' color='warning' />}>
                Reports
              </ListboxItem>
              <ListboxItem key='settings' startContent='⚙️'>
                Settings
              </ListboxItem>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListboxTest

ListboxTest.auth = false

ListboxTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

import React, { useState } from 'react'
import { Breadcrumbs, BreadcrumbItem } from '@/components/heroui'

const BreadcrumbsTest: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('song')

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Breadcrumbs Component Test</h1>

        {/* Basic Breadcrumbs */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Breadcrumbs</h2>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        {/* Breadcrumbs with Links */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Breadcrumbs with Links</h2>
          <Breadcrumbs>
            <BreadcrumbItem href='/'>Home</BreadcrumbItem>
            <BreadcrumbItem href='/music'>Music</BreadcrumbItem>
            <BreadcrumbItem href='/music/artists'>Artists</BreadcrumbItem>
            <BreadcrumbItem>Current Page</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        {/* Breadcrumbs Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Breadcrumbs Variants</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Solid</h3>
              <Breadcrumbs variant='solid'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Documents</BreadcrumbItem>
                <BreadcrumbItem>Projects</BreadcrumbItem>
                <BreadcrumbItem>Current</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-medium'>Bordered</h3>
              <Breadcrumbs variant='bordered'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Documents</BreadcrumbItem>
                <BreadcrumbItem>Projects</BreadcrumbItem>
                <BreadcrumbItem>Current</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-medium'>Light</h3>
              <Breadcrumbs variant='light'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Documents</BreadcrumbItem>
                <BreadcrumbItem>Projects</BreadcrumbItem>
                <BreadcrumbItem>Current</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/* Breadcrumbs Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Breadcrumbs Colors</h2>
          <div className='space-y-4'>
            <Breadcrumbs color='primary'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Primary</BreadcrumbItem>
              <BreadcrumbItem>Color</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs color='secondary'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Secondary</BreadcrumbItem>
              <BreadcrumbItem>Color</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs color='success'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Success</BreadcrumbItem>
              <BreadcrumbItem>Color</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs color='warning'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Warning</BreadcrumbItem>
              <BreadcrumbItem>Color</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs color='danger'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Danger</BreadcrumbItem>
              <BreadcrumbItem>Color</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>

        {/* Breadcrumbs Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Breadcrumbs Sizes</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Small</h3>
              <Breadcrumbs size='sm'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Small</BreadcrumbItem>
                <BreadcrumbItem>Size</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-medium'>Medium</h3>
              <Breadcrumbs size='md'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Medium</BreadcrumbItem>
                <BreadcrumbItem>Size</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            <div>
              <h3 className='mb-2 text-sm font-medium'>Large</h3>
              <Breadcrumbs size='lg'>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Large</BreadcrumbItem>
                <BreadcrumbItem>Size</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/* Breadcrumbs Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Breadcrumbs Radius</h2>
          <div className='space-y-4'>
            <Breadcrumbs radius='none' variant='bordered'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>No Radius</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs radius='sm' variant='bordered'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Small Radius</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs radius='md' variant='bordered'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Medium Radius</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs radius='lg' variant='bordered'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Large Radius</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs radius='full' variant='bordered'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Full Radius</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>

        {/* Breadcrumbs with Icons */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Breadcrumbs with Icons</h2>
          <Breadcrumbs>
            <BreadcrumbItem startContent='🏠'>Home</BreadcrumbItem>
            <BreadcrumbItem startContent='📁'>Documents</BreadcrumbItem>
            <BreadcrumbItem startContent='📊'>Reports</BreadcrumbItem>
            <BreadcrumbItem startContent='📈'>Analytics</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        {/* Custom Separator */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Separator</h2>
          <div className='space-y-4'>
            <Breadcrumbs separator='>'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Products</BreadcrumbItem>
              <BreadcrumbItem>Category</BreadcrumbItem>
              <BreadcrumbItem>Item</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs separator='•'>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>About</BreadcrumbItem>
              <BreadcrumbItem>Team</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs separator='→'>
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
              <BreadcrumbItem>Settings</BreadcrumbItem>
              <BreadcrumbItem>Profile</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>

        {/* Interactive Breadcrumbs */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Interactive Breadcrumbs</h2>
          <div className='space-y-4'>
            <Breadcrumbs
              onAction={key => setCurrentPage(key as string)}
              classNames={{
                list: 'gap-2'
              }}>
              <BreadcrumbItem key='home' href='/'>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem key='music' href='/music'>
                Music
              </BreadcrumbItem>
              <BreadcrumbItem key='artist' href='/music/artist'>
                Artist
              </BreadcrumbItem>
              <BreadcrumbItem key='album' href='/music/artist/album'>
                Album
              </BreadcrumbItem>
              <BreadcrumbItem key='song'>Song</BreadcrumbItem>
            </Breadcrumbs>
            <p className='text-sm text-gray-600'>Current page: {currentPage}</p>
          </div>
        </div>

        {/* Disabled Items */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Items</h2>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem isDisabled>Restricted Area</BreadcrumbItem>
            <BreadcrumbItem>Accessible Page</BreadcrumbItem>
            <BreadcrumbItem isDisabled>Another Restricted</BreadcrumbItem>
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        {/* Max Items with Overflow */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Max Items with Overflow</h2>
          <div className='space-y-4'>
            <Breadcrumbs maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Category</BreadcrumbItem>
              <BreadcrumbItem>Subcategory</BreadcrumbItem>
              <BreadcrumbItem>Products</BreadcrumbItem>
              <BreadcrumbItem>Details</BreadcrumbItem>
              <BreadcrumbItem>Specifications</BreadcrumbItem>
              <BreadcrumbItem>Current</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>

        {/* Custom Styled Breadcrumbs */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Breadcrumbs</h2>
          <div className='space-y-4'>
            <Breadcrumbs
              classNames={{
                list: 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-small',
                separator: 'text-white/70'
              }}
              itemClasses={{
                base: 'text-white data-[current=true]:text-yellow-300 px-2 py-1 rounded-small',
                separator: 'px-1'
              }}>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Custom</BreadcrumbItem>
              <BreadcrumbItem>Styled</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
            </Breadcrumbs>

            <Breadcrumbs
              variant='solid'
              classNames={{
                list: 'bg-black'
              }}
              itemClasses={{
                base: 'text-white data-[current=true]:text-green-400 data-[current=true]:bg-green-400/20'
              }}>
              <BreadcrumbItem>Root</BreadcrumbItem>
              <BreadcrumbItem>Terminal</BreadcrumbItem>
              <BreadcrumbItem>Commands</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Real-world Examples</h2>
          <div className='space-y-6'>
            {/* E-commerce */}
            <div>
              <h3 className='mb-2 text-lg font-medium'>E-commerce Navigation</h3>
              <Breadcrumbs variant='light' color='primary'>
                <BreadcrumbItem startContent='🏪' href='/'>
                  Store
                </BreadcrumbItem>
                <BreadcrumbItem startContent='👕' href='/clothing'>
                  Clothing
                </BreadcrumbItem>
                <BreadcrumbItem startContent='👔' href='/clothing/mens'>
                  Men&apos;s
                </BreadcrumbItem>
                <BreadcrumbItem startContent='👕' href='/clothing/mens/shirts'>
                  Shirts
                </BreadcrumbItem>
                <BreadcrumbItem>Blue Cotton Shirt</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            {/* Documentation */}
            <div>
              <h3 className='mb-2 text-lg font-medium'>Documentation Site</h3>
              <Breadcrumbs variant='bordered' color='secondary'>
                <BreadcrumbItem startContent='📚' href='/docs'>
                  Docs
                </BreadcrumbItem>
                <BreadcrumbItem startContent='⚛️' href='/docs/components'>
                  Components
                </BreadcrumbItem>
                <BreadcrumbItem startContent='🍞' href='/docs/components/breadcrumbs'>
                  Breadcrumbs
                </BreadcrumbItem>
                <BreadcrumbItem>API Reference</BreadcrumbItem>
              </Breadcrumbs>
            </div>

            {/* File System */}
            <div>
              <h3 className='mb-2 text-lg font-medium'>File System Browser</h3>
              <Breadcrumbs separator='/' variant='light' color='success'>
                <BreadcrumbItem startContent='💻'>Computer</BreadcrumbItem>
                <BreadcrumbItem startContent='👤'>Users</BreadcrumbItem>
                <BreadcrumbItem startContent='📁'>john.doe</BreadcrumbItem>
                <BreadcrumbItem startContent='📄'>Documents</BreadcrumbItem>
                <BreadcrumbItem startContent='🖼️'>Pictures</BreadcrumbItem>
                <BreadcrumbItem>vacation.jpg</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbsTest

import React, { Fragment, ReactElement, useState } from 'react'
import { Badge, Avatar, Button } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const BadgeTest = () => {
  const [count, setCount] = useState(5)
  const [isInvisible, setIsInvisible] = useState(false)

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Badge Component Test</h1>

        {/* Basic Badges */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Badges</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='5'>
              <Avatar name='User' />
            </Badge>
            <Badge content='99+'>
              <Avatar name='User' />
            </Badge>
            <Badge content=''>
              <Avatar name='User' />
            </Badge>
            <Badge>
              <Avatar name='User' />
            </Badge>
          </div>
        </div>

        {/* Badge Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge Colors</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='5' color='default'>
              <Avatar name='Default' />
            </Badge>
            <Badge content='5' color='primary'>
              <Avatar name='Primary' />
            </Badge>
            <Badge content='5' color='secondary'>
              <Avatar name='Secondary' />
            </Badge>
            <Badge content='5' color='success'>
              <Avatar name='Success' />
            </Badge>
            <Badge content='5' color='warning'>
              <Avatar name='Warning' />
            </Badge>
            <Badge content='5' color='danger'>
              <Avatar name='Danger' />
            </Badge>
          </div>
        </div>

        {/* Badge Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge Variants</h2>
          <div className='space-y-4'>
            <div className='flex flex-wrap items-center gap-6'>
              <span className='w-full text-sm font-medium'>Solid variant:</span>
              <Badge content='99+' variant='solid' color='primary'>
                <Avatar name='Solid' />
              </Badge>
              <Badge content='99+' variant='solid' color='secondary'>
                <Avatar name='Solid' />
              </Badge>
              <Badge content='99+' variant='solid' color='success'>
                <Avatar name='Solid' />
              </Badge>
            </div>
            <div className='flex flex-wrap items-center gap-6'>
              <span className='w-full text-sm font-medium'>Flat variant:</span>
              <Badge content='99+' variant='flat' color='primary'>
                <Avatar name='Flat' />
              </Badge>
              <Badge content='99+' variant='flat' color='secondary'>
                <Avatar name='Flat' />
              </Badge>
              <Badge content='99+' variant='flat' color='success'>
                <Avatar name='Flat' />
              </Badge>
            </div>
            <div className='flex flex-wrap items-center gap-6'>
              <span className='w-full text-sm font-medium'>Faded variant:</span>
              <Badge content='99+' variant='faded' color='primary'>
                <Avatar name='Faded' />
              </Badge>
              <Badge content='99+' variant='faded' color='secondary'>
                <Avatar name='Faded' />
              </Badge>
              <Badge content='99+' variant='faded' color='success'>
                <Avatar name='Faded' />
              </Badge>
            </div>
            <div className='flex flex-wrap items-center gap-6'>
              <span className='w-full text-sm font-medium'>Shadow variant:</span>
              <Badge content='99+' variant='shadow' color='primary'>
                <Avatar name='Shadow' />
              </Badge>
              <Badge content='99+' variant='shadow' color='secondary'>
                <Avatar name='Shadow' />
              </Badge>
              <Badge content='99+' variant='shadow' color='success'>
                <Avatar name='Shadow' />
              </Badge>
            </div>
          </div>
        </div>

        {/* Badge Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge Sizes</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='sm' size='sm' color='primary'>
              <Avatar size='sm' name='Small' />
            </Badge>
            <Badge content='md' size='md' color='primary'>
              <Avatar size='md' name='Medium' />
            </Badge>
            <Badge content='lg' size='lg' color='primary'>
              <Avatar size='lg' name='Large' />
            </Badge>
          </div>
        </div>

        {/* Badge Shapes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge Shapes</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='circle' shape='circle' color='primary'>
              <Avatar name='Circle' />
            </Badge>
            <Badge content='rectangle' shape='rectangle' color='secondary'>
              <Avatar name='Rectangle' />
            </Badge>
          </div>
        </div>

        {/* Badge Placement */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge Placement</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='TR' placement='top-right' color='primary'>
              <Avatar name='Top Right' />
            </Badge>
            <Badge content='TL' placement='top-left' color='secondary'>
              <Avatar name='Top Left' />
            </Badge>
            <Badge content='BR' placement='bottom-right' color='success'>
              <Avatar name='Bottom Right' />
            </Badge>
            <Badge content='BL' placement='bottom-left' color='warning'>
              <Avatar name='Bottom Left' />
            </Badge>
          </div>
        </div>

        {/* Interactive Badge */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Interactive Badge</h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <button className='rounded bg-blue-500 px-4 py-2 text-white' onClick={() => setCount(prev => prev + 1)}>
                Increment
              </button>
              <button
                className='rounded bg-red-500 px-4 py-2 text-white'
                onClick={() => setCount(prev => Math.max(0, prev - 1))}>
                Decrement
              </button>
              <button className='rounded bg-gray-500 px-4 py-2 text-white' onClick={() => setIsInvisible(!isInvisible)}>
                Toggle Visibility
              </button>
            </div>
            <div className='flex flex-wrap items-center gap-6'>
              <Badge content={count} color='primary' isInvisible={isInvisible}>
                <Avatar name='Interactive' />
              </Badge>
              <Badge content={count > 99 ? '99+' : count.toString()} color='danger' isInvisible={isInvisible}>
                <Avatar name='Max Count' />
              </Badge>
            </div>
            <p className='text-sm text-gray-600'>
              Count: {count}, Invisible: {isInvisible.toString()}
            </p>
          </div>
        </div>

        {/* Badge with Different Content */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge with Different Content</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='NEW' color='success'>
              <Button>New Feature</Button>
            </Badge>
            <Badge content='SALE' color='danger'>
              <Button>Sale Item</Button>
            </Badge>
            <Badge content='%' color='warning'>
              <Button>Discount</Button>
            </Badge>
            <Badge content='✓' color='success'>
              <Button>Verified</Button>
            </Badge>
            <Badge content='!' color='warning'>
              <Button>Warning</Button>
            </Badge>
          </div>
        </div>

        {/* Badge with Custom Content */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge with Custom Styling</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge
              content='Custom'
              classNames={{
                badge:
                  'bg-gradient-to-br from-pink-500 to-yellow-500 text-white border-small border-white/50 shadow-pink-500/30'
              }}>
              <Avatar name='Custom' />
            </Badge>
            <Badge
              content='Pro'
              classNames={{
                badge: 'bg-black text-white font-bold border-2 border-yellow-400'
              }}>
              <Avatar name='Pro' />
            </Badge>
            <Badge content={<span className='animate-pulse'>🔥</span>} color='danger'>
              <Avatar name='Hot' />
            </Badge>
          </div>
        </div>

        {/* Badge without Content (Dot) */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge as Dots</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge color='primary'>
              <Avatar name='Online' />
            </Badge>
            <Badge color='success'>
              <Avatar name='Available' />
            </Badge>
            <Badge color='warning'>
              <Avatar name='Away' />
            </Badge>
            <Badge color='danger'>
              <Avatar name='Busy' />
            </Badge>
            <Badge color='default'>
              <Avatar name='Offline' />
            </Badge>
          </div>
        </div>

        {/* Badge on Different Elements */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge on Different Elements</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='3' color='danger'>
              <Button variant='bordered'>Messages</Button>
            </Badge>
            <Badge content='12' color='primary'>
              <Button variant='flat'>Notifications</Button>
            </Badge>
            <Badge content='NEW' color='success'>
              <div className='flex h-20 w-20 items-center justify-center rounded-lg bg-gray-200'>Box</div>
            </Badge>
          </div>
        </div>

        {/* Badge States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Badge States</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Badge content='5' color='primary'>
              <Avatar name='Normal' />
            </Badge>
            <Badge content='5' color='primary' isInvisible>
              <Avatar name='Invisible' />
            </Badge>
            <Badge content='0' color='danger' showOutline>
              <Avatar name='With Outline' />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeTest
BadgeTest.auth = false

BadgeTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

import React from 'react'
import { Button, ButtonGroup } from '@/components/heroui'

const ButtonTest: React.FC = () => {
  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Button Components Test</h1>

        {/* Basic Button */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Buttons</h2>
          <div className='flex flex-wrap gap-4'>
            <Button>Default</Button>
            <Button color='primary'>Primary</Button>
            <Button color='secondary'>Secondary</Button>
            <Button color='success'>Success</Button>
            <Button color='warning'>Warning</Button>
            <Button color='danger'>Danger</Button>
          </div>
        </div>

        {/* Button Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Button Variants</h2>
          <div className='flex flex-wrap gap-4'>
            <Button variant='solid' color='primary'>
              Solid
            </Button>
            <Button variant='bordered' color='primary'>
              Bordered
            </Button>
            <Button variant='light' color='primary'>
              Light
            </Button>
            <Button variant='flat' color='primary'>
              Flat
            </Button>
            <Button variant='faded' color='primary'>
              Faded
            </Button>
            <Button variant='shadow' color='primary'>
              Shadow
            </Button>
            <Button variant='ghost' color='primary'>
              Ghost
            </Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Button Sizes</h2>
          <div className='flex flex-wrap items-end gap-4'>
            <Button size='sm' color='primary'>
              Small
            </Button>
            <Button size='md' color='primary'>
              Medium
            </Button>
            <Button size='lg' color='primary'>
              Large
            </Button>
          </div>
        </div>

        {/* Button States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Button States</h2>
          <div className='flex flex-wrap gap-4'>
            <Button color='primary'>Normal</Button>
            <Button color='primary' isLoading>
              Loading
            </Button>
            <Button color='primary' isDisabled>
              Disabled
            </Button>
          </div>
        </div>

        {/* Button with Icons */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Buttons with Icons</h2>
          <div className='flex flex-wrap gap-4'>
            <Button color='primary' startContent={<span>🚀</span>}>
              With Start Icon
            </Button>
            <Button color='primary' endContent={<span>🎯</span>}>
              With End Icon
            </Button>
            <Button isIconOnly color='primary' aria-label='Like'>
              ❤️
            </Button>
          </div>
        </div>

        {/* Button Group */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Button Group</h2>
          <div className='space-y-4'>
            <ButtonGroup>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>

            <ButtonGroup variant='bordered'>
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>

            <ButtonGroup color='primary' variant='solid'>
              <Button>First</Button>
              <Button>Second</Button>
              <Button>Third</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonTest

import React, { Fragment, ReactElement, useState } from 'react'
import { Input } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const InputTest = () => {
  const [value, setValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Input Component Test</h1>

        {/* Basic Input */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Input</h2>
          <div className='max-w-xs'>
            <Input label='Name' placeholder='Enter your name' value={value} onValueChange={setValue} />
          </div>
        </div>

        {/* Input Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input Variants</h2>
          <div className='grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
            <Input variant='flat' label='Flat' placeholder='Flat variant' />
            <Input variant='bordered' label='Bordered' placeholder='Bordered variant' />
            <Input variant='underlined' label='Underlined' placeholder='Underlined variant' />
            <Input variant='faded' label='Faded' placeholder='Faded variant' />
          </div>
        </div>

        {/* Input Types */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input Types</h2>
          <div className='grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
            <Input type='text' label='Text' placeholder='Text input' />
            <Input type='email' label='Email' placeholder='email@example.com' />
            <Input type='password' label='Password' placeholder='Enter password' />
            <Input type='number' label='Number' placeholder='Enter number' />
            <Input type='tel' label='Phone' placeholder='+1 234 567 8900' />
            <Input type='url' label='URL' placeholder='https://example.com' />
          </div>
        </div>

        {/* Input with Icons */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input with Icons</h2>
          <div className='grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              label='Email'
              placeholder='Enter email'
              startIcon='material-symbols:email'
              type='email'
              value={emailValue}
              onValueChange={setEmailValue}
            />
            <Input label='Search' placeholder='Search...' startIcon='material-symbols:search' />
          </div>
        </div>

        {/* Input States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input States</h2>
          <div className='grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
            <Input label='Normal' placeholder='Normal state' />
            <Input label='Disabled' placeholder='Disabled state' isDisabled />
            <Input label='Required' placeholder='Required field' isRequired />
            <Input label='Invalid' placeholder='Invalid input' isInvalid errorMessage='This field is required' />
          </div>
        </div>

        {/* Input Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input Sizes</h2>
          <div className='max-w-xs space-y-4'>
            <Input size='sm' label='Small' placeholder='Small input' />
            <Input size='md' label='Medium' placeholder='Medium input' />
            <Input size='lg' label='Large' placeholder='Large input' />
          </div>
        </div>

        {/* Input with Description */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input with Description</h2>
          <div className='max-w-xs'>
            <Input
              label='Username'
              placeholder='Enter username'
              description='Username must be at least 3 characters long'
            />
          </div>
        </div>

        {/* Input with Custom Error */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Input with Custom Error Message</h2>
          <div className='max-w-xs'>
            <Input
              label='Email'
              placeholder='Enter email'
              startIcon='material-symbols:email'
              errorMessage='Please enter a valid email address'
              isInvalid={emailValue !== '' && !emailValue.includes('@')}
              value={emailValue}
              onValueChange={setEmailValue}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputTest

InputTest.auth = false

InputTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

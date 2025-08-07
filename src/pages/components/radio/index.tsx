import React, { Fragment, ReactElement, useState } from 'react'
import { RadioGroup, Radio } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const RadioTest = () => {
  const [selected, setSelected] = useState('option1')
  const [customValue, setCustomValue] = useState('')

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Radio Component Test</h1>

        {/* Basic Radio */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Radio Examples</h2>
          <div className='space-y-4'>
            <RadioGroup label='Basic options'>
              <Radio value='option1'>Default radio</Radio>
              <Radio value='option2'>Another option</Radio>
            </RadioGroup>

            <RadioGroup label='With default selection' defaultValue='selected'>
              <Radio value='unselected'>Unselected option</Radio>
              <Radio value='selected'>Default selected</Radio>
            </RadioGroup>

            <RadioGroup label='With disabled options'>
              <Radio value='enabled'>Enabled radio</Radio>
              <Radio value='disabled' isDisabled>
                Disabled radio
              </Radio>
            </RadioGroup>
          </div>
        </div>

        {/* RadioGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Radio Group</h2>
          <RadioGroup label='Select your favorite city' value={selected} onValueChange={setSelected}>
            <Radio value='option1'>Buenos Aires</Radio>
            <Radio value='option2'>Sydney</Radio>
            <Radio value='option3'>San Francisco</Radio>
            <Radio value='option4'>London</Radio>
            <Radio value='option5'>Tokyo</Radio>
          </RadioGroup>
          <p className='text-small text-default-500'>Selected: {selected}</p>
        </div>

        {/* Horizontal RadioGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Horizontal Radio Group</h2>
          <RadioGroup label='Select payment method' orientation='horizontal' defaultValue='credit'>
            <Radio value='credit'>Credit Card</Radio>
            <Radio value='paypal'>PayPal</Radio>
            <Radio value='apple'>Apple Pay</Radio>
            <Radio value='google'>Google Pay</Radio>
          </RadioGroup>
        </div>

        {/* Radio Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Radio Sizes</h2>
          <div className='space-y-4'>
            <RadioGroup label='Small size radios' size='sm' defaultValue='small1'>
              <Radio value='small1'>Small radio 1</Radio>
              <Radio value='small2'>Small radio 2</Radio>
            </RadioGroup>
            <RadioGroup label='Medium size radios' size='md' defaultValue='medium1'>
              <Radio value='medium1'>Medium radio 1</Radio>
              <Radio value='medium2'>Medium radio 2</Radio>
            </RadioGroup>
            <RadioGroup label='Large size radios' size='lg' defaultValue='large1'>
              <Radio value='large1'>Large radio 1</Radio>
              <Radio value='large2'>Large radio 2</Radio>
            </RadioGroup>
          </div>
        </div>

        {/* Radio Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Radio Colors</h2>
          <div className='space-y-4'>
            <RadioGroup label='Default color' color='default' defaultValue='default1'>
              <Radio value='default1'>Default color option 1</Radio>
              <Radio value='default2'>Default color option 2</Radio>
            </RadioGroup>
            <RadioGroup label='Primary color' color='primary' defaultValue='primary1'>
              <Radio value='primary1'>Primary color option 1</Radio>
              <Radio value='primary2'>Primary color option 2</Radio>
            </RadioGroup>
            <RadioGroup label='Secondary color' color='secondary' defaultValue='secondary1'>
              <Radio value='secondary1'>Secondary color option 1</Radio>
              <Radio value='secondary2'>Secondary color option 2</Radio>
            </RadioGroup>
            <RadioGroup label='Success color' color='success' defaultValue='success1'>
              <Radio value='success1'>Success color option 1</Radio>
              <Radio value='success2'>Success color option 2</Radio>
            </RadioGroup>
            <RadioGroup label='Warning color' color='warning' defaultValue='warning1'>
              <Radio value='warning1'>Warning color option 1</Radio>
              <Radio value='warning2'>Warning color option 2</Radio>
            </RadioGroup>
            <RadioGroup label='Danger color' color='danger' defaultValue='danger1'>
              <Radio value='danger1'>Danger color option 1</Radio>
              <Radio value='danger2'>Danger color option 2</Radio>
            </RadioGroup>
          </div>
        </div>

        {/* RadioGroup with Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Colored Radio Groups</h2>
          <div className='space-y-4'>
            <RadioGroup label='Primary theme' color='primary' defaultValue='light'>
              <Radio value='light'>Light theme</Radio>
              <Radio value='dark'>Dark theme</Radio>
              <Radio value='system'>System preference</Radio>
            </RadioGroup>

            <RadioGroup label='Notification preferences' color='success' defaultValue='all'>
              <Radio value='all'>All notifications</Radio>
              <Radio value='important'>Important only</Radio>
              <Radio value='none'>No notifications</Radio>
            </RadioGroup>

            <RadioGroup label='Warning level' color='warning' defaultValue='medium'>
              <Radio value='low'>Low priority</Radio>
              <Radio value='medium'>Medium priority</Radio>
              <Radio value='high'>High priority</Radio>
            </RadioGroup>
          </div>
        </div>

        {/* RadioGroup with Description */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Radio with Descriptions</h2>
          <RadioGroup label='Choose a plan' description='Select the plan that best fits your needs'>
            <Radio
              value='free'
              classNames={{
                label: 'w-full'
              }}>
              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <span className='text-small'>Free Plan</span>
                  <span className='text-tiny text-default-400'>Basic features with limited usage</span>
                </div>
                <span className='text-small text-default-400'>$0/month</span>
              </div>
            </Radio>
            <Radio
              value='pro'
              classNames={{
                label: 'w-full'
              }}>
              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <span className='text-small'>Pro Plan</span>
                  <span className='text-tiny text-default-400'>Advanced features with unlimited usage</span>
                </div>
                <span className='text-small text-default-400'>$9.99/month</span>
              </div>
            </Radio>
            <Radio
              value='enterprise'
              classNames={{
                label: 'w-full'
              }}>
              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <span className='text-small'>Enterprise Plan</span>
                  <span className='text-tiny text-default-400'>Full features with priority support</span>
                </div>
                <span className='text-small text-default-400'>$29.99/month</span>
              </div>
            </Radio>
          </RadioGroup>
        </div>

        {/* RadioGroup with Validation */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Radio Group with Validation</h2>
          <RadioGroup
            label='Required selection'
            isRequired
            description='You must select one option to continue'
            errorMessage='Please select an option'
            isInvalid={!customValue}
            value={customValue}
            onValueChange={setCustomValue}>
            <Radio value='agree'>I agree to the terms and conditions</Radio>
            <Radio value='disagree'>I do not agree</Radio>
          </RadioGroup>
          <p className='text-small text-default-500'>Current selection: {customValue || 'None'}</p>
        </div>

        {/* Disabled RadioGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Radio Group</h2>
          <RadioGroup label='Unavailable options' isDisabled defaultValue='option1'>
            <Radio value='option1'>First option</Radio>
            <Radio value='option2'>Second option</Radio>
            <Radio value='option3'>Third option</Radio>
          </RadioGroup>
        </div>

        {/* RadioGroup with Individual Disabled Items */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Radio Group with Disabled Items</h2>
          <RadioGroup label='Mixed availability' defaultValue='available1'>
            <Radio value='available1'>Available option 1</Radio>
            <Radio value='disabled1' isDisabled>
              Disabled option 1
            </Radio>
            <Radio value='available2'>Available option 2</Radio>
            <Radio value='disabled2' isDisabled>
              Disabled option 2
            </Radio>
            <Radio value='available3'>Available option 3</Radio>
          </RadioGroup>
        </div>

        {/* Custom RadioGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Radio Group</h2>
          <RadioGroup className='gap-1' label='Select priority level' orientation='horizontal' defaultValue='normal'>
            <Radio value='low' size='lg' color='success'>
              Low
            </Radio>
            <Radio value='normal' size='lg' color='primary'>
              Normal
            </Radio>
            <Radio value='high' size='lg' color='warning'>
              High
            </Radio>
            <Radio value='critical' size='lg' color='danger'>
              Critical
            </Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export default RadioTest

RadioTest.auth = false

RadioTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

import React, { Fragment, ReactElement, useState } from 'react'
import { Checkbox, CheckboxGroup } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const CheckboxTest = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [groupValue, setGroupValue] = useState<string[]>([])

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Checkbox Component Test</h1>

        {/* Basic Checkbox */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Checkbox</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox>Default checkbox</Checkbox>
            <Checkbox defaultSelected>Default selected</Checkbox>
            <Checkbox isDisabled>Disabled checkbox</Checkbox>
            <Checkbox isDisabled isSelected>
              Disabled selected
            </Checkbox>
          </div>
        </div>

        {/* Controlled Checkbox */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Controlled Checkbox</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
              Subscribe to newsletter (Selected: {isSelected.toString()})
            </Checkbox>
            <button
              className='w-fit rounded bg-blue-500 px-4 py-2 text-white'
              onClick={() => setIsSelected(!isSelected)}>
              Toggle checkbox
            </button>
          </div>
        </div>

        {/* Checkbox Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Checkbox Sizes</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox size='sm'>Small checkbox</Checkbox>
            <Checkbox size='md'>Medium checkbox</Checkbox>
            <Checkbox size='lg'>Large checkbox</Checkbox>
          </div>
        </div>

        {/* Checkbox Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Checkbox Colors</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox color='default' defaultSelected>
              Default color
            </Checkbox>
            <Checkbox color='primary' defaultSelected>
              Primary color
            </Checkbox>
            <Checkbox color='secondary' defaultSelected>
              Secondary color
            </Checkbox>
            <Checkbox color='success' defaultSelected>
              Success color
            </Checkbox>
            <Checkbox color='warning' defaultSelected>
              Warning color
            </Checkbox>
            <Checkbox color='danger' defaultSelected>
              Danger color
            </Checkbox>
          </div>
        </div>

        {/* Checkbox Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Checkbox Radius</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox radius='none' defaultSelected>
              No radius
            </Checkbox>
            <Checkbox radius='sm' defaultSelected>
              Small radius
            </Checkbox>
            <Checkbox radius='md' defaultSelected>
              Medium radius
            </Checkbox>
            <Checkbox radius='lg' defaultSelected>
              Large radius
            </Checkbox>
            <Checkbox radius='full' defaultSelected>
              Full radius
            </Checkbox>
          </div>
        </div>

        {/* LineThrough */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>LineThrough Effect</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox lineThrough>Task completed</Checkbox>
            <Checkbox lineThrough defaultSelected>
              Completed task
            </Checkbox>
            <Checkbox lineThrough>Another task</Checkbox>
          </div>
        </div>

        {/* Checkbox with Description */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Checkbox with Description</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox
              classNames={{
                label: 'w-full'
              }}>
              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <span className='text-small'>Enable notifications</span>
                  <span className='text-tiny text-default-400'>Receive email notifications for updates</span>
                </div>
              </div>
            </Checkbox>

            <Checkbox
              classNames={{
                label: 'w-full'
              }}>
              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <span className='text-small'>Marketing emails</span>
                  <span className='text-tiny text-default-400'>Receive promotional content and offers</span>
                </div>
              </div>
            </Checkbox>
          </div>
        </div>

        {/* CheckboxGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Checkbox Group</h2>
          <div className='space-y-4'>
            <CheckboxGroup label='Select cities' value={groupValue} onValueChange={setGroupValue}>
              <Checkbox value='buenos-aires'>Buenos Aires</Checkbox>
              <Checkbox value='sydney'>Sydney</Checkbox>
              <Checkbox value='san-francisco'>San Francisco</Checkbox>
              <Checkbox value='london'>London</Checkbox>
              <Checkbox value='tokyo'>Tokyo</Checkbox>
            </CheckboxGroup>
            <p className='text-small text-default-500'>Selected: {groupValue.join(', ')}</p>
          </div>
        </div>

        {/* Horizontal CheckboxGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Horizontal Checkbox Group</h2>
          <CheckboxGroup
            label='Select your favorite framework'
            orientation='horizontal'
            color='secondary'
            defaultValue={['react']}>
            <Checkbox value='react'>React</Checkbox>
            <Checkbox value='vue'>Vue.js</Checkbox>
            <Checkbox value='svelte'>Svelte</Checkbox>
            <Checkbox value='angular'>Angular</Checkbox>
          </CheckboxGroup>
        </div>

        {/* CheckboxGroup with Error */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Checkbox Group with Validation</h2>
          <CheckboxGroup
            label='Required selection'
            isRequired
            description='Please select at least one option'
            errorMessage='You must select at least one option'
            isInvalid={groupValue.length === 0}
            value={groupValue}
            onValueChange={setGroupValue}>
            <Checkbox value='option1'>Option 1</Checkbox>
            <Checkbox value='option2'>Option 2</Checkbox>
            <Checkbox value='option3'>Option 3</Checkbox>
          </CheckboxGroup>
        </div>

        {/* Custom CheckboxGroup */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Checkbox Group</h2>
          <CheckboxGroup className='gap-1' label='Select permissions' orientation='horizontal' defaultValue={['read']}>
            <Checkbox value='read' size='lg' color='success'>
              Read
            </Checkbox>
            <Checkbox value='write' size='lg' color='warning'>
              Write
            </Checkbox>
            <Checkbox value='execute' size='lg' color='danger'>
              Execute
            </Checkbox>
          </CheckboxGroup>
        </div>

        {/* Indeterminate State */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Indeterminate State</h2>
          <div className='flex flex-col gap-3'>
            <Checkbox isIndeterminate>Indeterminate checkbox</Checkbox>
            <Checkbox isIndeterminate color='primary'>
              Primary indeterminate
            </Checkbox>
            <Checkbox isIndeterminate color='success'>
              Success indeterminate
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckboxTest

CheckboxTest.auth = false

CheckboxTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

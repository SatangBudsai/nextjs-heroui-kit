import React, { useState } from 'react'
import { Select, SelectItem, SelectSection } from '@/components/heroui'

const SelectTest: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('')

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Select Components Test</h1>

        {/* Basic Select */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Select</h2>
          <Select
            label='Select an option'
            placeholder='Choose an option'
            value={selectedValue}
            onSelectionChange={value => setSelectedValue(value as string)}
            className='max-w-xs'>
            <SelectItem key='option1' value='option1'>
              Option 1
            </SelectItem>
            <SelectItem key='option2' value='option2'>
              Option 2
            </SelectItem>
            <SelectItem key='option3' value='option3'>
              Option 3
            </SelectItem>
          </Select>
          <p className='text-sm text-gray-600'>Selected: {selectedValue}</p>
        </div>

        {/* Select with Sections */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Select with Sections</h2>
          <Select label='Select with sections' placeholder='Choose from sections' className='max-w-xs'>
            <SelectSection title='Fruits'>
              <SelectItem key='apple' value='apple'>
                Apple
              </SelectItem>
              <SelectItem key='banana' value='banana'>
                Banana
              </SelectItem>
            </SelectSection>
            <SelectSection title='Vegetables'>
              <SelectItem key='carrot' value='carrot'>
                Carrot
              </SelectItem>
              <SelectItem key='broccoli' value='broccoli'>
                Broccoli
              </SelectItem>
            </SelectSection>
          </Select>
        </div>

        {/* Multiple Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different Variants</h2>
          <div className='flex flex-wrap gap-4'>
            <Select variant='flat' label='Flat' className='max-w-xs'>
              <SelectItem key='1'>Item 1</SelectItem>
              <SelectItem key='2'>Item 2</SelectItem>
            </Select>
            <Select variant='bordered' label='Bordered' className='max-w-xs'>
              <SelectItem key='1'>Item 1</SelectItem>
              <SelectItem key='2'>Item 2</SelectItem>
            </Select>
            <Select variant='underlined' label='Underlined' className='max-w-xs'>
              <SelectItem key='1'>Item 1</SelectItem>
              <SelectItem key='2'>Item 2</SelectItem>
            </Select>
          </div>
        </div>

        {/* States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different States</h2>
          <div className='flex flex-wrap gap-4'>
            <Select label='Disabled' isDisabled className='max-w-xs'>
              <SelectItem key='1'>Item 1</SelectItem>
            </Select>
            <Select label='Invalid' isInvalid errorMessage='This field is required' className='max-w-xs'>
              <SelectItem key='1'>Item 1</SelectItem>
            </Select>
            <Select label='Required' isRequired className='max-w-xs'>
              <SelectItem key='1'>Item 1</SelectItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectTest

import React, { useState } from 'react'
import { Autocomplete, AutocompleteItem, AutocompleteSection } from '@/components/heroui'

const AutocompleteTest: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('')

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Autocomplete Components Test</h1>

        {/* Basic Autocomplete */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Autocomplete</h2>
          <Autocomplete
            label='Select a country'
            placeholder='Search countries...'
            value={selectedValue}
            onSelectionChange={value => setSelectedValue(value as string)}
            className='max-w-xs'>
            <AutocompleteItem key='us' value='us'>
              United States
            </AutocompleteItem>
            <AutocompleteItem key='uk' value='uk'>
              United Kingdom
            </AutocompleteItem>
            <AutocompleteItem key='ca' value='ca'>
              Canada
            </AutocompleteItem>
            <AutocompleteItem key='au' value='au'>
              Australia
            </AutocompleteItem>
          </Autocomplete>
          <p className='text-sm text-gray-600'>Selected: {selectedValue}</p>
        </div>

        {/* Autocomplete with Sections */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Autocomplete with Sections</h2>
          <Autocomplete label='Select programming language' placeholder='Search languages...' className='max-w-xs'>
            <AutocompleteSection title='Frontend'>
              <AutocompleteItem key='javascript' value='javascript'>
                JavaScript
              </AutocompleteItem>
              <AutocompleteItem key='typescript' value='typescript'>
                TypeScript
              </AutocompleteItem>
              <AutocompleteItem key='react' value='react'>
                React
              </AutocompleteItem>
            </AutocompleteSection>
            <AutocompleteSection title='Backend'>
              <AutocompleteItem key='nodejs' value='nodejs'>
                Node.js
              </AutocompleteItem>
              <AutocompleteItem key='python' value='python'>
                Python
              </AutocompleteItem>
              <AutocompleteItem key='java' value='java'>
                Java
              </AutocompleteItem>
            </AutocompleteSection>
          </Autocomplete>
        </div>

        {/* Different Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different Variants</h2>
          <div className='grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
            <Autocomplete variant='flat' label='Flat' placeholder='Flat variant'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
            <Autocomplete variant='bordered' label='Bordered' placeholder='Bordered variant'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
            <Autocomplete variant='underlined' label='Underlined' placeholder='Underlined variant'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
            <Autocomplete variant='faded' label='Faded' placeholder='Faded variant'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
          </div>
        </div>

        {/* Different States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different States</h2>
          <div className='grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
            <Autocomplete label='Normal' placeholder='Normal state'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
            </Autocomplete>
            <Autocomplete label='Disabled' placeholder='Disabled state' isDisabled>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
            </Autocomplete>
            <Autocomplete label='Required' placeholder='Required field' isRequired>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
            </Autocomplete>
            <Autocomplete label='Invalid' placeholder='Invalid state' isInvalid errorMessage='This field is required'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
            </Autocomplete>
          </div>
        </div>

        {/* Different Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different Sizes</h2>
          <div className='max-w-xs space-y-4'>
            <Autocomplete size='sm' label='Small' placeholder='Small size'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
            <Autocomplete size='md' label='Medium' placeholder='Medium size'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
            <Autocomplete size='lg' label='Large' placeholder='Large size'>
              <AutocompleteItem key='1'>Option 1</AutocompleteItem>
              <AutocompleteItem key='2'>Option 2</AutocompleteItem>
            </Autocomplete>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutocompleteTest

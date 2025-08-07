import React, { useState } from 'react'
import { Chip } from '@/components/heroui'

const ChipTest: React.FC = () => {
  const [chips, setChips] = useState([
    { id: 1, label: 'React', isSelected: false },
    { id: 2, label: 'Vue', isSelected: true },
    { id: 3, label: 'Angular', isSelected: false },
    { id: 4, label: 'Svelte', isSelected: false }
  ])

  const toggleChip = (id: number) => {
    setChips(chips.map(chip => (chip.id === id ? { ...chip, isSelected: !chip.isSelected } : chip)))
  }

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Chip Component Test</h1>

        {/* Basic Chips */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Chips</h2>
          <div className='flex flex-wrap gap-2'>
            <Chip>Default Chip</Chip>
            <Chip variant='solid'>Solid Chip</Chip>
            <Chip variant='bordered'>Bordered Chip</Chip>
            <Chip variant='light'>Light Chip</Chip>
            <Chip variant='flat'>Flat Chip</Chip>
            <Chip variant='faded'>Faded Chip</Chip>
            <Chip variant='shadow'>Shadow Chip</Chip>
            <Chip variant='dot'>Dot Chip</Chip>
          </div>
        </div>

        {/* Chip Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Chip Colors</h2>
          <div className='space-y-3'>
            <div className='flex flex-wrap gap-2'>
              <span className='w-full text-sm font-medium'>Default variant:</span>
              <Chip color='default'>Default</Chip>
              <Chip color='primary'>Primary</Chip>
              <Chip color='secondary'>Secondary</Chip>
              <Chip color='success'>Success</Chip>
              <Chip color='warning'>Warning</Chip>
              <Chip color='danger'>Danger</Chip>
            </div>
            <div className='flex flex-wrap gap-2'>
              <span className='w-full text-sm font-medium'>Solid variant:</span>
              <Chip color='default' variant='solid'>
                Default
              </Chip>
              <Chip color='primary' variant='solid'>
                Primary
              </Chip>
              <Chip color='secondary' variant='solid'>
                Secondary
              </Chip>
              <Chip color='success' variant='solid'>
                Success
              </Chip>
              <Chip color='warning' variant='solid'>
                Warning
              </Chip>
              <Chip color='danger' variant='solid'>
                Danger
              </Chip>
            </div>
          </div>
        </div>

        {/* Chip Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Chip Sizes</h2>
          <div className='flex flex-wrap items-center gap-2'>
            <Chip size='sm'>Small</Chip>
            <Chip size='md'>Medium</Chip>
            <Chip size='lg'>Large</Chip>
          </div>
        </div>

        {/* Chip Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Chip Radius</h2>
          <div className='flex flex-wrap gap-2'>
            <Chip radius='none'>No Radius</Chip>
            <Chip radius='sm'>Small Radius</Chip>
            <Chip radius='md'>Medium Radius</Chip>
            <Chip radius='lg'>Large Radius</Chip>
            <Chip radius='full'>Full Radius</Chip>
          </div>
        </div>

        {/* Closeable Chips */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Closeable Chips</h2>
          <div className='flex flex-wrap gap-2'>
            <Chip onClose={() => console.log('Closed default')}>Closeable Default</Chip>
            <Chip color='primary' variant='solid' onClose={() => console.log('Closed primary')}>
              Closeable Primary
            </Chip>
            <Chip color='success' variant='flat' onClose={() => console.log('Closed success')}>
              Closeable Success
            </Chip>
            <Chip color='danger' variant='bordered' onClose={() => console.log('Closed danger')}>
              Closeable Danger
            </Chip>
          </div>
        </div>

        {/* Chips with Avatars */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Chips with Start/End Content</h2>
          <div className='flex flex-wrap gap-2'>
            <Chip startContent={<span className='text-xs'>👤</span>}>User Chip</Chip>
            <Chip startContent={<span className='text-xs'>🏷️</span>} color='primary' variant='flat'>
              Tag Chip
            </Chip>
            <Chip endContent={<span className='text-xs'>📧</span>} color='secondary' variant='solid'>
              Email Chip
            </Chip>
            <Chip
              startContent={<span className='text-xs'>🔥</span>}
              endContent={<span className='text-xs'>⭐</span>}
              color='warning'
              variant='bordered'>
              Featured
            </Chip>
          </div>
        </div>

        {/* Interactive/Selectable Chips */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Interactive Chips</h2>
          <div className='space-y-3'>
            <p className='text-sm text-gray-600'>Click chips to toggle selection:</p>
            <div className='flex flex-wrap gap-2'>
              {chips.map(chip => (
                <Chip
                  key={chip.id}
                  color={chip.isSelected ? 'primary' : 'default'}
                  variant={chip.isSelected ? 'solid' : 'bordered'}
                  onClick={() => toggleChip(chip.id)}
                  className='cursor-pointer'>
                  {chip.label}
                </Chip>
              ))}
            </div>
            <p className='text-sm text-gray-500'>
              Selected:{' '}
              {chips
                .filter(chip => chip.isSelected)
                .map(chip => chip.label)
                .join(', ') || 'None'}
            </p>
          </div>
        </div>

        {/* Disabled Chips */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Chips</h2>
          <div className='flex flex-wrap gap-2'>
            <Chip isDisabled>Disabled Default</Chip>
            <Chip isDisabled color='primary' variant='solid'>
              Disabled Primary
            </Chip>
            <Chip isDisabled color='success' variant='bordered'>
              Disabled Success
            </Chip>
            <Chip isDisabled color='warning' variant='flat' onClose={() => console.log('This won&apos;t work')}>
              Disabled with Close
            </Chip>
          </div>
        </div>

        {/* Chip Groups */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Chip Groups</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>Technology Stack</h3>
              <div className='flex flex-wrap gap-2'>
                <Chip color='primary' variant='flat'>
                  Frontend
                </Chip>
                <Chip color='secondary' variant='flat'>
                  Backend
                </Chip>
                <Chip color='success' variant='flat'>
                  Database
                </Chip>
                <Chip color='warning' variant='flat'>
                  DevOps
                </Chip>
                <Chip color='danger' variant='flat'>
                  Testing
                </Chip>
              </div>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Status Tags</h3>
              <div className='flex flex-wrap gap-2'>
                <Chip color='success' variant='dot'>
                  Active
                </Chip>
                <Chip color='warning' variant='dot'>
                  Pending
                </Chip>
                <Chip color='danger' variant='dot'>
                  Inactive
                </Chip>
                <Chip color='default' variant='dot'>
                  Draft
                </Chip>
              </div>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Priority Levels</h3>
              <div className='flex flex-wrap gap-2'>
                <Chip size='sm' color='success' variant='solid'>
                  Low
                </Chip>
                <Chip size='md' color='warning' variant='solid'>
                  Medium
                </Chip>
                <Chip size='lg' color='danger' variant='solid'>
                  High
                </Chip>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Styled Chips */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Chips</h2>
          <div className='flex flex-wrap gap-2'>
            <Chip
              classNames={{
                base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                content: 'drop-shadow shadow-black text-white'
              }}>
              Gradient Chip
            </Chip>
            <Chip
              classNames={{
                base: 'bg-black text-white',
                content: 'font-mono'
              }}
              startContent={<span>$</span>}>
              terminal
            </Chip>
            <Chip
              classNames={{
                base: 'border-2 border-dashed border-gray-300',
                content: 'text-gray-600'
              }}
              variant='bordered'>
              Dashed Border
            </Chip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChipTest

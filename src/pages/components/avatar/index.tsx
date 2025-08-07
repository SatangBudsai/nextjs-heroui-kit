import React, { useState } from 'react'
import { Avatar, AvatarGroup } from '@/components/heroui'

const AvatarTest: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Avatar Component Test</h1>

        {/* Basic Avatars */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Avatars</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar />
            <Avatar name='John Doe' />
            <Avatar name='Jane Smith' />
            <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
            <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
          </div>
        </div>

        {/* Avatar Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar Sizes</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar size='sm' name='Small' />
            <Avatar size='md' name='Medium' />
            <Avatar size='lg' name='Large' />
            <Avatar size='sm' src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
            <Avatar size='md' src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
            <Avatar size='lg' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          </div>
        </div>

        {/* Avatar Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar Colors</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar color='default' name='Default' />
            <Avatar color='primary' name='Primary' />
            <Avatar color='secondary' name='Secondary' />
            <Avatar color='success' name='Success' />
            <Avatar color='warning' name='Warning' />
            <Avatar color='danger' name='Danger' />
          </div>
        </div>

        {/* Avatar Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar Radius</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar radius='none' name='None' />
            <Avatar radius='sm' name='Small' />
            <Avatar radius='md' name='Medium' />
            <Avatar radius='lg' name='Large' />
            <Avatar radius='full' name='Full' />
          </div>
        </div>

        {/* Avatar with Border */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar with Border</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar isBordered color='primary' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
            <Avatar isBordered color='secondary' src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
            <Avatar isBordered color='success' src='https://i.pravatar.cc/150?u=a048581f4e29026701d' />
            <Avatar isBordered color='warning' name='Warning' />
            <Avatar isBordered color='danger' name='Danger' />
          </div>
        </div>

        {/* Avatar States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar States</h2>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <label className='flex items-center gap-2'>
                <input type='checkbox' checked={isDisabled} onChange={e => setIsDisabled(e.target.checked)} />
                Disabled
              </label>
            </div>
            <div className='flex flex-wrap items-center gap-4'>
              <Avatar name='John' isDisabled={isDisabled} />
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' isDisabled={isDisabled} />
              <Avatar isBordered color='primary' name='Jane' isDisabled={isDisabled} />
            </div>
          </div>
        </div>

        {/* Avatar with Fallback */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar with Fallback</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar src='https://broken-link.jpg' name='Fallback Name' showFallback />
            <Avatar src='' name='Empty Source' showFallback />
            <Avatar src='https://broken-link.jpg' fallback={<span className='text-xs'>FB</span>} />
          </div>
        </div>

        {/* Custom Avatar Content */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Avatar Content</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar
              icon={<span>👨</span>}
              classNames={{
                base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B]',
                icon: 'text-black/80'
              }}
            />
            <Avatar
              icon={<span>👩</span>}
              classNames={{
                base: 'bg-gradient-to-br from-[#FF705B] to-[#FFB457]',
                icon: 'text-black/80'
              }}
            />
            <Avatar icon={<span className='text-lg'>🎭</span>} color='secondary' />
            <Avatar
              classNames={{
                base: 'bg-black',
                name: 'text-white font-mono'
              }}
              name='$'
            />
          </div>
        </div>

        {/* Avatar Group */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Avatar Group</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>Basic Group</h3>
              <AvatarGroup isBordered>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
              </AvatarGroup>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Group with Max Count</h3>
              <AvatarGroup isBordered max={3}>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026709c' />
              </AvatarGroup>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Group with Names</h3>
              <AvatarGroup isBordered>
                <Avatar name='Ryan Florence' />
                <Avatar name='Serenity Caldwell' />
                <Avatar name='Oscar Rodriguez' />
                <Avatar name='Emma Thompson' />
              </AvatarGroup>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Colored Group</h3>
              <AvatarGroup isBordered>
                <Avatar color='primary' name='P' />
                <Avatar color='secondary' name='S' />
                <Avatar color='success' name='Su' />
                <Avatar color='warning' name='W' />
                <Avatar color='danger' name='D' />
              </AvatarGroup>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Different Sizes</h3>
              <div className='space-y-2'>
                <AvatarGroup isBordered size='sm'>
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                  <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                </AvatarGroup>
                <AvatarGroup isBordered size='md'>
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                  <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                </AvatarGroup>
                <AvatarGroup isBordered size='lg'>
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                  <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                  <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                </AvatarGroup>
              </div>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Disabled Group</h3>
              <AvatarGroup isBordered isDisabled>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
                <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
              </AvatarGroup>
            </div>
          </div>
        </div>

        {/* Custom Styled Avatars */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Avatars</h2>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar
              classNames={{
                base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B] border-small border-white/50 shadow-pink-500/30',
                name: 'drop-shadow shadow-black text-white font-bold'
              }}
              name='GR'
            />
            <Avatar
              classNames={{
                base: 'ring-2 ring-blue-500 ring-offset-2 ring-offset-background'
              }}
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
            />
            <Avatar
              classNames={{
                base: 'bg-black border-2 border-white',
                name: 'text-white font-mono'
              }}
              name='DEV'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarTest

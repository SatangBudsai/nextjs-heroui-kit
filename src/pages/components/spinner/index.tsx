import React, { Fragment, ReactElement } from 'react'
import { Spinner } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const SpinnerTest = () => {
  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Spinner Component Test</h1>

        {/* Basic Spinner */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Spinner</h2>
          <div className='flex items-center gap-4'>
            <Spinner />
          </div>
        </div>

        {/* Spinner Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Spinner Colors</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='flex flex-col items-center gap-2'>
              <Spinner color='default' />
              <span className='text-sm'>Default</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner color='primary' />
              <span className='text-sm'>Primary</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner color='secondary' />
              <span className='text-sm'>Secondary</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner color='success' />
              <span className='text-sm'>Success</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner color='warning' />
              <span className='text-sm'>Warning</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner color='danger' />
              <span className='text-sm'>Danger</span>
            </div>
          </div>
        </div>

        {/* Spinner Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Spinner Sizes</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='flex flex-col items-center gap-2'>
              <Spinner size='sm' color='primary' />
              <span className='text-sm'>Small</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner size='md' color='primary' />
              <span className='text-sm'>Medium</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner size='lg' color='primary' />
              <span className='text-sm'>Large</span>
            </div>
          </div>
        </div>

        {/* Spinner with Label */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Spinner with Label</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Spinner label='Loading...' />
            <Spinner label='Processing...' color='primary' />
            <Spinner label='Uploading...' color='success' />
            <Spinner label='Please wait...' color='warning' />
          </div>
        </div>

        {/* Spinner Label Placement */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Spinner Label Placement</h2>
          <div className='space-y-4'>
            <div className='flex flex-wrap items-center gap-6'>
              <span className='w-full text-sm font-medium'>Label on right:</span>
              <Spinner label='Loading data...' color='primary' labelColor='primary' />
              <Spinner label='Processing files...' color='success' labelColor='success' />
            </div>
            <div className='flex flex-wrap items-center gap-6'>
              <span className='w-full text-sm font-medium'>Different label colors:</span>
              <Spinner label='Primary spinner' color='primary' labelColor='secondary' />
              <Spinner label='Success spinner' color='success' labelColor='warning' />
            </div>
          </div>
        </div>

        {/* Custom Styled Spinner */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Spinner</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <Spinner
              classNames={{
                circle1: 'border-b-pink-500',
                circle2: 'border-b-yellow-500',
                wrapper: 'w-32 h-32'
              }}
            />
            <Spinner
              classNames={{
                wrapper: 'w-16 h-16',
                circle1: 'border-b-blue-500 border-4',
                circle2: 'border-b-purple-500 border-4'
              }}
            />
          </div>
        </div>

        {/* Loading States Examples */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Loading States Examples</h2>
          <div className='space-y-4'>
            <div className='rounded-lg border p-4'>
              <div className='flex items-center gap-3'>
                <Spinner size='sm' color='primary' />
                <span>Loading page content...</span>
              </div>
            </div>

            <div className='rounded-lg border bg-gray-50 p-4'>
              <div className='flex flex-col items-center gap-3 py-8'>
                <Spinner size='lg' color='primary' />
                <p className='text-lg font-medium'>Uploading files</p>
                <p className='text-sm text-gray-600'>Please wait while we process your request</p>
              </div>
            </div>

            <div className='rounded-lg border p-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='font-medium'>Data synchronization</h3>
                  <p className='text-sm text-gray-600'>Syncing with remote server...</p>
                </div>
                <Spinner color='success' />
              </div>
            </div>

            <div className='rounded-lg border bg-blue-50 p-4'>
              <div className='flex items-center gap-3'>
                <Spinner size='sm' color='primary' />
                <div>
                  <p className='font-medium text-blue-900'>Connecting to database</p>
                  <p className='text-sm text-blue-700'>Establishing secure connection...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline Loading Examples */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Inline Loading Examples</h2>
          <div className='space-y-3'>
            <button
              className='flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50'
              disabled>
              <Spinner size='sm' color='current' />
              Loading...
            </button>

            <button
              className='flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:opacity-50'
              disabled>
              <Spinner size='sm' color='current' />
              Saving changes
            </button>

            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <Spinner size='sm' />
              Refreshing data in real-time...
            </div>

            <div className='flex items-center gap-2 text-sm'>
              <Spinner size='sm' color='warning' />
              <span className='text-yellow-700'>Processing your request...</span>
            </div>
          </div>
        </div>

        {/* Different Animation Speeds */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Animation Speed</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='flex flex-col items-center gap-2'>
              <Spinner
                color='primary'
                classNames={{
                  circle1: 'animate-spin',
                  circle2: 'animate-spin'
                }}
              />
              <span className='text-sm'>Normal Speed</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Spinner
                color='secondary'
                classNames={{
                  circle1: 'animate-pulse',
                  circle2: 'animate-pulse'
                }}
              />
              <span className='text-sm'>Pulse Animation</span>
            </div>
          </div>
        </div>

        {/* Accessibility Examples */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Accessibility Examples</h2>
          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <Spinner size='sm' color='primary' aria-label='Loading content' />
              <span>Content with proper aria-label</span>
            </div>

            <div className='flex items-center gap-3'>
              <Spinner size='sm' color='success' role='status' aria-live='polite' />
              <span>Status indicator with live region</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpinnerTest

SpinnerTest.auth = false

SpinnerTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

import React, { useState, useEffect, ReactElement, Fragment } from 'react'
import { Progress, CircularProgress } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const ProgressTest = () => {
  const [value, setValue] = useState(0)
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prev => (prev >= 100 ? 0 : prev + 10))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev >= 100 ? 0 : prev + 1))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Progress Component Test</h1>

        {/* Basic Progress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Progress</h2>
          <div className='max-w-md space-y-4'>
            <Progress value={30} />
            <Progress value={50} />
            <Progress value={75} />
            <Progress value={100} />
          </div>
        </div>

        {/* Progress with Label */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Progress with Label</h2>
          <div className='max-w-md space-y-4'>
            <Progress value={30} label='Loading...' />
            <Progress value={65} label='Uploading files' showValueLabel />
            <Progress value={88} label='Processing data' showValueLabel />
          </div>
        </div>

        {/* Progress Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Progress Colors</h2>
          <div className='max-w-md space-y-4'>
            <Progress value={40} color='default' label='Default' />
            <Progress value={50} color='primary' label='Primary' />
            <Progress value={60} color='secondary' label='Secondary' />
            <Progress value={70} color='success' label='Success' />
            <Progress value={80} color='warning' label='Warning' />
            <Progress value={90} color='danger' label='Danger' />
          </div>
        </div>

        {/* Progress Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Progress Sizes</h2>
          <div className='max-w-md space-y-4'>
            <Progress size='sm' value={40} label='Small' />
            <Progress size='md' value={60} label='Medium' />
            <Progress size='lg' value={80} label='Large' />
          </div>
        </div>

        {/* Progress Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Progress Radius</h2>
          <div className='max-w-md space-y-4'>
            <Progress radius='none' value={40} label='No radius' />
            <Progress radius='sm' value={50} label='Small radius' />
            <Progress radius='md' value={60} label='Medium radius' />
            <Progress radius='lg' value={70} label='Large radius' />
            <Progress radius='full' value={80} label='Full radius' />
          </div>
        </div>

        {/* Animated Progress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Animated Progress</h2>
          <div className='max-w-md space-y-4'>
            <Progress value={value} color='primary' label='Auto incrementing' showValueLabel />
            <Progress value={animatedValue} color='success' label='Smooth animation' showValueLabel />
          </div>
        </div>

        {/* Indeterminate Progress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Indeterminate Progress</h2>
          <div className='max-w-md space-y-4'>
            <Progress isIndeterminate color='primary' label='Loading...' />
            <Progress isIndeterminate color='secondary' label='Processing...' />
          </div>
        </div>

        {/* Striped Progress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Striped Progress</h2>
          <div className='max-w-md space-y-4'>
            <Progress value={60} color='primary' isStriped label='Striped progress' />
            <Progress value={75} color='success' isStriped label='Striped success' />
          </div>
        </div>

        {/* Custom Format */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Value Format</h2>
          <div className='max-w-md space-y-4'>
            <Progress
              value={45}
              color='primary'
              label='Storage used'
              showValueLabel
              formatOptions={{ style: 'percent' }}
            />
            <Progress value={75} color='warning' label='Memory usage' valueLabel={`${75} MB`} />
          </div>
        </div>

        {/* CircularProgress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Circular Progress</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <CircularProgress value={30} />
            <CircularProgress value={50} showValueLabel />
            <CircularProgress value={75} color='primary' showValueLabel />
            <CircularProgress value={90} color='success' showValueLabel />
          </div>
        </div>

        {/* CircularProgress Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Circular Progress Colors</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <CircularProgress value={60} color='default' />
            <CircularProgress value={60} color='primary' />
            <CircularProgress value={60} color='secondary' />
            <CircularProgress value={60} color='success' />
            <CircularProgress value={60} color='warning' />
            <CircularProgress value={60} color='danger' />
          </div>
        </div>

        {/* CircularProgress Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Circular Progress Sizes</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <CircularProgress size='sm' value={60} color='primary' />
            <CircularProgress size='md' value={60} color='primary' />
            <CircularProgress size='lg' value={60} color='primary' />
          </div>
        </div>

        {/* Indeterminate CircularProgress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Indeterminate Circular Progress</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <CircularProgress isIndeterminate color='primary' aria-label='Loading...' />
            <CircularProgress isIndeterminate color='secondary' aria-label='Processing...' />
            <CircularProgress isIndeterminate color='success' aria-label='Uploading...' />
          </div>
        </div>

        {/* CircularProgress with Label */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Circular Progress with Label</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <CircularProgress value={75} color='primary' showValueLabel label='Progress' />
            <CircularProgress value={animatedValue} color='success' showValueLabel label='Live Data' />
            <CircularProgress value={85} color='warning' valueLabel='85%' label='Complete' />
          </div>
        </div>

        {/* Custom CircularProgress */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Circular Progress</h2>
          <div className='flex flex-wrap items-center gap-6'>
            <CircularProgress
              value={70}
              classNames={{
                svg: 'w-36 h-36 drop-shadow-md',
                indicator: 'stroke-white',
                track: 'stroke-white/10',
                value: 'text-3xl font-semibold text-white'
              }}
              strokeWidth={4}
              showValueLabel
            />
            <CircularProgress
              value={60}
              color='warning'
              strokeWidth={3}
              classNames={{
                svg: 'w-20 h-20',
                value: 'text-xs font-semibold'
              }}
              showValueLabel
            />
          </div>
        </div>

        {/* Interactive Progress Controls */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Interactive Progress Controls</h2>
          <div className='space-y-4'>
            <div className='flex max-w-md items-center gap-4'>
              <button
                className='rounded bg-blue-500 px-4 py-2 text-white'
                onClick={() => setValue(prev => Math.min(100, prev + 10))}>
                +10
              </button>
              <button
                className='rounded bg-red-500 px-4 py-2 text-white'
                onClick={() => setValue(prev => Math.max(0, prev - 10))}>
                -10
              </button>
              <button className='rounded bg-gray-500 px-4 py-2 text-white' onClick={() => setValue(0)}>
                Reset
              </button>
            </div>
            <Progress value={value} color='primary' label='Manual control' showValueLabel className='max-w-md' />
            <CircularProgress value={value} color='primary' showValueLabel label="Sync'd" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTest

ProgressTest.auth = false

ProgressTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

import React, { Fragment, ReactElement, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const CardTest = () => {
  const [isFollowed, setIsFollowed] = useState(false)

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Card Components Test</h1>

        {/* Basic Card */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Card</h2>
          <Card className='max-w-md'>
            <CardHeader className='flex gap-3'>
              <div className='flex flex-col'>
                <p className='text-md'>NextUI</p>
                <p className='text-small text-default-500'>nextui.org</p>
              </div>
            </CardHeader>
            <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <CardFooter>
              <Button color='primary'>Get Started</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Card with Image */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Card with Image</h2>
          <Card className='max-w-md'>
            <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
              <p className='text-tiny font-bold uppercase'>Daily Mix</p>
              <small className='text-default-500'>12 Tracks</small>
              <h4 className='text-large font-bold'>Frontend Radio</h4>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='rounded-xl object-cover'
                src='/images/@mock/300x200.jpg'
                width={270}
              />
            </CardBody>
          </Card>
        </div>

        {/* Profile Card */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Profile Card</h2>
          <Card className='max-w-[340px]'>
            <CardHeader className='justify-between'>
              <div className='flex gap-5'>
                <Image alt='Profile avatar' height={40} radius='sm' src='/images/@mock/200x200.jpg' width={40} />
                <div className='flex flex-col items-start justify-center gap-1'>
                  <h4 className='text-small font-semibold leading-none text-default-600'>Zoey Lang</h4>
                  <h5 className='text-small tracking-tight text-default-400'>@zoeylang</h5>
                </div>
              </div>
              <Button
                className={isFollowed ? 'border-default-200 bg-transparent text-foreground' : ''}
                color='primary'
                radius='full'
                size='sm'
                variant={isFollowed ? 'bordered' : 'solid'}
                onPress={() => setIsFollowed(!isFollowed)}>
                {isFollowed ? 'Unfollow' : 'Follow'}
              </Button>
            </CardHeader>
            <CardBody className='px-3 py-0 text-small text-default-400'>
              <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
              <span className='pt-2'>
                #FrontendWithZoey
                <span className='py-2' aria-label='computer' role='img'>
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className='gap-3'>
              <div className='flex gap-1'>
                <p className='text-small font-semibold text-default-400'>4</p>
                <p className=' text-small text-default-400'>Following</p>
              </div>
              <div className='flex gap-1'>
                <p className='text-small font-semibold text-default-400'>97.1K</p>
                <p className='text-small text-default-400'>Followers</p>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Different Card Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Card Variants</h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <Card className='py-4'>
              <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                <h4 className='text-large font-bold'>Flat Card</h4>
              </CardHeader>
              <CardBody>
                <p>This is a flat card variant with minimal styling.</p>
              </CardBody>
            </Card>

            <Card className='py-4' shadow='md'>
              <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                <h4 className='text-large font-bold'>Shadow Card</h4>
              </CardHeader>
              <CardBody>
                <p>This card has a medium shadow for depth.</p>
              </CardBody>
            </Card>

            <Card className='py-4' shadow='lg'>
              <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                <h4 className='text-large font-bold'>Large Shadow</h4>
              </CardHeader>
              <CardBody>
                <p>This card has a large shadow for emphasis.</p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Interactive Cards</h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Card isPressable onPress={() => console.log('Card pressed!')}>
              <CardBody>
                <h4 className='text-large font-bold'>Pressable Card</h4>
                <p>Click me! I respond to press events.</p>
              </CardBody>
            </Card>

            <Card isHoverable>
              <CardBody>
                <h4 className='text-large font-bold'>Hoverable Card</h4>
                <p>Hover over me to see the effect!</p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Card with Actions */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Card with Actions</h2>
          <Card className='max-w-md'>
            <CardHeader>
              <h4 className='text-large font-bold'>Settings</h4>
            </CardHeader>
            <CardBody>
              <p>Manage your account settings and preferences.</p>
            </CardBody>
            <CardFooter className='gap-2'>
              <Button variant='light'>Cancel</Button>
              <Button color='primary'>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CardTest

CardTest.auth = false

CardTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

import React from 'react'
import { Divider, Card, CardBody } from '@/components/heroui'

const DividerTest: React.FC = () => {
  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Divider Component Test</h1>

        {/* Basic Divider */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Divider</h2>
          <div className='max-w-md'>
            <div className='space-y-1'>
              <h4 className='text-medium font-medium'>HeroUI Components</h4>
              <p className='text-small text-default-400'>Beautiful, fast and modern React UI library.</p>
            </div>
            <Divider className='my-4' />
            <div className='flex h-5 items-center space-x-4 text-small'>
              <div>Blog</div>
              <Divider orientation='vertical' />
              <div>Docs</div>
              <Divider orientation='vertical' />
              <div>Source</div>
            </div>
          </div>
        </div>

        {/* Horizontal Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Horizontal Dividers</h2>
          <div className='max-w-md space-y-4'>
            <div>
              <p>Content above</p>
              <Divider />
              <p>Content below</p>
            </div>

            <div>
              <p>Content above</p>
              <Divider className='my-4' />
              <p>Content below with spacing</p>
            </div>
          </div>
        </div>

        {/* Vertical Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Vertical Dividers</h2>
          <div className='flex h-20 items-center space-x-4'>
            <div className='text-center'>
              <p className='font-medium'>Section 1</p>
              <p className='text-sm text-gray-500'>Description</p>
            </div>
            <Divider orientation='vertical' />
            <div className='text-center'>
              <p className='font-medium'>Section 2</p>
              <p className='text-sm text-gray-500'>Description</p>
            </div>
            <Divider orientation='vertical' />
            <div className='text-center'>
              <p className='font-medium'>Section 3</p>
              <p className='text-sm text-gray-500'>Description</p>
            </div>
          </div>
        </div>

        {/* Card with Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Card with Dividers</h2>
          <Card className='max-w-md'>
            <CardBody>
              <div className='space-y-3'>
                <div>
                  <h3 className='font-semibold'>Profile Information</h3>
                  <p className='text-sm text-gray-600'>Manage your personal details</p>
                </div>

                <Divider />

                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-sm'>Name:</span>
                    <span className='text-sm font-medium'>John Doe</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm'>Email:</span>
                    <span className='text-sm font-medium'>john@example.com</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-sm'>Role:</span>
                    <span className='text-sm font-medium'>Developer</span>
                  </div>
                </div>

                <Divider />

                <div className='flex space-x-2'>
                  <button className='rounded bg-blue-500 px-3 py-1 text-sm text-white'>Edit</button>
                  <button className='rounded border border-gray-300 px-3 py-1 text-sm'>Cancel</button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Navigation with Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Navigation with Dividers</h2>
          <div className='max-w-md'>
            <nav className='flex items-center space-x-1 text-sm'>
              <a href='#' className='text-blue-600 hover:text-blue-800'>
                Home
              </a>
              <Divider orientation='vertical' className='h-4' />
              <a href='#' className='text-blue-600 hover:text-blue-800'>
                Products
              </a>
              <Divider orientation='vertical' className='h-4' />
              <a href='#' className='text-blue-600 hover:text-blue-800'>
                Services
              </a>
              <Divider orientation='vertical' className='h-4' />
              <span className='text-gray-500'>Contact</span>
            </nav>
          </div>
        </div>

        {/* Stats with Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Stats with Dividers</h2>
          <Card className='max-w-md'>
            <CardBody>
              <div className='flex items-center justify-around'>
                <div className='text-center'>
                  <p className='text-2xl font-bold text-blue-600'>1,234</p>
                  <p className='text-sm text-gray-600'>Users</p>
                </div>
                <Divider orientation='vertical' className='h-12' />
                <div className='text-center'>
                  <p className='text-2xl font-bold text-green-600'>567</p>
                  <p className='text-sm text-gray-600'>Orders</p>
                </div>
                <Divider orientation='vertical' className='h-12' />
                <div className='text-center'>
                  <p className='text-2xl font-bold text-purple-600'>89%</p>
                  <p className='text-sm text-gray-600'>Success</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Menu with Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Menu with Dividers</h2>
          <Card className='max-w-xs'>
            <CardBody className='p-0'>
              <div className='space-y-0'>
                <div className='cursor-pointer px-4 py-3 hover:bg-gray-50'>
                  <p className='font-medium'>Account Settings</p>
                  <p className='text-sm text-gray-600'>Manage your account</p>
                </div>

                <Divider />

                <div className='cursor-pointer px-4 py-3 hover:bg-gray-50'>
                  <p className='font-medium'>Notifications</p>
                  <p className='text-sm text-gray-600'>Configure alerts</p>
                </div>

                <Divider />

                <div className='cursor-pointer px-4 py-3 hover:bg-gray-50'>
                  <p className='font-medium'>Privacy</p>
                  <p className='text-sm text-gray-600'>Privacy settings</p>
                </div>

                <Divider />

                <div className='cursor-pointer px-4 py-3 text-red-600 hover:bg-red-50'>
                  <p className='font-medium'>Sign Out</p>
                  <p className='text-sm'>Leave your account</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Form with Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Form with Dividers</h2>
          <Card className='max-w-md'>
            <CardBody>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold'>Personal Information</h3>
                  <div className='mt-2 space-y-3'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>First Name</label>
                      <input type='text' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>Last Name</label>
                      <input type='text' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2' />
                    </div>
                  </div>
                </div>

                <Divider />

                <div>
                  <h3 className='text-lg font-semibold'>Contact Information</h3>
                  <div className='mt-2 space-y-3'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>Email</label>
                      <input type='email' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>Phone</label>
                      <input type='tel' className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2' />
                    </div>
                  </div>
                </div>

                <Divider />

                <div className='flex justify-end space-x-2'>
                  <button className='rounded-md border border-gray-300 px-4 py-2 text-sm'>Cancel</button>
                  <button className='rounded-md bg-blue-600 px-4 py-2 text-sm text-white'>Save</button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Custom Styled Dividers */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Dividers</h2>
          <div className='max-w-md space-y-6'>
            <div>
              <p>Content above</p>
              <Divider className='my-4 h-0.5 bg-blue-500' />
              <p>Blue divider</p>
            </div>

            <div>
              <p>Content above</p>
              <Divider className='my-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500' />
              <p>Gradient divider</p>
            </div>

            <div className='flex items-center space-x-4'>
              <span>Item 1</span>
              <Divider orientation='vertical' className='h-8 w-1 bg-red-500' />
              <span>Item 2</span>
              <Divider orientation='vertical' className='h-8 w-1 bg-green-500' />
              <span>Item 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DividerTest

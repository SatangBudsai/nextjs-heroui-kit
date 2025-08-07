import React, { Fragment, ReactElement, useState } from 'react'
import { Tabs, Tab, Card, CardBody } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const TabsTest = () => {
  const [selected, setSelected] = useState('photos')

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Tabs Component Test</h1>

        {/* Basic Tabs */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Tabs</h2>
          <div className='flex w-full flex-col'>
            <Tabs aria-label='Options'>
              <Tab key='photos' title='Photos'>
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key='music' title='Music'>
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key='videos' title='Videos'>
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* Controlled Tabs */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Controlled Tabs</h2>
          <div className='flex w-full flex-col'>
            <Tabs
              selectedKey={selected}
              onSelectionChange={key => setSelected(key as string)}
              aria-label='Controlled tabs'>
              <Tab key='photos' title='Photos'>
                <Card>
                  <CardBody>
                    <h3 className='mb-2 text-lg font-bold'>Photo Gallery</h3>
                    <p>This tab shows photo content. Currently selected: {selected}</p>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key='music' title='Music'>
                <Card>
                  <CardBody>
                    <h3 className='mb-2 text-lg font-bold'>Music Library</h3>
                    <p>This tab shows music content. Currently selected: {selected}</p>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key='videos' title='Videos'>
                <Card>
                  <CardBody>
                    <h3 className='mb-2 text-lg font-bold'>Video Collection</h3>
                    <p>This tab shows video content. Currently selected: {selected}</p>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* Tab Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Tab Variants</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>Solid Variant</h3>
              <Tabs variant='solid' aria-label='Solid tabs'>
                <Tab key='dashboard' title='Dashboard'>
                  <Card>
                    <CardBody>Dashboard content with solid tab styling.</CardBody>
                  </Card>
                </Tab>
                <Tab key='analytics' title='Analytics'>
                  <Card>
                    <CardBody>Analytics content with solid tab styling.</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Underlined Variant</h3>
              <Tabs variant='underlined' aria-label='Underlined tabs'>
                <Tab key='home' title='Home'>
                  <Card>
                    <CardBody>Home content with underlined tab styling.</CardBody>
                  </Card>
                </Tab>
                <Tab key='about' title='About'>
                  <Card>
                    <CardBody>About content with underlined tab styling.</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Bordered Variant</h3>
              <Tabs variant='bordered' aria-label='Bordered tabs'>
                <Tab key='profile' title='Profile'>
                  <Card>
                    <CardBody>Profile content with bordered tab styling.</CardBody>
                  </Card>
                </Tab>
                <Tab key='settings' title='Settings'>
                  <Card>
                    <CardBody>Settings content with bordered tab styling.</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Light Variant</h3>
              <Tabs variant='light' aria-label='Light tabs'>
                <Tab key='inbox' title='Inbox'>
                  <Card>
                    <CardBody>Inbox content with light tab styling.</CardBody>
                  </Card>
                </Tab>
                <Tab key='sent' title='Sent'>
                  <Card>
                    <CardBody>Sent content with light tab styling.</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Tab Colors */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Tab Colors</h2>
          <div className='space-y-6'>
            <Tabs color='primary' variant='solid' aria-label='Primary tabs'>
              <Tab key='tab1' title='Primary'>
                <Card>
                  <CardBody>Primary colored tabs</CardBody>
                </Card>
              </Tab>
              <Tab key='tab2' title='Tab 2'>
                <Card>
                  <CardBody>Secondary tab content</CardBody>
                </Card>
              </Tab>
            </Tabs>

            <Tabs color='secondary' variant='solid' aria-label='Secondary tabs'>
              <Tab key='tab1' title='Secondary'>
                <Card>
                  <CardBody>Secondary colored tabs</CardBody>
                </Card>
              </Tab>
              <Tab key='tab2' title='Tab 2'>
                <Card>
                  <CardBody>Secondary tab content</CardBody>
                </Card>
              </Tab>
            </Tabs>

            <Tabs color='success' variant='solid' aria-label='Success tabs'>
              <Tab key='tab1' title='Success'>
                <Card>
                  <CardBody>Success colored tabs</CardBody>
                </Card>
              </Tab>
              <Tab key='tab2' title='Tab 2'>
                <Card>
                  <CardBody>Secondary tab content</CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/* Tab Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Tab Sizes</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>Small Size</h3>
              <Tabs size='sm' aria-label='Small tabs'>
                <Tab key='tab1' title='Small Tab'>
                  <Card>
                    <CardBody>Small sized tab content</CardBody>
                  </Card>
                </Tab>
                <Tab key='tab2' title='Tab 2'>
                  <Card>
                    <CardBody>Another small tab</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Medium Size</h3>
              <Tabs size='md' aria-label='Medium tabs'>
                <Tab key='tab1' title='Medium Tab'>
                  <Card>
                    <CardBody>Medium sized tab content</CardBody>
                  </Card>
                </Tab>
                <Tab key='tab2' title='Tab 2'>
                  <Card>
                    <CardBody>Another medium tab</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Large Size</h3>
              <Tabs size='lg' aria-label='Large tabs'>
                <Tab key='tab1' title='Large Tab'>
                  <Card>
                    <CardBody>Large sized tab content</CardBody>
                  </Card>
                </Tab>
                <Tab key='tab2' title='Tab 2'>
                  <Card>
                    <CardBody>Another large tab</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Disabled Tabs */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Tabs</h2>
          <Tabs aria-label='Tabs with disabled item'>
            <Tab key='enabled1' title='Enabled'>
              <Card>
                <CardBody>This tab is enabled and accessible.</CardBody>
              </Card>
            </Tab>
            <Tab key='disabled' title='Disabled' isDisabled>
              <Card>
                <CardBody>This content won&apos;t be shown as the tab is disabled.</CardBody>
              </Card>
            </Tab>
            <Tab key='enabled2' title='Also Enabled'>
              <Card>
                <CardBody>This tab is also enabled and accessible.</CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default TabsTest

TabsTest.auth = false

TabsTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

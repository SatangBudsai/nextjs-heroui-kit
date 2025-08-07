import React, { Fragment, ReactElement, useState } from 'react'
import { Accordion, AccordionItem } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const AccordionTest = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['1']))

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Accordion Component Test</h1>

        {/* Basic Accordion */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Accordion</h2>
          <Accordion className='max-w-md'>
            <AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </AccordionItem>
            <AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </AccordionItem>
            <AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </AccordionItem>
          </Accordion>
        </div>

        {/* Controlled Accordion */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Controlled Accordion</h2>
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={keys => setSelectedKeys(new Set(Array.from(keys).map(String)))}
            className='max-w-md'>
            <AccordionItem key='1' aria-label='Features' title='Features'>
              <div className='space-y-2'>
                <p>✅ Fully customizable</p>
                <p>✅ TypeScript support</p>
                <p>✅ Accessible by default</p>
                <p>✅ Beautiful animations</p>
              </div>
            </AccordionItem>
            <AccordionItem key='2' aria-label='Documentation' title='Documentation'>
              <div className='space-y-2'>
                <p>📚 Comprehensive guides</p>
                <p>🎯 API references</p>
                <p>💡 Examples and tutorials</p>
                <p>🔧 Migration guides</p>
              </div>
            </AccordionItem>
            <AccordionItem key='3' aria-label='Support' title='Support'>
              <div className='space-y-2'>
                <p>💬 Community Discord</p>
                <p>🐛 GitHub Issues</p>
                <p>📧 Email support</p>
                <p>📱 Social media</p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Different Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different Variants</h2>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>Light Variant</h3>
              <Accordion variant='light' className='max-w-md'>
                <AccordionItem key='1' title='Light Style'>
                  This is a light variant accordion with minimal styling.
                </AccordionItem>
                <AccordionItem key='2' title='Clean Look'>
                  Perfect for minimalist designs and clean interfaces.
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Shadow Variant</h3>
              <Accordion variant='shadow' className='max-w-md'>
                <AccordionItem key='1' title='Shadow Style'>
                  This accordion has a subtle shadow effect.
                </AccordionItem>
                <AccordionItem key='2' title='Elevated Look'>
                  Great for creating depth and visual hierarchy.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Selection Modes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Selection Modes</h2>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div>
              <h3 className='mb-2 text-lg font-medium'>Multiple Selection</h3>
              <Accordion selectionMode='multiple' className='max-w-md'>
                <AccordionItem key='1' title='Item 1'>
                  You can open multiple items at the same time.
                </AccordionItem>
                <AccordionItem key='2' title='Item 2'>
                  All items can be expanded simultaneously.
                </AccordionItem>
                <AccordionItem key='3' title='Item 3'>
                  Perfect for comparing content side by side.
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className='mb-2 text-lg font-medium'>Single Selection</h3>
              <Accordion selectionMode='single' className='max-w-md'>
                <AccordionItem key='1' title='Item 1'>
                  Only one item can be open at a time.
                </AccordionItem>
                <AccordionItem key='2' title='Item 2'>
                  Opening this will close others automatically.
                </AccordionItem>
                <AccordionItem key='3' title='Item 3'>
                  Great for keeping the interface clean.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Disabled Items */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Disabled Items</h2>
          <Accordion className='max-w-md'>
            <AccordionItem key='1' title='Available Item'>
              This item is available and can be opened.
            </AccordionItem>
            <AccordionItem key='2' title='Disabled Item' isDisabled>
              This item is disabled and cannot be opened.
            </AccordionItem>
            <AccordionItem key='3' title='Another Available Item'>
              This item is also available for interaction.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default AccordionTest

AccordionTest.auth = false

AccordionTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

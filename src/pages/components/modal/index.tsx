import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@/components/heroui'

const ModalTest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollOpen, setIsScrollOpen] = useState(false)
  const [isBackdropOpen, setIsBackdropOpen] = useState(false)

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Modal Components Test</h1>

        {/* Basic Modal */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Modal</h2>
          <Button onPress={() => setIsOpen(true)} color='primary'>
            Open Modal
          </Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalContent>
              <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={() => setIsOpen(false)}>
                  Close
                </Button>
                <Button color='primary' onPress={() => setIsOpen(false)}>
                  Action
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        {/* Scrollable Modal */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Scrollable Modal</h2>
          <Button onPress={() => setIsScrollOpen(true)} color='secondary'>
            Open Scrollable Modal
          </Button>
          <Modal isOpen={isScrollOpen} onClose={() => setIsScrollOpen(false)} scrollBehavior='inside'>
            <ModalContent>
              <ModalHeader>Scrollable Content</ModalHeader>
              <ModalBody>
                {Array.from({ length: 50 }, (_, i) => (
                  <p key={i}>
                    This is line {i + 1} of scrollable content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={() => setIsScrollOpen(false)}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        {/* Modal Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Modal Sizes</h2>
          <div className='flex flex-wrap gap-3'>
            <ModalSizeExample size='xs' />
            <ModalSizeExample size='sm' />
            <ModalSizeExample size='md' />
            <ModalSizeExample size='lg' />
            <ModalSizeExample size='xl' />
            <ModalSizeExample size='full' />
          </div>
        </div>

        {/* Modal Placements */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Modal Placements</h2>
          <div className='flex flex-wrap gap-3'>
            <ModalPlacementExample placement='auto' />
            <ModalPlacementExample placement='top' />
            <ModalPlacementExample placement='center' />
            <ModalPlacementExample placement='bottom' />
          </div>
        </div>

        {/* Backdrop Variants */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Backdrop Variants</h2>
          <div className='flex flex-wrap gap-3'>
            <Button onPress={() => setIsBackdropOpen(true)} variant='flat'>
              Blur Backdrop
            </Button>
            <Modal isOpen={isBackdropOpen} onClose={() => setIsBackdropOpen(false)} backdrop='blur'>
              <ModalContent>
                <ModalHeader>Blur Backdrop Modal</ModalHeader>
                <ModalBody>
                  <p>This modal has a blur backdrop effect.</p>
                </ModalBody>
                <ModalFooter>
                  <Button onPress={() => setIsBackdropOpen(false)}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper components for size examples
const ModalSizeExample: React.FC<{ size: any }> = ({ size }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setIsOpen(true)} variant='bordered'>
        {size.toUpperCase()}
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        <ModalContent>
          <ModalHeader>{size.toUpperCase()} Modal</ModalHeader>
          <ModalBody>
            <p>This is a {size} sized modal.</p>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

// Helper components for placement examples
const ModalPlacementExample: React.FC<{ placement: any }> = ({ placement }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onPress={() => setIsOpen(true)} variant='bordered'>
        {placement}
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} placement={placement}>
        <ModalContent>
          <ModalHeader>{placement} Placement</ModalHeader>
          <ModalBody>
            <p>This modal is placed at {placement}.</p>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalTest

import React from 'react'
import {
  Modal as ModalHeroUI,
  ModalContent as ModalContentHeroUI,
  ModalHeader as ModalHeaderHeroUI,
  ModalBody as ModalBodyHeroUI,
  ModalFooter as ModalFooterHeroUI
} from '@heroui/react'

type ModalProps = React.ComponentProps<typeof ModalHeroUI> & {}

const Modal = ({ ...props }: ModalProps) => {
  return <ModalHeroUI {...props} />
}

type ModalContentProps = React.ComponentProps<typeof ModalContentHeroUI> & {}

const ModalContent = ({ ...props }: ModalContentProps) => {
  return <ModalContentHeroUI {...props} />
}

type ModalHeaderProps = React.ComponentProps<typeof ModalHeaderHeroUI> & {}

const ModalHeader = ({ ...props }: ModalHeaderProps) => {
  return <ModalHeaderHeroUI {...props} />
}

type ModalBodyProps = React.ComponentProps<typeof ModalBodyHeroUI> & {}

const ModalBody = ({ ...props }: ModalBodyProps) => {
  return <ModalBodyHeroUI {...props} />
}

type ModalFooterProps = React.ComponentProps<typeof ModalFooterHeroUI> & {}

const ModalFooter = ({ ...props }: ModalFooterProps) => {
  return <ModalFooterHeroUI {...props} />
}

export default Modal
export { ModalContent, ModalHeader, ModalBody, ModalFooter }

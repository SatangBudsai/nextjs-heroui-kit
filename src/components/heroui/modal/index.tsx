import React, { forwardRef } from 'react'
import {
  Modal as ModalHeroUI,
  ModalContent as ModalContentHeroUI,
  ModalHeader as ModalHeaderHeroUI,
  ModalBody as ModalBodyHeroUI,
  ModalFooter as ModalFooterHeroUI,
  ModalProps as ModalPropsHeroUI,
  ModalContentProps as ModalContentPropsHeroUI,
  ModalHeaderProps as ModalHeaderPropsHeroUI,
  ModalBodyProps as ModalBodyPropsHeroUI,
  ModalFooterProps as ModalFooterPropsHeroUI
} from '@heroui/react'

export type ModalProps = ModalPropsHeroUI

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  return <ModalHeroUI ref={ref} {...props} />
})

Modal.displayName = 'Modal'

export type ModalContentProps = ModalContentPropsHeroUI

export const ModalContent: React.FC<ModalContentProps> = props => {
  return <ModalContentHeroUI {...props} />
}

ModalContent.displayName = 'ModalContent'

export type ModalHeaderProps = ModalHeaderPropsHeroUI

export const ModalHeader: React.FC<ModalHeaderProps> = props => {
  return <ModalHeaderHeroUI {...props} />
}

ModalHeader.displayName = 'ModalHeader'

export type ModalBodyProps = ModalBodyPropsHeroUI

export const ModalBody: React.FC<ModalBodyProps> = props => {
  return <ModalBodyHeroUI {...props} />
}

ModalBody.displayName = 'ModalBody'

export type ModalFooterProps = ModalFooterPropsHeroUI

export const ModalFooter: React.FC<ModalFooterProps> = props => {
  return <ModalFooterHeroUI {...props} />
}

ModalFooter.displayName = 'ModalFooter'

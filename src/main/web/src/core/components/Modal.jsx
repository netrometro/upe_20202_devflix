import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Modal = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  size,
  bg = 'background',
  ...props
}) => {
  return (
    <>
      <ChakraModal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={size || '4xl'}
        blockScrollOnMount
        preserveScrollBarGap
        {...props}>
        <ModalOverlay />
        <ModalContent bg={bg}>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton color="whiteLight" />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  )
}

Modal.ModalOverlay = ModalOverlay
Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.CloseButton = ModalCloseButton
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal

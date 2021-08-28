import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Modal = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  bg = "background",
  ...props
}) => {
  return (
    <>
      <ChakraModal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        m={100}
        {...props}
      >
        <ModalOverlay />
        <ModalContent bg={bg}>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

Modal.ModalOverlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.CloseButton = ModalCloseButton;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
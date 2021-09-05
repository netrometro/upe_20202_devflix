import {React, useState, useEffect} from 'react'
import {Button, Modal, Alert} from 'core/components'
import {ModalRecoveryPassword} from 'core/modals'
import {Center, VStack, Text, Image, useDisclosure} from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/icons'
import FormField from 'core/components/Form/FormField'
import {usePostRequest} from 'core/hooks'

const ModalForgotPassword = (props) => {
  const {onClose: onCloseModalForgotPasswordModal} = props

  const [email, setEmail] = useState('')
  const {isOpen, onClose, onOpen} = useDisclosure()
  const {
    mutate: requestPasswordChange,
    data: response,
    isSuccess,
    isError,
    isLoading,
  } = usePostRequest('/v1/authentication/forgot')

  const header = () => {
    return (
      <Center>
        <VStack mt="1rem">
          <Center>
            <Image src="https://i.imgur.com/J1ymksl.png" alt="Devflix" />
          </Center>
          <Text color="whiteLight" fontSize="32px">
            Solicitar nova senha
          </Text>
        </VStack>
      </Center>
    )
  }

  const onClickRequestPasswordChange = () => requestPasswordChange({email})

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu na sua tentativa de recuperar a sua senha.',
    }
    const success = {
      status: 'success',
      body: 'O token para que você consiga recuperar a sua senha foi enviado para o seu e-mail!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }
    const {status, body} = buildMessage()
    const isRequesting = isError || isSuccess
    return isRequesting && <Alert status={status} message={body} />
  }

  useEffect(() => {
    if (isSuccess) {
      return onOpen()
    }
  }, [isSuccess, onOpen, response, onCloseModalForgotPasswordModal])

  return (
    <Modal size="2xl" header={header()} scrollBehavior="inside" {...props}>
      <Center>
        <VStack w="100%" ml="5px" mt="10px">
          <FormField
            type="email"
            icon={<EmailIcon />}
            text="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <ModalRecoveryPassword isOpen={isOpen} onClose={onClose} />

          {renderAlert()}
          <Button
            size="lg"
            onClick={onClickRequestPasswordChange}
            isLoading={isLoading}>
            Confirmar
          </Button>
        </VStack>
      </Center>
    </Modal>
  )
}

export default ModalForgotPassword

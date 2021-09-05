import {React, useEffect} from 'react'
import {Alert, Button, Modal} from 'core/components'
import {Center, VStack, Text, Image} from '@chakra-ui/react'
import {LockIcon} from '@chakra-ui/icons'
import {VpnKey} from '@material-ui/icons'
import FormField from 'core/components/Form/FormField'
import {useForm} from 'core/hooks'
import usePutRequest from 'core/hooks/usePutRequest'
import router from 'next/router'

const INITIAL_VALUES = {
  token: '',
  password: '',
  confirmPassword: '',
}

const ModalRecoveryPassword = (props) => {
  const {onClose} = props
  const [{fields}, {getFieldProperties}] = useForm(INITIAL_VALUES)
  const {token, password, confirmPassword} = fields
  const isPasswordsEquals = password === confirmPassword
  const isPasswordsEmpty = !password && !confirmPassword

  const {
    mutate: updatePassword,
    isLoading,
    isSuccess,
    isError,
  } = usePutRequest('/v1/authentication/recovery')

  const header = () => {
    return (
      <Center>
        <VStack mt="1rem">
          <Center>
            <Image src="https://i.imgur.com/J1ymksl.png" alt="Devflix" />
          </Center>
          <Text color="whiteLight" fontSize="32px">
            Confirmar nova senha
          </Text>
        </VStack>
      </Center>
    )
  }

  const onClickChangePassword = () => updatePassword({token, password})

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao tentar alterar a sua senha.',
    }

    const success = {
      status: 'success',
      body: 'Senha alterada com sucesso.',
    }

    const warning = {
      status: 'warning',
      body: 'As senhas devem ser iguais.',
    }

    const buildMessage = () => {
      if (!isPasswordsEquals) {
        return warning
      }

      return isError ? error : success
    }

    const {status, body} = buildMessage()

    return (
      (isError || isSuccess || !isPasswordsEquals) && (
        <Alert status={status} message={body} />
      )
    )
  }

  useEffect(() => {
    if (isSuccess) {
      onClose()
      return router.push('/authentication/sign-in')
    }

    return null
  }, [isSuccess, onClose])

  return (
    <Modal size="2xl" header={header()} scrollBehavior="inside" {...props}>
      <Center>
        <VStack w="100%" ml="5px" mt="10px">
          <FormField
            type="text"
            icon={<VpnKey />}
            text="Código de recuperação"
            {...getFieldProperties('token')}
          />

          <FormField
            type="psw"
            icon={<LockIcon />}
            text="Nova senha"
            {...getFieldProperties('password')}
          />

          <FormField
            type="psw"
            icon={<LockIcon />}
            text="Repita a nova senha"
            {...getFieldProperties('confirmPassword')}
          />

          {renderAlert()}

          <Button
            disabled={isPasswordsEmpty && !isPasswordsEquals}
            size="lg"
            onClick={onClickChangePassword}
            isLoading={isLoading}>
            Confirmar
          </Button>
        </VStack>
      </Center>
    </Modal>
  )
}

export default ModalRecoveryPassword

import {LOCAL_STORAGES_LOCATIONS, PagesTitles} from 'core/utils/constants'
import React, {useCallback, useEffect} from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {Image, Button, Navbar} from 'core/components'
import {useForm, useLogin, useStorage, useUser} from 'core/hooks'
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import FormField from 'core/components/Form/FormField'
import Alert from 'core/components/Alert'
import {useRouter} from 'next/dist/client/router'
import {ModalForgotPassword} from 'core/modals'

const FORM_FIELDS = [
  {type: 'email', icon: <EmailIcon />, text: 'Email', fieldName: 'email'},
  {type: 'psw', icon: <LockIcon />, text: 'Senha', fieldName: 'password'},
]

const LOGO_HEIGHT = 100

const INITIAL_VALUES = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [{fields}, {getFieldProperties}] = useForm(INITIAL_VALUES)
  const {email, password} = fields
  const [{response, isSuccess, isError, isLoading}, {requestLogin}] = useLogin({
    email,
    password,
  })
  const [, {login}] = useUser()
  const [, {setItem}] = useStorage()
  const router = useRouter()

  const {isOpen, onOpen, onClose} = useDisclosure()

  const onSaveCredentials = useCallback(
    (user) => {
      setItem(
        LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS,
        JSON.stringify(user),
      )
    },
    [setItem],
  )

  const onClickDoLogin = () => {
    requestLogin()
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao processar a sua solicitação de login. Por favor, cheque as suas credenciais de acesso e tente novamente!',
    }
    const success = {
      status: 'success',
      body: 'Login realizado com sucesso!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }

    const {status, body} = buildMessage()
    return (isError || isSuccess) && <Alert status={status} message={body} />
  }

  const onClickGoToSignUp = () => {
    router.push('/authentication/sign-up')
  }

  const onClickOpenForgotPasswordModal = () => onOpen()

  useEffect(() => {
    if (isSuccess && response) {
      const {response: data} = response ?? {}
      const {token, claims} = data ?? {}
      const {name, email, roles, id} = claims ?? {}

      const user = {
        name,
        id,
        email,
        token,
        roles,
        isLogged: true,
      }

      login(user)
      onSaveCredentials(user)
      return router.push('/')
    }

    return null
  }, [isError, isSuccess, login, onSaveCredentials, password, response, router])

  const isButtonDisabled = !(email && password)

  return (
    <>
      <Navbar.BackBar />
      <Flex flexDirection="column">
        <Box
          className="box"
          bg="background"
          py={20}
          alignItems="center"
          width={'100%'}>
          <Center>
            <Image
              src="https://i.ibb.co/XjngWm9/logo.png"
              alt="logo"
              width={LOGO_HEIGHT * 3}
              height={LOGO_HEIGHT}
              mb={5}
              display="inline-block"
            />
          </Center>
          <Container>
            {FORM_FIELDS.map(({fieldName, ...formField}, index) => {
              return (
                <form key={`${index}`}>
                  <FormField
                    {...formField}
                    {...getFieldProperties(fieldName)}
                  />
                </form>
              )
            })}
          </Container>
          <VStack mx="auto" maxWidth="500px" py="4">
            {renderAlert()}
          </VStack>
          <Center>
            <Button
              size="lg"
              onClick={onClickDoLogin}
              disabled={isButtonDisabled}
              isLoading={isLoading}>
              Entrar
            </Button>
          </Center>
          <Center>
            <Button
              color="grayPers"
              variant="ghost"
              mt={'20px'}
              size="lg"
              onClick={onClickOpenForgotPasswordModal}>
              Esqueceu a senha?
            </Button>
          </Center>
          <Center>
            <Box
              py={0.5}
              px={3}
              width={'20%'}
              bg="primary"
              borderRadius={1}
              mt={5}
              mb={10}
            />
          </Center>
          <Center>
            <Button
              _hover={{bg: '#EC00254F'}}
              color="primary"
              borderColor="primary"
              variant="outline"
              size="lg"
              onClick={onClickGoToSignUp}>
              Realizar Cadastro
            </Button>
          </Center>
        </Box>
      </Flex>
      <ModalForgotPassword isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}
SignIn.pageTitle = PagesTitles.SIGN_IN

export default SignIn

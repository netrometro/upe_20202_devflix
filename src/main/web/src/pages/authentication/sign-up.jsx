import React from 'react'
import {Box, Center, Container, useDisclosure, VStack} from '@chakra-ui/react'
import PersonIcon from '@material-ui/icons/Person'
import {Image, Button, Navbar} from 'core/components'
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import FormField from 'core/components/Form/FormField'
import {PagesTitles} from 'core/utils/constants'
import {useForm, useSignUp} from 'core/hooks'
import Alert from 'core/components/Alert'

const FORM_FIELDS = [
  {
    type: 'name',
    icon: <PersonIcon />,
    text: 'Nome completo',
    fieldName: 'name',
  },
  {type: 'email', icon: <EmailIcon />, text: 'Email', fieldName: 'email'},
  {type: 'psw', icon: <LockIcon />, text: 'Senha', fieldName: 'password'},
  {
    type: 'psw_conf',
    icon: <LockIcon />,
    text: 'Confirmar senha',
    fieldName: 'confirmPassword',
  },
]

const LOGO_HEIGHT = 100

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const {onOpen: onConfirmOpen} = useDisclosure()

  const [{fields}, {getFieldProperties}] = useForm(INITIAL_VALUES)
  const {name, email, password, confirmPassword} = fields

  const [{response, isError, isLoading, isSuccess}, {requestSignUp}] =
    useSignUp({name, email, password})

  console.log(response)

  const onClickSignUp = () => {
    requestSignUp()
    if (isSuccess) {
      onConfirmOpen()
    }
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao processar a sua solicitação de cadastro. Por favor, tente mais tarde!',
    }

    const success = {
      status: 'success',
      body: 'Cadastro realizado com sucesso!',
    }

    const warning = {
      status: 'warning',
      body: 'As senhas devem ser iguais.',
    }

    const isPasswordsEquals = password === confirmPassword

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

  return (
    <>
      <Navbar.BackBar />
      <Box
        className="box"
        bg="background"
        py={20}
        alignItems="center"
        width="100%">
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
                <FormField {...getFieldProperties(fieldName)} {...formField} />
              </form>
            )
          })}
        </Container>
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
        <VStack mx="auto" maxWidth="500px" pb="4">
          {renderAlert()}
        </VStack>
        <Center>
          <Button size="lg" onClick={onClickSignUp} isLoading={isLoading}>
            Cadastrar
          </Button>
        </Center>
      </Box>
    </>
  )
}

SignUp.pageTitle = PagesTitles.SIGN_UP

export default SignUp

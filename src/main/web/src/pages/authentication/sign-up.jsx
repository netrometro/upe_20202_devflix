import React from 'react'
import {Box, Center, Container, useDisclosure} from '@chakra-ui/react'
import PersonIcon from '@material-ui/icons/Person'
import {Image, Button, Navbar} from 'core/components'
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import FormField from 'core/components/Form/FormField'
import {PagesTitles} from 'core/utils/constants'
import {ModalConfirmEmail} from 'core/modals'

const FORM_FIELDS = [
  {type: 'name', icon: <PersonIcon />, text: 'Nome completo'},
  {type: 'email', icon: <EmailIcon />, text: 'Email'},
  {type: 'psw', icon: <LockIcon />, text: 'Senha'},
  {type: 'psw_conf', icon: <LockIcon />, text: 'Confirmar senha'},
]

const LOGO_HEIGHT = 100

const SignUp = () => {
  const {
    isOpen: isConfirmOpen,
    onOpen: onConfirmOpen,
    onClose: onConfirmClose,
  } = useDisclosure()
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
          {FORM_FIELDS.map((formfield, index) => {
            return (
              <form key={`${index}`}>
                <FormField {...formfield} />
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
        <Center>
          <ModalConfirmEmail
            isOpen={isConfirmOpen}
            onClose={onConfirmClose}></ModalConfirmEmail>
          <Button size="lg" onClick={onConfirmOpen}>
            Cadastrar
          </Button>
        </Center>
      </Box>
    </>
  )
}

SignUp.pageTitle = PagesTitles.SIGN_UP

export default SignUp

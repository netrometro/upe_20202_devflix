import React from 'react'
import {Box, Center, Container, Flex} from '@chakra-ui/react'
import PersonIcon from '@material-ui/icons/Person'
import {Image, Button} from 'core/components'
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import FormField from 'core/components/Form/FormField'
import {PagesTitles} from 'core/utils/constants'
import BackBar from 'core/components/Navbar/BackBar'

const FORMFIELDS = [
  {type: 'name', icon: <PersonIcon />, text: 'Nome completo'},
  {type: 'email', icon: <EmailIcon />, text: 'Email'},
  {type: 'psw', icon: <LockIcon />, text: 'Senha'},
  {type: 'psw_conf', icon: <LockIcon />, text: 'Confirmar senha'},
]

const SignUp = () => {
  return (
    <Flex flexDirection="column">
      <BackBar />
      <Box
        className="box"
        bg="background"
        py={20}
        alignItems="center"
        width="100%">
        <Center>
          <Image
            src={require('images/logo.svg')}
            alt="logo"
            width={500}
            height={125}
            mb={5}
            display="inline-block"
          />
        </Center>
        <Container>
          {FORMFIELDS.map((formfield, index) => {
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
          <Button size="lg">Cadastrar</Button>
        </Center>
      </Box>
    </Flex>
  )
}

SignUp.pageTitle = PagesTitles.SIGN_UP

export default SignUp

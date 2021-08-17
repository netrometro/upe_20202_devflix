import {PagesTitles} from 'core/utils/constants'
import React from 'react'
import {Box, Center, Container, Flex} from '@chakra-ui/react'
import {Image, Button} from 'core/components'
import BackBar from 'core/components/Navbar/BackBar'
import {EmailIcon, LockIcon} from '@chakra-ui/icons'
import FormField from 'core/components/Form/FormField'

const FORMFIELDS = [
  {type: 'email', icon: <EmailIcon />, text: 'Email'},
  {type: 'psw', icon: <LockIcon />, text: 'Senha'},
]

const SignIn = () => {
  return (
    <Flex flexDirection="column">
      <BackBar />
      <Box
        className="box"
        bg="background"
        py={20}
        alignItems="center"
        width={'100%'}>
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
          <Button size="lg">Entrar</Button>
        </Center>
        <Center>
          <Button color="grayPers" variant="ghost" mt={'20px'} size="lg">
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
            color="primary"
            borderColor="primary"
            variant="outline"
            size="lg">
            Realizar Cadastro
          </Button>
        </Center>
      </Box>
    </Flex>
  )
}
SignIn.pageTitle = PagesTitles.SIGN_IN

export default SignIn

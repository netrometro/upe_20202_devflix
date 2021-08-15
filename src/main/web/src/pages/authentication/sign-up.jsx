import React from 'react'
import {Box, Center, Container} from '@chakra-ui/react'
import {TextInput, Image, Button} from 'core/components'
import {InfoOutlineIcon, EmailIcon, LockIcon} from '@chakra-ui/icons'

const FORMFIELDS = [
  {type: "name",icon: <InfoOutlineIcon />, text: 'Nome completo'},
  {type: "email", icon: <EmailIcon />, text: 'Email'},
  {type: "psw", icon: <LockIcon />, text: 'Senha'},
  {type: "psw_conf", icon: <LockIcon />, text: 'Confirmar senha'}
]

const SignUp = () => {
  return (
    <Box className='box' bg="background" py={20} alignItems="center" width={'100%'}>
      <Center>
        <Image
          src={require('images/logo.svg')}
          alt="logo"
          width={500}
          height={125}
          mb={5}
          display='inline-block'
        />
      </Center>  
      <Container>
        {FORMFIELDS.map((formfield, index, formfields) => {
          return (
            <TextInput.Group key={formfield.type} my={5}>
              <TextInput.LeftElement
              children={formfield.icon}
              >
              </TextInput.LeftElement>
              <TextInput
              px={10}
              placeholder={formfield.text}
              bg="whiteLight"
              borderColor="primary"
              borderWidth={2}
              color='black'
              _placeholder={{color: 'black'}}
              size="md">
              </TextInput>
            </TextInput.Group>
          )
        })}
      </Container>
      <Center>
      <Box py={0.5} px={3} width={'20%'} bg='primary' borderRadius={1} mt={5} mb={10}/>
      </Center>
      <Center>
        <Button size='lg'>
          Cadastrar
        </Button>
      </Center>
    </Box>
  )
}


export default SignUp

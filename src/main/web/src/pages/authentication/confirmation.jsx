import React, {useEffect, useState} from 'react'

import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

import {Navbar, Button} from 'core/components'
import {useForm, useGetRequest} from 'core/hooks'
import Alert from 'core/components/Alert'
import router from 'next/router'

const LOGO_HEIGHT = 100

const INITIAL_STATE = {
  token: '',
}

const Project = () => {
  const [isRequestEnabled, setIsRequestEnabled] = useState(false)
  const [{fields}, {getFieldProperties}] = useForm(INITIAL_STATE)
  const {token} = fields

  const {isSuccess, isError, isLoading} = useGetRequest(
    `/v1/authentication/confirm/${token}`,
    {},
    {enabled: isRequestEnabled},
  )

  const onClickConfirmAccount = () => {
    setIsRequestEnabled(true)
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao confirmar a sua conta!',
    }

    const success = {
      status: 'success',
      body: 'Conta confirmada com sucesso!',
    }

    const buildMessage = () => {
      return isError ? error : success
    }

    const {status, body} = buildMessage()

    return (isError || isSuccess) && <Alert status={status} message={body} />
  }

  useEffect(() => {
    if (isError || isSuccess) {
      return setIsRequestEnabled(false)
    }
  }, [isError, isSuccess])

  useEffect(() => {
    if (isSuccess) {
      return router.push('/authentication/sign-in')
    }
  }, [isSuccess])

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
              src="https://i.imgur.com/J1ymksl.png"
              alt="logo"
              width={LOGO_HEIGHT * 3}
              height={LOGO_HEIGHT}
              mb={5}
              display="inline-block"
            />
          </Center>
          <Container>
            <Center bg="background">
              <VStack mt="1rem">
                <Text color="whiteLight" fontSize="32px">
                  Verifique seu Email
                </Text>
              </VStack>
            </Center>
            <Stack spacing="10">
              <Center>
                <VStack w="100%" ml="5px" mt="10px">
                  <Box mt="4" mb="4" bg="#292929" p="3">
                    <Text color="whiteLight" fontSize="24px">
                      Olá, digite o código abaixo enviado para o seu e-mail e
                      confirme sua conta para ter acesso ao Devflix.wwwwwww 😉
                    </Text>
                  </Box>

                  <Input
                    mt="10px"
                    variant="flushed"
                    color="whiteLight"
                    _placeholder={{color: 'whiteLight'}}
                    borderColor="primary"
                    focusBorderColor="primary"
                    placeholder="Digite aqui o código..."
                    {...getFieldProperties('token')}
                  />
                  <Stack py="4" width="100%">
                    {renderAlert()}
                    <Button
                      onClick={onClickConfirmAccount}
                      bg="primary"
                      color="secondary"
                      isLoading={isLoading}>
                      Confirmar conta
                    </Button>
                  </Stack>
                </VStack>
              </Center>
            </Stack>
          </Container>
        </Box>
      </Flex>
    </>
  )
}
Project.pageTitle = 'Confirmação da conta'

export default Project

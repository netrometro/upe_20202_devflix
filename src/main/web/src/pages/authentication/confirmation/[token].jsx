import React from 'react'
import {useRouter} from 'next/router'

import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import {Navbar} from 'core/components'
import {useGetRequest} from 'core/hooks'
import Alert from 'core/components/Alert'

const LOGO_HEIGHT = 100

const Project = () => {
  const router = useRouter()
  const {token} = router.query

  const {isSuccess, isError} = useGetRequest(
    `/v1/authentication/confirm/${token}`,
    {},
    {enabled: Boolean(token)},
  )

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

  // if (isLoading) {
  //   return (
  //     <>
  //       <Navbar.BackBar />
  //       <Flex
  //         flexDirection="column"
  //         alignItems="center"
  //         justifyContent="center"
  //         width="100vw"
  //         py="100"
  //         bg="background">
  //         <Spinner size="xl" color="primary" />
  //       </Flex>
  //     </>
  //   )
  // }

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
                      Olá, verifique seu Email e confirme sua conta para ter
                      acesso ao Devflix 😉
                    </Text>
                  </Box>
                  <VStack mx="600" py="4">
                    {renderAlert()}
                  </VStack>
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

/* eslint-disable spaced-comment */
import {React, useState} from 'react'
import {Modal} from 'core/components'
import {EmailIcon} from '@chakra-ui/icons'
import {WhatsApp} from '@material-ui/icons'
import {usePostRequest} from 'core/hooks'
import {IconButton, Text, Input, HStack, Center, VStack} from '@chakra-ui/react'
import Alert from 'core/components/Alert'

const ModalShare = ({videoLink: link, shareTitle, ...props}) => {
  shareTitle = shareTitle || ''

  const [userEmail, setUserEmail] = useState('')
  const {mutate: shareEmail, isError, isSuccess} = usePostRequest('/v1/share')
  const [isShowingAlert] = useState(true)

  const buildBody = () => {
    return (
      'Olá, quero compartilhar este(s) vídeo(s) com você pois gostei muito dele(s)! ' +
      'Acompanhe o conteúdo exclusivo dentro do Devflix: ' +
      link
    )
  }

  console.log()

  const header = ({title}) => {
    return (
      <Text color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao compartilhar o vídeo. Verifique o preenchimento do campo de Email.',
    }
    const success = {
      status: 'success',
      body: 'Mensagem enviada com sucesso!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }
    const {status, body} = buildMessage()
    const isRequesting = isError || isSuccess
    return (
      isRequesting && isShowingAlert && <Alert status={status} message={body} />
    )
  }

  const onWhatsShare = () => {
    window.open(
      'https://wa.me/?text=' + encodeURIComponent(buildBody()),
      '__blank',
    )
  }

  const onClickEmailShare = () => {
    shareEmail({userEmail, link});
  }

  return (
    <Modal
      size="2xl"
      header={header({title: 'Compartilhar ' + shareTitle})}
      scrollBehavior="inside"
      {...props}>
      <Center>
        <VStack w="100%" ml="5px" mt="10px">
          <Text color="whiteLight" fontSize="14px" mb="1rem">
            Caso você deseje compartilhar o este recurso pelo e-mail da pessoa,
            preencha-o abaixo.
          </Text>
          <Input
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            type="email"
            w="75%"
            ml="5px"
            mt="10px"
            variant="flushed"
            color="whiteLight"
            _placeholder={{color: 'whiteLight'}}
            borderColor="primary"
            focusBorderColor="primary"
            placeholder="Email da pessoa desejada"
          />

          <HStack>
            <IconButton
              onClick={onWhatsShare}
              color="background"
              bgColor="primary"
              opacity="75%"
              width="4rem"
              height="4rem"
              variant="outline"
              colorScheme="red"
              aria-label="Compartilhar pelo Whatsapp"
              icon={<WhatsApp fontSize="large" />}
              mr="0.5rem"
            />
            <IconButton
              onClick={onClickEmailShare}
              color="background"
              bgColor="primary"
              opacity="75%"
              width="4rem"
              height="4rem"
              variant="outline"
              colorScheme="red"
              aria-label="Compartilhar pelo E-mail"
              icon={<EmailIcon fontSize="2rem" />}
              ml="0.5rem"
            />
          </HStack>
          {renderAlert()}
        </VStack>
      </Center>
    </Modal>
  )
}

export default ModalShare

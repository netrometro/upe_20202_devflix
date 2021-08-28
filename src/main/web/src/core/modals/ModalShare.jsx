import {React, useState} from 'react';
import {Modal} from 'core/components';
import {IconButton, Text, Input, HStack, Center, VStack} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import {WhatsApp} from '@material-ui/icons';

const ModalShare = ({shareLink, shareTitle, ...props}) => {
  shareTitle = shareTitle || "";

  const [ email, setEmail ] = useState("");

  const buildBody = () => {
    return "Olá, quero compartilhar este(s) vídeo(s) com você pois gostei muito dele(s)! " +
    "Acompanhe o conteúdo exclusivo dentro do Devflix: " + shareLink;
  }

  const header = ({title}) => {
    return(
      <Text color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  const onWhatsShare = () => {
    window.open("https://wa.me/?text=" + encodeURIComponent(buildBody()), "__blank");
  }

  const onEmailShare = () => {
    //Lógica de envio de e-mail aqui...
    //Implementar a requisição de compartilhar video pelo email
    alert("Enviando e-mail para... " + email);
  }

  return (
    <Modal 
      size="2xl"
      header={header({title : "Compartilhar " + shareTitle})}
      scrollBehavior="inside" 
      {...props}>

      <Center>
        <VStack w="100%"
            ml="5px"
            mt="10px">

          <Text color="whiteLight" fontSize="14px" mb="1rem">
            Caso você deseje compartilhar o este recurso 
            pelo e-mail da pessoa, preencha-o abaixo.
          </Text>
          <Input 
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            w="75%"
            ml="5px"
            mt="10px"
            variant="flushed"
            color="whiteLight"
            _placeholder={{ color: 'whiteLight' }}
            borderColor="primary"
            focusBorderColor="primary"
            placeholder="Email da pessoa desejada"/>

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
              icon={<WhatsApp fontSize="large"/>}
              mr="0.5rem"
            />
            <IconButton
              onClick={onEmailShare}
              color="background"
              bgColor="primary"
              opacity="75%"
              width="4rem"
              height="4rem"
              variant="outline"
              colorScheme="red"
              aria-label="Compartilhar pelo E-mail"
              icon={<EmailIcon fontSize="2rem"/>}
              ml="0.5rem"
            />
          </HStack>

        </VStack>
      </Center>
      
    </Modal>
  )

}

export default ModalShare;
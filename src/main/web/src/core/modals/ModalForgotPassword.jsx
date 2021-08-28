import {React, useState} from 'react';
import {Button, Modal} from 'core/components';
import {Center, VStack, Text, Box, Image} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import FormField from 'core/components/Form/FormField';
import { Container } from '@material-ui/core';

const ModalForgotPassword = ({...props}) => {

  const [email, setEmail] = useState('');

  const header = () => {
    return (
      <Center>
        <VStack mt="1rem">
          <Center>
            <Image src="https://i.imgur.com/J1ymksl.png" alt="Devflix" />
          </Center>
          <Text color="whiteLight" fontSize="32px">Solicitar nova senha</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Modal 
      size="2xl"
      header={header()}
      scrollBehavior="inside" 
      {...props}>

      <Center>
        <VStack w="100%"
            ml="5px"
            mt="10px">

          <FormField
            type="email"
            icon={<EmailIcon />}
            text="Email"
            onChange={event => setEmail(event.target.value)}
            value={email}>
          </FormField>
          <Button size="lg">
            Confirmar
          </Button>
          
        </VStack>
      </Center>
      
    </Modal>
  );
}
 
export default ModalForgotPassword
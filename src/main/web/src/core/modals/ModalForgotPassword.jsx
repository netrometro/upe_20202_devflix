import {React, useState} from 'react';
import {Modal} from 'core/components';
import {Center, VStack, Text, Box, Image} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import FormField from 'core/components/Form/FormField';

const ModalForgotPassword = ({...props}) => {

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
            width="70%"
            type="email"
            icon={<EmailIcon/>}
            text="Email">
          </FormField>

        </VStack>
      </Center>
      
    </Modal>
  );
}
 
export default ModalForgotPassword
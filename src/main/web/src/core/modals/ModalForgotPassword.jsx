import {React, useState} from 'react';
import {Modal} from 'core/components';
import {IconButton, Text, Input, HStack, Center, VStack} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import {WhatsApp} from '@material-ui/icons';
import FormField from 'core/components/Form/FormField';

const ModalForgotPassword = ({...props}) => {



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

          <FormField>
            
          </FormField>

        </VStack>
      </Center>
      
    </Modal>
  );
}
 
export default ModalForgotPassword;
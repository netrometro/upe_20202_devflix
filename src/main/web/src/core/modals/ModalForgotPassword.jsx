import {React, useState} from 'react';
import {Modal} from 'core/components';
import {Center, VStack} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import {FormField} from 'core/components/Form/FormField';

const ModalForgotPassword = ({...props}) => {

  const header = () => {
    return (
      <>
        Solicitar nova senha
      </>
    );
  }

  return (
    <Modal 
      size="2xl"
      header="fgdfg"
      scrollBehavior="inside" 
      {...props}>

      <Center>
        <VStack w="100%"
            ml="5px"
            mt="10px">

          <FormField 
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
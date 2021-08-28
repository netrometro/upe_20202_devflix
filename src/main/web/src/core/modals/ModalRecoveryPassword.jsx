import {React, useState} from 'react';
import {Button, Modal} from 'core/components';
import {Center, VStack, Text, Box, Image, useDisclosure} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import FormField from 'core/components/Form/FormField';

const ModalRecoveryPassword = () => {

  const header = () => {
    return (
      <Center>
        <VStack mt="1rem">
          <Center>
            <Image src="https://i.imgur.com/J1ymksl.png" alt="Devflix" />
          </Center>
          <Text color="whiteLight" fontSize="32px">Confirmar nova senha</Text>
        </VStack>
      </Center>
    );
  }

  return ( 
    <>
    </>
  );
}
 
export default ModalRecoveryPassword;
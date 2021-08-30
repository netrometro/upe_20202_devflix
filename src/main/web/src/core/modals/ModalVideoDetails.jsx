import {React, useState} from 'react';
import {Button, Modal} from 'core/components';
import {Center, VStack, Text, Box, Image, useDisclosure} from '@chakra-ui/react';

const ModalVideoDetails = ({...props}) => {
  const header = () => {
    return (
      <Center>
        <VStack mt="1rem">
          <Center>
            <Image src="https://i.imgur.com/J1ymksl.png" alt="Devflix" />
          </Center>
          <Text color="whiteLight" fontSize="32px">Verifique seu Email</Text>
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
          <Box mt="4" mb="4" bg="#292929" p="3">
            <Text color="whiteLight" fontSize="24px">Olá, verifique seu Email e confirme sua conta para ter acesso ao Devflix 😉</Text>
          </Box>
          <Button size="lg">
            Entendi
          </Button>
        </VStack>
      </Center>      
    </Modal>
  );
}
 
export default ModalVideoDetails
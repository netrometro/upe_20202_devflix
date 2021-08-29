import {React, useState} from 'react';
import {Modal} from 'core/components';
import {Textarea, Text, Input, Center, VStack, HStack} from '@chakra-ui/react';

const ModalCommentary = ({...props}) => {

  const header = ({title}) => {
    return(
      <Text color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return (
    <Modal 
      size="2xl"
      header={header({title : "Comentários dos usuários"})}
      scrollBehavior="inside" 
      {...props}>

      <Center>
        <VStack w="100%"
            ml="5px"
            mt="10px">

          <Textarea
            w="100%"
            mt="10px"
            variant="flushed"
            color="gray"
            bgColor="whiteLight"
            borderRadius="4px"
            placeholder="Adicionar um comentário..."
            _placeholder={{ color: 'gray', textIndent: '4px' }}
            borderColor="whiteLight"
            focusBorderColor="whiteLight" />

        </VStack>
      </Center>
      
    </Modal>
  );
}
 
export default ModalCommentary;
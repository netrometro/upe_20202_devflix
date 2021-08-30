import {React, useState} from 'react';
import {Button, Modal} from 'core/components';
import {Center, VStack, HStack, Text, Box, Image, IconButton, useDisclosure} from '@chakra-ui/react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

import THUMB_ONE from 'images/thumb-one.svg'

const ModalVideoDetails = ({...props}) => {
  const header = () => {
    return (
      <Box>
        <Center>
          <Image src={THUMB_ONE} alt="Devflix" fit="cover"/>
        </Center>        
      </Box>
    );
  }

  return (
    <Modal 
      bg="background"
      size="3xl"
      header={header()}
      scrollBehavior="inside" 
      {...props}>
      <Center>
        <VStack w="100%"
            ml="5px"
            mt="10px">
          <Text color="whiteLight" fontSize="24px" as="strong">O que faz uma desenvolvedora front-end?</Text>
          <Text color="whiteLight" fontSize="18px">O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa! </Text>
          <HStack>
            <IconButton
              _hover="background"
              bg="background"
              icon={<PlayCircleFilledIcon style={{ color: "#EC0025", marginLeft: "9", fontSize: "38px"}}/>}
              
            />
              <IconButton
              _hover="background"
              bg="background"
              icon={<ChatBubbleIcon style={{ color: "#EC0025", marginLeft: "9", fontSize: "38px"}}/>}
              
            />
              <IconButton
              _hover="background"
              bg="background"
              icon={<ShareIcon style={{ color: "#EC0025", marginLeft: "9", fontSize: "38px"}}/>}
              
            />
          </HStack>
          
        </VStack>
      </Center>
    </Modal>
  );
}
 
export default ModalVideoDetails
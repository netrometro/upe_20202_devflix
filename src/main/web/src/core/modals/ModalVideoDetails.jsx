import {React, useState} from 'react';
import {Modal} from 'core/components';
import {Center, VStack, HStack, Text, Box, Image, IconButton, useDisclosure} from '@chakra-ui/react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import {ModalShare, ModalCommentary} from 'core/modals'

import THUMB_ONE from 'images/thumb-one.svg'

const ModalVideoDetails = ({details, ...props}) => {
  const { isOpen: isCommentaryOpen , onOpen: onCommentaryOpen, onClose: onCommentaryClose } = useDisclosure()
  const { isOpen: isShareOpen , onOpen: onShareOpen, onClose: onShareClose } = useDisclosure()

  details = details || [{
    title: 'O que faz uma desenvolvedora front-end?', 
    description: 'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
  }];

  const detailVideo = ({title, description, ...videoProps}) => {
    return (
      <>
        <Text color="whiteLight" fontSize="24px" as="strong">{title}</Text>
        <Text color="whiteLight" fontSize="18px">{description}</Text>
      </>
    )
  }

  const onPlaylick = () => {

  }

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

          {details.map((detail) => detailVideo(detail))}

          <HStack>
            <IconButton
              _hover="background"
              bg="background"
              icon={<PlayCircleFilledIcon style={{ color: "#EC0025", marginLeft: "9", fontSize: "38px"}}/>}
              onClick={onPlaylick}
            />
              <ModalCommentary isOpen={isCommentaryOpen} onClose={onCommentaryClose}></ModalCommentary>
              <IconButton
              _hover="background"
              bg="background"
              icon={<ChatBubbleIcon style={{ color: "#EC0025", marginLeft: "9", fontSize: "38px"}}/>}
              onClick={onCommentaryOpen}
            />
              <ModalShare isOpen={isShareOpen} onClose={onShareClose}></ModalShare>
              <IconButton
              _hover="background"
              bg="background"
              icon={<ShareIcon style={{ color: "#EC0025", marginLeft: "9", fontSize: "38px"}}/>}
              onClick={onShareOpen}
            />
          </HStack>    
        </VStack>
      </Center>
    </Modal>
  );
}
 
export default ModalVideoDetails
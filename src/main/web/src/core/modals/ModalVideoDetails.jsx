/* eslint-disable no-unused-vars */
import React from 'react'
import {Modal} from 'core/components'
import {
  Center,
  VStack,
  HStack,
  Text,
  Box,
  Image,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share'
import {ModalShare, ModalCommentary} from 'core/modals'

const ModalVideoDetails = ({details, metadata, ...props}) => {
  const {
    videoLink,
    title,
    description,
    videoYoutubeChannel,
    tags,
    videoThumbnail,
  } = metadata ?? {}

  const {
    isOpen: isCommentaryOpen,
    onOpen: onCommentaryOpen,
    onClose: onCommentaryClose,
  } = useDisclosure()
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onClose: onShareClose,
  } = useDisclosure()

  const onPlayClick = () => {
    window.open(videoLink, '__blank')
  }

  const header = () => {
    return (
      <Box>
        <Center>
          <Image src={videoThumbnail} alt="Devflix" fit="cover" />
        </Center>
      </Box>
    )
  }

  return (
    <Modal
      bg="background"
      size="3xl"
      header={header()}
      scrollBehavior="inside"
      {...props}>
      <Center>
        <VStack w="100%" ml="5px" mt="10px">
          <Box>
            <Text
              color="whiteLight"
              fontSize="24px"
              as="strong"
              textAlign="left">
              {title}
            </Text>
            <Box h="4" />
            <Text color="whiteLight" fontSize="18px">
              {description}
            </Text>
          </Box>

          <HStack>
            <IconButton
              _hover="background"
              bg="background"
              icon={
                <PlayCircleFilledIcon
                  style={{color: '#EC0025', marginLeft: '9', fontSize: '38px'}}
                />
              }
              onClick={onPlayClick}
            />
            <ModalCommentary
              isOpen={isCommentaryOpen}
              onClose={onCommentaryClose}></ModalCommentary>
            <IconButton
              _hover="background"
              bg="background"
              icon={
                <ChatBubbleIcon
                  style={{color: '#EC0025', marginLeft: '9', fontSize: '38px'}}
                />
              }
              onClick={onCommentaryOpen}
            />
            <ModalShare
              isOpen={isShareOpen}
              onClose={onShareClose}
              shareLink={videoLink}
            />
            <IconButton
              _hover="background"
              bg="background"
              icon={
                <ShareIcon
                  style={{color: '#EC0025', marginLeft: '9', fontSize: '38px'}}
                />
              }
              onClick={onShareOpen}
            />
          </HStack>
        </VStack>
      </Center>
    </Modal>
  )
}

export default ModalVideoDetails

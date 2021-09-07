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
  Container
} from '@chakra-ui/react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share'
import {ModalShare, ModalCommentary} from 'core/modals'
import {useUser} from 'core/hooks'

const ModalVideoDetails = ({metadata, id, ...props}) => {
  const {videoLink, title, description, videoThumbnail, videoYoutubeChannel, tags} = metadata ?? {}
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
  const [{isLogged}] = useUser()

  const onPlayClick = () => {
    window.open(videoLink, '__blank')
  }

  const header = () => {
    return (
      <Box>
        <Center>
          <Image src={videoThumbnail} borderRadius="6" alt="Devflix" fit="cover" />
        </Center>
      </Box>
    )
  }

  const footer = () => {
    return (
      <Box w="100%">
        <Center w="100%">
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
            {isLogged && (
              <IconButton
                _hover="background"
                bg="background"
                icon={
                  <ShareIcon
                    style={{
                      color: '#EC0025',
                      marginLeft: '9',
                      fontSize: '38px',
                    }}
                  />
                }
                onClick={onShareOpen}
              />
            )}
            <ModalCommentary
              commentariesType="video"
              id={id}
              isOpen={isCommentaryOpen}
              onClose={onCommentaryClose}
            />
            <ModalShare
              isOpen={isShareOpen}
              onClose={onShareClose}
              videoLink={videoLink}
            />
          </HStack>
        </Center>
      </Box>
    )
  }

  return (
    <Modal
      bg="background"
      size="3xl"
      header={header()}
      footer={footer()}
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
            <Text color="whiteLight" fontSize="18px" mb="5px">
              {description}
            </Text>
            <HStack spacing="10px">
              <Text color="whiteLight" fontSize="20px" as="strong">
                Tags: 
              </Text>
              <Text color="whiteLight" fontSize="18px">
                {tags}
              </Text>
            </HStack>
            <HStack spacing="10px">
              <Text color="whiteLight" fontSize="20px" as="strong">
                Canal do Youtube:
              </Text>
              <Text color="whiteLight" fontSize="18px">
                {videoYoutubeChannel}
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </Modal>
  )
}

export default ModalVideoDetails

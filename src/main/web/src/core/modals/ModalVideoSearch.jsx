import React from 'react'
import {Modal} from 'core/components'
import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  Center,
  useDisclosure,
} from '@chakra-ui/react'
import {ModalVideoDetails} from '.'

const Video = ({video}) => {
  const {metadata} = video ?? {}
  const {videoThumbnail, title, videoLink} = metadata ?? {}
  const {
    isOpen: isVideoDetailsOpen,
    onOpen: onVideoDetailsOpen,
    onClose: onVideoDetailsClose,
  } = useDisclosure()
  return (
    <>
      <HStack>
        <Image
          src={videoThumbnail}
          htmlWidth="200"
          htmlHeight="120"
          mr="3%"
          alt="thumb"
          onClick={onVideoDetailsOpen}></Image>
        <VStack w="100%">
          <Text color="whiteLight" fontSize="30px" w="90%">
            {title}
          </Text>
          <Text color="whiteLight" pr="5px" w="90%">
            {' '}
            {videoLink}
          </Text>
        </VStack>
      </HStack>
      <Box
        py={0.5}
        px={3}
        width={'100%'}
        bg="primary"
        borderRadius={1}
        mt={5}
        mb={10}
      />
      <ModalVideoDetails
        isOpen={isVideoDetailsOpen}
        onClose={onVideoDetailsClose}
        metadata={metadata}
      />
    </>
  )
}

const ModalVideoSearch = ({videos, ...props}) => {
  const header = ({title, ...props}) => {
    return (
      <Text {...props} color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  return (
    <Modal
      header={header({title: 'Vídeos encontrados'})}
      scrollBehavior="inside"
      {...props}>
      <Box bg="background" py={5}>
        {videos.length === 0 ? (
          <Center my="5%" size="xl" color="primary">
            <Text fontSize="2xl">Eita! Não encontramos nenhum vídeo 🤔</Text>
          </Center>
        ) : (
          <>
            {videos.map((video, index, videos) => {
              const isLastVideo = videos.length - 1 === index
              return (
                <Box key={`${index}`}>
                  <Video video={video} />
                  {!isLastVideo && <Box height={5} />}
                </Box>
              )
            })}
          </>
        )}
      </Box>
    </Modal>
  )
}

export default ModalVideoSearch

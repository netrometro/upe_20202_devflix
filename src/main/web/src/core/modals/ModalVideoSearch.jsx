import React from 'react'
import { Modal } from "core/components"
import { Text, Box, HStack, VStack, Image} from '@chakra-ui/react'

const ModalVideoSearch = ({videos, ...props}) => {

  const header = ({ title, ...props }) => {
    return (
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return (
    <Modal
      header={header({ title: "Vídeos encontrados" })}
      scrollBehavior="inside"
      {...props}
    >
      <Box bg="background" py={5}>
        {videos.map((video, index, videos) => {
          const isLastVideo = videos.length - 1 === index
          return (
            <Box key={`${index}`}>
              <HStack>
                <Image src={video.metadata.videoThumbnail} htmlWidth="200" htmlHeight="120" mr="3%" alt="thumb"></Image>
                <VStack w="100%">
                  <Text color="whiteLight" fontSize="30px" w="90%">{video.metadata.title}</Text>
                  <Text color="whiteLight" pr="5px" w="90%"> {video.metadata.videoLink}</Text>
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
              {!isLastVideo && <Box height={5} />}
            </Box>
          )
        })}
      </Box>
    </Modal>
  )
}

export default ModalVideoSearch
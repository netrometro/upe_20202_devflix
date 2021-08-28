import {React} from 'react'
import {Box, Text, HStack, Image, VStack} from "@chakra-ui/react"
import {Modal} from "core/components"
import THUMB_ONE from 'images/thumb-one.svg'

const VIDEOS = [
  {title: 'Back end', url: "aaaaaaaaaaaaa"},
  {title: 'Front end', url: "aaaaaaaaaaaaa"},
  {title: 'Full end',  url: "aaaaaaaaaaaaa"},
]

const ModalMyVideos = ({...props}) => {
  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return(
    <Modal 
      header={header({title : "Meus videos"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Box bg="background" py={5}>
        {VIDEOS.map((video, index, videos) => {
          const isLastVideo = videos.length - 1 === index
          return (
            <Box key={`${index}`}>
              <HStack>
                <Image src={THUMB_ONE}></Image>
                <VStack>
                  <Text color="whiteLight">{video.title}</Text>
                  <Text color="whiteLight">{video.url}</Text>
                </VStack>
              </HStack>
              <Box
                py={0.5}
                px={3}
                width={'90%'}
                bg="primary"
                borderRadius={1}
                mt={5}
                mb={10}
              />
              {!isLastVideo && <Box height={10} />}
            </Box>
          )
        })}
      </Box>
    </Modal>
  )
  
}

export default ModalMyVideos
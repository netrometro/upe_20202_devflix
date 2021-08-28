import {React} from 'react'
import {Box, Text, HStack, Image, VStack, IconButton} from "@chakra-ui/react"
import {Modal} from "core/components"
import THUMB_ONE from 'images/thumb-one.svg'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

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
                <Image src={THUMB_ONE} htmlWidth="200" htmlHeight="120" mr="3%"></Image>
                <VStack w="100%">
                  <HStack w="100%">
                    <Text color="whiteLight" fontSize="30px" w="90%">{video.title}</Text>
                    <IconButton
                    bg="background"
                    icon={<DeleteIcon color="whiteLight" boxSize="40px" _hover={{ bg: "background" }}/>}
                    />
                  </HStack>
                  <HStack w="100%">
                    <Text color="whiteLight" pr="5px" w="90%">{video.url}</Text>
                    <IconButton
                    bg="background"
                    icon={<EditIcon color="whiteLight" boxSize="40px" _hover={{ bg: "background" }}/>}
                    />
                  </HStack>
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

export default ModalMyVideos
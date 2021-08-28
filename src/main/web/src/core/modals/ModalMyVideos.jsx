import {React} from 'react'
import {Box, Text} from "@chakra-ui/react"
import {Modal} from "core/components"
import Video from 'core/components/Video/Video'

const VIDEOS = [
  {title: 'Back end', url: "aaaaaaaaaaaaa"},
  {itle: 'Front end'},
  {title: 'Full end'},
]

const ModalMyVideos = ({...props}) => {

  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return(
    <Modal 
      header={header({title : "Minhas Categorias"})}
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
                  <Text>{video.title}</Text>
                  <Text>{video.url}</Text>
                </VStack>
              </HStack>
              {!isLastVideo && <Box height={10} />}
            </Box>
          )
        })}
      </Box>
    </Modal>
  )
  
}

export default ModalMyVideos
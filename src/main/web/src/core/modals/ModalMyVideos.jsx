import {React} from 'react'
import {Box, Text, HStack, Image, VStack, IconButton, useDisclosure} from "@chakra-ui/react"
import {Modal} from "core/components"
import THUMB_ONE from 'images/thumb-one.svg'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ModalEditVideo from './ModalEditVideo'

const VIDEOS = [
  {title: 'Back end', url: "aaaaaaaaaaaaa"},
  {title: 'Front end', url: "aaaaaaaaaaaaa"},
  {title: 'Full end',  url: "aaaaaaaaaaaaa"},
]

const ModalMyVideos = ({...props}) => {

  const { isOpen: isEditVideoOpen , onOpen: onEditVideoOpen, onClose: onEditVideoClose } = useDisclosure()

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
                    _hover="background"
                    bg="background"
                    icon={<DeleteIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px"}}/>}
                    />
                  </HStack>
                  <HStack w="100%">
                    <Text color="whiteLight" pr="5px" w="90%">{video.url}</Text>
                    <IconButton
                    _hover="background"
                    bg="background"
                    icon={<EditIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px"}}/>}
                    onClick={onEditVideoOpen}
                    />
                    <ModalEditVideo isOpen={isEditVideoOpen} onClose={onEditVideoClose}/>
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
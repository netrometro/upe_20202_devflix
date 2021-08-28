import {React} from 'react'
import {Button, Text, Input, Select, HStack, useDisclosure} from "@chakra-ui/react"
import {Modal} from "core/components"
import ModalMyVideos from './ModalMyVideos'

const ModalVideo = ({...props}) => {

  const { isOpen: isVideoOpen , onOpen: onVideoOpen, onClose: onVideoClose } = useDisclosure()

  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return(
    <Modal 
      header={header({title : "Cadastro de Vídeo"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Tags" />
      <Select w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Selecione a categoria" />
        
      <HStack
      mt="5%"
      spacing="5%"> 
        <Button
          size="lg"
          >
            Cadastrar
        </Button>
        <Button
          size="lg"
          >
            Buscar Vídeo
        </Button>
        <Button
          _hover={{ bg: "#EC00254F" }}
          color="primary"
          borderColor="primary"
          variant="outline"
          size="lg"
          onClick={onVideoOpen}>
          Meus Vídeos
        </Button>
        <ModalMyVideos isOpen={isVideoOpen} onClose={onVideoClose}/>
      </HStack>
      
    </Modal>
  )
  
}

export default ModalVideo
import {React} from 'react'
import {Button, Text, Input, Select, HStack, useDisclosure} from "@chakra-ui/react"
import {Modal} from "core/components"
import {ModalMyCategories} from 'core/modals'

const ModalCategory = ({...props}) => {
  const { isOpen: isMyCategoriesOpen , onOpen: onMyCategoriesOpen, onClose: onMyCategoriesClose } = useDisclosure()
  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  const onRegisterClick = () => {

  }

  return(
    <Modal 
      header={header({title : "Cadastro de Categoria"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Título" />
      <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Cor" />
      <Select w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Selecione a Visibilidade" />
        
      <HStack
      mt="5%"
      spacing="5%"> 
        <Button
          size="lg"
          onClick={onRegisterClick}
          >
            Cadastrar
        </Button>
        <ModalMyCategories isOpen={isMyCategoriesOpen} onClose={onMyCategoriesClose}></ModalMyCategories>
        <Button
          onClick={onMyCategoriesOpen}
          _hover={{ bg: "#EC00254F" }}
          color="primary"
          borderColor="primary"
          variant="outline"
          size="lg">
          Minhas Categorias
        </Button>
      </HStack>
      
    </Modal>
  )
  
}

export default ModalCategory
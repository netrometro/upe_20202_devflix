import React from 'react'
import {Button, Text, Input, Select, HStack,} from "@chakra-ui/react"
import {Modal} from "core/components"

const ModalEditCategory = ({...props}) => {
  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  const onEditCategoryClick = () => {

  }

  return(
    <Modal 
      header={header({title : "Editar Categoria"})}
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
          onClick={onEditCategoryClick}
          >
            Editar
        </Button>
      </HStack>
      
    </Modal>
  )
  
}

export default ModalEditCategory
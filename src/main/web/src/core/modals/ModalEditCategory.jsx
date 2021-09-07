import React, {useState} from 'react'
import {Button, Text, Input, HStack,} from "@chakra-ui/react"
import {Modal, Select} from "core/components"
import {useForm} from 'core/hooks'
import usePutRequest from 'core/hooks/usePutRequest'

const INITIAL_STATE = {
  title: '',
  color: '',
}

const OPTIONS_VISIBILITY = [
  {label: 'Público', value: 1},
  {label: 'Privado', value: 2},
]

const ModalEditCategory = ({id, ...props}) => {

  const [{fields}, {getFieldProperties}] = useForm(INITIAL_STATE)
  const {title, color} = fields

  const [visibility, setVisibility] = useState('')
  const {mutate: editCategory} = usePutRequest(`/v1/category/${id}`);

  const onEditCategoryClick = () => {
    editCategory({title, color, visibility})
  }

  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return(
    <Modal 
      header={header({title : "Editar Categoria"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Input minLength="5" maxLength="25" w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Título" 
      {...getFieldProperties('title')}/>
      <Input minLength="6" maxLength="6" w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Cor" 
      {...getFieldProperties('color')}/>
      <Select w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Selecione a Visibilidade" 
      items={OPTIONS_VISIBILITY} 
      onChange={(event) => setVisibility(event.target.value)}/>
        
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